// TASK 7: Shared page heading used by the portal's inner pages.
function PageHeader({ eyebrow = 'YSSE Main Portal', title, description }) {
  return (
    <header className="page-heading">
      <p className="portal-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-heading__description">{description}</p>}
    </header>
  )
}

export default PageHeader
