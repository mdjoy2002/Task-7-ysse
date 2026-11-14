import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import '../App.css'

const categoryOptions = ['All', ...new Set(courses.map((course) => course.category))]
const levelOptions = ['All', 'Beginner', 'Intermediate', 'Advanced']

const durationOptions = [
  { value: 'all', label: 'Any duration' },
  { value: 'short', label: 'Under 12 hours' },
  { value: 'medium', label: '12-24 hours' },
  { value: 'long', label: '25+ hours' },
]

const ratingOptions = [
  { value: '0', label: 'Any rating' },
  { value: '4.5', label: '4.5+' },
  { value: '4.7', label: '4.7+' },
  { value: '4.8', label: '4.8+' },
]

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'duration', label: 'Longest duration' },
  { value: 'price-low', label: 'Lowest price' },
  { value: 'newest', label: 'Newest first' },
]

function readStoredValue(key, fallback) {
  const storedValue = window.localStorage.getItem(key)

  if (storedValue === null) {
    return fallback
  }

  try {
    return JSON.parse(storedValue)
  } catch (error) {
    console.warn(`Could not read saved ${key} preference.`, error)
    return fallback
  }
}

function readStoredIds(key) {
  const storedIds = readStoredValue(key, [])
  const knownIds = new Set(courses.map((course) => course.id))
  return Array.isArray(storedIds)
    ? storedIds.filter((id) => Number.isInteger(id) && knownIds.has(id))
    : []
}

