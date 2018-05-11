import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contract extends Component {
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
          <polyline style={style} points="17 9 9 1 1 9"/>
        </g>
      </svg>
    );
  }
}

Contract.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Contract.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Contract;
