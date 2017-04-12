import React, {Component, PropTypes} from 'react';

class Arrowchart extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 27.37 25";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <polyline style={style}  points="1 24 5 16 9 20 13 12 17 16 24.32 1.36"/>
          <polygon points="27.37 8.07 26.02 8.46 24.08 1.84 17.62 4.26 17.13 2.95 25 0 27.37 8.07"/>
        </g>
      </svg>
    );
  }
}

Arrowchart.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Arrowchart.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Arrowchart;

