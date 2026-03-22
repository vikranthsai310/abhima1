import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 glass-nav border-b-[0.5px] border-primary-container/30 transition-shadow duration-500 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        <Link to="/" className="text-2xl font-headline tracking-[0.5rem] text-primary no-underline">
          ABHIMA EVENTS
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`font-headline uppercase tracking-[0.1rem] text-sm transition-colors duration-500 no-underline ${
                isActive(link.path)
                  ? 'text-primary border-b border-primary-container pb-1'
                  : 'text-secondary hover:text-primary pb-1'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="luxury-gradient text-on-primary px-8 py-3 font-headline uppercase tracking-[0.1rem] text-sm transition-all duration-500 hover:opacity-90 active:scale-95 hidden lg:block no-underline">
          Inquire
        </Link>

        <button className="lg:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-4 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/20">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} className={`font-headline uppercase tracking-[0.1rem] text-sm py-2 no-underline ${isActive(link.path) ? 'text-primary' : 'text-secondary'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/corporate" className="font-headline uppercase tracking-[0.1rem] text-sm py-2 no-underline text-secondary">Corporate & MICE</Link>
          <Link to="/process" className="font-headline uppercase tracking-[0.1rem] text-sm py-2 no-underline text-secondary">Our Process</Link>
          <Link to="/destinations" className="font-headline uppercase tracking-[0.1rem] text-sm py-2 no-underline text-secondary">Destinations</Link>
          <Link to="/faqs" className="font-headline uppercase tracking-[0.1rem] text-sm py-2 no-underline text-secondary">FAQs</Link>
          <Link to="/contact" className="luxury-gradient text-on-primary px-8 py-3 font-headline uppercase tracking-[0.1rem] text-sm mt-2 text-center no-underline">
            Inquire
          </Link>
        </div>
      )}
    </nav>
  )
}
