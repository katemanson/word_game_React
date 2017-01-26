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
  const url = 'http://localhost:3000/dictionary'
  const data = JSON.stringify({word: word})

  const request = new XMLHttpRequest()
  request.open("POST", url)
  request.setRequestHeader('Content-Type', 'application/json')
  request.onload = function(){
    console.log(request.status)
    if (request.status === 200){
      const wordEntry = JSON.parse(request.responseText)
      if (Object.keys(wordEntry.entry).length){
        console.log('wordEntry.entry.scrabble: ', parseInt(wordEntry.entry.scrabble))
      } else {
        console.log('no entry; not a word')
      }
    }
  }
  request.send(data)
}

//? Next method requires either "column" or "row" (as String) as parameter.
// Don't think this is clear enough in the code.
function getWordsIn(specifyColumnOrRow){
  //find the min and max column/row numbers
  var handSortedByColumnOrRow = sortBy(this.hand, [function(tile){
    return tile.gridPosition[specifyColumnOrRow];
  }]);
  var firstColumnOrRow = handSortedByColumnOrRow[0].gridPosition[specifyColumnOrRow];
  var lastColumnOrRow = handSortedByColumnOrRow[handSortedByColumnOrRow.length - 1].gridPosition[specifyColumnOrRow];

  //group tiles in the same column/row
  var handGroupedByColumnOrRow = [];
  for (var i = firstColumnOrRow; i <= lastColumnOrRow; i++){
    var tilesInColumnOrRowI = handSortedByColumnOrRow.filter(function(tile){
      return tile.gridPosition[specifyColumnOrRow] === i;
    });
    handGroupedByColumnOrRow.push(tilesInColumnOrRowI);
  }

  //order by row/column number
  var specifyRowOrColumn = "";
  if (specifyColumnOrRow === "column"){
    specifyRowOrColumn = "row";
  } else {
    specifyRowOrColumn = "column";
  }

  var handGroupedByColumnOrRowSortedByRowOrColumn = [];
  for (var group of handGroupedByColumnOrRow){
    var sortedByRowOrColumn = sortBy(group, [function(tile){
      return tile.gridPosition[specifyRowOrColumn];
    }]);
    handGroupedByColumnOrRowSortedByRowOrColumn.push(sortedByRowOrColumn);
  }

  //group tiles with consecutive row/column numbers
  /*  Note: the following bit (with the nested for loops and if statements)
      is based on the first answer at
      http://stackoverflow.com/questions/22627125/grouping-consecutive-elements-together-using-javascript */
  var tilesFormingWords = [];
  var difference;
  var holder = [];
  for (var group of handGroupedByColumnOrRowSortedByRowOrColumn){
    for (var i = 0; i < group.length; i++){
      if (difference !== (group[i].gridPosition[specifyRowOrColumn] - i) && difference !== undefined ){
        if (holder.length > 1){
          tilesFormingWords.push(holder);
        }
        holder = [];
      }
      difference = group[i].gridPosition[specifyRowOrColumn] - i;
      holder.push(group[i]);
    }
    if (holder.length){
      if (holder.length > 1){
        tilesFormingWords.push(holder);
      }
      holder = [];
    }
    difference = undefined;
  }

  //for consecutive tiles, concatenate letters to make words, add each word
  //to player's this.words array
  var lettersOfWord = [];
  var word = "";
  for (var tilesFormingWord of tilesFormingWords){
    lettersOfWord = tilesFormingWord.map(function(tile){
      return tile.letter;
    });
    word = lettersOfWord.join("");
    this.words.push(word);
    lettersOfWord = [];
    word = "";
  }
}

function getWords(){
  //ToDo: Is this if statement needed?
  if (this.words.length){
    this.words = [];
  }
  this.getWordsIn("column");
  this.getWordsIn("row");
}

export {observe, tiles, moveTile}