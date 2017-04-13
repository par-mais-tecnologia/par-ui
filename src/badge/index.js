import React, {Component, PropTypes} from 'react';


class Badge extends Component {

  getStyle() {
    const {
      backgroundColor,
      height,
      width,
      isSelected
    } = this.props;

    return {
      backgroundColor: isSelected? 'white':backgroundColor,
      height: height,
      width: width,
      color: isSelected?backgroundColor:'white',
      transition: '0.2s all'
    };
  }

  render() {
    const {
      badgeText,
      onClick
    } = this.props;

    const style = this.getStyle();

    return (
      <div style={style} className="roboto-regular p-f12 white br4 ph3 dif flex-center-all" onClick={onClick}>
        <span >{badgeText}</span>
      </div>
    );
  }
}

Badge.propTypes = {
  /** The badge text.**/
  badgeText:PropTypes.string,
  /** The backgroundColor of the badge.**/
  backgroundColor: PropTypes.string,
  /** On click Function.**/
  onClick:PropTypes.func,
  /** Selected state**/
  isSelected:PropTypes.bool
};

Badge.defaultProps = {
  height:'24px',
  width:'',
  onClick: onClick,
  backgroundColor:'DarkGray',
  isSelected:false
};

function onClick() {
  console.log("No onClick function defined.");
}
export default Badge;

