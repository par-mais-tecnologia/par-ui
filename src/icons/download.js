import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Download extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 26 25";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <polyline style={style} points="1 16 1 24 25 24 25 16"/>
          <polygon points="16 0 10 0 10 12 7 12 13 18 19 12 16 12 16 0"/>
        </g>
      </svg>
    );
  }
}

Download.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Download.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};
export default Download;

