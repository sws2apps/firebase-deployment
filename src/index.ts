import * as core from '@actions/core';
import { exec, type ExecOptions } from '@actions/exec';
import { access } from 'node:fs/promises';
import { constants } from 'node:fs';

const toErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
};

const normalizeBooleanInput = (value: string | undefined): boolean => {
  if (!value) {
    return false;
  }

  const normalized = value.trim().toLowerCase();
  return normalized === 'true' || normalized === '1' || normalized === 'yes';
};

const isLikelyTransientError = (error: unknown, stderrOutput = ''): boolean => {
  const message = `${toErrorMessage(error)}\n${stderrOutput}`.toLowerCase();
  return (
    message.includes('timed out') ||
    message.includes('timeout') ||
    message.includes('econnreset') ||
    message.includes('eai_again') ||
    message.includes('enotfound') ||
    message.includes('network')
  );
};

const run = async (): Promise<void> => {
  const project = process.env.project;
  if (!project) {
    core.setFailed('The Firebase project is missing from the workflow file');
    return;
  }

  const config = process.env.config;
  const deployList: string[] = [];

  if (normalizeBooleanInput(process.env.function)) {
    deployList.push('functions');
  }

  if (normalizeBooleanInput(process.env.hosting)) {
    deployList.push('hosting');
  }

  const args: string[] = ['deploy', '--project', project];
  const sha = process.env.GITHUB_SHA?.trim();
  if (sha) {
    args.push('-m', sha);
  }

  if (config) {
    try {
      await access(config, constants.R_OK);
    } catch {
      core.setFailed(`The Firebase config file is not readable: ${config}`);
      return;
    }

    args.push('--config', config);
  }

  if (deployList.length > 0) {
    args.push('--only', deployList.join(','));
  }

  let firstAttemptStderr = '';
  const captureStderrOptions: ExecOptions = {
    listeners: {
      stderr: (data: Buffer) => {
        firstAttemptStderr += data.toString();
      },
    },
  };

  try {
    await exec('firebase', args, captureStderrOptions);
  } catch (error) {
    if (!isLikelyTransientError(error, firstAttemptStderr)) {
      core.setFailed(
        `An error occurred while deploying to Firebase: ${toErrorMessage(error)}`,
      );
      return;
    }

    core.error(
      `A transient error occurred while deploying to Firebase: ${toErrorMessage(error)}. Retrying with debug mode enabled ...`,
    );

    args.push('--debug');

    try {
      await exec('firebase', args);
    } catch (retryError) {
      core.setFailed(
        `An error occurred while deploying to Firebase: ${toErrorMessage(retryError)}`,
      );
    }
  }
};

try {
  await run();
} catch (error) {
  core.setFailed(`Unhandled deployment error: ${toErrorMessage(error)}`);
}
