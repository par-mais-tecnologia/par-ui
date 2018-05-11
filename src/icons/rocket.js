import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rocket extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 26 26";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M24,2c0,6-3,9-3,9l-2.31,8.31L16.8,21.2,15,17l-3.08,3.08-6-6L9,11,4.8,9.2,6.69,7.31,15,5c3-3,9-3,9-3m0-2c-.67,0-6.47.09-10,3.2L6.15,5.39a2,2,0,0,0-.88.51L3.39,7.79A2,2,0,0,0,4,11l1.48.64-1,1a2,2,0,0,0,0,2.83l6,6a2,2,0,0,0,2.83,0l1-1L15,22a2,2,0,0,0,3.25.63l1.89-1.89a2,2,0,0,0,.51-.88L22.81,12A15.78,15.78,0,0,0,26,2a2,2,0,0,0-2-2Z" transform="translate(0 0)"/>
          <path d="M4.51,20.27a1.29,1.29,0,0,1,.78.44c.53.53.45.82.42.93-.25.94-2.22,2-4.13,2.77.86-2.23,2.05-4.14,2.93-4.14m0-1C1.89,19.27,0,26,0,26s9.38-2.62,6-6a2.12,2.12,0,0,0-1.49-.73Z" transform="translate(0 0)"/>
        </g>
      </svg>
    );
  }
}

Rocket.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Rocket.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Rocket;

