import React from 'react'
import ColorStrip from './color-strip';
// import $ from 'jquery';

export default class Resistor extends React.Component {
  // constructor() {
  //   super()
  //   $('ColorStrip').scroll(function(event) {
  //     console.log(event);
  //   });
  // }
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
