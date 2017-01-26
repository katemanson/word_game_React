const tiles = []

function makeTileBank(){
  const tileCounts = [
    ['a', 1],
    ['c', 1],
    ['e', 2],
    ['i', 2],
    ['l', 4],
    ['n', 2],
    ['r', 1],
    ['t', 1],
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

  checkWord('lenticular')
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

function checkWord(word){  
  var url = 'http://localhost:3000/dictionary'
  var data = JSON.stringify({word: word});

  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader('Content-Type', 'application/json')
  request.onload = function(){
    console.log(request.status);
    if (request.status === 200){
      var wordEntry = JSON.parse(request.responseText);
      if (Object.keys(wordEntry.entry).length){
        console.log('wordEntry.entry.scrabble: ', parseInt(wordEntry.entry.scrabble))
      } else {
        console.log('no entry; not a word')
      }
    }
  }
  request.send(data);
}

export {observe, tiles, moveTile}