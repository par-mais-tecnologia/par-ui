import React from 'react'
import Select from '../../select'

const FormSelectField = ({ input: { value, onChange }, meta: { error } , ...restInput }) => {

  const newValue = (typeof value === 'object' && value !== null) ? value.value : value


  return (
    <Select
      value={newValue}
      onChange={(e) => {
        onChange(e.value)
      }}
      {...restInput} 
      errorText={error}
    />
  )
}

export default FormSelectField 
