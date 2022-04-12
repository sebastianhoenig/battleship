const shipFactory = (len) => {
  const length = len;
  let hits = 0;
  let fields = Array(len).fill(0);
  let sunk = false;

  const hit = (num) => {
    if (!fields[num]) {
      fields[num] = 1;
      hits += 1;
    }
  };

  const checkSunk = () => {
    if (hits == length) {
      sunk = true;
    }
  };

  const isSunk = () => {
    checkSunk();
    return sunk;
  };

  const getLength = () => {
    return length;
  };

  const getFields = () => {
    return fields;
  };

  const getHits = () => {
    return hits;
  };

  return { isSunk, hit, getFields, getLength, getHits };
};

export { shipFactory };
