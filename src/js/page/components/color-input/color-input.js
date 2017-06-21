import React from 'react';
import ReactDOM from 'react-dom';
import { MAP, MULT } from './color-map';
import ColorStrip from '../color-strip/color-strip.js';

export default class ColorInput extends React.Component {
  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    this.el.focus(); 
    document.addEventListener('click', this.focusOnInput.bind(this), false);
  }

  focusOnInput(e) {
    if (!this.el.contains(e.target)) {
      this.el.focus();
    }
  }

  updateResistor(e) {
    var node = ReactDOM.findDOMNode(this);
    var start = node.selectionStart, end = node.selectionEnd;
    if (isNaN(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    this.calcResistance.bind(this, e)()
    .then(function(data) {
      this.props.findColor(data);
    }.bind(this))
    .catch(function(data) {
      this.props.findColorError(data);
    }.bind(this));
  }

  calcResistance(e) {
    var colorCode = {};
    var testVal = parseInt(e.target.value, 10).toString();
    const inputVal = testVal == 'NaN' ? '' : testVal;
    if (inputVal === '') {
      return Promise.reject({err: 'Not a valid resistor', value: inputVal});
    }
    var ohm = e.target.value = testVal;

    if (ohm.length < 2) {
      return Promise.reject({err: 'Not a valid resistor', value: testVal});
    }
    colorCode['1'] = MAP[ohm[0]];
    ohm = ohm.substring(1);
    colorCode['2'] = MAP[ohm[0]];
    ohm = ohm.substring(1);

    if (!(ohm in MULT)) {
      return Promise.reject({err: 'Not a valid resistor', value: testVal});
    }
    colorCode['3'] = MULT[ohm];
    return Promise.resolve({colorCode: colorCode, value: e.target.value});
  }

  render() {
    const choppedValue = this.props.value === '' ? '' : 
      parseInt(this.props.value, 10).toString();
		const size = choppedValue === '' ? 1 : choppedValue.length + 1;
    return (
      <input class='color-input' 
        onInput={this.updateResistor.bind(this)} onChange={function(){}} 
        value={choppedValue} maxLength='11' size={size}/>
    );
  }
}
