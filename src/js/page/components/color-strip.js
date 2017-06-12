import React from 'react'

export default class ColorStrip extends React.Component {
  render() {
    var className = this.props.type === 'tolerance' ? 'tolerance' : 'rectangle';
    var style = {
      background: this.props.color
    };

    return (
      <div class={className} style={style}/>
    )
  }
}
