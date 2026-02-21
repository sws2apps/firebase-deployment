import * as core from '@actions/core';
import { exec, type ExecOptions } from '@actions/exec';

const toErrorMessage = (error: unknown): string => {
	if (error instanceof Error) {
		return error.message;
	}

	return String(error);
};

const run = async (): Promise<void> => {
	const project = process.env.project;
	if (!project) {
		core.setFailed('The Firebase project is missing from the workflow file');
		return;
	}

	const config = process.env.config;
	const deployList: string[] = [];

	if (process.env.function === 'true') {
		deployList.push('functions');
	}

	if (process.env.hosting === 'true') {
		deployList.push('hosting');
	}

	const args: string[] = ['deploy', '-m', process.env.GITHUB_SHA ?? '', '--project', project];

	if (config) {
		args.push('--config', config);
	}

	if (deployList.length > 0) {
		args.push('--only', deployList.join(','));
	}

	const options: ExecOptions = {
		listeners: {
			stdout: (data: Buffer) => {
				process.stdout.write(data.toString());
			},
			stderr: (data: Buffer) => {
				process.stderr.write(data.toString());
			}
		}
	};

	try {
		await exec('firebase', args, options);
	} catch (error) {
		core.error(
			`An error occurred while deploying to Firebase: ${toErrorMessage(error)}. Retrying with debug mode enabled ...`
		);

		args.push('--debug');

		try {
			await exec('firebase', args, options);
		} catch (retryError) {
			core.setFailed(`An error occurred while deploying to Firebase: ${toErrorMessage(retryError)}`);
		}
	}
};

void run();
