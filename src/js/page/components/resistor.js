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
        <ColorStrip id="1" />
        <ColorStrip id="2" />
        <ColorStrip id="3" />
        <ColorStrip type="tolerance" />
      </div>
    )
  }
}
