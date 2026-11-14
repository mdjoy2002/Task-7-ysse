import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import { programs } from '../data/programs'

// TASK 7: Resolve dynamic program IDs and render details or an invalid-ID message.
function ProgramDetails() {
  const { id } = useParams()
  const program = programs.find((item) => item.id === id)

  if (!program) {
    return (
      <section className="portal-empty-state program-error">
        <p className="portal-eyebrow">Program not found</p>
        <h1>We couldn’t find that program.</h1>
        <p>The program ID may be invalid, or the sample program may no longer be listed.</p>
        <Button to="/programs">Back to programs</Button>
      </section>
    )
  }

  return (
    <div className="inner-page">
      <PageHeader eyebrow={`${program.category} · Sample program`} title={program.title} description={program.description} />
      <article className="program-detail portal-panel">
        <span className="portal-tag">{program.duration}</span>
        <h2>About this sample program</h2>
        <p>{program.details}</p>
        <dl className="program-detail__facts">
          <div><dt>Category</dt><dd>{program.category}</dd></div>
          <div><dt>Duration</dt><dd>{program.duration}</dd></div>
          <div><dt>Format</dt><dd>{program.format}</dd></div>
        </dl>
        <p className="sample-content-note">Illustrative information only. Confirm all details with YSSE before relying on them.</p>
        <div className="portal-hero__actions">
          <Button to="/programs" variant="outline">Back to programs</Button>
          <Link className="inline-link" to="/contact">Ask a question <span aria-hidden="true">→</span></Link>
        </div>
      </article>
    </div>
  )
}

export default ProgramDetails
