import React, { Component, PropTypes } from 'react';

import parUiEllipsis from './ellipsis'

class ElidedTextBox extends Component {
  render() {
    const { text, className } = this.props;
    return <div className={className}>{text}</div>
  }
}

ElidedTextBox.propTypes = {
  text: PropTypes.string.isRequired,
  onElidedCalc: PropTypes.func,
}

ElidedTextBox.defaultProps = {
  text: '',
  onElidedCalc: () => {},
}

export default parUiEllipsis(ElidedTextBox, 2, '...');