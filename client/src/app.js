import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './components/Grid.jsx'
import {observe, tiles} from '../Game.js'

window.onload = () => {

  observe(tiles =>
    ReactDOM.render(
      <Grid tiles={tiles} />,
      document.getElementById('app')
    )
  )
}
