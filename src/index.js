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
	let deployOnly = process.env.function === 'true' ? 'function' : '';
	deployOnly +=
		process.env.hosting === 'true'
			? `${deployOnly !== '' ? ' ' : ''}hosting`
			: '';

	try {
		// attempt to run firebase deploy, and throw an error if failed
		await exec.exec(
			`firebase deploy -m ${process.env.GITHUB_SHA} ${
				config ? `--config ${config}` : ''
			} --project ${project} ${
				deployOnly !== '' ? ` --only ${deployOnly}` : ''
			}`
		);
	} catch (error) {
		core.setFailed(`An error occured while deploying to Firebase: ${error}`);
	}
};

run();
