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
    var style = {
      opacity: this.props.opacity
    };

    return (
      <div class="resistor" style={style}>
        <ColorStrip color={this.props.colorCode['1']}/>
        <ColorStrip color={this.props.colorCode['2']}/>
        <ColorStrip color={this.props.colorCode['3']}/>
        <ColorStrip type="tolerance" />
      </div>
    )
  }
}
