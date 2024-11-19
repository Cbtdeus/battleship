const Player = require("./player");

test("creates a player", () => {
  let lexa = Player(true);
  expect(lexa.gameboard.board[0][0]).toBe(null);
});
