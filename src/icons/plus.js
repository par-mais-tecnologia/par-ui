import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Plus extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinejoin:'round',
      strokeLinecap:'round',
      strokeWidth:'2px'
    };

    const viewBox = "0 0 18 18";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <line style={style} x1="1" y1="9" x2="17" y2="9"/>
          <line style={style} x1="9" y1="1" x2="9" y2="17"/>
        </g>
      </svg>
    );
  }
}

Plus.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Plus.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};


export default Plus;

