// dependencies
import 'dotenv/config';
import core from '@actions/core';
import exec from '@actions/exec';

const run = async () => {
	// preflight check before starting the actions
	const project = core.getInput('project');
	if (!project) {
		core.setFailed('The Firebase project is missing from the worflow file');
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

	try {
		// installing firebase tools
		await exec.exec('npm i -g firebase-tools');

		// attempt to run firebase deploy, and throw an error if failed
		console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
		await exec.exec(
			'firebase deploy',
			[
				`-m ${process.env.GITHUB_SHA}`,
				`--project ${project}`,
				`${	config ? `--config ${config}` : '' }`,
				`${ deployOnly !== '' ? `--only ${deployOnly}` : '' }`
			],
			{
				env: {
					GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS
				}
			}
		);
	} catch (error) {
		core.setFailed(`An error occured while deploying to Firebase: ${error}`);
	}
};

run();
