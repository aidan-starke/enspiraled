import React from 'react'

import Circle from './Circle'

const App = props => {
  const circle = {
    cx: props.width / 2,
    cy: props.height / 2,
    r: 256
  }

  return (
    <svg width={props.width} height={props.height}>
      <Circle circle={circle} />
    </svg>
  )
}

export default App
