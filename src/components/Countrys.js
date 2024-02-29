import React from 'react'
import Country from './Country'
import {v4 as uuidv4} from "uuid"
const Countrys = (props) => {
  return (
   <section className='cards'>
    {props.countries.map((country)=>{
      const countryNew = {country, id : uuidv4()}
      return <Country onRemoveCountry={props.onRemoveCountry} {...countryNew } key={countryNew.ids}/>
    })}
   </section>
  )
}

export default Countrys
