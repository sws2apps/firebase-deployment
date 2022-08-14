// dependencies
import core from '@actions/core';
import exec from '@actions/exec';

const run = async () => {
	try {
		// preflight check before starting the actions
		const project = core.getInput('project');
		if (!project) {
			core.setFailed('The Firebase project is missing from the worflow file');
			return;
		}

		if (!process.env.FIREBASE_TOKEN) {
			core.setFailed('The FIREBASE_TOKEN is missing');
			return;
		}

		// check if we receive a custom path for firebase.json
		const config = core.getInput('config');

		// check only deployment settings
		let deployOnly = core.getInput('function') === 'true' ? 'function' : '';
		deployOnly +=
			core.getInput('hosting') === 'true'
				? `${deployOnly !== '' ? ' ' : ''}hosting`
				: '';

		// installing firebase tools
		await exec.exec('npm i -g firebase-tools');

		// attempt to run firebase deploy, and throw an error if failed

		await exec.exec(
			`firebase deploy -m ${process.env.GITHUB_SHA} ${
				config ? `--config ${config}` : ''
			} --project ${project} ${
				deployOnly !== '' ? ` --only ${deployOnly}` : ''
			}`
		);
	} catch (error) {
		core.error(
			`An error occured while deploying to Firebase: ${error}. Retrying with debug mode enabled ...`
		);

		try {
			await exec.exec(
				`firebase deploy -m ${process.env.GITHUB_SHA} ${
					config ? `--config ${config}` : ''
				} --project ${project} ${
					deployOnly !== '' ? ` --only ${deployOnly}` : ''
				} --debug`
			);
		} catch (error) {
			core.setFailed(`An error occured while deploying to Firebase: ${error}`);
		}
	}
};

run();
