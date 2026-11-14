# YSSE Main Portal and Course Catalog

<!-- TASK 7: Documentation for the multi-page YSSE portal assignment. -->
A responsive React portal built with Vite. It includes informational pages, sample notices and programs, dynamic program details, an inquiry form, and the original course catalog experience.

## Technologies

- React 19, React Router DOM, Vite, and regular CSS
- Functional React components, hooks, reusable components, and data-driven rendering
- No backend integration or UI component framework

## Features

- Client-side routes: Home, About, Notices, Programs, Program Details, Contact, and custom 404
- Shared responsive navigation and footer with active-link styling and mobile menu
- Six clearly labeled sample notices and six clearly labeled sample programs
- Dynamic program details with invalid-ID handling
- Controlled contact form with required-field and email validation, success feedback, and reset
- Mission/vision draft wording and impact placeholders; no unverified achievements or statistics
- Original course search, filters, favorites, enrollment, details modal, and theme retained at `/courses`

## Project structure

- `src/App.jsx` — portal route configuration
- `src/main.jsx` — BrowserRouter setup
- `src/layouts/MainLayout.jsx` — shared portal shell and Outlet
- `src/components/` — shared navigation, footer, page header, cards, and button
- `src/pages/` — portal pages and preserved course catalog page
- `src/data/` — sample notices, programs, and existing course data
- `src/Portal.css` — portal theme and responsive page styles
- `src/App.css` — existing course catalog styles

## Installation and development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Available routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/notices` | Notices |
| `/programs` | Programs |
| `/programs/:id` | Program details |
| `/contact` | Contact / inquiry form |
| `/courses` | Existing course search and filter catalog |
| `*` | Custom not-found page |

## Production build

```bash
npm run lint
npm run build
```

The production bundle will be created in the `dist/` directory.

All notice and program records are assignment samples, not verified or official YSSE announcements or offerings. The contact form validates and displays local success feedback only; it does not send or store a message.

## Deploy to GitHub Pages

The Vite base path and package homepage are configured for the `Task-7-ysse`
GitHub repository. The build also copies the app entry point to `404.html` so
GitHub Pages can load client-side routes directly. Deploy the production build with:

```bash
npm run deploy
```

The `predeploy` script builds the app first, and `gh-pages` publishes the
generated `dist/` directory. In the `mdjoy2002/Task-7-ysse` repository settings, select
**Pages → Deploy from a branch → gh-pages → /(root)**.
