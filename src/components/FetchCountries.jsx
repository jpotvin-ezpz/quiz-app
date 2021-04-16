import { useEffect, useState } from 'react';

const FetchCountryData = () => {
  const allCountriesURL =
  "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";
  const [countries, setCountries] = useState({error:'', loading: true, data: []});
  
  useEffect(() => {
    fetch(allCountriesURL)
    .then(response => {
      if (response.ok) {
        return response.json()
      } 
      throw response;
    })
    .then(data => {
     setCountries({loading: false, data: [...data]});
    })
    .catch(error => {
      console.error('Error during fetch', error)
      setCountries({error: {error}, loading: false, data:[]})
    })
  },[])

  return countries;
}


export default FetchCountryData; 