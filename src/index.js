// dependencies
import core from '@actions/core';
import exec from '@actions/exec';

const run = async () => {
	// preflight check before starting the actions
	const project = process.env.project;
	if (!project) {
		core.setFailed('The Firebase project is missing from the worflow file');
		return;
	}

	// check if we receive a custom path for firebase.json
	const config = process.env.config;

	// check only deployment settings
	let deployList = [];

	if (process.env.function === 'true') {
		deployList.push('functions');
	}

	if (process.env.hosting === 'true') {
		deployList.push('hosting');
	}

	let args = ['deploy', '-m', process.env.GITHUB_SHA, '--project', project];

	if (config) {
		args.push('--config', config);
	}

	if (deployList.length > 0) {
		args.push('--only', deployList.join(','));
	}

	const options = {};
	options.listeners = {
	  stdout: (data) => {
		process.stdout.write(data.toString());
	  },
	  stderr: (data) => {
		process.stderr.write(data.toString());
	  },
	  stdline: (data) => {
		process.stdline.write(data.toString());
	  },
	};

	try {
		// attempt to run firebase deploy, and run with debug mode if failed
		await exec.exec("firebase", args, options);

	} catch (error) {
		core.error(`An error occured while deploying to Firebase: ${error}. Retrying with debug mode enabled ...`);

		// attempt to run firebase deploy with debug mode
		args.push("--debug");

		try {
			await exec.exec("firebase", args, options);
		} catch (error) {
			core.setFailed(`An error occured while deploying to Firebase: ${error}`);
		}
	}
};

run();
