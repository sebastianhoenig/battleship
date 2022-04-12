import { shipFactory } from "./ship";

const gameboardFactory = (size) => {
  const numRows = size;
  const numCols = size;
  const board = initializeBoard(numRows, numCols);
  let ships = [];

  function initializeBoard(numRows, numCols) {
    let myArray = [];
    for (let i = 0; i < numRows; i++) {
      let myRow = [];
      for (let j = 0; j < numCols; j++) {
        myRow.push({ name: "water", index: undefined });
      }
      myArray.push(myRow);
    }
    return myArray;
  }

  const createShip = (len) => {
    let ship = shipFactory(len);
    return ship;
  };

  const checkPlacement = (ship, row, col, horizontal) => {
    let length = ship.getLength();
    if (horizontal) {
      let currRow = board[row];
      for (let i = 0; i < length; i++) {
        if (
          currRow[col + i] === undefined ||
          currRow[col + i].name !== "water"
        ) {
          return false;
        }
      }
    } else {
      let currCol = board.map((x) => x[col]);
      for (let i = 0; i < length; i++) {
        if (
          currCol[row + i] === undefined ||
          currCol[row + i].name !== "water"
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const placeShip = (ship, row, col, horizontal, ind) => {
    let length = ship.getLength();
    if (horizontal) {
      let currRow = board[row];
      for (let i = 0; i < length; i++) {
        currRow[col + i].name = ind;
        currRow[col + i].index = i;
      }
    } else {
      for (let k = 0; k < length; k++) {
        board[row + k][col].name = ind;
        board[row + k][col].index = k;
      }
    }
    ships.push(ship);
  };

  const recieveAttack = (row, col) => {
    if (board[row][col].name === "water") {
      return false;
    } else {
      let shipNumber = board[row][col].name;
      let indexOfHit = board[row][col].index;
      let ship = ships[shipNumber];
      ship.hit(indexOfHit);
      return true;
    }
  };

  const getShips = () => {
    return ships;
  };

  return {
    board,
    checkPlacement,
    placeShip,
    createShip,
    recieveAttack,
    getShips,
  };
};

export { gameboardFactory };
