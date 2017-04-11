import React, {Component, PropTypes} from 'react';

class Next extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 26.5 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <path d="M9,2,25,14,9,26V2M9,0A2,2,0,0,0,7,2V26a2,2,0,0,0,3.2,1.6l16-12a2,2,0,0,0,0-3.2L10.2.4A2,2,0,0,0,9,0Z" transform="translate(-0.5 0)"/>
          <line style={style} x1="0.5" y1="2" x2="0.5" y2="26"/>
        </g>
      </svg>
    );
  }
}

Next.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Next.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Next;

