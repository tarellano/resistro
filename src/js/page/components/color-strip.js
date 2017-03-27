import React from 'react'

export default class ColorStrip extends React.Component {

  handleScroll(event) {
    console.log(event);
  }

  render() {
    const { color } = this.props;

    return (
      <div onMouseWheel={ this.handleScroll } class="rectangle" style={ {background: color} } />
    )
  }
}
