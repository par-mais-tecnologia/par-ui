import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Lock extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 27.37 25";

    let height = this.props.height ? this.props.height : size
    let width = this.props.width ? this.props.width : size

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={height} width={width}>
        <g>
          <path d="M12,2a7,7,0,0,1,7,7v3h3V26H2V12H5V9a7,7,0,0,1,7-7h0m0-2A9,9,0,0,0,3,9v1H2a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2H21V9a9,9,0,0,0-9-9Z"/>
          <path d="M12,6a3,3,0,0,1,3,3v2H9V9a3,3,0,0,1,3-3m0-1A4,4,0,0,0,8,9v3h8V9a4,4,0,0,0-4-4Z"/>
        </g>
      </svg>
    );
  }
}

Lock.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Lock.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Lock;

