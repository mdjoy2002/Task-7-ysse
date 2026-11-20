import Button from '../components/Button'
import PageHeader from '../components/PageHeader'

// TASK 7: About page uses clearly marked draft language instead of unverified organizational claims.
function About() {
  const focusAreas = [
    ['Learning and skills', 'Sample focus area: creating ways for young people to build practical knowledge.'],
    ['Youth participation', 'Sample focus area: making space for youth perspectives in community conversations.'],
    ['Community connection', 'Sample focus area: bringing people together to exchange ideas and collaborate.'],
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="About the organization"
        title="Young people at the heart of change."
        description="A welcoming introduction to YSSE and the values this portal is designed to represent."
      />
      <section className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-black uppercase tracking-widest text-emerald-700">YSSE Introduction</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950">A platform for learning, participation, and possibility.</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          This draft describes YSSE as a space where young people can explore learning, connect
          with others, and contribute ideas. Please replace or approve this introductory wording
          using verified YSSE information before publication.
        </p>
      </section>
      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <span className="text-sm font-black text-emerald-700">01</span>
          <p className="mt-4 text-xs font-black uppercase tracking-widest text-emerald-700">Mission</p>
          <h2 className="mt-2 text-2xl font-bold">Support young people to learn and take part.</h2>
          <p>Proposed placeholder language only; confirm YSSE’s official mission statement.</p>
        </article>
        <article className="rounded-2xl bg-emerald-900 p-6 text-white sm:p-8">
          <span className="text-sm font-black text-emerald-300">02</span>
          <p className="mt-4 text-xs font-black uppercase tracking-widest text-emerald-300">Vision</p>
          <h2 className="mt-2 text-2xl font-bold">A future shaped with young people.</h2>
          <p>Proposed placeholder language only; confirm YSSE’s official vision statement.</p>
        </article>
      </section>
      <section className="py-12">
        <div className="mb-6">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Our work · sample focus areas</p>
            <h2 className="mt-2 text-3xl font-bold">What we do</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map(([title, description], index) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" key={title}>
              <span className="text-sm font-black text-emerald-700">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
        <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Impact & Achievements</p>
        <h2 className="mt-3 text-3xl font-bold">Verified achievements belong here.</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Achievement details and statistics have not been supplied. Add confirmed outcomes,
          dates, and sources here; no figures or accomplishments are invented in this demo.
        </p>
      </section>
      <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-emerald-800 p-6 text-white sm:p-8 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Get involved</p>
          <h2 className="mt-2 text-3xl font-bold">Start a conversation with us.</h2>
          <p className="mt-2 text-emerald-100">Use the contact page to send a frontend-only inquiry.</p>
        </div>
        <Button to="/contact">Contact YSSE</Button>
      </section>
    </div>
  )
}

export default About
