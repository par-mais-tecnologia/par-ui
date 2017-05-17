import React, {Component, PropTypes} from 'react';

class Label extends Component {
  getStyle() {
    const {customLabelStyle, bulletColor, errorText} = this.props;
    let labelStyle = "pl2 roboto-regular p-f14 gray-02 " + customLabelStyle;
    if (errorText){
      labelStyle = labelStyle.replace("gray-02", "kitkat-01");
    }

    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: bulletColor
    };

    return {
      labelStyle,
      bulletStyle
    }
  }

  render() {
    const {bulletStyle, labelStyle} = this.getStyle();
    const {text, showBullet} = this.props;

    return (
      <div className="flex flex-row pv1">
        {showBullet && <span style={bulletStyle}/>}
        <span className={labelStyle}>{text}</span>
      </div>
    );
  }
}

Label.propTypes = {
  labelStyle: PropTypes.string,
  text: PropTypes.string,
  requiredColor: PropTypes.string,
  showBullet: PropTypes.bool,
  errorText: PropTypes.string,
  bulletColor: PropTypes.string
};

Label.defaultProps = {
  customLabelStyle:'',
  text:'label text',
  showBullet:true
};

export default Label;


