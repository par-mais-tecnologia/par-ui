import React, { Component } from 'react';
import PropTypes from 'prop-types';

class X extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinejoin:'round',
      strokeLinecap:'round',
      strokeWidth:'2px'
    };

    const viewBox = "0 0 20 20";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <line style={style} x1="1" y1="1" x2="19" y2="19"/>
          <line style={style} x1="1" y1="19" x2="19" y2="1"/>
        </g>
      </svg>
    );
  }
}

X.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

X.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default X;

