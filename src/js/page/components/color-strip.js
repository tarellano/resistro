import React from 'react'

export default class ColorStrip extends React.Component {

  render() {
    const { id, type } = this.props;
    var className = type === 'tolerance' ? 'tolerance' : 'rectangle';

    return (
      <div class={className} id={id} />
    )
  }
}
