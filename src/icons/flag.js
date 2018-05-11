import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Flag extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 26 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <path d="M9.63,2A6,6,0,0,1,14,3.78a6,6,0,0,0,4.37,1.78A11.56,11.56,0,0,0,24,3.78v12a11.56,11.56,0,0,1-5.63,1.78A6,6,0,0,1,14,15.78,6,6,0,0,0,9.63,14,11.56,11.56,0,0,0,4,15.78V26H2V3.78H4A11.56,11.56,0,0,1,9.63,2m0-2A13.29,13.29,0,0,0,3.45,1.78H2a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H4a2,2,0,0,0,2-2V17a8.69,8.69,0,0,1,3.63-1,4,4,0,0,1,3,1.19,8,8,0,0,0,5.78,2.36,13.62,13.62,0,0,0,6.74-2.11A2,2,0,0,0,26,15.78v-12a2,2,0,0,0-3.11-1.66,9.59,9.59,0,0,1-4.52,1.44,4,4,0,0,1-3-1.19A8,8,0,0,0,9.63,0Z" transform="translate(0 0)"/>
      </svg>
    );
  }
}

Flag.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Flag.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Flag;

