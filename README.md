[![CI](https://github.com/sws2apps/firebase-deployment/actions/workflows/ci.yml/badge.svg)](https://github.com/sws2apps/firebase-deployment/actions/workflows/ci.yml)
[![CD](https://github.com/sws2apps/firebase-deployment/actions/workflows/publish.yml/badge.svg)](https://github.com/sws2apps/firebase-deployment/actions/workflows/publish.yml)

# Firebase Deployment

A GitHub Action to deploy firebase hosting and functions together.

- Make sure you have the `firebase.json` file in the root repository, or set a custom path to look for it using the `config` input.
- Set the `workloadIdentityProvider` and `serviceAccount` inputs to authenticate to Google Cloud. Create these values by following the guides on [Setting up Workload Identity Federation](https://github.com/google-github-actions/auth#setting-up-workload-identity-federation)
- Set the project name in the `project` input.

## Example Usage

```yaml
name: Deploy to Firebase

on:
  push:
    branches:
      - main

permissions: read-all

jobs:
  main:
    name: Build and Deploy
    runs-on: ubuntu-latest

    permissions:
      contents: 'read'
      id-token: 'write'

    steps:
      - name: Deploy to Firebase
        uses: sws2apps/firebase-deployment@main #consider using pin for dependabot auto update
        with:
          workloadIdentityProvider: ${{ secrets.WORKLOAD_IDENTITY_PROVIDER }}
          serviceAccount: ${{ secrets.SERVICE_ACCOUNT }}
          project: github-workflow-sws
          config: 'frontend/firebase.json' #optional
          function: true #optional & boolean
          hosting: true #optional & boolean
          project: 'my-firebase-project' #required
```
