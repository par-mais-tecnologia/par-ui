import React, {Component, PropTypes} from 'react';
import InputMask from 'react-input-mask';
import moment from 'moment'

class DateInput extends Component {

  getStyle() {
    const {
      disabled,
      errorText,
      inputClassName,
      customClassName,
      labelClassName,
      containerClassName,
      errorClassName,
    } = this.props;

    let inputStyle = "roboto-regular gray-02 h25 p-f18 input-text-indent-12 placeholder";
    let containerStyle = "dif flex-column flex-auto mb2";
    let labelStyle = "pl2 roboto-regular p-f14 gray-02";
    let errorStyle = "roboto-regular h1 p-f14 kitkat-01 p-ti-075";
    let ageStyle = "roboto-regular h1 p-f14 gray-02 p-ti-075 pt1";

    if (disabled) {
      inputStyle = inputStyle.concat(" ", "bg-gray-07 input-border-disabled cursor-disabled").replace("gray-02", "gray-04")
    } else if (errorText) {
      labelStyle = labelStyle.replace("gray-02", "kitkat-01");
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
    if (errorClassName) {
      errorStyle = errorStyle.concat(" ", errorClassName)
    }

    return {
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      ageStyle
    };
  }

  handleInputBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleInputChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  }

  handleInputFocus(event){
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  render() {
    let age = '00';
    if(this.props.value.length===10){
      age = moment().diff(moment(this.props.value, "DD/MM/YYYY"), 'years');
    }
    let ageText = age + ' anos';

    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: this.props.requiredColor
    };

    const customSize = {
      width: this.props.width
    }

    const inputProps = {
      disabled: this.props.disabled,
      onBlur: this.handleInputBlur.bind(this),
      onChange: this.handleInputChange.bind(this),
      onFocus: this.handleInputFocus.bind(this),
      value: this.props.value
    };

    const {
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      ageStyle
    } = this.getStyle();

    return (
      <div style={customSize} className={containerStyle}>
        <div className="flex flex-row pv1">
          <span style={bulletStyle}/>
          <span className={labelStyle}>{this.props.label}</span>
        </div>
        <InputMask {...inputProps}
                   type={this.props.type}
                   className={inputStyle}
                   placeholder={this.props.placeholder}
                   maskChar={null} mask={"99/99/9999"}/>
        {(this.props.showError && this.props.errorText) ? '' : <span className={ageStyle}>{ageText}</span>}
        {(this.props.showError && this.props.errorText) ? <span className={errorStyle}>{this.props.errorText}</span>:''}
      </div>
    );
  }
}

DateInput.propTypes = {
  customClassName: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
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
  value: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node,
  showError: PropTypes.bool
};

DateInput.defaultProps = {
  label: "Date input",
  placeholder: "00/00/0000",
  requiredColor: "",
  type: 'text',
  value:'',
  showError: true
};

export default DateInput;

