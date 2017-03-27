import React from 'react';

import { MAP, MULT } from './color-map';

var INVALID = '0.5';
var VALID = '1.0';

export default class ColorInput extends React.Component {
  dimResistor(op) {
    document.querySelector('.resistor').style.opacity = op;
  }

  calcResistance(e) {
    var colorCode = {};
    if (e.target.value.length < 2) {
      this.dimResistor(INVALID);
      console.log('Not a valid resistor');
      return;
    }

    var ohm = e.target.value;
    colorCode['1'] = MAP[ohm[0]];
    ohm = ohm.substring(1);
    colorCode['2'] = MAP[ohm[0]];
    ohm = ohm.substring(1);

    if (ohm === '') {
      colorCode['3'] = 'black';
      return;
    }
    if (!(ohm in MULT)) {
      this.dimResistor(INVALID);
      console.log('Not a valid resistor');
      return;
    }
    colorCode['3'] = MULT[ohm];
    console.log(colorCode['1'], colorCode['2'], colorCode['3'])

    var resistors = document.querySelectorAll('.rectangle');
    this.dimResistor(VALID);
    resistors.forEach(function(color, i) {
      color.style.background = colorCode[color.id];
    });

  }

  render() {
    return (
      <input class="colorInput" onChange={this.calcResistance.bind(this)}/>
    );
  }
}