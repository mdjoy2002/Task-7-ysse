import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Notices from './pages/Notices'
import NotFound from './pages/NotFound'
import ProgramDetails from './pages/ProgramDetails'
import Programs from './pages/Programs'
import CourseCatalog from './pages/CourseCatalog'
import './Portal.css'

// TASK 7: Configure the multi-page YSSE portal routes and retain the original catalog at /courses.
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/courses" element={<CourseCatalog />} />
    </Routes>
  )
}

export default App
