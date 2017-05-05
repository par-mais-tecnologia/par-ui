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

    let height = this.props.height ? this.props.height : size
    let width = this.props.width ? this.props.width : size

    return (
      <svg className={this.props.className} style={{backgroundColor:background}} viewBox={viewBox} fill={color}  height={height} width={width}>
        <polyline style={style} points="1 10 9.67 19 27 1"/>
      </svg>
    );
  }
}

Check.propTypes = {
  size: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

Check.defaultProps = {
  size: 30,
  color: 'black',
  background: 'white',
};
export default Check;

