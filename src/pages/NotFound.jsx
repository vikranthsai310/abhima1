import { Link } from 'react-router-dom'

const suggestions = [
  { label: 'Our Experiences', path: '/experiences', description: 'weddings, corporate events, private celebrations' },
  { label: 'How We Work', path: '/services', description: 'in-house capabilities and services' },
  { label: 'Our Work', path: '/portfolio', description: 'portfolio and event stories' },
  { label: 'Destinations', path: '/destinations', description: 'where we operate across India' },
  { label: 'Contact', path: '/contact', description: 'begin a conversation' },
]

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center">
      <div className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span className="font-headline text-8xl text-primary-container/40 block mb-8">404</span>
        <h1 className="font-headline text-4xl md:text-6xl mb-8 leading-tight">
          This Page Wasn't Part of the Plan.
        </h1>
        <p className="text-secondary text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
          Even the most meticulous planning occasionally leads somewhere unexpected. It seems the page you were looking for isn't here — it may have moved, been renamed, or never existed.
        </p>

        <div className="mb-16">
          <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-8">You might be looking for</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            {suggestions.map((s) => (
              <Link key={s.path} to={s.path} className="p-6 bg-surface-container hover:bg-surface-container-high transition-colors no-underline group">
                <h3 className="font-headline text-lg text-on-surface group-hover:text-primary transition-colors mb-2">{s.label}</h3>
                <p className="text-sm text-secondary">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/" className="luxury-gradient text-on-primary px-10 py-5 font-label uppercase tracking-widest text-xs no-underline hover:opacity-90 transition-all">
            Return to Homepage
          </Link>
          <Link to="/contact" className="border border-primary/30 text-primary px-10 py-5 font-label uppercase tracking-widest text-xs no-underline hover:bg-primary/5 transition-all">
            Contact Us
          </Link>
        </div>

        <p className="mt-16 font-headline italic text-secondary">Every great event starts with finding the right team. You're close.</p>
      </div>
    </div>
  )
}
