import PageHeader from '../components/PageHeader'
import ProgramCard from '../components/ProgramCard'
import { programs } from '../data/programs'

// TASK 7: Sample program catalog rendered from data with a conditional empty state.
function Programs() {
  return (
    <div className="inner-page">
      <PageHeader
        eyebrow="Learn and grow"
        title="Programs for possibility."
        description="Explore sample pathways designed to help young people build skills and connect."
      />
      <p className="sample-content-note">All program details shown are illustrative samples and are not confirmed YSSE offerings.</p>
      {programs.length > 0 ? (
        <div className="portal-grid portal-grid--three">
          {programs.map((program) => <ProgramCard key={program.id} program={program} />)}
        </div>
      ) : (
        <div className="portal-empty-state">
          <h2>No programs to show yet</h2>
          <p>Check back later for program information.</p>
        </div>
      )}
    </div>
  )
}

export default Programs
