import React from 'react'
import CNPJInput from '../../cnpjInput'

const formCNPJInput = ({ input: { onChange, value }, meta: { error }, onChangeAction, ...restInput }) => {
  return <CNPJInput value={value} errorText={error} onChange={(e) => {
    onChange(e)
    onChangeAction(e, e.target.value)
  }} {...restInput} />
}

export default formCNPJInput 


