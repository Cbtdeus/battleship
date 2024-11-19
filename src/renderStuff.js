const playGame = require("./playGame");

function renderField() {
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile", "left", i);
    left.append(tile);
  }
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile", "right", i);
    right.append(tile);
  }
}

function renderShips() {
  for (let i = 0; i < 100; i++) {}
}

function renderMissed() {}

function renderHit() {}
const main = document.createElement("div");
const boardContainer = document.querySelector(".boardContainer");
const left = document.createElement("div");
const right = document.createElement("div");
document.body.append(boardContainer);
boardContainer.append(left, right);
left.classList.add("playfield");
right.classList.add("playfield");

playGame.leftPlayer.gameboard.placeShip([2, 5], [2, 8]);
playGame.rightPlayer.gameboard.placeShip([5, 2], [5, 5]);
console.log(playGame.leftPlayer.gameboard.ships);
renderField();
renderShips();
/* module.exports = ; */

/* TODO:render ships, make attacks, make win conditions, display game status(won/lost), */
/*create ship placement phase,play button,restart button */
