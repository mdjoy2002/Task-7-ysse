import { Link } from 'react-router-dom'

// TASK 7: Reusable button/link component for consistent portal calls to action.
function Button({ children, to, type = 'button', variant = 'primary', ...props }) {
  const variants = {
    primary: 'border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800',
    outline: 'border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50',
    text: 'border-transparent bg-transparent text-emerald-800 hover:bg-emerald-50',
    light: 'border-white bg-white text-emerald-900 hover:bg-emerald-50',
  }
  const className = `inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-2 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${variants[variant] ?? variants.primary}`

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
