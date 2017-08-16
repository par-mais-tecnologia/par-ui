import React, { Component, PropTypes } from 'react'

class ParForm extends Component {
  render(){

    const { pallete, children, className, ...rest } = this.props

    const formPallete = `form-${pallete} ${className}`

    return (
      <form className={formPallete} {...rest}> 
        {children}
      </form>

    )
  }
}

ParForm.propTypes = {
  pallete: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

ParForm.defaultProps = {
  pallete: 'cottoncandy',
  className: '',
}

export default ParForm 
