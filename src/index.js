import core from '@actions/core';
import exec from '@actions/exec';

await exec.exec('npm i -g firebase-tools');

if (!process.env.FIREBASE_TOKEN) {
	core.setFailed('The FIREBASE_TOKEN is missing');
}

if (!process.env.FIREBASE_PROJECT) {
	core.setFailed('The FIREBASE_PROJECT is missing');
}

try {
	await exec.exec(`firebase deploy -m ${process.env.GITHUB_SHA} --project ${process.env.FIREBASE_PROJECT}`);
} catch (error) {
	core.setFailed(
		`An error occured while deploying to Firebase: ${error}`
	);
}
