import Button from '../components/Button'

// TASK 7: Custom 404 page for routes that do not match the YSSE portal.
function NotFound() {
  return (
    <section className="portal-empty-state not-found-page">
      <p className="portal-eyebrow">404 · Page not found</p>
      <h1>This page wandered off.</h1>
      <p>The address may be outdated or the page may have moved.</p>
      <Button to="/">Return to home</Button>
    </section>
  )
}

export default NotFound
