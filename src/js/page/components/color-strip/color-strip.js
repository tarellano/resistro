import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './color-picker';

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
      this.setState({colorPickerActive: true});
      return;
    }
    this.setState({colorPickerActive: false});
  }
  
  render() {
    const colorPicker = this.state.colorPickerActive
      ? <ColorPicker type='resistor'/> : null;
    return (
      <Band
        color={this.props.color}
        colorPicker={colorPicker}>
      </Band>
    );
  }
}


class Band extends React.Component {

  render() {
    var className = this.props.type === 'tolerance' ? 'tolerance' : 'band';

    var style = {
      background: this.props.color
    };
    return (
      <div class={className} style={style}>
        {this.props.colorPicker}
      </div>
    )
  }
}
