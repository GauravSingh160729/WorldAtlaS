import { useEffect,useTransition,useState } from "react"
import { getCountryData } from "../api/postAPI"
import CountryCard from "../components/CountryCard"
import SearchFilter from "../components/SearchFilter"

const Country = () => {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [isPending, startTransition] = useTransition()
const [countries, setCountries] = useState([])
  useEffect(() => {
 startTransition(async()=>{
       const res= await getCountryData()
       setCountries(res.data)
 })
  }, [])
  
 if (isPending) return <h1>Loading...</h1> ;
const searchCountry = (country) => {
  const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
  const matchesFilter = filter === "All" || filter === "all" || country.region === filter;
  return matchesSearch && matchesFilter;
};

const filterCountries=countries.filter((country)=>searchCountry(country))
 return  (
<>
<section className="country-section">
  <SearchFilter search={search} setSearch={setSearch}  setFilter={setFilter} filter={filter}/>

  <ul className="row">
    {
      filterCountries.map((currCountry,index)=>{
        return <CountryCard country={currCountry} key={index}/>
      })
    }

  </ul>

</section>


</>
  )
}

export default Country