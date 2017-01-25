const tiles = []

function makeTileBank(){
  const tileCounts = [
    ['a', 2],
    ['c', 1],
    ['d', 1],
    ['e', 2],
    ['g', 1],
    ['i', 5],
    ['l', 2],
    ['n', 2],
    ['o', 1],
    ['p', 1],
    ['r', 2],
    ['s', 1],
    ['t', 3],
    ['u', 1]
  ]

  let counter = 0
  for (let i = 0; i < tileCounts.length; i++){
    const tileLetter = tileCounts[i][0];
    for (let j = 0; j < tileCounts[i][1]; j++){
      const tile = {
        letter: tileLetter,
        x: i,
        y: j
      }
      counter++;
      tile.id = counter;
      tiles.push(tile);
    }
  }
}

let observer = null
function emitChange(){
  console.log('tiles', tiles)
  observer(tiles);
}

function observe(renderFunction){
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  makeTileBank()
  console.log('tiles', tiles)
  observer = renderFunction
  emitChange()
}

function findTileById(id){
  const tileInArray = tiles.filter((tile) => {
    return tile.id === id
  })
  return tileInArray[0]
}

function moveTile(tileId, toX, toY){
  const tile = findTileById(tileId)
  tile.x = toX
  tile.y = toY
  emitChange()
}

export {observe, tiles, moveTile}