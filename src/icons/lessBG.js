import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LessBG extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 24 24";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <path d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12Zm-5,0h0a1,1,0,0,0-1-1H6a1,1,0,0,0-1,1H5a1,1,0,0,0,1,1H18A1,1,0,0,0,19,12Z"/>
      </svg>
    );
  }
}

LessBG.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

LessBG.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};
export default LessBG;

