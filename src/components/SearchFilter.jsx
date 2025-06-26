
const SearchFilter = ({search,setSearch,filter,setFilter}) => {
    const handleinputchange=(event)=>{
        event.preventDefault();
        setSearch(event.target.value)
    }

    

   
  return (
    <section className='search'>
        <input type="text"  placeholder='Search Here' value={search} onChange={handleinputchange}/>
     




    </section>
  )
}

export default SearchFilter