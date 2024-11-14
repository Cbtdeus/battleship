const Ship = (len) => {
  if (typeof len != "number" || len < 1 || len > 4) {
    throw new Error("Invalid length value");
  }
  let length = len;
  let hits = 0;
  const getHits = () => {
    return hits;
  };
  const getLength = () => {
    return length;
  };
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    if (hits >= length) {
      return true;
    } else {
      return false;
    }
  };
  return { getLength, getHits, hit, isSunk };
};

module.exports = Ship;

 