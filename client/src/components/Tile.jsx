import React from 'react'

class Tile extends React.Component{
  render(){
    const divStyle = {
      width: '50px',
      height: '50px',
      lineHeight: '45px',
      margin: '0 auto',
      backgroundColor: '#FFF3B1',
      border: '2pt solid black',
      borderRadius: '5px',
      fontSize: '40px',
      textAlign: 'center'
    }
    
    return(
      <div style={divStyle}>
        <span>{this.props.letter.toUpperCase()}</span>
      </div>
    )
  }
}

export default Tile