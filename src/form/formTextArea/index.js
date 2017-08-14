import React from 'react'
import TextArea from '../../textArea'

const formTextArea = ({ input: { onChange, value }, meta: { error } , ...restInput }) => {
  return <TextArea value={value} errorText={error} onChange={onChange} {...restInput} />
}

export default formTextArea

