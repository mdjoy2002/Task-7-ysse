# YSSE Course Search & Filter System

A modern course catalog built with React and Vite for a professional learning platform experience.

## Features

- Advanced keyword search across course titles, descriptions, instructors, and tags
- Category and difficulty filters for fast discovery
- Duration and minimum-rating filtering
- Sorting controls for recommended, rating, duration, price, and newest items
- Save courses and manage enrollments, with both lists persisted in browser local storage
- Dedicated saved and enrolled course views
- Course detail modal with course facts, favorite, and enrollment actions
- Persistent light/dark theme preference
- Responsive header and footer with functional navigation
- Responsive layout for desktop, tablet, and mobile screens
- Realistic course dataset with 14 courses across multiple categories and skill levels

## Project structure

- `src/App.jsx` — main catalog layout and filtering logic
- `src/components/CourseCard.jsx` — reusable course card component
- `src/data/courses.js` — sample course catalog data
- `src/App.css` — complete UI styling for the interface
- `src/index.css` — global reset and background styling

## Getting started

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The production bundle will be created in the `dist/` directory.
