import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attention extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M14,2,26,26H2L14,2m0-2a2,2,0,0,0-1.79,1.11l-12,24A2,2,0,0,0,2,28H26a2,2,0,0,0,1.79-2.89l-12-24A2,2,0,0,0,14,0Z" transform="translate(0)"/>
          <path d="M15,10v8H13V10h2m1-1H12V19h4V9Z" transform="translate(0)"/>
          <path d="M15,21v2H13V21h2m1-1H12v4h4V20Z" transform="translate(0)"/>
        </g>
      </svg>
    );
  }
}

Attention.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Attention.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Attention;

