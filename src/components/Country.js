import React from 'react'

const Country = (props) => {
    const {country} = props;
    const {name,area,flags,capital,population} = country;
    

    const removeButton =(name)=>{
        props.onRemoveCountry(name);
    }
  return (
    <article >
        <div className='design'>
        <img src={flags.png} alt={name.common} />
        <h2>Name : {name.common}</h2>
        <h2>Capital :{capital}</h2>
        <h4>Area : {area}</h4>
        <h4>Population : {population}</h4>
        
        </div>
        <button className='button' onClick={()=>{
            removeButton(name.common)
        }}>RemoveCountry</button>
        
    </article>
  )
}

export default Country
