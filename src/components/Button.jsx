import { Link } from 'react-router-dom'

// TASK 7: Reusable button/link component for consistent portal calls to action.
function Button({ children, to, type = 'button', variant = 'primary', ...props }) {
  const className = `portal-button portal-button--${variant}`

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
