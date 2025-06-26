import Header from '../futer/Header'
import Footer from '../futer/Footer'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
<>
<Header/>
<Outlet/>
<Footer/>
</>
  )
}

export default AppLayout