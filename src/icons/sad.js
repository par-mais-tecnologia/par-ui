import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sad extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeMiterlimit:10
    };

    const viewBox = "0 0 52 52";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M26,2A24,24,0,1,1,2,26,24,24,0,0,1,26,2m0-2A26,26,0,1,0,52,26,26,26,0,0,0,26,0Z"/>
          <ellipse cx="19.5" cy="21" rx="1.5" ry="3"/>
          <ellipse cx="32.5" cy="21" rx="1.5" ry="3"/>
          <path style={style} d="M38,40c0-4.42-5.37-8-12-8s-12,3.58-12,8"/>
        </g>
      </svg>
    );
  }
}

Sad.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Sad.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Sad;

