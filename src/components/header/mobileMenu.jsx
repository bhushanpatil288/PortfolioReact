import { useEffect } from "react"
import { NavLink } from "react-router-dom"

function MobileMenu({navLinks, isOpen, setIsOpen}) {

  return (
    <>
       <ul className={`flex gap-3 flex-col absolute bg-black px-3 py-3 menu ${isOpen ? '' : 'hidden'} md:hidden`}>
        {navLinks.map((link, idx)=>{
            return <li key={idx} className="flex justify-center items-center">
                        <NavLink
                          to={link.route}
                          className={({isActive})=>
                            `${isActive ? 'active' : ''} nav-links w-50 flex items-center justify-center select-none`
                          }
                          title={link.title}
                        >
                          {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                        </NavLink>
                    </li>
        })}
      </ul>
    </>
  )
}

export default MobileMenu
