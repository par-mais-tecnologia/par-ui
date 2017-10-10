import React, {Component, PropTypes} from 'react';

class Expand extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 28 28";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <g>
          <polyline style={style} points="1 1 9 9 17 1"/>
        </g>
      </svg>
    );
  }
}

Expand.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Expand.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};

export default Expand;
