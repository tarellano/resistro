import React from 'react';
import ReactDOM from 'react-dom';
import { MAP, MULT } from '../color-map';
import ColorStrip from '../color-strip/color-strip.js';

export default class ColorInput extends React.Component {
  //Right before the component loads
  componentWillmount() {
    this.state = {valueLength: 4};
  }

  //As soon as the webpage load
  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    //Make the input element editable right off the start 
    this.el.focus(); 
    //This is to always have focus on input element
    document.addEventListener('click', this.focusOnInput.bind(this), false);
  }

  focusOnInput(e) {
    // if clicked outside of input element, focus on the input
    if (!this.el.contains(e.target)) {
      this.el.value = this.el.value;
      this.el.focus();
    }
  }

  multiplyValue(input, multiplier) {
    input = input.slice(0, -1);
    input = (parseFloat(input) * multiplier).toString();
    return input;
  }

  updateResistor(e) {
    var node = ReactDOM.findDOMNode(this);
    var inputEl = e.target;
    var decimalCount = 0;
    for (var i = 0; i < inputEl.value.length; i++) {
      if (inputEl.value[i] === '.') {
        decimalCount++;
      }
      if (inputEl.value.length > 1 && i === inputEl.value.length - 1) {
        if (inputEl.value[i] === 'k' || inputEl.value[i] === 'K') {
          e.target.value = this.multiplyValue(e.target.value, 1000);
        } else if (inputEl.value[i] == 'M') {
          e.target.value = this.multiplyValue(e.target.value, 1000000);
        }
      }
      if ((isNaN(parseInt(inputEl.value[i])) && inputEl.value[i] !== '.')
          || (inputEl.value[i] === '.' && decimalCount > 1)) {
        inputEl.value = inputEl.value.slice(0, i) + inputEl.value.slice(i + 1, inputEl.value.length);
      }
    }

    this.setState({valueLength: e.target.value.length});

    var resistance = this.calcResistance.bind(this, e)();
    if (resistance.err) {
      this.props.findColorError(resistance);
    } else {
      this.props.findColor(resistance);
    }
  }

  calcResistance(e) {
    var colorCode = {};
    var testVal = parseFloat(e.target.value, 10).toString();
    const inputVal = testVal == 'NaN' ? '' : testVal;
    if (inputVal === '') {
      return {err: 'Not a valid resistor'};
    }
    var ohm = testVal;
    
    if (ohm.length == 0 || parseFloat(ohm) === 0) {
      return {err: 'Not a valid resistor'};
    }


    if (ohm.indexOf('.') + 1) {
      let decimalCount = 0;
      var multColor;
      var secondBandColor;
      while (ohm.indexOf('.') + 1) {
        ohm = (parseFloat(ohm, 10) * 10).toString();
        decimalCount++;
      }
      if (decimalCount == 1) {
        multColor = ohm.length === 1 ? 'silver' : 'gold'; 
        secondBandColor = ohm.length === 1 ? 'black' : null;
      } else if (decimalCount == 2) {
        multColor = 'silver';
        secondBandColor = ohm.length === 1 ? 'black' : null;
      }
    }

    colorCode['1'] = MAP[ohm[0]];
    colorCode['2'] = secondBandColor || (testVal.length === 1 ? 'black' : MAP[ohm[1]]);
    ohm = ohm.substring(2);

    if (!(ohm in MULT)) {
      return {err: 'Not a valid resistor'};
    }
    colorCode['3'] = multColor || (testVal.length === 1 ? 'gold' : MULT[ohm]);
    return {colorCode: colorCode};
  }

  render() {
    const style = {
      width: 24.25 * (this.props.value ? this.props.value.length : (this.state ? this.state.valueLength : 4)) 
        + 20 + 'px'
    }

    var attr = {
      onInput: this.updateResistor.bind(this),
      defaultValue: '1000',
      maxLength: '9',
      style: style
    };

    if (this.props.value) {
      attr.value = this.props.value;
    }

    return (
      <input class='color-input' {...attr} />
    );
  }
}
