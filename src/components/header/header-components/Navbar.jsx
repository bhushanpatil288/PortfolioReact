// react
import { useState } from "react"

// libraries
import { NavLink } from "react-router-dom"
import { RiMenuLine } from "@remixicon/react"

// custom
import logo from "/images/logo-white.png"
import MobileMenu from "./mobileMenu"
import "../header-css/navbar.css"
import { navLinks } from "../../../constants/constants"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(){
    setIsOpen((prev)=>!prev)
  }

  return (
    <nav className="navbar px-5 py-5 flex align-center justify-between relative top-deco bot-deco">
      {/* logo */}
      <a href="#">
      <div className="flex justify-center items-center gap-3">
        <img src={logo} width="40px" />
        <p className="glitch">Bhushan's <br /> Portfolio</p>
      </div>
      </a>

      {/* nav items */}
      <ul className="flex gap-3">
        {navLinks.map((link, idx)=>{
            return <li key={idx} className="flex justify-center items-center hidden md:flex">
                        <NavLink
                          to={link.route}
                          className={({isActive})=>
                            `${isActive ? 'active' : ''} nav-links`
                          }
                          title={link.title}
                        >
                          {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                        </NavLink>
                    </li>
        })}
        <li onClick={()=>toggleMenu()} className="flex justify-center items-center cursor-pointer md:hidden">
          <RiMenuLine />
        </li>
      </ul>

       
     <MobileMenu navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}

export default Navbar
