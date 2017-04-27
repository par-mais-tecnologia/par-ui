import React, {Component, PropTypes} from 'react';


class Badge extends Component {

  getStyle() {
    const {
      backgroundColor,
      height,
      width,
      isSelected,
      bulletColor,
      textColor
    } = this.props;

    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: bulletColor,
      marginRight:'8px',
    };

    const badgeStyle = {
      backgroundColor: isSelected? textColor:backgroundColor,
      color: isSelected?backgroundColor:textColor,
      height,
      width
    };

    return {
      bulletStyle,
      badgeStyle
    }
  }

  render() {
    const {
      badgeText,
      onClick,
      bulletColor,
      icon
    } = this.props;

    const {
      bulletStyle,
      badgeStyle
    } = this.getStyle();

    return (
      <div style={badgeStyle} className="roboto-regular p-f12 white br4 ph3 dif flex-center-all" onClick={onClick}>
        {bulletColor && <span style={bulletStyle}/>}
        {icon && <span>{icon}</span>}
        <span >{badgeText}</span>
      </div>
    );
  }
}

Badge.propTypes = {
  /** The badge text.**/
  badgeText:PropTypes.string,
  /** The text color.**/
  textColor:PropTypes.string,
  /** The backgroundColor of the badge.**/
  backgroundColor: PropTypes.string,
  /** On click Function.**/
  onClick:PropTypes.func,
  /** Selected state**/
  isSelected:PropTypes.bool,
  /** Icon**/
  icon:PropTypes.node
};

Badge.defaultProps = {
  height:'24px',
  width:'',
  onClick: onClick,
  backgroundColor:'DarkGray',
  isSelected:false,
  textColor:'white'
};

function onClick() {
  console.log("No onClick function defined.");
}
export default Badge;

