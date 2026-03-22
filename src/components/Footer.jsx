import { Link } from 'react-router-dom'

const navColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Experiences', path: '/experiences' },
      { label: 'Services', path: '/services' },
      { label: 'Corporate & MICE', path: '/corporate' },
      { label: 'Our Process', path: '/process' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Event Stories', path: '/stories' },
      { label: 'Destinations', path: '/destinations' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Insights', path: '/insights' },
      { label: 'FAQs', path: '/faqs' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-12 bg-surface-container-low border-t-[0.5px] border-primary-container/20">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="no-underline block mb-4">
              <img src="/logo.png" alt="Abhima Events" className="h-16 w-auto" />
            </Link>
            <p className="font-headline italic text-secondary text-lg mb-6">Crafting Events That Last a Lifetime</p>
            <div className="space-y-2 text-sm text-secondary">
              <p>info@abhimaevents.com</p>
              <p>Hyderabad, Telangana &middot; Serving India & Beyond</p>
            </div>
          </div>

          {/* Nav Columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-6">{col.title}</span>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link key={link.path} to={link.path} className="font-body text-sm text-secondary hover:text-primary transition-colors duration-300 no-underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Column */}
          <div className="md:col-span-4">
            <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-6">Get in Touch</span>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              We limit the number of engagements we accept each season to ensure focused, undivided attention for every client.
            </p>
            <Link to="/contact" className="luxury-gradient text-on-primary px-8 py-3 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
              Begin the Conversation
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-primary-container/10 pt-12">
          <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.1rem] text-secondary">
            <span>&copy; 2025 Abhima Events. All rights reserved.</span>
            <span>&middot;</span>
            <span>Formerly KPK Events</span>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-body uppercase tracking-[0.1rem] text-[10px] text-secondary hover:text-primary transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link to="/contact" className="font-body uppercase tracking-[0.1rem] text-[10px] text-secondary hover:text-primary transition-colors no-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
