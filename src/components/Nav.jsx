// import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.jpg"
const Nav = () => {
    const links =[
        {name:"Home", link:"/"},
        {name:"About", link:"/about"},
        {name:"Blog", link:"/blog"},
        {name:"Contact", link:"/contact"}
    ]
  return (
    <div className='container-fluid'>
        <nav>
            <div className='row'>
                <div className='column'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
                <div className='column'>
                    <ul className='d-flex j-between'>
                        {links.map(({name, link})=>{
                            return(
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav