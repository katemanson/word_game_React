import React from 'react'
import Square from './Square'
import Tile from './Tile'

class GridRow extends React.Component{

  renderSquare(x, y){

    const tiles = this.props.tiles
    let tile = null

    for (let i = 0; i < this.props.tiles.length; i++){
      const [tileX, tileY] = tiles[i].position
      if (x === tileX && y === tileY){
        tile = <Tile id={this.props.tiles[i].id} letter={this.props.tiles[i].letter} /> 
      }
    }  

    return (
      <Square key={[x, y]}>
        {tile}
      </Square>
    )
  }

  render(){
    const squares = []
    const y = this.props.yCoordinate
    for (let x = 0; x < 10; x++) { 
      squares.push(this.renderSquare(x, y))
    }

    return (
      <tr>
        {squares}
      </tr>
    )
  }
}

GridRow.propTypes = {
  tiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default GridRow