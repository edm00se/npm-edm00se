# npm-edm00se [![NPM version][npm-image]][npm-url] [![Node CI][gh-build-image]][gh-build-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> an npm module to reserve the edm00se namespace&#39;d package

## What Is This?

Inspired by [kentcdodds/npm-kentcdodds](https://github.com/kentcdodds/npm-kentcdodds), this is a reserved package name for my usual handle (on twitter, GH, etc.). I may eventually roll it up to be a bit more robust in content and replace a couple of similar modlues I have defined in-project, elsewhere.

## Installation

```sh
$ npm install --save edm00se
```

## Usage

```js
var edm00se = require('npm-edm00se');

console.log(edm00se.name.first + ' ' + edm00se.name.last);
```
## License

MIT © [Eric McCormick](https://edm00se.io/)


[npm-image]: https://badge.fury.io/js/edm00se.svg
[npm-url]: https://npmjs.org/package/edm00se
[gh-build-image]: https://github.com/edm00se/npm-edm00se/actions/workflows/nodejs.yml/badge.svg
[gh-build-url]: https://github.com/edm00se/npm-edm00se/actions/workflows/nodejs.yml
[daviddm-image]: https://david-dm.org/edm00se/npm-edm00se.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/edm00se/npm-edm00se
[coveralls-image]: https://coveralls.io/repos/edm00se/npm-edm00se/badge.svg
[coveralls-url]: https://coveralls.io/r/edm00se/npm-edm00se
