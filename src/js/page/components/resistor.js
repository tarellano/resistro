import React from 'react'
import ColorStrip from './color-strip';

export default class Resistor extends React.Component {
  render() {
    return (
    <div class="resistor">
      <ColorStrip color="red" />
      <ColorStrip color="blue" />
      <ColorStrip color="black" />
      <ColorStrip color="yellow" />
    </div>
    )
  }
}
