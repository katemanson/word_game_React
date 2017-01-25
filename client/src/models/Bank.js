//NOT CURRENTLY USED

class Bank{

  constructor(){
    this.tiles = []
    this.makeBank()
  }

  makeBank(){
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
      ['t', 4],
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
        this.tiles.push(tile);
      }
    }
  }
}

export default Bank

// ['a', 13],
// ['b', 3],
// ['c', 3],
// ['d', 6],
// ['e', 18],
// ['f', 3],
// ['g', 4],
// ['h', 3],
// ['i', 12],
// ['j', 2],
// ['k', 2],
// ['l', 5],
// ['m', 3],
// ['n', 8],
// ['o', 11],
// ['p', 3],
// ['q', 2],
// ['r', 9],
// ['s', 6],
// ['t', 9],
// ['u', 6],
// ['v', 3],
// ['w', 3],
// ['x', 2],
// ['y', 3],
// ['z', 2]