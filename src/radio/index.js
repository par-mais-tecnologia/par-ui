import React, { Component } from 'react'

class Radio extends Component {
  constructor(props){
    super(props)
  }

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
      <div className="flex items-center par-ui-radio">
        <input
          style={{position: 'absolute', visibility: 'hidden'}}
          {...rest}
          type="radio"
          id={this.props.id}
          {...optional} />
        <label className="roboto-regular p-f18 gray-02" htmlFor={this.props.id}>{desc}</label>
        <div className={checkClassName}></div>
      </div>
    )
  }
}

Radio.contextTypes = {
  radioGroup: React.PropTypes.object
}

export default Radio
