import React, { useEffect, useState } from 'react';
import Countrys from './components/Countrys';
import Search from './components/Search';



const url = "https://restcountries.com/v3.1/all";


export default function App() {
  const [isloading,setisloading] = useState(true);
  const [error,seterror] = useState(null);
  const [countries,setcountries] = useState([]);
  const [filteredCountry,setfilteredCountry] = useState(countries);

  const fetchData = async (url)=>{
    setisloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setcountries(data);
      setfilteredCountry(data);
      seterror(null);
      setisloading(false);
    } catch (error) {
      setisloading(false);
      seterror(error);
    }
   
  }

  useEffect(()=>{
    fetchData(url)
  },[])

  const handleRemoveCountry =(name)=>{
    const filter = filteredCountry.filter((country) => country.name.common !== name );
    setfilteredCountry(filter);
  }
  const handleSearch =(searchValue)=>{
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setfilteredCountry(newCountries);
  }

  return (
    <>
      <h1 className='header'>Country App</h1>
      <Search search={handleSearch}/>
      {isloading && <h1>Loading ...</h1>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countrys onRemoveCountry={handleRemoveCountry} countries = {filteredCountry}/>}
    </>
  )
}