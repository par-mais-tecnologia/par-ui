import React, { Component, PropTypes } from 'react'

class Button extends Component {

  getButtonStyle(pallete) {
    const {
      disabled,
      primary,
      secondary,
      customClassName
    } = this.props;

    const defaultStyle = 'word-wrap h2 ph3 roboto-regular dif p-f12 justify-around items-center overflow-hidden transition-02'
    let style = `pallete-${pallete} `

    if (disabled) {
      style += 'button-disabled-background gray-04 cursor-disabled'
    } else if (primary) {
      style += 'button-primary-background white b--cottoncandy-02 bb pointer'
    } else if (secondary) {
      style += 'button-secondary-background button-secondary-color button-secondary-border pointer'
    }

    if (customClassName) {
      style = style.concat(' ', customClassName)
    }

    return style.concat(' ', defaultStyle)
  }

  render() {
    const style = this.getButtonStyle(this.props.pallete)
    const customStyle = 
      this.props.customStyle ? this.props.customStyle : {
        height: this.props.height,
        width: this.props.width,
      }


    return (
      <div style={customStyle} className={style} onClick={() => !this.props.disabled && this.props.onClick()}>
        <span className="tc">{this.props.label}</span>
      </div>
    )
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,
  customClassName: PropTypes.string,
  customStyle: PropTypes.object,
  pallete: PropTypes.string
}

Button.defaultProps = {
  pallete: 'cottoncandy',
  label: 'Primary',
  onClick,
  customStyle: null
}

function onClick() {
  console.log('No onClick function defined.')
}

export default Button

