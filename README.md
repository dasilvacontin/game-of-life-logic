# game-of-life-logic

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![npm Downloads][downloads-image]][downloads-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Logic for Conway's Game of Life. It uses a [looping-matrix][looping-matrix] so that entities loop from edge to edge.

## Install

```sh
$ npm install --save game-of-life-logic
```

## Usage

```js
var GameOfLife = require('game-of-life-logic');
var gameOfLife = new GameOfLife(5, 5)
gameOfLife.copyMatrixAt(1, 1, [
[0, 0, 0],
[1, 1, 1],
[0, 0, 0]
])
gameOfLife.matrix
/* => [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
      ]
*/
gameOfLife.tick()
gameOfLife.matrix
/* => [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]
      ]
*/
```


## API

Coming soon...

## License

MIT © [David da Silva](http://dasilvacont.in)

[travis-image]: https://travis-ci.org/dasilvacontin/game-of-life-logic.svg?branch=master
[travis-url]: https://travis-ci.org/dasilvacontin/game-of-life-logic
[npm-image]: https://img.shields.io/npm/v/game-of-life-logic.svg?style=flat
[npm-url]: https://npmjs.org/package/game-of-life-logic
[downloads-image]: http://img.shields.io/npm/dm/game-of-life-logic.svg
[downloads-url]: https://www.npmjs.org/package/game-of-life-logic
[coveralls-image]: https://coveralls.io/repos/dasilvacontin/game-of-life-logic/badge.svg
[coveralls-url]: https://coveralls.io/r/dasilvacontin/game-of-life-logic
[looping-matrix]: https://github.com/dasilvacontin/looping-matrix

