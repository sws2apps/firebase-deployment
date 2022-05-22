import core from '@actions/core';
import exec from '@actions/exec';

const options = {};
options.cwd = process.env.GITHUB_WORKSPACE;

await exec.exec('npm i -g firebase-tools', [], options);

if (!process.env.FIREBASE_TOKEN) {
	core.setFailed('Oh... The FIREBASE_TOKEN is missing');
}

if (!process.env.FIREBASE_PROJECT) {
	core.setFailed('Oh... The FIREBASE_PROJECT is missing');
}

try {
	await exec.exec(
		`firebase deploy -m ${process.env.GITHUB_SHA} --project ${process.env.FIREBASE_PROJECT}`,
		[],
		options
	);
} catch (error) {
	core.setFailed(
		`Oh... An error occured while deploying to Firebase: ${error}`
	);
}
