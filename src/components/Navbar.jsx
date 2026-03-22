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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-md border-b border-primary-container/10' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between w-full px-6 md:px-12 max-w-[1920px] mx-auto h-20">
        {/* Logo */}
        <Link to="/" className="no-underline shrink-0">
          <img src="/logo.png" alt="Abhima Events" className="h-12 w-auto" />
        </Link>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`relative font-headline uppercase tracking-[0.12rem] text-[13px] font-semibold transition-all duration-300 no-underline py-1 ${
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-on-surface hover:text-primary'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 luxury-gradient text-on-primary px-7 py-2.5 font-label uppercase tracking-[0.15rem] text-[11px] transition-all duration-300 hover:opacity-90 active:scale-[0.97] no-underline">
          Inquire
        </Link>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-8 pt-4 flex flex-col gap-1 glass-nav border-t border-primary-container/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`font-label uppercase tracking-[0.15rem] text-[11px] py-3 px-3 no-underline transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-primary bg-primary/5 font-semibold'
                  : 'text-on-surface/70 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-primary-container/10">
            <Link to="/contact" className="luxury-gradient text-on-primary px-8 py-3 font-label uppercase tracking-[0.15rem] text-[11px] text-center no-underline block">
              Inquire
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
