
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <main className="main">
    <div className='left'>
<h1 className="h1">Explore The World ,One Country At a Time</h1>
<p className="D"> Discover the history , culture and the beauty of the countries</p>
 <NavLink to='/country'><button className="explore-button "> Start Exploring <FaArrowCircleRight /></button> </NavLink>
    </div>


    <div className='right'>
<img src="https://i.gifer.com/TFSQ.gif" alt="" />
    </div>
   </main>
  )
}

export default HomePage