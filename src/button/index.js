import React, { Component } from 'react'


class Button extends Component {

  getButtonStyle() {
    const defaultStyle = 'word-wrap h2 ph3 roboto-regular dif p-f12 justify-around items-center overflow-hidden'
    let style = ''

    if (this.props.disabled) {
      style = 'button-disabled-background gray-04 cursor-disabled'
    } else if (this.props.primary) {
      style = 'button-primary-background white b--cottoncandy-02 bb'
    } else if (this.props.secondary) {
      style = 'button-secondary-background button-secondary-color button-secondary-border'
    }

    if (this.props.customClassName) {
      style = style.concat(' ', this.props.customClassName)
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
      <div style={customStyle} className={style} onClick={this.props.onClick}>
        <span className="tc">{this.props.label}</span>
      </div>
    )
  }
}

Button.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  customClassName: React.PropTypes.string,
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

