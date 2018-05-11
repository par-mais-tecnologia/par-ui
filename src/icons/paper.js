import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paper extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M26,2V18l-8,8H2V2H26m0-2H2A2,2,0,0,0,0,2V26a2,2,0,0,0,2,2H18a2,2,0,0,0,1.41-.59l8-8A2,2,0,0,0,28,18V2a2,2,0,0,0-2-2Z"/>
          <path d="M26,18l-8,8V18h8m0-1H18a1,1,0,0,0-1,1v8a1,1,0,0,0,1.71.71l8-8A1,1,0,0,0,26,17Z"/>
          <rect x="5" y="5" width="4" height="4"/>
          <rect x="11" y="5" width="12" height="1"/>
          <rect x="11" y="8" width="12" height="1"/>
          <rect x="5" y="11" width="18" height="1"/>
          <rect x="5" y="14" width="18" height="1"/>
          <rect x="5" y="17" width="9" height="1"/>
          <rect x="5" y="22" width="5" height="1"/>
        </g>
      </svg>
    );
  }
}

Paper.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Paper.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Paper;

