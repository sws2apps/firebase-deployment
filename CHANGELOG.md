# [3.7.0](https://github.com/sws2apps/firebase-deployment/compare/v3.6.0...v3.7.0) (2024-10-10)


### Features

* **deps:** bump @actions/core from 1.10.1 to 1.11.0 ([6230c02](https://github.com/sws2apps/firebase-deployment/commit/6230c02c243f2efac1a6327d1b61d6609bc768b8))
* **deps:** bump @actions/core from 1.11.0 to 1.11.1 ([1bb0cbb](https://github.com/sws2apps/firebase-deployment/commit/1bb0cbb6e1915dc223305f1bdeeea23a347cc02d))
* **deps:** bump @vercel/ncc from 0.38.1 to 0.38.2 ([d2adf2d](https://github.com/sws2apps/firebase-deployment/commit/d2adf2d4b0b0a4249b205126d728d412cb191f93))

# [3.6.0](https://github.com/sws2apps/firebase-deployment/compare/v3.5.0...v3.6.0) (2024-06-15)


### Features

* **deps:** bump braces from 3.0.2 to 3.0.3 ([d028fc1](https://github.com/sws2apps/firebase-deployment/commit/d028fc170cc8e897e9058b69416fc20e5cac7af0))

# [3.5.0](https://github.com/sws2apps/firebase-deployment/compare/v3.4.0...v3.5.0) (2024-02-21)


### Bug Fixes

* **actions:** update deploy command and print output of exec to the current process ([9fc9677](https://github.com/sws2apps/firebase-deployment/commit/9fc9677af3e7f9623195fc9bd4f1bef1e6308012))


### Features

* **deps:** bump @actions/core from 1.10.0 to 1.10.1 ([599ce41](https://github.com/sws2apps/firebase-deployment/commit/599ce4107648a1dced302c4eb5951616c82807d3))
* **deps:** bump @vercel/ncc from 0.38.0 to 0.38.1 ([6298aec](https://github.com/sws2apps/firebase-deployment/commit/6298aec72d57091317d8f395a15e1b05544817c9))

# [3.4.0](https://github.com/sws2apps/firebase-deployment/compare/v3.3.0...v3.4.0) (2023-09-08)


### Features

* **deps:** bump @vercel/ncc from 0.36.1 to 0.38.0 ([16871b7](https://github.com/sws2apps/firebase-deployment/commit/16871b7fdefabab90c6da8eed382a0aeb4728ae0))
* **deps:** bump yaml and semantic-release ([4706cbb](https://github.com/sws2apps/firebase-deployment/commit/4706cbb29d9f2c19638ad525c1a418e0a5225537))

# [3.3.0](https://github.com/sws2apps/firebase-deployment/compare/v3.2.0...v3.3.0) (2023-04-06)


### Bug Fixes

* **action:** allow specifying node version ([db149f6](https://github.com/sws2apps/firebase-deployment/commit/db149f64e45e8126f9bd2d35df0afdd23480ffa7))


### Features

* **deps:** bump @semantic-release/changelog from 6.0.2 to 6.0.3 ([17c6cf5](https://github.com/sws2apps/firebase-deployment/commit/17c6cf565f045fa0f282d380086df495af1a79f5))

# [3.2.0](https://github.com/sws2apps/firebase-deployment/compare/v3.1.0...v3.2.0) (2023-02-28)


### Features

* **actions:** add debug mode ([56f5a21](https://github.com/sws2apps/firebase-deployment/commit/56f5a21b82ad25270363f01a51d928dafe668d54))

# [3.1.0](https://github.com/sws2apps/firebase-deployment/compare/v3.0.1...v3.1.0) (2023-02-17)


### Features

* **deps:** bump @actions/core from 1.9.1 to 1.10.0 ([94ebd91](https://github.com/sws2apps/firebase-deployment/commit/94ebd91804fd9e1d60e47cc650b33fa2bf6ae600))
* **deps:** bump @semantic-release/changelog from 6.0.1 to 6.0.2 ([01cf92a](https://github.com/sws2apps/firebase-deployment/commit/01cf92aac7b32b8eb2f2868e66b185465e2023b1))
* **deps:** bump @vercel/ncc from 0.34.0 to 0.36.0 ([6308ee2](https://github.com/sws2apps/firebase-deployment/commit/6308ee25fa2f47132b6fc3a9ca4ba7d3fe36bc33))
* **deps:** bump @vercel/ncc from 0.36.0 to 0.36.1 ([7eaedf5](https://github.com/sws2apps/firebase-deployment/commit/7eaedf5012aab3a5bb7c68317f6bb217f69cb941))

## [3.0.1](https://github.com/sws2apps/firebase-deployment/compare/v3.0.0...v3.0.1) (2022-09-24)


### Bug Fixes

* **action:** add github action path ([8ba8508](https://github.com/sws2apps/firebase-deployment/commit/8ba8508447f5096b5811adbebac9dd117c9e799f))

# [3.0.0](https://github.com/sws2apps/firebase-deployment/compare/v2.2.2...v3.0.0) (2022-09-23)

### Features

* **action:** authentication only using workload identity federation ([9441792](https://github.com/sws2apps/firebase-deployment/commit/9441792cef2bf6767126a24e87282f5234f6bec1))


### BREAKING CHANGES

* With this new release, we do now support the keyless authentication to Google Cloud. The two new inputs for this authentication method are mandatory to run this action. Check the [Setting up Workload Identity Federation](https://github.com/google-github-actions/auth#setting-up-workload-identity-federation) guide for the needed setup.

## [2.2.2](https://github.com/sws2apps/firebase-deployment/compare/v2.2.1...v2.2.2) (2022-09-23)


### Bug Fixes

* **deps:** env to authenticate is not loaded ([c22ae29](https://github.com/sws2apps/firebase-deployment/commit/c22ae29452ef365e48caeb115342a70772100a42))

## [2.2.1](https://github.com/sws2apps/firebase-deployment/compare/v2.2.0...v2.2.1) (2022-09-21)


### Bug Fixes

* **readme:** no changes, updating docs for GOOGLE_APPLICATION_CREDENTIALS authentication ([87d6702](https://github.com/sws2apps/firebase-deployment/commit/87d6702ad5328c94a6832bda4a897723b95a5683))

# [2.2.0](https://github.com/sws2apps/firebase-deployment/compare/v2.1.1...v2.2.0) (2022-09-10)


### Features

* **deps:** bump @vercel/ncc from 0.33.4 to 0.34.0 ([078a586](https://github.com/sws2apps/firebase-deployment/commit/078a586ccce721946028acc35f887a2688c54a37))


### Reverts

* Revert "chore(ci): test new credentials" ([cb1a18e](https://github.com/sws2apps/firebase-deployment/commit/cb1a18ecb336256ac5cc2551e627330abb1d7927))

## [2.1.1](https://github.com/sws2apps/firebase-deployment/compare/v2.1.0...v2.1.1) (2022-08-14)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([df1de40](https://github.com/sws2apps/firebase-deployment/commit/df1de40bc55362226b1f2ce3eab9cc25dbc3dc82))

# [2.1.0](https://github.com/sws2apps/firebase-deployment/compare/v2.0.3...v2.1.0) (2022-07-29)


### Features

* **actions:** add additional arguments and retry with debug enabled ([c5990e6](https://github.com/sws2apps/firebase-deployment/commit/c5990e60cbf477f12c61046c46f8039da1725afa))

## [2.0.3](https://github.com/sws2apps/firebase-deployment/compare/v2.0.2...v2.0.3) (2022-07-11)


### Bug Fixes

* **actions:** no changes, docs update in readme to target main branch ([d4d8d3d](https://github.com/sws2apps/firebase-deployment/commit/d4d8d3d8629c9dd7cb03c37b9b4576e5e4375dc4))

## [2.0.2](https://github.com/sws2apps/firebase-deployment/compare/v2.0.1...v2.0.2) (2022-06-11)


### Bug Fixes

* **readme:** update readme to use number version ([2e4cc06](https://github.com/sws2apps/firebase-deployment/commit/2e4cc06af886bb9a7513cbbef7f9ed23dd948a59))

## [2.0.1](https://github.com/sws2apps/firebase-deployment/compare/v2.0.0...v2.0.1) (2022-06-11)


### Bug Fixes

* **semantic-release:** update config to include dist folder ([29b42b9](https://github.com/sws2apps/firebase-deployment/commit/29b42b9f4082d31edeb4a02dc67effff4a353562))

# [2.0.0](https://github.com/sws2apps/firebase-deployment/compare/v1.3.0...v2.0.0) (2022-06-11)


### Bug Fixes

* **actions:** restore using input ([dd83750](https://github.com/sws2apps/firebase-deployment/commit/dd8375009565cbcac16f4222a832e8694c04b50f))


* feat(actions) ([a8f62ef](https://github.com/sws2apps/firebase-deployment/commit/a8f62efc489a72945c30ba0bc04d7704832ed2c0))


### Features

* **actions:** force version bumping ([a8538e2](https://github.com/sws2apps/firebase-deployment/commit/a8538e23dcd93b1b1de9ed7c5347ddf13b5ddab6))
* **actions:** force version bumping ([63cf1fa](https://github.com/sws2apps/firebase-deployment/commit/63cf1fa08a59ef901b0d21891e0cd91be6e989cb))
* **actions:** force version bumping ([93c7887](https://github.com/sws2apps/firebase-deployment/commit/93c78876a32cfadbd5f0972b2036c99a54665901))


### BREAKING CHANGES

* **actions:** force version bumping
* force version bumping
* **actions:** force bumping

# [2.0.0](https://github.com/sws2apps/firebase-deployment/compare/v1.3.0...v2.0.0) (2022-06-11)


### Bug Fixes

* **actions:** restore using input ([dd83750](https://github.com/sws2apps/firebase-deployment/commit/dd8375009565cbcac16f4222a832e8694c04b50f))


* feat(actions) ([a8f62ef](https://github.com/sws2apps/firebase-deployment/commit/a8f62efc489a72945c30ba0bc04d7704832ed2c0))


### Features

* **actions:** force version bumping ([a8538e2](https://github.com/sws2apps/firebase-deployment/commit/a8538e23dcd93b1b1de9ed7c5347ddf13b5ddab6))
* **actions:** force version bumping ([63cf1fa](https://github.com/sws2apps/firebase-deployment/commit/63cf1fa08a59ef901b0d21891e0cd91be6e989cb))
* **actions:** force version bumping ([93c7887](https://github.com/sws2apps/firebase-deployment/commit/93c78876a32cfadbd5f0972b2036c99a54665901))


### BREAKING CHANGES

* **actions:** force version bumping
* force version bumping
* **actions:** force bumping

# [2.0.0](https://github.com/sws2apps/firebase-deployment/compare/v1.3.0...v2.0.0) (2022-06-11)


### Bug Fixes

* **actions:** restore using input ([dd83750](https://github.com/sws2apps/firebase-deployment/commit/dd8375009565cbcac16f4222a832e8694c04b50f))


### Features

* **actions:** force version bumping ([63cf1fa](https://github.com/sws2apps/firebase-deployment/commit/63cf1fa08a59ef901b0d21891e0cd91be6e989cb))
* **actions:** force version bumping ([93c7887](https://github.com/sws2apps/firebase-deployment/commit/93c78876a32cfadbd5f0972b2036c99a54665901))


### BREAKING CHANGES

* **actions:** force bumping

# [2.0.0](https://github.com/sws2apps/firebase-deployment/compare/v1.3.0...v2.0.0) (2022-06-11)


### Bug Fixes

* **actions:** restore using input ([dd83750](https://github.com/sws2apps/firebase-deployment/commit/dd8375009565cbcac16f4222a832e8694c04b50f))


### Features

* **actions:** force version bumping ([93c7887](https://github.com/sws2apps/firebase-deployment/commit/93c78876a32cfadbd5f0972b2036c99a54665901))


### BREAKING CHANGES

* **actions:** force bumping

## [1.3.1](https://github.com/sws2apps/firebase-deployment/compare/v1.3.0...v1.3.1) (2022-06-11)


### Bug Fixes

* **actions:** restore using input ([dd83750](https://github.com/sws2apps/firebase-deployment/commit/dd8375009565cbcac16f4222a832e8694c04b50f))

# [1.3.0](https://github.com/sws2apps/firebase-deployment/compare/v1.2.2...v1.3.0) (2022-05-22)


### Features

* **action:** add options on exec ([e009910](https://github.com/sws2apps/firebase-deployment/commit/e009910f1a66f646ec76015b35b2f7f9cc44de5e))

## [1.2.2](https://github.com/sws2apps/firebase-deployment/compare/v1.2.1...v1.2.2) (2022-05-19)


### Bug Fixes

* **actions:** remove docker ([5eb74c7](https://github.com/sws2apps/firebase-deployment/commit/5eb74c74b410ae7a29aebee5392825fdeda24b30))

## [1.2.1](https://github.com/sws2apps/firebase-deployment/compare/v1.2.0...v1.2.1) (2022-05-19)


### Bug Fixes

* **semantic-release:** package.json not updated ([6724777](https://github.com/sws2apps/firebase-deployment/commit/67247779ce654220280ae29a29b0f4e0d254fec6))

# [1.2.0](https://github.com/sws2apps/firebase-deployment/compare/v1.1.2...v1.2.0) (2022-05-19)


### Features

* **deps:** use @vercel/ncc ([102ec57](https://github.com/sws2apps/firebase-deployment/commit/102ec57a3b1ef0aedc319ca6a49fb1544aad333b))

## [1.1.2](https://github.com/sws2apps/firebase-deployment/compare/v1.1.1...v1.1.2) (2022-05-19)


### Bug Fixes

* **package.json:** add type module ([8896264](https://github.com/sws2apps/firebase-deployment/commit/88962645a0213033405a2c253e65027d0c486ae6))

## [1.1.1](https://github.com/sws2apps/firebase-deployment/compare/v1.1.0...v1.1.1) (2022-05-19)


### Bug Fixes

* **actions:** downgrade to node16 ([472deb2](https://github.com/sws2apps/firebase-deployment/commit/472deb2afdeaba52ff14990b44d3b04e91a153c2))

# [1.1.0](https://github.com/sws2apps/firebase-deployment/compare/v1.0.1...v1.1.0) (2022-05-19)


### Features

* **actions:** update to use javascript actions ([29982e4](https://github.com/sws2apps/firebase-deployment/commit/29982e43285b135a0f04963326602139c0182927))
* **dockerfile:** add pin to node-slim ([c45972e](https://github.com/sws2apps/firebase-deployment/commit/c45972e62e7e76b9d14379bfc172a73a261911d5))
* **dockerfile:** pin firebase-tools ([526f10b](https://github.com/sws2apps/firebase-deployment/commit/526f10bafb065f8b5088698983dd7e9042acda1c))
