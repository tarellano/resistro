import React from 'react';
import { TOLERANCE } from '../color-map';
import ToleranceComponent from './tolerance-component';

export default class ColorTolerance extends React.Component {
  constructor() {
    super();
    this.state = { componentActive: false };
  }
 
  mouseEnter(e) {
    this.setState({ componentActive: true });
  }

  mouseLeave(e) {
    this.setState({ componentActive: true});
  }

  handleSingle(e) {
    
  }

  render() {
    var toleranceComponent = null;
    if (this.state.componentActive) {
      var values = { ...TOLERANCE };
      var left = 48.16; // width of % and +/- sign (default) + number widths
      for (var key in values) {
        if (key === this.props.val) {
          for (var i = 0; i < key.length; i++) {
            if (key[i] === '.') {
              left += 8.34; // width of a period
            } else {
              left += 16.69; //width of numbers
            }
          }
          delete values[key];
        }
      }
      left = left - 20 + 'px'; // convert int to to string
      toleranceComponent = <ToleranceComponent values={values}
        handleSingle={this.handleSingle.bind(this)} left={left}/>; 
    }

    return (
      <div class='tolerance' 
        onMouseEnter={this.mouseEnter.bind(this)} 
        onMouseLeave={this.mouseLeave.bind(this)}>
        {this.props.val}
        {toleranceComponent}
      </div>
    )
  }
}
