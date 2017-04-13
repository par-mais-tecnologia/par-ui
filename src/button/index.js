import React, { Component, PropTypes } from 'react'

class Button extends Component {

  getButtonStyle() {
    const {
      disabled,
      primary,
      secondary,
      customClassName
    } = this.props;

    const defaultStyle = 'word-wrap h2 ph3 roboto-regular dif p-f12 justify-around items-center overflow-hidden transition-02'
    let style = ''

    if (disabled) {
      style = 'button-disabled-background gray-04 cursor-disabled'
    } else if (primary) {
      style = 'button-primary-background white b--cottoncandy-02 bb'
    } else if (secondary) {
      style = 'button-secondary-background button-secondary-color button-secondary-border'
    }

    if (customClassName) {
      style = style.concat(' ', customClassName)
    }

    return style.concat(' ', defaultStyle)
  }

  render() {
    const style = this.getButtonStyle()
    const customStyle = {
      height: this.props.height,
      width: this.props.width
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
}

Button.defaultProps = {
  label: 'Primary',
  onClick,
  customStyle: ''
}

function onClick() {
  console.log('No onClick function defined.')
}

export default Button

