import React, { Component, PropTypes } from 'react'


class Checkbox extends Component {

  render(){
    const { name, value, errorText, onChange, disabled,
      item, desc, height,   ...rest } = this.props


    const optional = {}

    optional.checked = (value)

    if(typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, !value)
    }

    const checkClassName = "check " + 
      (errorText ? 'error ' : '') +
      (disabled ? 'disabled ' : '')
    const errorStyle = 'roboto-regular h1 p-f14 kitkat-01 p-ti-075'

    const labelClassName = "roboto-regular p-f18 " + 
      (disabled ? 'gray-04' : 'gray-02')

    return (
      <div>
        <div style={{height:height}} className="flex items-center par-ui-checkbox">
          <input
            type="checkbox"
            value={value}
            id={this.props.id}
            {...optional}/>
          <label className={labelClassName} htmlFor={this.props.id}>{desc}</label>
          <div className={checkClassName}></div>
        </div>
        <span className={errorStyle}>{this.props.errorText}</span>
      </div>
    )
  }
}


Checkbox.propTypes = {
  height: PropTypes.number,
}

Checkbox.defaultProps = {
  height:48,
}

export default Checkbox 

