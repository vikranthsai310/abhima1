const destinations = ['Udaipur', 'Jaipur', 'Goa', 'Kerala']

export default function Destinations() {
  return (
    <section className="py-24 border-b border-primary-container/10">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">
            05 — Venues
          </span>
          <h2 className="font-headline text-4xl text-on-surface">
            Preferred Destinations
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-16">
          {destinations.map((dest, i) => (
            <span key={dest} className="flex items-center gap-8 md:gap-16">
              <span className="font-headline text-2xl md:text-4xl text-outline-variant hover:text-primary transition-colors cursor-default">
                {dest}
              </span>
              {i < destinations.length - 1 && (
                <div className="h-[1px] w-8 bg-primary-container/20" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
