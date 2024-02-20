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

	const deployOnly = deployList.join(',');

	let cmd = `firebase deploy -m ${process.env.GITHUB_SHA}`;
	cmd += config ? ` --config ${config}` : ' ';
	cmd += ` --project ${project}`;
	cmd += deployOnly !== '' ? ` --only ${deployOnly}` : '';

	try {
		// attempt to run firebase deploy, and run with debug mode if failed
		// TODO:
		//   1. Add the current stdout and stderr as listeners to the getExecOutput listeners https://github.com/actions/toolkit/blob/main/packages/exec/src/exec.ts#L44
		//   2. Print the result output using the relevant core function.
		const result = await exec.getExecOutput(cmd);

	} catch (error) {
		core.error(`An error occured while deploying to Firebase: ${error}. Retrying with debug mode enabled ...`);

		// attempt to run firebase deploy with debug mode
		try {
			await exec.exec(`${cmd} --debug`);
		} catch (error) {
			core.setFailed(`An error occured while deploying to Firebase: ${error}`);
		}
	}
};

run();
