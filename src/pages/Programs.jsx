import PageHeader from '../components/PageHeader'
import ProgramCard from '../components/ProgramCard'
import { programs } from '../data/programs'

// TASK 7: Sample program catalog rendered from data with a conditional empty state.
function Programs() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Learn and grow"
        title="Programs for possibility."
        description="Explore sample pathways designed to help young people build skills and connect."
      />
      {programs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => <ProgramCard key={program.id} program={program} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
          <h2>No programs to show yet</h2>
          <p>Check back later for program information.</p>
        </div>
      )}
    </div>
  )
}

export default Programs
