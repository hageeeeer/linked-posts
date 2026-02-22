import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className='flex dark:bg-gray-800 dark:text-white flex-col min-h-screen justify-between dark'>
        <Nav></Nav>
        <div className="container">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
