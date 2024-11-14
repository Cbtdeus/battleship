const Ship = require("./ship");

class Gameboard {
  constructor(side, isHuman = true) {
    this.side = side;
    this.isHuman = isHuman;
    this.attacks = ["asdf"];
    this.ships = [];
    this.board = this.initializeGameboard();
  }
  initializeGameboard() {
    let arr = Array(10);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Array(10).fill(null);
    }
    return arr;
  }
  placeShip(start, end) {
    if (Array.isArray(start) === false || Array.isArray(end) === false) {
      return false;
    }
    let length = null;
    if (start[0] === end[0]) {
      length = Math.abs(start[1] - end[1]);
      let iterated = iterateBetween(start[1], end[1]);
      for (let i = 0; i <= length; i++) {
        if (this.checkIllegalPlacement([start[0]], [iterated[i]])) {
          return false;
        }
        this.board[start[0]][iterated[i]] = this.ships.length;
      }
    } else if (start[1] === end[1]) {
      length = Math.abs(start[0] - end[0]);
      let iterated = iterateBetween(start[0], end[0]);
      for (let i = 0; i <= length; i++) {
        if (this.checkIllegalPlacement([iterated[i]], [start[1]])) {
          return false;
        }
        this.board[iterated[i]][start[1]] = this.ships.length;
      }
    } else {
      return false;
    }
    this.ships.push(Ship(length + 1));
  }
  checkIllegalPlacement(x, y) {
    /* returns true if illegal */
    if (this.board[x][y] !== null) {
      return true;
    } else {
      return false;
    }
  }
  receiveAttack(x, y) {
    if (this.staleAttack(x, y)) {
      return false;
    }
    this.attacks.push(x, y);
    if (this.board[x][y] !== null) {
      this.ships[this.board[x][y]].hit();
      return true;
    }
  }

  staleAttack(x, y) {
    /* return true if stale */
    for (let i = 0; i < this.attacks.length; i++) {
      if ((x, y === this.attacks[i])) {
        return true;
      }
    }
    return false;
  }
}

function iterateBetween(x, y) {
  let iterated = [];
  const step = x <= y ? 1 : -1; // Determine the step direction
  for (let i = x; step > 0 ? i <= y : i >= y; i += step) {
    iterated.push(i);
  }
  return iterated;
}
module.exports = Gameboard;
let board = new Gameboard();
