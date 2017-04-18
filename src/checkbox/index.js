import React, { Component, PropTypes } from 'react'


class Checkbox extends Component {

  render(){
    const { name, value, errorText, onChange, disabled } = this.context.radioGroup
    const { item, desc, ...rest } = this.props


    const optional = {}


    if (value !== undefined) {
      optional.checked = (item === value)
    }


    if(typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props.item)
    }

    const checkClassName = "check " + (errorText ? 'error' : '')

    return (
      <div className="flex items-center par-ui-checkbox">
        <input
          style={{position: 'absolute', visibility: 'hidden'}}
          {...rest}
          type="checkbox"
          id={this.props.id}
          {...optional} />
        <label className="roboto-regular p-f18 gray-02" htmlFor={this.props.id}>{desc}</label>
        <div className={checkClassName}></div>
      </div>
    )
  }
}

export default Checkbox 

