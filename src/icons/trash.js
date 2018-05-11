import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trash extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinejoin:'round'
    };

    const viewBox = "0 0 26 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M17,2V5h7V8H21V26H5V8H2V5H9V2h8m0-2H9A2,2,0,0,0,7,2V3H2A2,2,0,0,0,0,5V8a2,2,0,0,0,2,2H3V26a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V10h1a2,2,0,0,0,2-2V5a2,2,0,0,0-2-2H19V2a2,2,0,0,0-2-2Z"/>
          <line style={style} x1="9" y1="10" x2="9" y2="22"/>
          <line style={style} x1="17" y1="10" x2="17" y2="22"/>
          <line style={style} x1="13" y1="10" x2="13" y2="22"/>
        </g>
      </svg>
    );
  }
}

Trash.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Trash.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Trash;

