import React from 'react';
import Resistor from './components/resistor';
import ColorInput from './components/color-input/color-input';

export default class Main extends React.Component {
  render() {
    const toleranceSymbol = '± ';
    return(
      <div>
        <Resistor
          solveColor={this.props.solveColor}
          colorCode={this.props.colorCode}
          opacity={this.props.opacity}/>
        <div class='input-container'>
          <ColorInput
            value={this.props.value}
            findColor={this.props.findColor}
            findColorError={this.props.findColorError}/>
          <div class='ohm-symbol'>Ω</div>
          <div class='tolerance'>{toleranceSymbol}</div>
        </div>
      </div>
    );
  }
}
