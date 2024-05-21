import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/react.svg"
const Navbar = () => {
    const navMenuLinks = [
        {menuName:"Home", path:"/"},
        {menuName:"About", path:"/about"},
        {menuName:"Projects", path:"/projects"},
        {menuName:"Contact", path:"/contact"},
    ]
  return (
    <section className='sm:container mx-auto py-2 bg-gray-200'>
        <div className='row flex justify-between'>
            <div className='column logo'>
                <img src={logo}/>
            </div>
            <nav className=' flex items-center'>
                <ul className='bg-red-500 flex justify-between'>
                    {
                        navMenuLinks.map(({menuName,path})=>(   
                            <li className='mr-8' key={menuName} ><Link to={path}>{menuName}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Navbar