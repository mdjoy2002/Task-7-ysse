import { Link } from 'react-router-dom'

// TASK 7: Shared footer keeps internal navigation available across portal pages.
const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="portal-footer">
      <div className="portal-footer__inner">
        <div>
          <Link className="portal-footer__brand" to="/">YSSE</Link>
          <p>Empowering young people to shape a more inclusive future.</p>
        </div>
        <nav aria-label="Footer navigation" className="portal-footer__links">
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
