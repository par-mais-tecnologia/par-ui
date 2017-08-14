import React from 'react'
import DateSelector from '../../dateSelector'

const FormDateSelector = ({ input: { onChange, value }, meta: { error } , ...restInput }) => {
  return <DateSelector value={value} errorText={error} onChange={onChange} {...restInput} />
}

export default FormDateSelector 


