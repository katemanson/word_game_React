import React from 'react'
import Tile from './Tile.jsx'
import { moveTile } from '../models/Game.js'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../Constants.js'

const squareTarget = {
  canDrop(props){
    if (props.children){
      return false
    }
    return true
  }, 

  drop(props, monitor){
    const tileId = monitor.getItem().id
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

    let overColor = null
    if (isOver && !this.props.children){
      overColor = '#FFE023'
    } 

    return connectDropTarget(
      <td style={{
        width: '58px',
        minWidth: '58px',
        maxWidth: '58px',
        height: '58px',
        minHeight: '58px',
        maxHeight: '58px',
        border: '1pt solid gray',
        borderSpacing: 0,
        padding: 0,
        margin: 0,
        textAlign: 'center',
        backgroundColor: 'overColor'
      }}>
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