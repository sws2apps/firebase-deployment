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
jobs:
  main:
    name: Build and Deploy
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Firebase
        uses: sws2apps/firebase-deployment@main #consider using pin for dependabot auto update
        with:
          workloadIdentityProvider: 'projects/1059783069358/locations/global/workloadIdentityPools/github-pool/providers/github-action-provider' #it is not a security issue to use it directly here
          serviceAccount: 'github-workflow-sws@github-workflow-sws.iam.gserviceaccount.com' #it is not a security issue to use it directly here
          project: github-workflow-sws
          config: 'frontend/firebase.json' #optional
          function: true #optional & boolean
          hosting: true #optional & boolean
          project: 'my-firebase-project' #required
```
