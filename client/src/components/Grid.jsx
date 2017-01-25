import React from 'react'
import GridRow from './GridRow.jsx'

class Grid extends React.Component{

  render(){
    const tRs = []
    for (let y = 0; y < 10; y++) { 
      tRs.push(<GridRow key={y} yCoordinate={y} tiles={this.props.tiles}/>)
    }
    console.log(this.props.tiles)
    return (
      <div>
        <table>
          <tbody>
            {tRs}
          </tbody>
        </table>
      </div>
    )
  }
}

Grid.propTypes = {
  tiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Grid