import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/notices', label: 'Notices' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Contact' },
]

// TASK 7: Responsive shared navigation with active route styling and an accessible mobile toggle.
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="portal-header">
      <div className="portal-header__inner">
        <NavLink className="portal-brand" to="/" onClick={closeMenu} aria-label="YSSE home">
          <span className="portal-brand__mark">YS</span>
          <span className="portal-brand__name">
            <strong>YSSE</strong>
            <small>Youth-led change</small>
          </span>
        </NavLink>
        <button
          aria-controls="portal-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="portal-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          aria-label="Main navigation"
          className={`portal-nav${menuOpen ? ' portal-nav--open' : ''}`}
          id="portal-navigation"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              className={({ isActive }) => `portal-nav__link${isActive ? ' is-active' : ''}`}
              end={end}
              key={to}
              onClick={closeMenu}
              to={to}
            >
              {label}
            </NavLink>
          ))}
          <NavLink className="portal-nav__course-link" onClick={closeMenu} to="/courses">
            Learning catalog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
