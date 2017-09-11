import React from 'react'
import SearchBar from '.../searchBar'

const formSearchBar = ({ input: { onChange }, meta: { error } , ...restInput }) => {
  return <SearchBar errorText={error} onChange={onChange} {...restInput} />
}

export default formSearchBar
