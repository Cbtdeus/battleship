function Ship(length) {
  let length = length;
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
}
