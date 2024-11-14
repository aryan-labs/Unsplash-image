import React, { useContext, useState } from 'react'
import { StoreContext } from './context'

const SearchForm = () => {

  const {searchItem,setSearchItem}=useContext(StoreContext)
    const [search,setSearch]=useState('dog')
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(search)
        setSearchItem(search)
    }
  return (
    <div className='form-input'>
        <h1>Unsplash Images</h1>

        <form onSubmit={onSubmit}>
            <input onChange={(e)=>{setSearch(e.target.value)}} type='text' placeholder='cat' name='search' className='form-input-search'/>
            <button>Search</button>
        </form>
      
    </div>
  )
}

export default SearchForm
