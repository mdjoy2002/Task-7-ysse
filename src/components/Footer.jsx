import { Link } from 'react-router-dom'

// TASK 7: Shared footer keeps internal navigation available across portal pages.
const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="mt-16 bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Link className="text-xl font-black tracking-widest" to="/">YSSE</Link>
          <p className="mt-3 max-w-md text-sm text-emerald-100/75">Empowering young people to shape a more inclusive future.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5 text-sm font-semibold">
          <Link to="/about">About</Link>
          <Link to="/notices">Notices</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <small>© {currentYear} YSSE · Sample portal content</small>
      </div>
    </footer>
  )
}

export default Footer
