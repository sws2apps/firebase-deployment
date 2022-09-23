[![CI](https://github.com/sws2apps/firebase-deployment/actions/workflows/ci.yml/badge.svg)](https://github.com/sws2apps/firebase-deployment/actions/workflows/ci.yml)
[![CD](https://github.com/sws2apps/firebase-deployment/actions/workflows/publish.yml/badge.svg)](https://github.com/sws2apps/firebase-deployment/actions/workflows/publish.yml)

# Firebase Deployment

A GitHub Action to deploy firebase hosting and functions together.

- Make sure you have the `firebase.json` file in the root repository, or set a custom path to look for it using the `config` input.
- Set the project name in the `project` input.
- Get a Service Account in JSON format by following the [Google Cloud's Getting started](https://cloud.google.com/docs/authentication/getting-started) guide. Stringify the JSON content and [store it](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) as the `GOOGLE_APPLICATION_CREDENTIALS` secret in your repository.
- **DEPRECATED: We will remove this authentication method when the Firebase CLI no longer supports it.** Get the Firebase token by running `firebase login:ci` and [store it](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) as the `FIREBASE_TOKEN` secret.

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
          config: 'frontend/firebase.json' #optional
          function: true #optional & boolean
          hosting: true #optional & boolean
          project: 'my-firebase-project' #required
        env:
          GOOGLE_APPLICATION_CREDENTIALS: ${{ secrets.GOOGLE_APPLICATION_CREDENTIALS }}
          #FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }} (this will be removed)
```
