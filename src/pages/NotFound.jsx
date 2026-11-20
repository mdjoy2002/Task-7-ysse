import Button from '../components/Button'

// TASK 7: Custom 404 page for routes that do not match the YSSE portal.
function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="text-xs font-black uppercase tracking-widest text-emerald-700">404 · Page not found</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">This page wandered off.</h1>
      <p className="mt-4 text-slate-600">The address may be outdated or the page may have moved.</p>
      <div className="mt-6"><Button to="/">Return to home</Button></div>
    </section>
  )
}

export default NotFound
