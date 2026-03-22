const locations = [
  'Hyderabad', 'Chennai', 'Delhi', 'Goa', 'Jaipur',
  'Udaipur', 'Kerala', 'Bangalore', 'Mumbai',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20 filter sepia-[0.2]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC1MhlJYq5G4pZwHSj5K0ys0vxbpqtP6pLkLoX9vHaxlZB8qAaIRRiH9QtGUV9X0YY6PyP2q4Nqvh-vcM802oUI4DriXp7jfwj07so7L5uvE__ozvDZGbiyu8py5c0dGR4QXdhIcrEqrQXdfT1PaXL4UwRms0c8anKo4Z1Yrt1bslXJVAN3OD9uPIOJcWIIxNfFxJfQyu1VofFprNcuQ5lW0z6NWIpTCe7TtOkKVUoQDorN67z3yXU0Cc1fAZi69IZEU0rQMLONKt4"
          alt="Luxury wedding reception background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Decorative Gold Line */}
        <div className="w-px h-24 bg-primary mx-auto mb-12 opacity-40" />

        <h1 className="font-display text-5xl md:text-8xl text-on-background mb-8 leading-tight tracking-tight">
          Crafting Events That <br />
          <span className="italic font-normal">Last a Lifetime</span>
        </h1>

        <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl font-light mb-12 leading-relaxed">
          Bespoke weddings, corporate gatherings, and private celebrations — curated with precision, discretion, and care that never wavers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
          <button className="w-full md:w-auto luxury-gradient text-on-primary px-10 py-5 font-label font-semibold uppercase tracking-widest text-xs shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-primary/20 active:scale-95">
            Explore Experiences
          </button>
          <button className="w-full md:w-auto border border-primary/30 text-primary px-10 py-5 font-label font-semibold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all active:scale-95">
            Begin the Conversation
          </button>
        </div>

        {/* Destinations */}
        <div className="relative w-full max-w-4xl mx-auto py-12 border-y border-outline-variant/20">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <span className="font-label text-[10px] uppercase tracking-[0.3rem] text-primary/60 w-full mb-4">
              Our Presence
            </span>
            {locations.map((loc, i) => (
              <span key={loc} className="flex items-center gap-8">
                <span className="text-xs uppercase tracking-widest text-on-surface-variant/80">
                  {loc}
                </span>
                {i < locations.length - 1 && (
                  <span className="text-primary/40">&bull;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-72 h-[500px] border-l border-primary/10 bg-surface-container-low/30 backdrop-blur-sm -mr-12" />
      <div className="absolute left-12 bottom-12 hidden lg:flex items-center gap-4 rotate-90 origin-left">
        <span className="font-label text-[10px] uppercase tracking-[0.5rem] text-primary">
          Est. 2024
        </span>
        <div className="w-12 h-px bg-primary/40" />
      </div>
    </section>
  )
}
