import { Link } from 'react-router-dom'

const eventTypes = [
  'Leadership conferences & annual strategy summits',
  'Annual general meetings & board-level events',
  'Product launches & brand activation events',
  'Awards evenings & employee recognition nights',
  'Dealer meets & channel partner conferences',
  'Executive offsites & leadership retreats',
  'Investor meets & high-table stakeholder dinners',
  'Incentive travel & rewards programmes',
  'Team engagement events & corporate celebrations',
  'Exhibitions, trade shows & brand pavilions',
  'CSR events & community engagement programmes',
  'Training conferences & knowledge summits',
]

const deliverables = [
  { icon: 'lightbulb', title: 'Strategic Event Concept', description: 'Every corporate event begins with an objective — not a format. The concept, the staging, and the entire programme are built to serve that purpose precisely.' },
  { icon: 'location_on', title: 'Venue & Destination Management', description: 'From hotel selection and AV specification to room-block negotiations and F&B planning — every logistical element is owned by our team.' },
  { icon: 'tv', title: 'Brand & Stage Production', description: 'Stage design, backdrop production, LED walls, branded environments, and full AV coordination — all executed in-house and aligned precisely to your brand identity.' },
  { icon: 'badge', title: 'Delegate Experience Management', description: 'From invitation design and RSVP management to on-site registration, badge management, delegate packs, and hospitality coordination.' },
  { icon: 'person', title: 'Speaker & VIP Protocol', description: 'Speaker briefing, VIP guest logistics, dignitary protocol, and emcee coordination — handled with the formality and precision that high-profile occasions require.' },
  { icon: 'emoji_events', title: 'Entertainment & Awards Management', description: 'Artist coordination, awards ceremony scripting, trophy management, citation writing, and full stage direction for recognition events.' },
]

const whyPoints = [
  'Single point of accountability — no managing multiple agencies',
  'In-house execution — consistent quality, no outsourcing risk',
  'Complete confidentiality — guest lists, internal themes, company information handled privately',
  'Experience across sectors — manufacturing, pharma, finance, technology, FMCG, real estate',
  'Senior team on the ground throughout — not just at setup',
  'Active across all major metros — Hyderabad, Delhi, Mumbai, Bangalore, Chennai',
]

export default function Corporate() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Corporate & MICE</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          Events That Reflect <span className="italic font-light">Your Standard</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-3xl leading-relaxed">
          Meetings. Incentives. Conferences. Exhibitions. Every corporate gathering is an opportunity — to align, to inspire, to recognise, to launch, to lead. We bring the same bespoke discipline to corporate events that we bring to our most personal celebrations.
        </p>
      </header>

      {/* What is MICE */}
      <section className="pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-surface-container p-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">What is MICE?</span>
          <p className="text-secondary leading-relaxed text-lg">
            MICE — Meetings, Incentives, Conferences, and Exhibitions — covers the full spectrum of professional corporate events. From a 30-person board strategy session to a 600-delegate national conference, MICE events represent some of the most complex and high-stakes occasions in the corporate calendar. Managing them well requires an understanding of corporate culture, brand standards, delegate experience, and the leadership context in which the event sits.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Corporate Events We Manage</span>
          <h2 className="font-headline text-4xl mb-16">Full Spectrum Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type) => (
              <div key={type} className="flex items-start gap-4 p-6 bg-surface/50">
                <span className="w-6 h-px bg-primary mt-2.5 shrink-0" />
                <p className="text-sm text-on-surface">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">What We Deliver</span>
          <h2 className="font-headline text-5xl mb-20">End-to-End Corporate Capability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {deliverables.map((d) => (
              <div key={d.title} className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl">{d.icon}</span>
                <h3 className="font-headline text-xl text-on-surface">{d.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Abhima */}
      <section className="py-32 bg-surface-container">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Why Corporate Clients Choose Abhima</span>
            <h2 className="font-headline text-4xl mb-12 leading-tight">Your event is a reflection of how your organisation works.</h2>
            <div className="space-y-5">
              {whyPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <span className="w-6 h-px bg-primary mt-2.5 shrink-0" />
                  <p className="text-secondary leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden bg-surface-container-high">
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC392Q7AW2ivDqmr03y0YR4KBXM4t1IAnTmJOK4QCtzPno_u0MhXBqUWjBk2R5MUv680p98Y9SR_yQBlEoPhserNre6s7wgTv-j-MrzLcDX_PUBhxphzp3_DS8bIfqlIKcuFmzRPO3nZS0xzshmEZRVZW2RVxBcs1U_BJONoOI07TRbtHDSh_Y7o8QL5s3b6j460WR72XCatBp9ifhS1lCRGzbtWh4V3wEOS0WCL_JTSlYd1occw-xBPGzE3Az2q67DvL4r7aXVsvX4" alt="Corporate event" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-headline text-3xl italic text-on-surface mb-4">Let it reflect well.</p>
          <p className="text-secondary mb-12 text-lg">Your event is a reflection of how your organisation works.</p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Discuss Your Event
          </Link>
        </div>
      </section>
    </div>
  )
}
