import { useState } from 'react'

// TASK 7: Reusable sample notice card with an expandable Read More interaction.
function NoticeCard({ notice }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3 text-xs">
        <span className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-700">{notice.category}</span>
        <time dateTime={notice.date}>
          {new Date(`${notice.date}T12:00:00`).toLocaleDateString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
      </div>
      <h2 className="text-lg font-bold text-slate-900">{notice.title}</h2>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{expanded ? notice.description : `${notice.description.slice(0, 120)}${notice.description.length > 120 ? '…' : ''}`}</p>
      <button
        aria-expanded={expanded}
        className="mt-4 font-bold text-emerald-700 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        onClick={() => setExpanded((isExpanded) => !isExpanded)}
        type="button"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </article>
  )
}

export default NoticeCard
