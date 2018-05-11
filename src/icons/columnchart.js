import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Columnchart extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 26 26";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <line style={style} x1="25" y1="25" x2="25" y2="1"/>
          <line style={style} x1="1" y1="25" x2="1" y2="17"/>
          <line style={style} x1="7" y1="25" x2="7" y2="13"/>
          <line style={style} x1="13" y1="25" x2="13" y2="9"/>
          <line style={style} x1="19" y1="25" x2="19" y2="5"/>
        </g>
      </svg>
    );
  }
}

Columnchart.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Columnchart.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Columnchart;

