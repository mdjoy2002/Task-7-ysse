import { useMemo, useState } from 'react'
import NoticeCard from '../components/NoticeCard'
import PageHeader from '../components/PageHeader'
import { notices } from '../data/notices'

// TASK 7: Sample notice listing rendered from separate data with an empty state.
function Notices() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(notices.map((notice) => notice.category))]
  const filteredNotices = useMemo(() => notices.filter((notice) => {
    const matchesCategory = category === 'All' || notice.category === category
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || `${notice.title} ${notice.description} ${notice.category}`.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  }), [search, category])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Noticeboard"
        title="Updates and opportunities."
        description="Browse the latest information and ways to get involved."
      />
      <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
        <label className="sr-only" htmlFor="notice-search">Search notices</label>
        <input id="notice-search" className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500" onChange={(event) => setSearch(event.target.value)} placeholder="Search notices..." value={search} />
        <label className="sr-only" htmlFor="notice-category">Filter category</label>
        <select id="notice-category" className="rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500" onChange={(event) => setCategory(event.target.value)} value={category}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      {filteredNotices.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotices.map((notice) => <NoticeCard key={notice.id} notice={notice} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
          <h2>No notices yet</h2>
          <p>There are no notices to display right now. Please check back later.</p>
        </div>
      )}
    </div>
  )
}

export default Notices
