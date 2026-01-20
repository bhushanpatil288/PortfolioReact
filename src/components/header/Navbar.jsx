import "../../assets/css/header/navbar.css"
import { navLinks } from "../../constants/constants"
import kryptonite from "../../assets/images/black-kryptonite.png";

const Navbar = () => {
  return (
    <nav className="navbar px-5 py-5 flex align-center justify-between">
      {/* logo */}
      <div className="flex justify-center items-center">
        <img src={kryptonite} width="50px" />
        <p className="glitch">Bhushan's Portfolio</p>
      </div>

      {/* nav items */}
      <ul className="flex gap-3">
        {navLinks.map((link, idx)=>{
            return <li key={idx} className="flex justify-center items-center">
                        <a className="nav-links" href={link.url} target={link.target} title={link.title}>{link.name.charAt(0).toUpperCase() + link.name.slice(1)}</a>
                    </li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar
