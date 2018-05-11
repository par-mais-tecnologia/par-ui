import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlusBG extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 24 24";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <path d="M24,12A12,12,0,1,1,12,0,12,12,0,0,1,24,12ZM6,13h5v5a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h5a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H13V6a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v5H6a1,1,0,0,0-1,1H5A1,1,0,0,0,6,13Z"/>
      </svg>
    );
  }
}

PlusBG.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

PlusBG.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default PlusBG;

