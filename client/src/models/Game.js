let observer = null;
let tiles = [
  {
    key: 1,
    position: [0,0],
    letter: 'a'
  },
  {
    key: 2,
    position: [1,0],
    letter: 'b'
  },
  {
    key: 3,
    position: [2,3],
    letter: 'c'
  },
  {
    key: 4,
    position: [3,2],
    letter: 'd'
  },
  {
    key: 5,
    position: [4,9],
    letter: 'e'
  }
]

function emitChange() {
  observer(tiles);
}

function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

// function moveTile(toX, toY) {
//   tilePosition = [toX, toY];
//   emitChange();
// }

export {observe, tiles}