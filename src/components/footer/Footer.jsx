import { NavLink } from "react-router-dom"
import { RiGithubFill } from "@remixicon/react"
import logo from "/images/logo-white.png"
import { navLinks } from "../../constants/constants"
import "./footer.css"

const GITHUB_URL = "https://github.com/bhushanpatil288"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer footer-top-deco mt-20 pt-10 pb-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" width="36" height="36" className="shrink-0" />
            <span className="font-semibold text-white tracking-wide">Bhushan's Portfolio</span>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) => `footer-link ${isActive ? "active" : ""}`}
                  title={link.title}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub profile"
              aria-label="GitHub"
            >
              <RiGithubFill size={22} />
            </a>
          </div>
        </div>

        <div className="footer-divider my-6" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-400">
          <p>© {year} Bhushan Patil. All rights reserved.</p>
          <p className="text-gray-500">Built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
