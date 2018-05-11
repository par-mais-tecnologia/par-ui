import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M14,2A12,12,0,1,1,2,14,12,12,0,0,1,14,2m0-2A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"/>
          <circle cx="14" cy="14" r="9"/>
        </g>
      </svg>
    );
  }
}

Profile.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Profile.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Profile;

