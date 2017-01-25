import React from 'react'
import {ItemTypes} from '../Constants.js'
import {DragSource} from 'react-dnd'

const tileSource = {
  beginDrag(props){
    return { id: props.id }
  }
}

function collect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Tile extends React.Component{

  render(){
    const connectDragSource = this.props.connectDragSource
    const isDragging = this.props.isDragging

    const divStyle = {
      width: '50px',
      height: '50px',
      lineHeight: '45px',
      margin: '0 auto',
      backgroundColor: '#FFF3B1',
      border: '2pt solid black',
      borderRadius: '5px',
      fontSize: '40px',
      textAlign: 'center',
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move'
    }
    
    return connectDragSource(
      <div style={divStyle}>
        <span>{this.props.letter.toUpperCase()}</span>
      </div>
    )
  }
}

Tile.propTypes = {
  id: React.PropTypes.number.isRequired,
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.TILE, tileSource, collect)(Tile)