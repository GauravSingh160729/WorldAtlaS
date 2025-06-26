import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../api/postAPI";


export const CountryDetails = () => {
  const params=  useParams();
   const [isPending, startTransition] = useTransition()
  const [country, setCountry] = useState()
   useEffect(() => {
  startTransition(async () => {
    const res = await getCountryIndData(params.id);
    if (res.status === 200) {
      setCountry(res.data[0]);
    }
  });
}, [params.id]);
    
  if (isPending || !country) return <h1>Loading...</h1>;


 return (
            <>
    <div className="cardsContainerss">
        <div className="imgcont"> <img src={country.flags.svg} alt="" /></div>

        <div className="countryinfos"> 
            <p className="CardTitles">    {  country.name.official}</p>

              <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>

            <p>
              <span>Population:</span>{country.population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span>{country.region}
            </p>
            <p>
              <span>Capital:</span>{country.capital[0]}
            </p>
            <p>
              <span>Sub Region:</span>{country.subregion}
            </p>
          
  
        </div>


    </div>
    <NavLink to='/country'> <button className="back-btn">Go Back</button></NavLink>

        

</>
);

};
