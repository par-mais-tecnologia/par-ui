import React, {Component, PropTypes} from 'react';
import NumberFormat  from 'react-number-format';
import Label from '../label'

class CurrencyInput extends Component {
  getStyle() {
    const {
      disabled,
      errorText,
      inputClassName,
      customClassName,
      labelClassName,
      containerClassName,
      errorClassName,
      subtitleClassName,
    } = this.props;

    let inputStyle = "roboto-regular gray-02 h25 p-f18  pl4 placeholder";
    let containerStyle = "dif flex-column input-money-sign";
    let labelStyle = "pl2 roboto-regular p-f14 gray-02";
    let subtitleStyle = "roboto-regular h1 p-f14 gray-02 p-ti-075";
    let ageStyle = "roboto-regular h1 p-f14 gray-02 p-ti-075 pt1";

    if (disabled) {
      inputStyle = inputStyle.concat(" ", "bg-gray-07 input-border-disabled cursor-disabled").replace("gray-02", "gray-04")
    } else if (errorText) {
      labelStyle = labelStyle.replace( "gray-02", "kitkat-01");
      subtitleStyle = subtitleStyle.replace( "gray-02", "kitkat-01");
      inputStyle = inputStyle.concat(" ", "input-border-error")
    } else {
      inputStyle = inputStyle.concat(" ", "input-border b--gray-05 ")
    }

    if (inputClassName) {
      inputStyle = inputStyle.concat(" ", inputClassName)
    }
    if (containerClassName) {
      containerStyle = containerStyle.concat(" ", containerClassName)
    }
    if (labelClassName) {
      labelStyle = labelStyle.concat(" ", labelClassName)
    }
    if (errorClassName && errorText) {
      subtitleStyle = subtitleStyle.concat(" ", errorClassName)
    }
    if (subtitleClassName ) {
      subtitleStyle = subtitleStyle.concat(" ", subtitleClassName)
    }

    return {
      containerStyle,
      inputStyle,
      labelStyle,
      subtitleStyle,
      ageStyle
    };
  }

  handleInputBlur(event){
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };
  handleInputChange(event){
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  };
  handleInputFocus(event){
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  render() {
    const {
      requiredColor,
      width,
      disabled,
      value,
      errorText,
      subtitle,
      placeholder,
      inputValue,
    } = this.props;



    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: requiredColor
    };

    const customSize = {
      width: width
    }

    const inputProps = {
      disabled: disabled,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      value: value
    };

    const {
      containerStyle,
      inputStyle,
      labelStyle,
      subtitleStyle,
    } = this.getStyle();

    const subtitleText = (errorText && errorText!==' ')? errorText : subtitle;


    return (
      <div style={customSize} className={containerStyle}>
        <Label errorText={errorText} labelStyle={labelStyle} text={this.props.label} bulletColor={requiredColor}/>
        <NumberFormat
          {...inputProps}
          placeholder={placeholder}
          value={inputValue}
          className={inputStyle}
          decimalPrecision={true}
          onChange={(e) => this.props.onChange( e.target.value)}
          thousandSeparator={' '} decimalSeparator={','}  />
        <span className={subtitleStyle}>{subtitleText}</span>
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  customClassName: PropTypes.string,
  disabled: PropTypes.bool,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  requiredColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
  errorText: PropTypes.string,
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node
};

CurrencyInput.defaultProps = {
  label: "Currency input",
  placeholder: "000 000 000,00",
  requiredColor: "",
  type: 'text',
};

export default CurrencyInput;
