import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area} = country;

    return (
        <div className='country'>
            <h3>Name : {name?.common}</h3>
            <h4>Population : {population}</h4>
            <h5>Area : {area}</h5>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;