import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchText,setSearchText] = useState("");


    const handleChange =(e)=>{
        setSearchText(e.target.value);
       
    }
    useEffect(() => {
        props.search(searchText);
    }, [searchText]);

  return (
    <div className='input'>
      <input className='inp' type="text" 
      value={searchText}
      placeholder='Search Country'
      onChange={handleChange}

      />
    </div>
  )
}

export default Search
