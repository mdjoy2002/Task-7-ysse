import { useState } from 'react'

// TASK 7: Reusable sample notice card with an expandable Read More interaction.
function NoticeCard({ notice }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="portal-card notice-card">
      <div className="portal-card__meta">
        <span className="portal-tag">{notice.category}</span>
        <time dateTime={notice.date}>
          {new Date(`${notice.date}T12:00:00`).toLocaleDateString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
      </div>
      <h2>{notice.title}</h2>
      <p>{expanded ? notice.description : `${notice.description.slice(0, 120)}${notice.description.length > 120 ? '…' : ''}`}</p>
      <button
        aria-expanded={expanded}
        className="text-button"
        onClick={() => setExpanded((isExpanded) => !isExpanded)}
        type="button"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </article>
  )
}

export default NoticeCard
