import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {

  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      strokeMiterlimit: 10
    };

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <line style={style} x1="14" y1="14" x2="14" y2="7.14"/>
          <path d="M14,2A12,12,0,1,1,2,14,12,12,0,0,1,14,2m0-2A14,14,0,1,0,28,14,14,14,0,0,0,14,0Z"/>
          <line style={style} x1="14" y1="14" x2="14" y2="7.14"/>
          <g>
            <line style={style} x1="18.29" y1="14" x2="14" y2="14"/>
            <circle cx="14" cy="14" r="1.88"/>
          </g>
          <g>
            <line style={style} x1="14" y1="3.71" x2="14" y2="5.18"/>
            <line style={style} x1="14" y1="22.82" x2="14" y2="24.29"/>
            <line style={style} x1="24.29" y1="14" x2="22.82" y2="14"/>
            <line style={style} x1="5.18" y1="14" x2="3.71" y2="14"/>
            <line style={style} x1="8.86" y1="5.09" x2="9.59" y2="6.36"/>
            <line style={style} x1="18.41" y1="21.64" x2="19.14" y2="22.91"/>
            <line style={style} x1="22.91" y1="8.86" x2="21.64" y2="9.59"/>
            <line style={style} x1="6.36" y1="18.41" x2="5.09" y2="19.14"/>
            <line style={style} x1="5.09" y1="8.86" x2="6.36" y2="9.59"/>
            <line style={style} x1="21.64" y1="18.41" x2="22.91" y2="19.14"/>
            <line style={style} x1="19.14" y1="5.09" x2="18.41" y2="6.36"/>
            <line style={style} x1="9.59" y1="21.64" x2="8.86" y2="22.91"/>
          </g>
        </g>
      </svg>
    );
  }
}

Clock.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Clock.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};
export default Clock;

