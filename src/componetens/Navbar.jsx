
import { Link } from 'react-router-dom'
import logo from "../../public/assets/logo.png"
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
                <img className='w-6/12' src={logo}/>
            </div>
            <nav className=' flex items-center'>
                <ul className='flex justify-between gap-8'>
                    {
                        navMenuLinks.map((item,index)=>(   
                            <li  key={index} ><Link to={item.path}>{item.menuName}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Navbar