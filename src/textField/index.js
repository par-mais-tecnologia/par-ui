import React, { Component, PropTypes } from 'react'

class TextInput extends Component {
  getStyle() {
    let inputStyle = 'roboto-regular gray-02 h2 p-f18 input-text-indent-12'
    let containerStyle = 'dif flex-column'
    let labelStyle = 'pl2 roboto-regular p-f14 gray-02'
    let errorStyle = 'roboto-regular h1 p-f14 kitkat-01 p-ti-075'

    if (this.props.disabled) {
      inputStyle = inputStyle.concat(' ', 'bg-gray-07 input-border-disabled cursor-disabled').replace('gray-02', 'gray-04')
    } else if (this.props.errorText) {
      labelStyle = labelStyle.replace('gray-02', 'kitkat-01')
      inputStyle = inputStyle.concat(' ', 'input-border-error')
    } else {
      inputStyle = inputStyle.concat(' ', 'input-border b--gray-05 ')
    }

    if (this.props.customClassName) {
      inputStyle = inputStyle.concat(' ', this.props.inputClassName)
    }
    if (this.props.customClassName) {
      containerStyle = containerStyle.concat(' ', this.props.containerClassName)
    }
    if (this.props.labelClassName) {
      labelStyle = labelStyle.concat(' ', this.props.labelClassName)
    }
    if (this.props.errorClassName) {
      errorStyle = errorStyle.concat(' ', this.props.errorClassName)
    }

    return {
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
    }
  }

  handleInputBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  handleInputChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event, event.target.value)
    }
  }

  handleInputFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  render() {

    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: this.props.requiredColor
    }

    const customSize = {
      width: this.props.width
    }

    const inputProps = {
      disabled: this.props.disabled,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      value: this.props.value
    }

    const style = this.getStyle()
    return (
      <div style={customSize} className={style.containerStyle}>
        <div className="flex flex-row pv1">
          <span style={bulletStyle} />
          <span className={style.labelStyle}>{this.props.label}</span>
        </div>
        <input {...inputProps} type={this.props.type} className={style.inputStyle} placeholder={this.props.placeholder} />
        <span className={style.errorStyle}>{this.props.errorText}</span>
      </div>
    )
  }
}

TextInput.propTypes = {
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
}

TextInput.defaultProps = {
  label: 'Label',
  placeholder: 'Placeholder',
  requiredColor: 'White',
  type: 'text'
}

export default TextInput