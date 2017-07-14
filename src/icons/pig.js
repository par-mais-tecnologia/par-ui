import React, {Component, PropTypes} from 'react';

class Pig extends Component {
  render() {
    const { size, color, background} = this.props;

    const viewBox = "0 0 36 28";

    let height = this.props.height ? this.props.height : size
    let width = this.props.width ? this.props.width : size

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={height} width={width}>
        <g>
          <path d="M18.5,2C24.29,2,29.34,4.35,32,7.84h1V9.41a8.92,8.92,0,0,1,1,4.09c0,4.68-3.6,8.7-9,10.5v2H20V25c-.49,0-1,0-1.5,0s-1,0-1.5,0v1H12V24a14,14,0,0,1-7.8-6H2V13H3A9.77,9.77,0,0,1,6,6.7V4.41H9A19.13,19.13,0,0,1,18.5,2m0-2a21.2,21.2,0,0,0-10,2.41H6a2,2,0,0,0-2,2v1.5a11.9,11.9,0,0,0-2.75,5.23A2,2,0,0,0,0,13v5a2,2,0,0,0,2,2H3.1A15.87,15.87,0,0,0,10,25.38V26a2,2,0,0,0,2,2h5a2,2,0,0,0,1.5-.68A2,2,0,0,0,20,28h5a2,2,0,0,0,2-2v-.62c5.51-2.31,9-6.85,9-11.88A10.83,10.83,0,0,0,35,9V7.84a2,2,0,0,0-2-2h-.06C29.71,2.22,24.28,0,18.5,0Z"/>
          <ellipse cx="6.61" cy="10.93" rx="1" ry="0.5" transform="translate(-6.08 12.44) rotate(-65.59)"/>
        </g>
      </svg>
    );
  }
}

Pig.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Pig.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Pig;

