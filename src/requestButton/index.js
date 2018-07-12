import React, { Component } from 'react'

class RequestButton extends Component {

  getButtonStyle(pallete) {
    const defaultStyle = 'word-wrap h2 relative ph3 roboto-regular dif p-f12 justify-around items-center overflow-hidden'
    let style = `pallete-${pallete} `

    if (this.props.disabled || this.props.waiting) {
      style += 'button-disabled-background gray-04 cursor-disabled disable-element-click'
    } else if (this.props.primary) {
      style += `button-primary-background white b--${pallete}-02 bb pointer`
    } else if (this.props.secondary) {
      style += 'button-secondary-background button-secondary-color button-secondary-border pointer'
    }

    if (this.props.customClassName) {
      style = style.concat(' ', this.props.customClassName)
    }

    return style.concat(' ', defaultStyle)
  }

  render() {
    const style = this.getButtonStyle(this.props.pallete)
    const customStyle = this.props.customStyle ? this.props.customStyle : {
      height: this.props.height,
      width: this.props.width
    }

    return (
      <div style={customStyle} className={style} onClick={this.props.onClick}>
        {this.props.waiting && <img style={{left: 8}} className="absolute" src={require('./loading.svg')} />}
        <span className="tc" style={{paddingLeft: this.props.waiting ? 12 : 0}}>{this.props.label}</span>
      </div>
    )
  }
}

RequestButton.propTypes = {
  pallete: React.PropTypes.string,
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  customClassName: React.PropTypes.string,
  waiting: React.PropTypes.bool,
  loadingIcon: React.PropTypes.string,
  pallete: React.PropTypes.string
}

RequestButton.defaultProps = {
  loadingIcon: './loading.svg',
  pallete: 'cottoncandy',
  label: 'Primary',
  onClick,
  customStyle: '',
  waiting: false
}

function onClick() {
  console.log('No onClick function defined.')
}

export default RequestButton

