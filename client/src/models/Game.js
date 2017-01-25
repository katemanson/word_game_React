let observer = null;
let tiles = [
  {
    id: 1,
    position: [0,0],
    letter: 'a'
  },
  {
    id: 2,
    position: [1,0],
    letter: 'b'
  },
  {
    id: 3,
    position: [2,3],
    letter: 'c'
  },
  {
    id: 4,
    position: [3,2],
    letter: 'd'
  },
  {
    id: 5,
    position: [4,9],
    letter: 'e'
  }
]

function emitChange() {
  observer(tiles);
}

function observe(renderFunction) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = renderFunction;
  emitChange();
}

// function moveTile(toX, toY) {
//   tilePosition = [toX, toY];
//   emitChange();
// }

export {observe, tiles}