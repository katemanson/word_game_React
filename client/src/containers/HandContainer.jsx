import React from 'react'

class HandContainer extends React.Component{

//ToDo
  handleSubmit(){
    return
  }

  render(){
    const divStyle = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '70px',
      backgroundColor: 'rgba(255, 224, 35, 0.2)'
    }

    const buttonStyle = {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      width: '150px',
      height: '50px',
      backgroundColor: 'rgba(255, 224, 35, 1)',
      borderRadius: '5px',
      fontSize: '25px',
      fontFamily: 'Monospace',
      fontWeight: 'bold',
      textAlign: 'center'
    }

    return <div style={divStyle}>
      <button 
        type='button' 
        style={buttonStyle}
        onClick={this.handleSubmit} 
      >
        Submit
      </button>
    </div>
  }
}

export default HandContainer