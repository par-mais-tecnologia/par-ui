import React from 'react'
import TextField from '../../textField'

const formTextField= ({ input: { onChange, value }, meta: { error } , ...restInput }) => {
  return <TextField value={value} errorText={error} onChange={onChange} {...restInput} />
}

export default formTextField 
