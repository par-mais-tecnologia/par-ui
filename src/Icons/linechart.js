import React, {Component, PropTypes} from 'react';

class Linechart extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth:'2px'
    };

    const viewBox = "0 0 30 26";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <polyline style={style} points="1 25 5 17 9 21 13 13 17 17 25 1 29 1"/>
      </svg>
    );
  }
}

Linechart.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Linechart.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Linechart;

