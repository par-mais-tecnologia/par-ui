import React from 'react'

const formTextField= ({pallete, className = '', children, ...rest}) => {

  const formPallete = `form-${pallete} ${className}`

  return <form className={formPallete} {...rest}> 
    {children}
  </form>
}



export default formTextField 
