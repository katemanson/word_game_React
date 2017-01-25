import React from 'react'
import Tile from './Tile.jsx'

class Square extends React.Component{
  render(){
    const cellStyle = {
      border: '1pt solid gray',
      width: '58px',
      height: '58px'
    }

    return (
      <td style={cellStyle}>
        {this.props.children}
      </td>
    )
  }

}

export default Square