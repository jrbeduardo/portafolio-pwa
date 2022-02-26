import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
export const Layout = () => {
  return (
    <div className='content font-raleway'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
