import Button from './Button'

// TASK 7: Reusable program card linking to its dynamic detail route.
function ProgramCard({ program }) {
  return (
    <article className="portal-card program-card">
      <div className="program-card__visual" aria-hidden="true">
        <span>{program.imageLabel}</span>
        <span className="program-card__symbol">✳</span>
      </div>
      <div className="portal-card__meta">
        <span className="portal-tag">{program.category}</span>
        <span>{program.duration}</span>
      </div>
      <h2>{program.title}</h2>
      <p>{program.description}</p>
      <Button to={`/programs/${program.id}`} variant="outline">
        View details
      </Button>
    </article>
  )
}

export default ProgramCard
