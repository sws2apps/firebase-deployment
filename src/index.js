// dependencies
import core from '@actions/core';
import exec from '@actions/exec';

// preflight check before starting the actions
const projectName = core.getInput('project');
if (!projectName) {
	core.setFailed('The Firebase project is missing from the worflow file');
}

if (!process.env.FIREBASE_TOKEN) {
	core.setFailed('The FIREBASE_TOKEN is missing');
}

// get if we receive a custom path for firebase.json
const configFile = core.getInput('config');

// installing firebase tools
await exec.exec('npm i -g firebase-tools');

// attempt to run firebase deploy, and throw an error if failed
try {
	await exec.exec(`firebase deploy -m ${process.env.GITHUB_SHA} ${configFile ? `--config ${configFile}` : ''} --project ${projectName}`);
} catch (error) {
	core.setFailed(
		`An error occured while deploying to Firebase: ${error}`
	);
}
