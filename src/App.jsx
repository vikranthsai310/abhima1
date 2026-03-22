import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Services from './pages/Services'
import ProcessPage from './pages/ProcessPage'
import Corporate from './pages/Corporate'
import PortfolioPage from './pages/PortfolioPage'
import Stories from './pages/Stories'
import Destinations from './pages/Destinations'
import TestimonialsPage from './pages/TestimonialsPage'
import Blog from './pages/Blog'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
