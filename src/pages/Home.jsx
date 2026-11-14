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
      <section className="portal-hero">
        <div className="portal-hero__content">
          <p className="portal-eyebrow">Young people. Shared possibilities.</p>
          <h1>Ideas grow stronger when young people lead.</h1>
          <p>
            Explore a sample YSSE portal for youth learning, community action, and opportunities to
            connect. Program and notice listings on this demo are illustrative.
          </p>
          <div className="portal-hero__actions">
            <Button to="/programs">Explore programs</Button>
            <Button to="/about" variant="text">Discover YSSE</Button>
          </div>
        </div>
        <div className="portal-hero__art" aria-label="Abstract green leaf illustration" role="img">
          <span className="hero-art__circle hero-art__circle--one" />
          <span className="hero-art__circle hero-art__circle--two" />
          <span className="hero-art__leaf">Y</span>
          <span className="hero-art__caption">Learn · Connect · Grow</span>
        </div>
      </section>

      <section className="portal-section intro-preview">
        <div>
          <p className="portal-eyebrow">A space for youth-led possibility</p>
          <h2>Small steps can help shape a brighter future.</h2>
        </div>
        <div>
          <p>
            This main portal brings together an introduction to YSSE, sample program information,
            and a place to get in touch. Use it as a clear starting point to learn and explore.
          </p>
          <Link className="inline-link" to="/about">Learn more about YSSE <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="portal-section">
        <div className="section-heading">
          <div>
            <p className="portal-eyebrow">Explore opportunities</p>
            <h2>Featured programs</h2>
            <p>Illustrative sample program information for this assignment.</p>
          </div>
          <Button to="/programs" variant="outline">All programs</Button>
        </div>
        <div className="portal-grid portal-grid--three">
          {programs.slice(0, 3).map((program) => <ProgramCard key={program.id} program={program} />)}
        </div>
      </section>

      <section className="portal-section">
        <div className="section-heading">
          <div>
            <p className="portal-eyebrow">From the noticeboard</p>
            <h2>Latest notices</h2>
            <p>Sample content only—not official YSSE announcements.</p>
          </div>
          <Button to="/notices" variant="outline">View all notices</Button>
        </div>
        <div className="portal-grid portal-grid--three">
          {notices.slice(0, 3).map((notice) => <NoticeCard key={notice.id} notice={notice} />)}
        </div>
      </section>

      <section className="portal-cta">
        <div>
          <p className="portal-eyebrow">Take the next step</p>
          <h2>Have an idea or want to learn more?</h2>
          <p>Reach out with a question or explore the learning catalog.</p>
        </div>
        <div className="portal-cta__actions">
          <Button to="/contact">Get in touch</Button>
          <Button to="/courses" variant="light">Learning catalog</Button>
        </div>
      </section>
    </>
  )
}

export default Home
