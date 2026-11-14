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
    <div className="inner-page">
      <PageHeader
        eyebrow="About the organization"
        title="Young people at the heart of change."
        description="A welcoming introduction to YSSE and the values this portal is designed to represent."
      />
      <section className="about-intro portal-panel">
        <p className="portal-eyebrow">Introduction · draft placeholder</p>
        <h2>A platform for learning, participation, and possibility.</h2>
        <p>
          This draft describes YSSE as a space where young people can explore learning, connect
          with others, and contribute ideas. Please replace or approve this introductory wording
          using verified YSSE information before publication.
        </p>
      </section>
      <section className="mission-grid">
        <article className="portal-panel">
          <span className="about-icon">01</span>
          <p className="portal-eyebrow">Draft mission wording</p>
          <h2>Support young people to learn and take part.</h2>
          <p>Proposed placeholder language only; confirm YSSE’s official mission statement.</p>
        </article>
        <article className="portal-panel portal-panel--green">
          <span className="about-icon">02</span>
          <p className="portal-eyebrow">Draft vision wording</p>
          <h2>A future shaped with young people.</h2>
          <p>Proposed placeholder language only; confirm YSSE’s official vision statement.</p>
        </article>
      </section>
      <section className="portal-section">
        <div className="section-heading">
          <div>
            <p className="portal-eyebrow">Our work · sample focus areas</p>
            <h2>What we do</h2>
          </div>
        </div>
        <div className="portal-grid portal-grid--three">
          {focusAreas.map(([title, description], index) => (
            <article className="portal-card focus-card" key={title}>
              <span className="focus-card__number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="impact-panel">
        <p className="portal-eyebrow">Our impact</p>
        <h2>Verified achievements belong here.</h2>
        <p>
          Achievement details and statistics have not been supplied. Add confirmed outcomes,
          dates, and sources here; no figures or accomplishments are invented in this demo.
        </p>
      </section>
      <section className="portal-cta">
        <div>
          <p className="portal-eyebrow">Get involved</p>
          <h2>Start a conversation with us.</h2>
          <p>Use the contact page to send a frontend-only inquiry.</p>
        </div>
        <Button to="/contact">Contact YSSE</Button>
      </section>
    </div>
  )
}

export default About
