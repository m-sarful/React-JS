import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
 

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    const passWithParams = () =>{
        handleVisitedCountry(country)
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color : visited ? 'purple' : 'green'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <h5>Area : {area}</h5>
            <p>Code : {cca3}</p>
            <div className='btn'>
            <button onClick={passWithParams}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            </div>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
        </div>
    )
}

export default Country;