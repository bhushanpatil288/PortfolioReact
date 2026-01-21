import { NavLink } from "react-router-dom"
import "../../assets/css/header/navbar.css"
import { navLinks } from "../../constants/constants"
import logo from "/images/logo-white.png"

const Navbar = () => {
  return (
    <nav className="navbar px-5 py-5 flex align-center justify-between">
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
            return <li key={idx} className="flex justify-center items-center">
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
      </ul>
    </nav>
  )
}

export default Navbar
