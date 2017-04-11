import React, {Component, PropTypes} from 'react';

class Hammer extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };

    const viewBox = "0 0 27.06 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M13.06,2l12,12L19.4,19.66l-4.5-4.5L5,26,2,23l9.9-10.84L7.4,7.66,13.06,2m0-2a2,2,0,0,0-1.41.59L6,6.24A2,2,0,0,0,6,9.07l3.15,3.15L.52,21.65a2,2,0,0,0,.06,2.76l3,3A2,2,0,0,0,5,28H5a2,2,0,0,0,1.43-.65L15,18.05l3,3a2,2,0,0,0,2.83,0l5.66-5.66a2,2,0,0,0,0-2.83l-12-12A2,2,0,0,0,13.06,0Z" transform="translate(0 0)"/>
          <line style={style} x1="15.18" y1="4.12" x2="9.52" y2="9.78"/>
          <line style={style} x1="22.96" y1="11.9" x2="17.3" y2="17.56"/>
          <line style={style} x1="14" y1="26" x2="26" y2="26"/>
        </g>
      </svg>
    );
  }
}

Hammer.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Hammer.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};
export default Hammer;

