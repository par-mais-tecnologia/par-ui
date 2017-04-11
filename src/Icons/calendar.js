import React, {Component, PropTypes} from 'react';

class Calendar extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M26,6V18l-8,8H2V6H26m0-2H2A2,2,0,0,0,0,6V26a2,2,0,0,0,2,2H18a2,2,0,0,0,1.41-.59l8-8A2,2,0,0,0,28,18V6a2,2,0,0,0-2-2Z"/>
          <path d="M26,18l-8,8V18h8m0-1H18a1,1,0,0,0-1,1v8a1,1,0,0,0,1.71.71l8-8A1,1,0,0,0,26,17Z"/>
          <g>
            <rect x="6" y="1" width="4" height="4" rx="1" ry="1"/>
            <path d="M9,2V4H7V2H9M9,0H7A2,2,0,0,0,5,2V4A2,2,0,0,0,7,6H9a2,2,0,0,0,2-2V2A2,2,0,0,0,9,0Z"/>
          </g>
          <rect x="5" y="9" width="2" height="2"/>
          <rect x="9" y="9" width="2" height="2"/>
          <rect x="13" y="9" width="2" height="2"/>
          <rect x="17" y="9" width="2" height="2"/>
          <rect x="21" y="9" width="2" height="2"/>
          <rect x="5" y="13" width="2" height="2"/>
          <rect x="9" y="13" width="2" height="2"/>
          <rect x="13" y="13" width="2" height="2"/>
          <rect x="17" y="13" width="2" height="2"/>
          <rect x="21" y="13" width="2" height="2"/>
          <rect x="5" y="17" width="2" height="2"/>
          <rect x="9" y="17" width="2" height="2"/>
          <rect x="13" y="17" width="2" height="2"/>
          <rect x="5" y="21" width="2" height="2"/>
          <rect x="9" y="21" width="2" height="2"/>
          <rect x="13" y="21" width="2" height="2"/>
          <g>
            <rect x="18" y="1" width="4" height="4" rx="1" ry="1"/>
            <path d="M21,2V4H19V2h2m0-2H19a2,2,0,0,0-2,2V4a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2Z"/>
          </g>
        </g>
      </svg>
    );
  }
}

Calendar.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Calendar.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};


export default Calendar;

