import React from 'react'
import CheckBox from '../../checkbox'

const FormCheckBox = ({ input: { value, onChange }, meta: { error } , ...restInput }) => {
  return (
    <CheckBox value={value} onChange={
      restInput.disabled ? () => {} : onChange
    } {...restInput} />
  )
}

export default FormCheckBox 
