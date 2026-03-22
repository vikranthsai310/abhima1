import { Link } from 'react-router-dom'

const capabilities = [
  {
    icon: 'palette',
    title: 'Event Concept & Experience Design',
    description: 'Every celebration begins with a concept that is entirely yours. Our design team develops the mood, the visual language, the experience flow, and the emotional arc of your event. Nothing is borrowed from a template. Every concept is a first draft of your specific story.',
  },
  {
    icon: 'brush',
    title: 'Decor, Styling & Production',
    description: 'Our in-house production team handles all decor, staging, and styling — from mandap design and floral direction to table settings, entrance installations, and complete venue transformation. Every element is designed, produced, and installed by us.',
  },
  {
    icon: 'restaurant',
    title: 'Catering & Culinary Management',
    description: 'Food is not an afterthought — it is a core part of the experience. Our culinary team manages menu design, food preparation, and complete F&B service entirely in-house. From a traditional Telugu wedding feast to a formal corporate dinner.',
  },
  {
    icon: 'photo_camera',
    title: 'Photography & Cinematography',
    description: 'Our in-house photography and cinematography team is briefed, directed, and supervised by Abhima Events — not independently contracted. We ensure that what is captured reflects the spirit of your event, not just its surface.',
  },
  {
    icon: 'speaker',
    title: 'AV, Sound & Lighting Production',
    description: 'Stage production handled by our own technical team — PA systems, stage lighting, LED walls, projection, live streaming, and full AV coordination. Every technical element is designed to serve the event, not overshadow it.',
  },
  {
    icon: 'groups',
    title: 'On-Ground Event Direction',
    description: 'The team you meet during planning is the team on the ground on your event day. No handover, no briefing of a new crew. Our directors manage timeline, pace, and all real-time coordination — silently and entirely out of sight.',
  },
  {
    icon: 'hotel',
    title: 'Guest & Hospitality Management',
    description: 'From the first invitation to the final farewell, every touchpoint in your guest\'s experience is managed. RSVP coordination, welcome management, on-site hospitality, special requirements, seating, and guest flow — all handled personally.',
  },
  {
    icon: 'flight',
    title: 'Travel, Transport & Destination Logistics',
    description: 'For destination events, our logistics team manages the full guest journey — travel coordination, accommodation management, ground transport, airport transfers, and destination orientation.',
  },
  {
    icon: 'star',
    title: 'Specialist Coordination',
    description: 'Where specialist services are required — a particular artist, a specific technical requirement, or an international vendor — we manage that engagement directly and bring it under the same umbrella of quality and accountability.',
  },
]

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">In-House Capabilities</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          Everything In-House. <span className="italic font-light">Nothing Left to Chance.</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-3xl leading-relaxed">
          Every service we offer — decor and styling, catering, photography, AV production, on-ground direction, and guest hospitality — is delivered by our own in-house team. There is no outsourcing. No handoffs. No dependency on external vendors.
        </p>
      </header>

      {/* Opening Statement */}
      <section className="pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-surface-container p-12">
          <p className="font-headline text-2xl italic text-on-surface leading-relaxed mb-6">
            "One team. One standard. One point of accountability."
          </p>
          <p className="text-secondary leading-relaxed">
            Most event companies are coordinators. They take a brief, collect quotes from freelancers, and hope it holds on the day. Abhima Events is built on a different model entirely. When you engage Abhima Events, you engage one team that owns your celebration from first conversation to final farewell.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Our Capabilities</span>
          <h2 className="font-headline text-5xl mb-20">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {capabilities.map((cap) => (
              <div key={cap.title} className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl">{cap.icon}</span>
                <h3 className="font-headline text-xl text-on-surface">{cap.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-headline text-3xl italic text-on-surface mb-12">Other companies manage your event. We own it.</p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Discuss Your Event
          </Link>
        </div>
      </section>
    </div>
  )
}
