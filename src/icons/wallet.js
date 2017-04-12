import React, {Component, PropTypes} from 'react';

class Wallet extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeMiterlimit:10
    };

    const viewBox = "0 0 30 26";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M26,5v7h2v4H26v8H2V5H26m0-2H2A2,2,0,0,0,0,5V24a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V18a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2V5a2,2,0,0,0-2-2Z" transform="translate(0 0)"/>
          <path d="M22.69,1A1.29,1.29,0,0,1,24,2.26V3H12.83l9.58-2,.28,0m0-1a2.39,2.39,0,0,0-.48,0L3,4H25V2.26A2.29,2.29,0,0,0,22.69,0Z" transform="translate(0 0)"/>
          <path d="M28,12v4H20V12h8m0-1H20a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1Z" transform="translate(0 0)"/>
          <path d="M22,13a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z" transform="translate(0 0)"/>
          <g>
            <line style={{style}} x1="24" y1="16" x2="24" y2="17"/>
            <line style={{strokeDasharray: "1.33 1.33"}} x1="24" y1="18.33" x2="24" y2="20.33"/>
            <polyline style={{style}} points="24 21 24 22 23 22"/>
            <line style={{ strokeDasharray: "2 2"}} x1="21" y1="22" x2="6" y2="22"/>
            <polyline style={{style}} points="5 22 4 22 4 21"/>
            <line style={{strokeDasharray: "1.86 1.86"}} x1="4" y1="19.14" x2="4" y2="8.93"/>
            <polyline style={{style}} points="4 8 4 7 5 7"/>
            <line style={{ strokeDasharray: "2 2"}} x1="7" y1="7" x2="22" y2="7"/>
            <polyline style={{style}} points="23 7 24 7 24 8"/>
            <line style={{style}} x1="24" y1="11" x2="24" y2="12"/>
          </g>
        </g>
      </svg>
    );
  }
}

Wallet.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Wallet.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Wallet;

