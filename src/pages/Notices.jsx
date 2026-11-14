import NoticeCard from '../components/NoticeCard'
import PageHeader from '../components/PageHeader'
import { notices } from '../data/notices'

// TASK 7: Sample notice listing rendered from separate data with an empty state.
function Notices() {
  return (
    <div className="inner-page">
      <PageHeader
        eyebrow="Noticeboard"
        title="Updates and opportunities."
        description="Browse the latest information and ways to get involved."
      />
      <p className="sample-content-note">Sample content for this assignment only. These are not official YSSE announcements.</p>
      {notices.length > 0 ? (
        <div className="portal-grid portal-grid--three">
          {notices.map((notice) => <NoticeCard key={notice.id} notice={notice} />)}
        </div>
      ) : (
        <div className="portal-empty-state">
          <h2>No notices yet</h2>
          <p>There are no notices to display right now. Please check back later.</p>
        </div>
      )}
    </div>
  )
}

export default Notices
