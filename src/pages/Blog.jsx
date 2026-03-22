const filters = ['All Articles', 'Wedding Planning', 'Corporate Events', 'Destinations', 'Telugu Traditions & Culture', 'Planning Guides']

const articles = [
  { title: 'How to Plan a Telugu Destination Wedding in Udaipur — A Complete Guide', description: 'A full planning guide for Telugu families considering a destination wedding in Rajasthan. Covers timing, venue selection, pandit coordination, guest logistics, ceremony sequencing, and what to expect.', tag: 'Wedding Planning' },
  { title: 'The 8 Ceremonies of a Traditional Telugu Wedding — What They Mean and How They Are Managed', description: 'An educational, warmly written explainer of each ceremony in a Telugu wedding — from Nischitartham to the main wedding rituals.', tag: 'Telugu Traditions' },
  { title: 'Intimate or Grand? How to Decide the Right Scale for Your Wedding', description: 'A thoughtful guide helping couples navigate the decision between a small, intimate celebration and a large, expansive one.', tag: 'Planning Guide' },
  { title: 'The Five Best Venues in Udaipur for a Destination Wedding — An Honest Assessment', description: 'A curated, candid guide to Udaipur\'s finest wedding venues — written from an event manager\'s perspective.', tag: 'Destinations' },
  { title: 'Why Your Corporate Conference Is Also a Brand Statement', description: 'A perspective piece arguing that internal events shape culture and external perception in equal measure.', tag: 'Corporate Events' },
  { title: 'How Far Ahead Should You Book an Event Planner? Honest Answers by Event Type', description: 'A practical, no-fuss guide covering lead times for different event types — destination weddings, local weddings, corporate events, and private celebrations.', tag: 'Planning Guide' },
  { title: 'Gruhapravesam in Hyderabad — Traditions, Rituals, and How to Plan One Beautifully', description: 'A culturally rich guide to planning a traditional Gruhapravesam — covering the ritual sequence, pandit requirements, catering, and guest experience.', tag: 'Telugu Traditions' },
  { title: 'What Happens When Something Goes Wrong at an Event — And How a Good Team Protects You', description: 'A candid, trust-building piece on risk and contingency in event management. Covers common failure points and how a professional team manages them invisibly.', tag: 'Planning Guide' },
]

export default function Blog() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Insights</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          Perspectives on <span className="italic font-light">Celebration</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          Thoughts, guidance, and perspectives from the Abhima Events team — on planning, tradition, design, and the art of celebrating well.
        </p>
      </header>

      {/* Filters */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex flex-wrap gap-6 md:gap-10 items-end border-b border-outline-variant/20 pb-6">
          {filters.map((f, i) => (
            <button key={f} className={`font-label text-xs uppercase tracking-[0.15em] font-semibold pb-6 -mb-6 transition-all ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-secondary/60 hover:text-primary'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer border-b border-outline-variant/20 pb-12">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary block mb-4">{article.tag}</span>
              <h2 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors leading-snug">{article.title}</h2>
              <p className="text-secondary text-sm leading-relaxed mb-6">{article.description}</p>
              <span className="inline-flex items-center gap-3 font-label text-xs uppercase tracking-widest text-primary group-hover:gap-5 transition-all">
                Read Article
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Stay Informed</span>
          <h3 className="font-headline text-3xl mb-6">Subscribe</h3>
          <p className="text-secondary mb-8 leading-relaxed">Receive occasional insights on planning, tradition, and the art of celebrating well — directly from the Abhima Events team.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-transparent border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="email" placeholder="Your email address" />
            <button className="luxury-gradient text-on-primary px-8 py-3 font-label uppercase tracking-widest text-xs shrink-0">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
