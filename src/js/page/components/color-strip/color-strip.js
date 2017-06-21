import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import ColorPicker from './color-picker';
import { MAP, MULT, TOLERANCE } from '../color-input/color-map';

export default class ColorStrip extends React.Component {
  constructor() {
    super();
    this.state = { colorPickerActive: false };
  }

  componentWillMount() {
    document.addEventListener('click', this.pageClick.bind(this), false);
  }

  pageClick(e) {
    if (ReactDOM.findDOMNode(this).contains(e.target)) {
      if (this.state.colorPickerActive) {
        if (e.pageX > this.state.pageX - 87 && e.pageX < this.state.pageX + 87 &&
            e.pageY > this.state.pageY - 55 && e.pageY < this.state.pageY + 1) {
          return;
        }
      }

      this.setState({
        colorPickerActive: true,
        pageX: e.pageX,
        pageY: e.pageY
      });
      return;
    }
    this.setState({colorPickerActive: false});
  }
 
  handleSingle(e) {
    var bandEl = e.target.parentElement.parentElement;
    if (bandEl.dataset.value === 'tolerance') {
      var toleranceMap = _.invert(TOLERANCE); 
      const color = bandEl.style.background = e.target.dataset.state;
      this.props.solveTolerance(toleranceMap[color]); 
      this.setState({ colorPickerActive: false });
      return;
    }
    const colorMap = _.invert(MAP);
    const colorMult = _.invert(MULT);
    bandEl.style.background = e.target.dataset.state;
    this.setState({ colorPickerActive: false });
    var resistors = document.querySelectorAll('.band-main');
    var value = '';
    var colorCode = {};
    resistors.forEach((resistor, i) => {
      var bandColor = colorCode[i + 1] = resistor.style.background;
      value += i === 2 ? colorMult[bandColor] : colorMap[bandColor];
    });
    this.props.solveColor({colorCode: colorCode, value: value});
  }

  render() {
    const colorPicker = this.state.colorPickerActive
      ? <ColorPicker type={this.props.type} pageX={this.state.pageX} pageY={this.state.pageY}
      handleSingle={this.handleSingle.bind(this)}/> : null;

    const style = {
      background: this.props.color
    };
    var className;
    if (this.props.type === 'multiplier') {
      className = 'band band-main multiplier'; 
    } else if (this.props.type === 'tolerance') {
      className = 'band band-tolerance';
    } else {
      className = 'band band-main';
    }

    return (
      <div class={className} style={style} data-value={this.props.type}>
        {colorPicker}
      </div>
    );
  }
}

