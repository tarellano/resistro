import React from 'react';
import _ from 'lodash';

import { MAP, MULT, TOLERANCE } from '../color-input/color-map';

export default class ColorPicker extends React.Component {
  render() {
    const colors = [];
    const colorMap = _.invert(MAP);
    const width = Math.ceil(Object.keys(colorMap).length / 2)*25 + 50 + 'px';
    const style = {
      width: width,
      left: (parseInt(this.props.pageX) - (width / 2)).toString() + 'px',
      top: (parseInt(this.props.pageY) - 55).toString() + 'px'
    };
    for(var key in colorMap) {
      colors.push(
          <SingleColor color={key} key={colorMap[key]} handleSingle={this.props.handleSingle}/>); 
    }
    return (
      <div class='color-picker' style={style} > 
        {colors}
      </div>
    )
  }
}

class SingleColor extends React.Component {
  render() {
    const style = {
      background: this.props.color
    }
    return (
      <div class='single-color' data-state={this.props.color} onClick={this.props.handleSingle}
        style={style}> 
      </div>
    );
  }
}
