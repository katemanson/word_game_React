import React from 'react'
import Square from './Square'
import Tile from './Tile'

class GridRow extends React.Component{

  renderTile(x, y){
    const tiles = this.props.tiles
    let tile = null

    for (let i = 0; i < this.props.tiles.length; i++){
      const tileX = tiles[i].x
      const tileY = tiles[i].y

      if (x === tileX && y === tileY){
        return tile = <Tile id={this.props.tiles[i].id} letter={this.props.tiles[i].letter} /> 
      }
    }
  }

  renderSquare(x, y){
    return (
        <Square key={[x, y]} x={x} y={y}>
          {this.renderTile(x, y)}
        </Square>
    )
  }

  render(){
    const squares = []
    const y = this.props.y
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
  y: React.PropTypes.number.isRequired,
  tiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default GridRow