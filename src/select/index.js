import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

class ParSelect extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  getStyle() {
    let inputStyle = 'roboto-regular gray-02 h25 p-f18 input-text-indent-12 placeholder'
    let containerStyle = 'dif flex-column w-100'
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

    if (this.props.inputClassName) {
      inputStyle = inputStyle.concat(' ', this.props.inputClassName)
    }
    if (this.props.containerClassName) {
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


  handleChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }


  render() {
    const {children} = this.props;

    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: this.props.requiredColor || ''
    }

    const customSize = {
      width: this.props.width
    }

    const inputProps = {
      disabled: this.props.disabled,
      value: this.props.value
    }

    const style = this.getStyle()

    return (
      <div style={customSize} className={style.containerStyle}>
        <div className="flex flex-row pv1">
          <span style={bulletStyle} />
          <span className={style.labelStyle}>{this.props.label}</span>
        </div>
        <div className="flex flex-column">
          <Select
            clearable={false}
            placeholder={this.props.placeholder}
            arrowRenderer={arrowRenderer}
            options={this.props.options}
            noResultsText={this.props.noResultsText}
            onChange={this.handleChange}
            disabled={this.props.disabled}
          />
          <span className={style.errorStyle}>{this.props.errorText}</span>
        </div>
      </div>
    )
  }
}

const arrowRenderer = () =>
  <div className="Select-down-arrow"> </div>

ParSelect.propTypes = {
  customClassName: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  requiredColor: PropTypes.string,
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
}

ParSelect.defaultProps = {
  label: 'Label',
  placeholder: 'Escolha uma opção',
  noResultsText: 'Nenhum resultado encontrado'
}

export default ParSelect 