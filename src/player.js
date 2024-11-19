const Gameboard = require("./gameboard");
function Player(human = false) {
  const isHuman = human;
  let location = null;
  const gameboard = new Gameboard();
  const renderField = (newLocation) => {
    location = newLocation;
    for (let i = 0; i < 100; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile", "n" + i);
      location.append(tile);
    }
  };
  const renderShips = () => {
    for (let i = 0; i < 100; i++) {
      let x = i % 10; /* last number */
      let y = 0; /* first number if 2 numbers, 0 otherwise */
      if (i.toString().length > 1) {
        let temp = String(i).charAt(0);
        y = Number(temp);
      }
      console.log(y);
      if (gameboard.board[y][x] === null) {
        continue;
      }
      location.querySelector(".n" + i).classList.add("ship");
    }
  };
  return { isHuman, gameboard, renderField, renderShips };
}

const lexa = Player(true);
const sanya = Player(false);

const left = document.createElement("div");
const right = document.createElement("div");

lexa.renderField(left);
sanya.renderField(right);

left.classList.add("boardContainer");
right.classList.add("boardContainer");

const gameContainer = document.createElement("div");
gameContainer.classList.add("gameContaier");
gameContainer.append(left);
gameContainer.append(right);
document.body.append(gameContainer);

lexa.gameboard.placeShip([1, 1], [1, 3]);
lexa.gameboard.placeShip([5, 5], [5, 8]);
console.log(lexa.gameboard.board);
lexa.renderShips();
sanya.gameboard.placeShip([3, 3], [3, 5]);
sanya.gameboard.placeShip([5, 5], [8, 5]);
console.log(lexa.gameboard.board);
sanya.renderShips();
module.exports = Player;
/* lexa.renderShips(); */
