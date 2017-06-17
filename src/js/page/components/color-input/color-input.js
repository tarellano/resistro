import React from 'react';

import { MAP, MULT } from './color-map';


export default class ColorInput extends React.Component {

  updateResistor(e) {
    if (isNaN(parseInt(e.target.value))) {
      e.target.value = e.target.value.slice(0, -1);
      this.props.findColorError('Invalid Input');
      return;
    }

    this.calcResistance.bind(this, e)()
    .then(function(colorCode) {
      this.props.findColor(colorCode);
    }.bind(this))
    .catch(function(err) {
      console.log(err)
      this.props.findColorError(err);
    }.bind(this));
  }

  calcResistance(e) {
    var colorCode = {};
    var ohm = e.target.value = parseInt(e.target.value, 10).toString();

    if (ohm.length < 2) {
      return Promise.reject('Not a valid resistor');
    }

    colorCode['1'] = MAP[ohm[0]];
    ohm = ohm.substring(1);
    colorCode['2'] = MAP[ohm[0]];
    ohm = ohm.substring(1);

    if (ohm === '') {
      colorCode['3'] = 'black';
      return Promise.resolve(colorCode);
    }
    if (!(ohm in MULT)) {
      return Promise.reject('Not a valid resistor');
    }
    colorCode['3'] = MULT[ohm];
    return Promise.resolve(colorCode);

    var resistors = document.querySelectorAll('.rectangle');
    resistors.forEach(function(color, i) {
      color.style.background = colorCode[color.id];
    });
  }



  render() {
    return (
      <input class="colorInput" onInput={this.updateResistor.bind(this)}/>
    );
  }
}
