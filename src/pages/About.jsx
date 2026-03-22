import { Link } from 'react-router-dom'

const values = [
  { title: 'Integrity', description: 'We say what we will do. We do what we said. Every commitment is honoured, every conversation is honest, and every outcome is one we stand fully behind.' },
  { title: 'Discretion', description: 'Every client, every event, every detail — handled with absolute confidentiality. We do not share, promote, or reference our clients\' celebrations without their explicit consent. Privacy is not a policy. It is a practice.' },
  { title: 'Precision', description: 'Details are never handled casually at Abhima Events. Every element — from the placement of a floral arrangement to the timing of a ceremony — is managed with deliberate, disciplined care.' },
  { title: 'Cultural Respect', description: 'Every tradition we manage is treated with the reverence it deserves. Our team carries deep knowledge of Telugu, South Indian, and pan-India customs — built over years of practice, not assumption.' },
]

const threePillars = [
  {
    num: '01',
    title: 'Listen Intently',
    description: 'Every engagement begins with a conversation, not a proposal. We ask questions before we make suggestions. We want to understand the people behind the celebration — their values, their traditions, their vision — before a single element is designed.',
  },
  {
    num: '02',
    title: 'Design Thoughtfully',
    description: 'Concept development at Abhima Events is never template-driven. Every design brief is personal — built from scratch around your story, your culture, your aesthetic. We translate what you feel into what your guests will experience.',
  },
  {
    num: '03',
    title: 'Execute Impeccably',
    description: 'On the day of your celebration, our job is to disappear. The planning, the contingencies, the coordination — all handled in the days and weeks before. You are present. We are invisible. Only the memory remains.',
  },
]

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">About Abhima</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          A Standard That Never <span className="italic font-light">Compromises</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          Abhima Events is a bespoke event curation house delivering weddings, traditional ceremonies, corporate gatherings, and private celebrations across India and select global destinations.
        </p>
      </header>

      {/* Opening */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-secondary leading-relaxed text-lg mb-8">
              We believe scale never defines importance. Whether an intimate family function or a large-scale destination event, every celebration is treated with the same responsibility, care, and precision.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              There are no second-tier clients here. There are no packaged solutions, no standard formats, and no repeating of what worked last time. Every event begins with a blank canvas and ends with a moment that is entirely your own.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBc2XuniBidN64iWjuu64124b4nHpcHbAryzsqFOIVTf1Gz-EiXMtDpyQOswppaskWRCpRLaz-gRUo5_ht98iCiCc5I9RqkrjdkbRVO-PINMKMIlI5I2yxhcccjy_WjvRYk2p1mTIqnQ7IQlgj_iXPg7X1vElVieh6Hi_Q7guwvZUrSRrsJJJucWJMfqtje4FWmIuWOwG-h5kPlPbVvc4zS68tpWYQJ9IOYrL_bt4frsXyiD8ig3ODZoaDDaAYbPUR8rWrOVF6s7i" alt="Abhima Events detail" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Our Story</span>
          <h2 className="font-headline text-4xl md:text-5xl mb-12 leading-tight">Formerly KPK Events</h2>
          <div className="space-y-8 text-secondary leading-relaxed text-lg">
            <p className="font-headline text-xl text-on-surface italic">The same team. A sharper standard. A name that says it.</p>
            <p>
              Abhima Events was formerly known as KPK Events — a name that many families, organisations, and clients across Hyderabad and beyond have trusted for years. The experience, the team, the relationships, and the commitment to quality that defined KPK Events are all very much present in everything Abhima does.
            </p>
            <p>
              What changed is the ambition. As our work evolved — in scale, in cultural depth, in the standard of in-house execution we had built — it became clear that we had outgrown the identity we started with. Abhima Events is not a rebranding exercise. It is an honest reflection of what we have become.
            </p>
            <p className="font-headline text-on-surface text-lg">Same people. Same care. The next chapter.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[0.5px] w-12 bg-primary-container" />
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">Our Philosophy</span>
            <div className="h-[0.5px] w-12 bg-primary-container" />
          </div>
          <h2 className="font-headline text-3xl md:text-5xl leading-snug text-on-surface italic mb-12">
            "Discretion over display. Precision over excess. Refinement over spectacle."
          </h2>
          <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Our work unfolds quietly behind the scenes. Planning is meticulous. Execution is disciplined. What remains visible to you, your family, and your guests is not our effort — it is ease. Calm. The feeling that everything is exactly as it should be.
          </p>
          <div className="mt-12 h-20 w-[0.5px] bg-primary-container mx-auto" />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-32 bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Our Approach</span>
          <h2 className="font-headline text-5xl mb-20 leading-tight">Three Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {threePillars.map((p) => (
              <div key={p.num}>
                <span className="font-headline text-5xl italic text-primary-container/50 mb-4 block">{p.num}</span>
                <h3 className="font-headline text-2xl mb-6">{p.title}</h3>
                <p className="text-secondary leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-House Execution */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">In-House Execution</span>
            <h2 className="font-headline text-4xl mb-8 leading-tight">One Team. One Standard. One Point of Accountability.</h2>
            <p className="text-secondary leading-relaxed mb-6">
              Every capability we offer is delivered by our own in-house team — decor and styling, catering and culinary management, photography and cinematography, AV and stage production, on-ground event direction, and complete guest hospitality.
            </p>
            <p className="text-secondary leading-relaxed mb-8">
              There is no outsourcing. No handoff to third-party agencies. No dependency on vendors who are simultaneously working three other events on your celebration day.
            </p>
            <p className="font-headline text-xl italic text-primary">Other companies manage your event. We own it.</p>
          </div>
          <div className="aspect-square overflow-hidden bg-surface-container">
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTvqyarJwcu95uLG6Dj20a0XuZjjSUiQQ8C5HDB9xx8rOj5eru2trmWh93QhQ2vLy9BHHQLhJWjnf9Yx7i5FERJrsnxAKm2X48gVEEo62R9KMeKlXQeD_M0Yi7-FT7Mqd7HOhCHEalGNCD7CK0ZFxdHz1q7ACCl456gcgOqdJIbN0lrcMl7hlkwS8iu4WQsBMNYb81-X8xKTM-7BdYkRL7cLxGUrKiImk9k4wbXZN5TNgKzVbpX0xpg5cp9rhU6BodABz8W8-xGHPb" alt="In-house craftsmanship" />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Vision</span>
            <p className="font-headline text-2xl leading-relaxed text-on-surface">
              To be the most trusted name in bespoke event curation across India — known not for the scale of what we do, but for the standard we keep and the trust we earn.
            </p>
          </div>
          <div>
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Mission</span>
            <p className="font-headline text-2xl leading-relaxed text-on-surface">
              To deliver celebrations of every kind — personal, cultural, spiritual, and corporate — with precision, discretion, and genuine care. To manage every detail so that those who matter most can be fully present.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Brand Values</span>
          <h2 className="font-headline text-5xl mb-20">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-primary-container/30 pl-8">
                <h3 className="font-headline text-2xl mb-4">{v.title}</h3>
                <p className="text-secondary leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-4xl mb-8">Begin Your Celebration</h2>
          <p className="text-secondary mb-12 text-lg leading-relaxed">We deliberately limit the number of events we accept each season to ensure focused, undivided attention for every client.</p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Begin the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
