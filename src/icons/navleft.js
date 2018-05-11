import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navleft extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M14,2A12,12,0,1,1,2,14,12,12,0,0,1,14,2m0-2A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"/>
          <polyline style={style} points="16.83 19.66 11.17 14 16.83 8.34"/>
        </g>
      </svg>
    );
  }
}

Navleft.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Navleft.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Navleft;
