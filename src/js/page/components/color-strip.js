import React from 'react'

export default class ColorStrip extends React.Component {
  render() {

    const color = this.props.color;
    return (
      <div class="rectangle" style={ {background: color} } />
    )
  }
}
