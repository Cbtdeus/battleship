const Player = require("./player");

let turn = 1;
let leftPlayer = Player(true);
let rightPlayer = Player(false);

function currentPlayer(turn) {
  if (turn % 2 != 0) {
    return leftPlayer;
  }
  if (turn % 2 === 0) {
    return rightPlayer;
  }
}

function playTurn(x, y) {
  let defender = currentPlayer(turn + 1);
  let attacker = currentPlayer(turn);
  if (attacker.isHuman === false) {
    simulateAttack(defender);
  } else if (defender.gameboard.receiveAttack(x, y) === false) {
    return;
  }
  turn++;
  if (defender.isHuman === false) {
    playTurn();
  }
}

function simulateAttack(defender) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  if (defender.gameboard.receiveAttack(x, y) === false) {
    simulateAttack(defender);
  }
}

function initGame() {
  /* TODO: should init players as bot or not based on selection */
  /*  */
  turn = 1;
  leftPlayer = Player(true);
  rightPlayer = Player(false);
}

initGame();

module.exports = { leftPlayer, rightPlayer, initGame };
