import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// TASK 7: Shared page shell renders reusable navigation, routed content, and footer with Outlet.
function MainLayout() {
  return (
    <div className="portal-app">
      <Navbar />
      <main className="portal-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
