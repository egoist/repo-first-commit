# repo-first-commit

[![NPM version](https://img.shields.io/npm/v/repo-first-commit.svg?style=flat)](https://npmjs.com/package/repo-first-commit) [![NPM downloads](https://img.shields.io/npm/dm/repo-first-commit.svg?style=flat)](https://npmjs.com/package/repo-first-commit) [![Build Status](https://img.shields.io/circleci/project/egoist/repo-first-commit/master.svg?style=flat)](https://circleci.com/gh/egoist/repo-first-commit) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add repo-first-commit
```

## Usage

```js
const repo = require('repo-first-commit')

repo({
  owner: 'egoist',
  repo: 'vbuild',
  sha: '5.0'
}).then(commit => {
  console.log(commit.commit.message)
  //=> "init"
})
```

## API

### repo(options)

#### options

##### owner

Type: `string`<br>
Required: `true`

GitHub username

##### repo

Type: `string`<br>
Required: `true`

GitHub repo name

##### sha

Type: `string`

SHA or branch to start listing commits from.

##### token

Type: `string`

GitHub API access token.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**repo-first-commit** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/repo-first-commit/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
