'use strict'

var util = require('util')
var LoopingMatrix = require('looping-matrix')

function GameOfLife (width, height) {
  LoopingMatrix.apply(this, arguments)
  this.reset(GameOfLife.states.DEAD)
}
util.inherits(GameOfLife, LoopingMatrix)

var states = []
;['DEAD', 'ALIVE', 'INDESTRUCTIBLE'].forEach(function (name, index) {
  states[name] = index
  states.push(index)
})
GameOfLife.states = states

GameOfLife.prototype.aliveNeighbours = function GameOfLife$prototype$aliveNeighbours (i, j) {
  var aliveNeighbours = 0
  for (var oi = -1; oi <= 1; ++oi) {
    for (var oj = -1; oj <= 1; ++oj) {
      if (oi === 0 && oj === 0) {
        continue
      }
      var neighbourState = this.getCell(i + oi, j + oj)
      if (neighbourState !== states.DEAD) {
        ++aliveNeighbours
      }
    }
  }
  return aliveNeighbours
}

GameOfLife.prototype.evolve = function GameOfLife$prototype$evolve (i, j) {
  var state = this.getCell(i, j)
  // indestructible cells will always stay indestructible, so skip
  // calculating neighbour sum for them
  if (state === states.INDESTRUCTIBLE) {
    return state
  }
  var aliveNeighbours = this.aliveNeighbours(i, j)
  switch (state) {
    case states.ALIVE:
      // death by under-population / over-population
      if (aliveNeighbours < 2 || aliveNeighbours > 3) {
        return states.DEAD
      }
      // otherwise it stays alive
      return states.ALIVE
    case states.DEAD:
        // birth by reproduction
        if (aliveNeighbours === 3) {
          return states.ALIVE
        }
        // otherwise stays dead
        return states.DEAD
    default:
      throw new Error('Invalid evolve state: ' + state)
  }
}

GameOfLife.prototype.tick = function GameOfLife$prototype$tick () {
  var nextGameState = this.clone()
  for (var i = 0; i < this.height; ++i) {
    for (var j = 0; j < this.width; ++j) {
      var nextCellState = this.evolve(i, j)
      nextGameState.setCell(i, j, nextCellState)
    }
  }
  this.matrix = nextGameState.matrix
}

module.exports = GameOfLife

