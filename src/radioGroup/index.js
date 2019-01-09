import React, { Component, PropTypes } from 'react'


class RadioGroup extends Component {
  constructor(props){
    super(props)
  }

  getChildContext(){
    const {name, value, onChange, disabled, errorText} = this.props
    return {
      radioGroup: {
        name, value, onChange, disabled, errorText
      }
    }
  }


  getStyle(){
    let inputStyle = 'roboto-regular gray-02 h25 p-f18 input-text-indent-12 placeholder'
    let containerStyle = 'dif flex-column'
    let labelStyle = 'pl2 roboto-regular p-f14 gray-02'
    let errorStyle = 'roboto-regular h1 p-f14 kitkat-01'

    if (this.props.disabled) {
      inputStyle = inputStyle.concat(' ', 'bg-gray-07 input-border-disabled cursor-disabled').replace('gray-02', 'gray-04')
    } else {
      inputStyle = inputStyle.concat(' ', 'input-border b--gray-05 ')
    }

    if (this.props.errorText) {
      labelStyle = labelStyle.replace('gray-02', 'kitkat-01')
      inputStyle = inputStyle.concat(' ', 'input-border-error')
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

  render(){
    const {Component, name, requiredColor, value, onChange, children, errorText, 
      containerStyle,
      containerClassName,
      hideLabel,
      ...rest} = this.props

    const bulletStyle = {
      margin: '6px 0',
      height: '6px',
      width: '6px',
      backgroundColor: requiredColor || ''
    }

    const style = this.getStyle()

    return (
      <div style={containerStyle} className={containerClassName}>
        {hideLabel ? '' : 
        <div className="flex flex-row pv1">
          <span style={bulletStyle} />
          <span className={style.labelStyle}>{this.props.label}</span>
        </div>}
        
        <Component {...rest}>{children}</Component>
      </div>
    )
  }
}

RadioGroup.propTypes = {
  requiredColor: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  onChange: PropTypes.func,
  errorText: PropTypes.string,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object
}

RadioGroup.defaultProps = {
  Component: 'div',
  errorText: ''
}

RadioGroup.childContextTypes = {
  radioGroup: React.PropTypes.object
}


export default RadioGroup
