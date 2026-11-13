function CourseCard({
  course,
  isFavorite,
  onToggleFavorite,
  isEnrolled,
  onEnroll,
  onViewDetails,
}) {
  return (
    <article className="course-card">
      <div className="card-image-wrap">
        <img src={course.image} alt={course.title} className="card-image" loading="lazy" />
        <button
          type="button"
          className={isFavorite ? 'favorite-button active' : 'favorite-button'}
          aria-label={isFavorite ? `Remove ${course.title} from favorites` : `Save ${course.title} to favorites`}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
        >
          ♥
        </button>
      </div>

      <div className="card-body">
        <div className="card-meta-row">
          <span className="course-type">{course.category}</span>
          <span className="course-level">{course.level}</span>
        </div>

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-stats">
          <span>{course.hours}h total</span>
          <span>{course.lessons} lessons</span>
          <span>{course.students} learners</span>
        </div>

        <div className="tag-list">
          {course.tags.map((tag) => (
            <span key={`${course.id}-${tag}`} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <div className="instructor-block">
            <div className="avatar">{course.instructor.charAt(0)}</div>
            <div>
              <p className="instructor-label">Instructor</p>
              <strong>{course.instructor}</strong>
            </div>
          </div>

          <div className="price-block">
            <span className="rating">★ {course.rating.toFixed(1)}</span>
            <strong>{course.price}</strong>
          </div>
        </div>

        <button type="button" className="details-button" onClick={onViewDetails}>
          View course details
        </button>
        <button
          type="button"
          className={isEnrolled ? 'enroll-button enrolled' : 'enroll-button'}
          aria-pressed={isEnrolled}
          onClick={onEnroll}
        >
          {isEnrolled ? 'Enrolled' : 'Enroll now'}
        </button>
      </div>
    </article>
  )
}

export default CourseCard
