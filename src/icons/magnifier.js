import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Magnifier extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 18 18";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <path style={style} d="M17,17l-4.69-4.69h0a6.63,6.63,0,0,0,0-9.37h0a6.63,6.63,0,0,0-9.37,0h0a6.63,6.63,0,0,0,0,9.37h0a6.63,6.63,0,0,0,9.37,0h0Z" transform="translate(0 0)"/>
      </svg>
    );
  }
}

Magnifier.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Magnifier.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Magnifier;

