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
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="text-xs font-black uppercase tracking-widest text-red-600">Program not found</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">We couldn’t find that program.</h1>
        <p className="mt-4 text-slate-600">The program ID may be invalid, or the sample program may no longer be listed.</p>
        <div className="mt-6"><Button to="/programs">Back to programs</Button></div>
      </section>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PageHeader eyebrow={`${program.category} · Sample program`} title={program.title} description={program.description} />
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{program.duration}</span>
        <h2 className="mt-5 text-2xl font-bold">About this sample program</h2>
        <p className="mt-3 leading-7 text-slate-600">{program.details}</p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4"><dt className="text-xs font-bold uppercase text-slate-500">Category</dt><dd className="mt-1 font-bold text-slate-900">{program.category}</dd></div>
          <div className="rounded-xl bg-slate-50 p-4"><dt className="text-xs font-bold uppercase text-slate-500">Duration</dt><dd className="mt-1 font-bold text-slate-900">{program.duration}</dd></div>
          <div className="rounded-xl bg-slate-50 p-4"><dt className="text-xs font-bold uppercase text-slate-500">Format</dt><dd className="mt-1 font-bold text-slate-900">{program.format}</dd></div>
        </dl>
        <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">Illustrative information only. Confirm all details with YSSE before relying on them.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button to="/programs" variant="outline">Back to programs</Button>
          <Link className="font-bold text-emerald-700 hover:text-emerald-900" to="/contact">Ask a question <span aria-hidden="true">→</span></Link>
        </div>
      </article>
    </div>
  )
}

export default ProgramDetails
