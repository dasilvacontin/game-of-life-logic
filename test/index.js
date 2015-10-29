'use strict'

var test = require('tape')
var GameOfLife = require('../')

test('awesomeness', function (t) {
  var gameOfLife = new GameOfLife(5, 5)
  gameOfLife.copyMatrixAt(1, 1, [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ])
  t.deepEqual(gameOfLife.matrix, [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])
  gameOfLife.tick()
  t.deepEqual(gameOfLife.matrix, [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ])
  t.end()
})
