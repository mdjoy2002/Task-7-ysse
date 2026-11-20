import { Link } from 'react-router-dom'
import Button from '../components/Button'
import NoticeCard from '../components/NoticeCard'
import ProgramCard from '../components/ProgramCard'
import { notices } from '../data/notices'
import { programs } from '../data/programs'

// TASK 7: Portal landing page with introduction, featured samples, notices, and functional CTAs.
function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Young people. Shared possibilities.</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Ideas grow stronger when young people lead.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore a sample YSSE portal for youth learning, community action, and opportunities to
            connect. Program and notice listings on this demo are illustrative.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/programs">Explore programs</Button>
            <Button to="/about" variant="text">Discover YSSE</Button>
          </div>
        </div>
        <div className="grid min-h-80 place-items-center rounded-[3rem_1.5rem_3rem_1.5rem] bg-gradient-to-br from-emerald-100 to-teal-200 shadow-xl" aria-label="YSSE community illustration" role="img">
          <div className="text-center">
            <span className="mx-auto grid h-32 w-32 place-items-center rounded-full border-8 border-white/70 bg-emerald-700 text-5xl font-black text-white shadow-lg">Y</span>
            <p className="mt-5 font-bold tracking-wide text-emerald-900">Learn · Connect · Grow</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">A space for youth-led possibility</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Small steps can help shape a brighter future.</h2>
        </div>
        <div>
          <p className="leading-7 text-slate-600">
            This main portal brings together an introduction to YSSE, sample program information,
            and a place to get in touch. Use it as a clear starting point to learn and explore.
          </p>
          <Link className="mt-4 inline-block font-bold text-emerald-700 hover:text-emerald-900" to="/about">Learn more about YSSE <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Explore opportunities</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Featured programs</h2>
            <p className="mt-2 text-slate-600">Illustrative sample program information for this assignment.</p>
          </div>
          <Button to="/programs" variant="outline">All programs</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 3).map((program) => <ProgramCard key={program.id} program={program} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">From the noticeboard</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Latest notices</h2>
            <p className="mt-2 text-slate-600">Sample content only—not official YSSE announcements.</p>
          </div>
          <Button to="/notices" variant="outline">View all notices</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notices.slice(0, 3).map((notice) => <NoticeCard key={notice.id} notice={notice} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Mark your calendar</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">Upcoming events</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['28 Nov', 'Youth Leadership Meet', 'Community hall · 10:00 AM'],
            ['06 Dec', 'Digital Skills Workshop', 'Learning center · 2:00 PM'],
            ['14 Dec', 'Community Dialogue', 'YSSE venue · 11:00 AM'],
          ].map(([date, title, venue]) => (
            <article className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={title}>
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-emerald-100 text-center text-sm font-black text-emerald-800">{date}</div>
              <div>
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{venue}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl rounded-3xl bg-emerald-800 px-5 py-8 text-white sm:px-8 md:flex md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Take the next step</p>
          <h2 className="mt-2 text-3xl font-bold">Have an idea or want to learn more?</h2>
          <p className="mt-2 text-emerald-100">Reach out with a question or explore the learning catalog.</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
          <Button to="/contact">Get in touch</Button>
          <Button to="/courses" variant="light">Learning catalog</Button>
        </div>
      </section>
    </>
  )
}

export default Home
