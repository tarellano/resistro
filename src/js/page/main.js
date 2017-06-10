import React from 'react';
import Resistor from './components/resistor';
import ColorInput from './components/color-input/color-input';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Resistor colorCode={this.props.colorCode} opacity={this.props.opacity}/>
        <ColorInput findColor={this.props.findColor} findColorError={this.props.findColorError}/>
      </div>
    );
  }
}
