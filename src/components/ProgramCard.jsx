import Button from './Button'

// TASK 7: Reusable program card linking to its dynamic detail route.
function ProgramCard({ program }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative grid h-44 place-items-center bg-gradient-to-br from-emerald-100 to-teal-50" aria-hidden="true">
        <span className="text-sm font-bold uppercase tracking-widest text-emerald-800">{program.imageLabel}</span>
        <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-emerald-700 text-xl text-white">✳</span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs">
          <span className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-700">{program.category}</span>
          <span className="text-slate-500">{program.duration}</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900">{program.title}</h2>
        <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{program.description}</p>
        <Button to={`/programs/${program.id}`} variant="outline">
          View details
        </Button>
      </div>
    </article>
  )
}

export default ProgramCard
