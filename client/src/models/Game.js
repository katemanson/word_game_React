let observer = null;
let tiles = [
  {
    id: 1,
    x: 0,
    y: 0,
    letter: 'a'
  },
  {
    id: 2,
    x: 1,
    y: 0,
    letter: 'b'
  },
  {
    id: 3,
    x: 2,
    y: 3,
    letter: 'c'
  },
  {
    id: 4,
    x: 3,
    y: 2,
    letter: 'd'
  },
  {
    id: 5,
    x: 4,
    y: 9,
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

function findTileById(id){
  const tileArray = tiles.filter((tile) => {
    return tile.id === id
  })
  return tileArray[0]
}

function moveTile(tileId, toX, toY) {
  const tile = findTileById(tileId)
  console.log('tile object', tile)
  tile.x = toX
  tile.y = toY
  console.log('tile object', tile)
  console.log('tiles after reset', tiles)
  emitChange();
}

export {tiles, observe, moveTile}