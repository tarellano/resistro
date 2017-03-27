import React from 'react';
import Resistor from './components/resistor';
import ColorInput from './components/color-input';

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Resistor />
        <ColorInput />
      </div>
    );
  }
}
