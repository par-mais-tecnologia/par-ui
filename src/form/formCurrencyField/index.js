import React from 'react'
import CurrencyInput from '../../currencyInput'

const formCurrencyField= ({ input: { onChange, value }, meta: { error } , ...restInput }) => {
  return <CurrencyInput value={value} errorText={error} onChange={onChange} {...restInput} />
}

export default formCurrencyField

