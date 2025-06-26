
import { NavLink } from "react-router-dom"
const CountryCard = ({country}) => {
    const {flags,name,population,capital,region}=country
  return (
<li className="country-card">
    <div className="cardsContainer">
        <img src={flags.svg} alt="" />

        <div className="countryinfo"> 
            <p className="CardTitle">    {  name.common.length >10 ?  name.common.slice(0,10) +'...':name.common}</p>
            <p>
              <span>Population:</span>{population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span>{region}
            </p>
            <p>
              <span>Capital:</span>{capital[0]}
            </p>
  
   <NavLink to ={`/country/${name.common}`}> <button className="readmorebtn"> Read More</button></NavLink>
        </div>

    </div>

</li>
  )
}

export default CountryCard