/* expect error when given an invalid value */
/* return and count hits correctly */
/* return length correctly */

const Ship = require("./ship");
function createSunkShip(length) {
  let sunk = Ship(length);
  for (let i = 0; i < sunk.getLength(); i++) {
    sunk.hit();
  }
  return sunk;
}
function createHitShip(length) {
  let hit = Ship(length);
  for (let i = 1; i < hit.getLength(); i++) {
    hit.hit();
  }
  return hit;
}

/* return sunk status correctly */
test("expect length when given a valid value", () => {
  expect(Ship(2).getLength()).toBe(2);
});
test("expect error when given an invalid value", () => {
  expect(() => Ship("asdf")).toThrow();
});
test("expect error when given an invalid value", () => {
  expect(() => Ship()).toThrow();
});
test("expect error when given a value out of range", () => {
  expect(() => Ship(0)).toThrow(Error);
});
test("expect error when given a value out of range", () => {
  expect(() => Ship(5)).toThrow(Error);
});
test("isSunk returns correct status", () => {
  expect(createSunkShip(4).isSunk()).toBe(true);
});
test("isSunk returns correct status", () => {
  expect(Ship(4).isSunk()).toBe(false);
});
test("isSunk returns correct status", () => {
  expect(createHitShip(1).isSunk()).toBe(false);
});
test("getHits returns correct status", () => {
  expect(createHitShip(3).getHits()).toBe(2);
});
test("getHits returns correct status", () => {
  expect(Ship(1).getHits()).toBe(0);
});
