const Gameboard = require("./gameboard");
test("Sucessfully place a ship", () => {
  const testBoard = new Gameboard();
  testBoard.placeShip([1, 1], [1, 4]);
  expect(testBoard.ships[0].getLength()).toBe(4);
  expect(testBoard.board[1][1]).toBe(0);
  expect(testBoard.board[1][2]).toBe(0);
  expect(testBoard.board[1][3]).toBe(0);
  expect(testBoard.board[1][4]).toBe(0);
  testBoard.placeShip([5, 1], [5, 1]);
  expect(testBoard.board[5][1]).toBe(1);
  expect(testBoard.ships[1].getLength()).toBe(1);
  testBoard.placeShip([7, 5], [4, 5]);
  expect(testBoard.board[7][5]).toBe(2);
  expect(testBoard.board[6][5]).toBe(2);
  expect(testBoard.board[5][5]).toBe(2);
  expect(testBoard.board[4][5]).toBe(2);
  expect(testBoard.ships[2].getLength()).toBe(4);
});

test("Placing a ship on top of another is not allowed", () => {
  const testBoard = new Gameboard();
  testBoard.placeShip([1, 1], [1, 4]);
  expect(testBoard.placeShip([1, 1], [1, 2])).toBe(false);
});

test("Placing a ship out of bounds isnt allowed", () => {
  const testBoard = new Gameboard();
  expect(testBoard.placeShip([10, 1], [1, 4])).toBe(false);
  expect(testBoard.placeShip([10, 10], [1, 4])).toBe(false);
  expect(testBoard.placeShip([5, 1], [15, 24])).toBe(false);
});

test("Only arrays are allowed for placing ships", () => {
  const testBoard = new Gameboard();
  expect(testBoard.placeShip("asdf")).toBe(false);
});

test("Sucsessfully receive and record an attack", () => {
  const testBoard = new Gameboard();
  testBoard.placeShip([3, 3], [3, 3]);
  testBoard.receiveAttack(3, 3);
  expect(testBoard.ships[0].isSunk()).toBe(true);
  expect(testBoard.staleAttack(3, 3)).toBe(true);
  testBoard.placeShip([5, 5], [5, 7]);
  testBoard.receiveAttack(5, 6);
  expect(testBoard.ships[1].isSunk()).toBe(false);
  expect(testBoard.ships[1].getHits()).toBe(1);
  expect(testBoard.staleAttack(5, 6)).toBe(true);
});

test("Stale attacks are not processed", () => {
  const testBoard = new Gameboard();
  testBoard.placeShip([1, 5], [1, 5]);
  testBoard.receiveAttack(1, 5);
  testBoard.receiveAttack(1, 5);
  expect(testBoard.receiveAttack(1, 5)).toBe(false);
  expect(testBoard.ships[0].getHits()).toBe(1);
});

test("Correctly report that all ships have sunk", () => {
  const testBoard = new Gameboard();
  testBoard.placeShip([5, 5], [5, 8]);
  testBoard.placeShip([1, 1], [1, 3]);
  expect(testBoard.areAllSunk()).toBe(false);
  testBoard.receiveAttack(5, 5);
  testBoard.receiveAttack(5, 6);
  testBoard.receiveAttack(5, 7);
  testBoard.receiveAttack(5, 8);
  expect(testBoard.areAllSunk()).toBe(false);
  testBoard.receiveAttack(1, 1);
  expect(testBoard.areAllSunk()).toBe(false);
  testBoard.receiveAttack(1, 2);
  testBoard.receiveAttack(1, 3);
  expect(testBoard.areAllSunk()).toBe(true);
});
