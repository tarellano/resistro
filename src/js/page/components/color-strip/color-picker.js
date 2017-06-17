import React from 'react';
import _ from 'lodash';

import { MAP, MULT } from '../color-input/color-map';

export default class ColorPicker extends React.Component {
  render() {
    const colors = [];
    const colorMap = _.invert(MAP);
    console.log(colors);
    for(var key in colorMap) {
      colors.push(<SingleColor color={key} value={colorMap[key]}/>); 
    }
    return (
      <div class='color-picker'> 
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
      <div class='single-color' style={style} value={this.props.value}>
      </div>
    );
  }
}
