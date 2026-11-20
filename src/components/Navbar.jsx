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
    <header className="sticky top-0 z-30 border-b border-emerald-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3" to="/" onClick={closeMenu} aria-label="YSSE home">
          <span className="grid h-11 w-11 place-items-center rounded-xl rounded-br-sm bg-emerald-700 text-sm font-black text-white">YS</span>
          <span className="leading-tight">
            <strong className="block text-lg tracking-widest text-emerald-950">YSSE</strong>
            <small className="text-xs text-slate-500">Youth-led change</small>
          </span>
        </NavLink>
        <button
          aria-controls="portal-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-emerald-900 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav
          aria-label="Main navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[76px] flex-col border-b border-slate-200 bg-white px-4 py-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:p-0 md:shadow-none`}
          id="portal-navigation"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              className={({ isActive }) => `block py-2 text-sm font-semibold transition hover:text-emerald-700 ${isActive ? 'border-b-2 border-emerald-700 text-emerald-700' : 'text-slate-600'}`}
              end={end}
              key={to}
              onClick={closeMenu}
              to={to}
            >
              {label}
            </NavLink>
          ))}
          <NavLink className="mt-2 block rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 md:mt-0" onClick={closeMenu} to="/courses">
            Learning catalog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
