import React, {Component, PropTypes} from 'react';



class Check extends Component {
  render() {
    const { size, color, background} = this.props;

    const style = {
      fill:'none',
      stroke:color,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
    };

    const viewBox = "0 0 28 20";

    return (
      <svg style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={size} width={size}>
        <polyline style={style} points="1 10 9.67 19 27 1"/>
      </svg>
    );
  }
}

Check.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
};

Check.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};
export default Check;

