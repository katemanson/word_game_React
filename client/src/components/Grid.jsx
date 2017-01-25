import React from 'react'
import GridRow from './GridRow.jsx'
import HandContainer from '../containers/HandContainer.jsx'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Grid extends React.Component{

  render(){
    const tRs = []
    for (let y = 0; y < 50; y++) { 
      tRs.push(<GridRow key={y} y={y} tiles={this.props.tiles}/>)
    }
    return (
      <div style={{position: 'relative'}}>
        <table>
          <tbody>
            {tRs}
          </tbody>
        </table>
        <HandContainer />
      </div>
    )
  }
}

Grid.propTypes = {
  tiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default DragDropContext(HTML5Backend)(Grid)