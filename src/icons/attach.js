import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attach extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 23.71 26";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <polyline style={style} points="23 13 11 25 1 25 1 15 15 1 22 8 9 21 5 21 5 17 15 7"/>
        </g>
      </svg>
    );
  }
}

Attach.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Attach.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Attach;