// TASK 7: Preserve the existing course-search experience as a separate portal route.
function CourseCatalog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [durationFilter, setDurationFilter] = useState('all')
  const [ratingFilter, setRatingFilter] = useState('0')
  const [sortBy, setSortBy] = useState('recommended')
  const [theme, setTheme] = useState(() => {
    const savedTheme = readStoredValue('ysse-theme', 'dark')
    return savedTheme === 'light' ? 'light' : 'dark'
  })
  const [favorites, setFavorites] = useState(() => readStoredIds('ysse-favorites'))
  const [enrolledCourses, setEnrolledCourses] = useState(() => readStoredIds('ysse-enrolled'))
  const [activeView, setActiveView] = useState('catalog')
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('ysse-theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('ysse-favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    window.localStorage.setItem('ysse-enrolled', JSON.stringify(enrolledCourses))
  }, [enrolledCourses])

  useEffect(() => {
    if (!selectedCourse) {
      return undefined
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCourse(null)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [selectedCourse])

  const toggleFavorite = (courseId) => {
    setFavorites((current) =>
      current.includes(courseId) ? current.filter((id) => id !== courseId) : [...current, courseId],
    )
  }

  const toggleEnrollment = (courseId) => {
    setEnrolledCourses((current) =>
      current.includes(courseId) ? current.filter((id) => id !== courseId) : [...current, courseId],
    )
  }

  const filteredCourses = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    const result = courses.filter((course) => {
      const searchableText = [
        course.title,
        course.category,
        course.description,
        course.instructor,
        ...course.tags,
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery)
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
      const matchesRating = Number(course.rating) >= Number(ratingFilter)
      const matchesDuration =
        durationFilter === 'all' ||
        (durationFilter === 'short' && course.hours < 12) ||
        (durationFilter === 'medium' && course.hours >= 12 && course.hours <= 24) ||
        (durationFilter === 'long' && course.hours > 24)

      return matchesSearch && matchesCategory && matchesLevel && matchesRating && matchesDuration
    })

    return [...result].sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating
      }

      if (sortBy === 'duration') {
        return b.hours - a.hours
      }

      if (sortBy === 'price-low') {
        return (
          Number.parseFloat(a.price.replace('$', '')) - Number.parseFloat(b.price.replace('$', ''))
        )
      }

      if (sortBy === 'newest') {
        return b.id - a.id
      }

      return b.rating * 10 + b.hours / 5 - (a.rating * 10 + a.hours / 5)
    })
  }, [searchQuery, selectedCategory, selectedLevel, durationFilter, ratingFilter, sortBy])

  const featuredCourse = filteredCourses[0] ?? courses[0]
  const totalHours = courses.reduce((sum, course) => sum + course.hours, 0)
  const visibleCourses =
    activeView === 'favorites'
      ? filteredCourses.filter((course) => favorites.includes(course.id))
      : activeView === 'enrolled'
        ? filteredCourses.filter((course) => enrolledCourses.includes(course.id))
        : filteredCourses

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedLevel('All')
    setDurationFilter('all')
    setRatingFilter('0')
    setSortBy('recommended')
  }

  const openLearningView = (view) => {
    setActiveView(view)
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`page-shell theme-${theme}`}>
      <header className="topbar">
        <a className="brand-wrap" href="#catalog" onClick={() => setActiveView('catalog')}>
          <div className="brand-mark">YS</div>
          <div className="brand-copy">
            <span className="eyebrow">Young Scholars School</span>
            <h1>Course Search</h1>
          </div>
        </a>

        <nav className="top-nav" aria-label="Main navigation">
          <button
            type="button"
            className={activeView === 'catalog' ? 'nav-link active' : 'nav-link'}
            onClick={() => openLearningView('catalog')}
          >
            Explore courses
          </button>
          <button
            type="button"
            className={activeView === 'favorites' ? 'nav-link active' : 'nav-link'}
            onClick={() => openLearningView('favorites')}
          >
            Saved courses
          </button>
          {/* TASK 7: Add a direct return link from the existing catalog to the main portal. */}
          <Link className="nav-link" to="/">
            YSSE Home
          </Link>
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <button
            type="button"
            className={activeView === 'favorites' ? 'secondary-button selected' : 'secondary-button'}
            onClick={() => openLearningView('favorites')}
          >
            Saved ({favorites.length})
          </button>
          <button
            type="button"
            className={activeView === 'enrolled' ? 'primary-button selected' : 'primary-button'}
            onClick={() => openLearningView('enrolled')}
          >
            Enrolled ({enrolledCourses.length})
          </button>
        </div>
      </header>

      <main className="catalog-layout" id="catalog">
        {activeView === 'catalog' && <section className="hero-section">
          <div className="hero-copy">
            <span className="badge">2026 learning catalog</span>
            <h2>Design your next learning sprint.</h2>
            <p>
              Explore expert-led courses across strategy, design, development, data, and digital
              innovation.
            </p>

            <div className="hero-stats">
              <div>
                <strong>{courses.length}</strong>
                <span>Courses</span>
              </div>
              <div>
                <strong>{new Set(courses.map((course) => course.category)).size}</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>{favorites.length}</strong>
                <span>Saved</span>
              </div>
              <div>
                <strong>{totalHours}h</strong>
                <span>Learning time</span>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={featuredCourse.image} alt={featuredCourse.title} />
            </div>

            <div className="feature-content">
              <div className="mini-header">
                <span className="pill">{featuredCourse.category}</span>
                <span className="rating-badge">★ {featuredCourse.rating.toFixed(1)}</span>
              </div>

              <h3>{featuredCourse.title}</h3>
              <p>{featuredCourse.description}</p>

              <div className="feature-meta">
                <span>{featuredCourse.hours} hours</span>
                <span>{featuredCourse.lessons} lessons</span>
                <span>{featuredCourse.students} learners</span>
              </div>
            </div>
          </div>
        </section>}

        <section className="toolbar" aria-label="Course search and filters">
          {activeView !== 'catalog' && (
            <div className="view-heading">
              <div>
                <span className="eyebrow">Your learning space</span>
                <h2>{activeView === 'favorites' ? 'Saved courses' : 'Your enrolled courses'}</h2>
                <p>
                  {activeView === 'favorites'
                    ? 'Your bookmarked courses, ready whenever you are.'
                    : 'Pick up where your learning journey begins.'}
                </p>
              </div>
              <button type="button" className="reset-button" onClick={() => openLearningView('catalog')}>
                Browse catalog
              </button>
            </div>
          )}
          <label className="search-input" htmlFor="course-search">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>
            <input
              id="course-search"
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search courses, instructors, or skills"
            />
          </label>

          <div className="toolbar-controls">
            <label className="field">
              <span>Duration</span>
              <select value={durationFilter} onChange={(event) => setDurationFilter(event.target.value)}>
                {durationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Minimum rating</span>
              <select value={ratingFilter} onChange={(event) => setRatingFilter(event.target.value)}>
                {ratingOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Sort by</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="filter-panel">
          <div className="filter-group">
            <div className="filter-header">
              <span className="filter-title">Categories</span>
            </div>

            <div className="category-list">
              {categoryOptions.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={selectedCategory === category ? 'chip active' : 'chip'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <div className="filter-header">
              <span className="filter-title">Difficulty</span>
            </div>

            <div className="level-list">
              {levelOptions.map((level) => (
                <button
                  key={level}
                  type="button"
                  className={selectedLevel === level ? 'chip active' : 'chip'}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="results-bar">
          <div>
            <strong>{visibleCourses.length}</strong>{' '}
            {activeView === 'favorites'
              ? 'saved courses'
              : activeView === 'enrolled'
                ? 'enrolled courses'
                : 'courses found'}
          </div>

          <button type="button" className="reset-button" onClick={clearFilters}>
            Clear filters
          </button>
        </section>

        <section className="course-grid" aria-live="polite">
          {visibleCourses.length > 0 ? (
            visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isFavorite={favorites.includes(course.id)}
                onToggleFavorite={() => toggleFavorite(course.id)}
                isEnrolled={enrolledCourses.includes(course.id)}
                onEnroll={() => toggleEnrollment(course.id)}
                onViewDetails={() => setSelectedCourse(course)}
              />
            ))
          ) : (
            <div className="empty-state">
              <h3>
                {activeView === 'favorites'
                  ? 'No saved courses yet.'
                  : activeView === 'enrolled'
                    ? 'You are not enrolled in any courses yet.'
                    : 'No courses match your search.'}
              </h3>
              <p>
                {activeView === 'catalog'
                  ? 'Try another keyword or reset the filters to browse the full catalog.'
                  : 'Explore the catalog and use the course actions to build your learning list.'}
              </p>
              {activeView !== 'catalog' && (
                <button
                  type="button"
                  className="primary-button empty-action"
                  onClick={() => openLearningView('catalog')}
                >
                  Explore courses
                </button>
              )}
            </div>
          )}
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand-mark">YS</div>
          <div>
            <strong>Young Scholars School</strong>
            <span>Learn with purpose. Grow with confidence.</span>
          </div>
        </div>
        <div className="footer-links">
          <a href="#catalog" onClick={() => openLearningView('catalog')}>Course catalog</a>
          <button type="button" onClick={() => openLearningView('favorites')}>Saved courses</button>
          {/* TASK 7: Keep portal navigation available at the bottom of the catalog page. */}
          <Link to="/">YSSE Main Portal</Link>
          <span>© 2026 YSSE Learning</span>
        </div>
      </footer>

      {selectedCourse && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCourse(null)
            }
          }}
        >
          <section
            className="course-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-course-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close course details"
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>
            <img className="modal-image" src={selectedCourse.image} alt="" />
            <div className="modal-content">
              <div className="card-meta-row">
                <span className="course-type">{selectedCourse.category}</span>
                <span className="course-level">{selectedCourse.level}</span>
              </div>
              <h2 id="modal-course-title">{selectedCourse.title}</h2>
              <p>{selectedCourse.description}</p>
              <div className="modal-facts">
                <span><strong>{selectedCourse.duration}</strong> duration</span>
                <span><strong>{selectedCourse.hours} hours</strong> of learning</span>
                <span><strong>{selectedCourse.lessons} lessons</strong> included</span>
                <span><strong>★ {selectedCourse.rating.toFixed(1)}</strong> learner rating</span>
              </div>
              <p className="modal-instructor">
                Taught by <strong>{selectedCourse.instructor}</strong> · {selectedCourse.students} learners
              </p>
              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => toggleFavorite(selectedCourse.id)}
                >
                  {favorites.includes(selectedCourse.id) ? '♥ Saved' : '♡ Save course'}
                </button>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => toggleEnrollment(selectedCourse.id)}
                >
                  {enrolledCourses.includes(selectedCourse.id) ? 'Enrolled ✓' : `Enroll · ${selectedCourse.price}`}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default CourseCatalog
