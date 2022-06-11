[![CI](https://github.com/sws2apps/firebase-deployment/actions/workflows/ci.yml/badge.svg)](https://github.com/sws2apps/firebase-deployment/actions/workflows/ci.yml)
[![CD](https://github.com/sws2apps/firebase-deployment/actions/workflows/publish.yml/badge.svg)](https://github.com/sws2apps/firebase-deployment/actions/workflows/publish.yml)

# Firebase Deployment

A GitHub Action to deploy firebase hosting and functions together.

- Make sure you have the `firebase.json` file in the root repository, or set a custom path to look for it using the `config` input.
- Set the project name in the `project` input.
- Get the Firebase token by running `firebase login:ci` and [store it](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) as the `FIREBASE_TOKEN` secret

## Example Usages

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
        uses: sws2apps/firebase-deployment@e6dfe2cb17dbfeecf7910f5c1d4fee2f0c07deb5
        with:
          project: 'my-firebase-project' #required
          config: 'frontend/firebase.json' #optional
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```
