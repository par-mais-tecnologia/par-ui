import React, { Component, PropTypes } from 'react';

import parUiEllipsis from './ellipsis'

class ElidedTextBox extends Component {
  render() {
    const { text } = this.props;
    return <div>{text}</div>
  }
}

ElidedTextBox.propTypes = {
  text: PropTypes.string.isRequired,
}

ElidedTextBox.defaultProps = {
  text: '',
}

export default parUiEllipsis(ElidedTextBox, 2, '...');
