import React from 'react'
import Tile from './Tile.jsx'
import { moveTile } from '../models/Game.js'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../Constants.js'

const squareTarget = {
  // canDrop(props){
  //   if (this.hasChildNodes()){
  //     return false
  //   }
  //   return true
  // }, 

  drop(props, monitor){
    const tileId = monitor.getItem().id
    console.log('from drop target, tileId, target x and y', tileId, props.x, props.y)
    return moveTile(tileId, props.x, props.y)
  }
}

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class Square extends React.Component{
  render(){
    const { x, y, connectDropTarget, isOver } = this.props

    const cellStyle = {
      border: '1pt solid gray',
      width: '58px',
      height: '58px'
    }

    return connectDropTarget(
      <td style={cellStyle}>
        {this.props.children}
      </td>
    )
  }
}

Square.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  isOver: React.PropTypes.bool.isRequired,
  children: React.PropTypes.element
}

export default DropTarget(ItemTypes.TILE, squareTarget, collect)(Square)