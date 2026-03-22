import { Link } from 'react-router-dom'

const locations = [
  'Hyderabad', 'Chennai', 'New Delhi', 'Goa', 'Jaipur',
  'Udaipur', 'Kerala', 'Bangalore', 'Mumbai',
]

const categoryTeasers = [
  {
    label: 'Heritage Events',
    title: 'Weddings & Ceremonial Celebrations',
    description: 'Tradition-honouring weddings and sacred ceremonies, curated with elegance and deep cultural understanding. Every ritual managed with the intention it deserves.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtDiyn4BRFqtHH7M0zqJAyLtghIXW4rcb2HC7KZqEkovMqGMKxqnTa2awznHvo7xr_RMqPJssOwjN7tSL3OzWKbkbXcTtBkba3F7UN0yxaBC9SWmvNkIjoHC3xUEK421hzUzM0d4zBAQ9fASndLzf-8A0ev7i2o8pz1xbgoWmaggnRKWYOv2IFaJD7N15SFx8KqT6VJnitzy8PE6_9bvy5mlHHkgGACQIrt4PKBvQrk2VCCWboQutDUyOlU6EwSjsaM-BupgWyfHlU',
  },
  {
    label: 'Corporate Atelier',
    title: 'Corporate & Brand Experiences',
    description: 'Purpose-driven corporate events, conferences, product launches, and leadership gatherings — executed with the professionalism your organisation demands.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw-prKcyHWGuGfbyvEBgkx8xTSZRh6Nbxc7ox3L6R9-bl28PdZlAZZ6P5XrxCtSST7sC87tQPbChWom12YBQGgIhgumXKDkWia7Orl0OO1zitzbut0eFwaKjoeah0bVNB_W3QewVx_HvP2qhpJ37a7VMhiTWH7EEINCKs9J6JjwzDqmfUh6Tm7gS6djGbAJaYam00fOAsLKN8jt3C-mvFqLzuBSTBz7BQ5UZWmjygvaoCL_06jxYo1QN5Wl8rAO2YpILSatl2_HFPn',
    offset: true,
  },
  {
    label: 'Bespoke Gatherings',
    title: 'Private & Social Celebrations',
    description: 'Birthdays, anniversaries, intimate gatherings, and personal milestones — elevated with thoughtful design and absolute discretion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm_Ld70vATW6s7hVb0aeAPaTwM8o8C9uPyoG_JxFceGKhLoM2bgR9qYNSTIE_KmfsClApvQi_25T-BZJVpMbyWBfVFk-I-Ca2YgsRH4ka9lFFFBYOT4s_qcOe5hul9QGIDIXbErjE9ZmMtRmgsx1p99RlRToqr8iP3TL7xFhNP-mmp-jyQ-vYkWD3EFyZlJS7b4husprT3KquOcq3P7Y_Y9f33ElnfbQ29PLjyX2LPsFpwsoq4ocGviUXmmxvnj8ng4rrMsBlmukGH',
  },
  {
    label: 'Soulful Journeys',
    title: 'Spiritual & Cultural Events',
    description: 'Sacred assemblies, traditional ceremonies, and cultural gatherings — managed with reverence, cultural accuracy, and seamless logistics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLQiyLZpOrTnrJC6zvbX0nIf6IaNF4zFLsOvAu8iPSYmzaot1vxksLHbszpMy4E_FM6Uiyr-Q04l0Typ4hMEhp5KcP94yH7PGKE1lNVp76Qa1tvIelvBYs8VUAhySFZKE1VvZQUkuNssfjnrjvAAR5SUDdzKXp09WgTSFJpFsNJmVGDiJa3IvjBqF9U_Lc4pWf_Mc8t-9KGqFus0h-zW8S0T15K83-6CqGR-MAYey2OpLCKseWmm8VkEKXZWXo18PqLip9lq65AFeN',
    offset: true,
  },
]

const whyPoints = [
  'Celebrations of every scale. One unwavering standard.',
  'Deep mastery of Telugu and pan-India traditions',
  'Entirely in-house execution — no outsourcing, no middlemen',
  'Bespoke approach — never templated, always personal',
  'Trusted legacy — formerly KPK Events, elevated to Abhima',
]

const pillars = [
  { icon: 'diamond', title: 'Precision', description: 'Details are never handled casually. Every element — from the placement of a floral arrangement to the timing of a ceremony — is managed with deliberate, disciplined care.' },
  { icon: 'lock', title: 'Discretion', description: 'Every client, every event, every detail — handled with absolute confidentiality. Privacy is not a policy. It is a practice.' },
  { icon: 'castle', title: 'Heritage', description: 'Every tradition we manage is treated with the reverence it deserves. Deep knowledge of Telugu, South Indian, and pan-India customs — built over years of practice.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20 filter sepia-[0.2]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC1MhlJYq5G4pZwHSj5K0ys0vxbpqtP6pLkLoX9vHaxlZB8qAaIRRiH9QtGUV9X0YY6PyP2q4Nqvh-vcM802oUI4DriXp7jfwj07so7L5uvE__ozvDZGbiyu8py5c0dGR4QXdhIcrEqrQXdfT1PaXL4UwRms0c8anKo4Z1Yrt1bslXJVAN3OD9uPIOJcWIIxNfFxJfQyu1VofFprNcuQ5lW0z6NWIpTCe7TtOkKVUoQDorN67z3yXU0Cc1fAZi69IZEU0rQMLONKt4"
            alt="Luxury wedding reception"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="w-px h-24 bg-primary mx-auto mb-12 opacity-40" />
          <h1 className="font-display text-5xl md:text-8xl text-on-background mb-8 leading-tight tracking-tight">
            Crafting Events That <br />
            <span className="italic font-normal">Last a Lifetime</span>
          </h1>
          <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl font-light mb-12 leading-relaxed">
            Bespoke weddings, corporate gatherings, and private celebrations — curated with precision, discretion, and care that never wavers.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
            <Link to="/experiences" className="w-full md:w-auto luxury-gradient text-on-primary px-10 py-5 font-label font-semibold uppercase tracking-widest text-xs shadow-xl transition-all hover:translate-y-[-2px] active:scale-95 no-underline text-center">
              Explore Experiences
            </Link>
            <Link to="/contact" className="w-full md:w-auto border border-primary/30 text-primary px-10 py-5 font-label font-semibold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all active:scale-95 no-underline text-center">
              Begin the Conversation
            </Link>
          </div>
          <div className="relative w-full max-w-4xl mx-auto py-12 border-y border-outline-variant/20">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
              <span className="font-label text-[10px] uppercase tracking-[0.3rem] text-primary/60 w-full mb-4">Our Presence</span>
              {locations.map((loc, i) => (
                <span key={loc} className="flex items-center gap-6">
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant/80">{loc}</span>
                  {i < locations.length - 1 && <span className="text-primary/40">&bull;</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute left-12 bottom-12 hidden lg:flex items-center gap-4 rotate-90 origin-left">
          <span className="font-label text-[10px] uppercase tracking-[0.5rem] text-primary">Est. 2024</span>
          <div className="w-12 h-px bg-primary/40" />
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-32 bg-surface-container-low border-y border-primary-container/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[0.5px] w-12 bg-primary-container" />
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">Our Promise</span>
            <div className="h-[0.5px] w-12 bg-primary-container" />
          </div>
          <p className="font-headline text-xl md:text-2xl leading-relaxed text-on-surface text-center mb-12">
            Some events are remembered for what happened. The best ones are remembered for how they felt. At Abhima Events, we build celebrations that live in both categories — immaculately executed, deeply personal, and quietly extraordinary.
          </p>
          <p className="text-secondary text-center leading-relaxed max-w-3xl mx-auto">
            We are a bespoke event curation house — rooted in Hyderabad, operating across India — that treats every celebration, regardless of scale, as if it is the only event in the world that matters. Because to the people hosting it, it is.
          </p>
        </div>
      </section>

      {/* What We Do + Brand Statement */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">What We Do</span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight mb-8">Every Detail, Quietly Managed.</h2>
              <p className="text-secondary leading-relaxed mb-6">
                From intimate family rituals to grand destination celebrations, Abhima Events curates experiences of every scale with the same uncompromising standard. Weddings that honour centuries of tradition. Corporate events that reflect an organisation at its best. Private milestones marked with quiet elegance. Spiritual gatherings managed with reverence and precision.
              </p>
              <p className="text-secondary leading-relaxed">
                Rooted in tradition and guided by disciplined execution, we manage every detail quietly behind the scenes — so that every moment unfolds effortlessly, and every person present can simply be there.
              </p>
            </div>
            <div className="bg-surface-container p-12 lg:mt-12">
              <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-8 block">Brand Statement</span>
              <h3 className="font-headline text-2xl md:text-3xl italic text-on-surface leading-snug mb-8">
                "Discretion over display. Precision over excess. Refinement over spectacle."
              </h3>
              <p className="text-secondary leading-relaxed">Because true luxury is not seen — it is felt.</p>
              <div className="mt-10 h-[0.5px] w-16 bg-primary-container" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Abhima */}
      <section className="py-32 bg-surface-container">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Why Abhima</span>
              <h2 className="font-headline text-5xl text-on-surface leading-tight">The Pillars of Our Craft.</h2>
              <div className="mt-10 space-y-4">
                {whyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <span className="w-6 h-px bg-primary mt-3 shrink-0" />
                    <p className="text-sm text-secondary leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
              {pillars.map((p) => (
                <div key={p.title} className="space-y-6">
                  <span className="material-symbols-outlined text-primary text-4xl">{p.icon}</span>
                  <h4 className="font-headline text-xl text-on-surface">{p.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Statement */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 relative overflow-hidden h-[400px] md:h-[600px]">
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm49pGWUDgCTC95P1nRxaZ8-C5kVSXFkWH0CK9CCvuIk4L8Pqpc5IPqwpS4uUJ2Ekgl06xp9yNyY4JupniURtE9-0g2XE7Eklxrq0BpHubackcgv0QLIDbFazKZFLq3PXgJKCZGUkKDH_b0L80Gkwzu2Qj3ZdmNvTvB4N7NIyYcxe0r6ToViVs6tpI4dSEAXMvR61BzFKeKafU-X20LIylfUy0YoFJn-GjqHbL6Wng8lP3QySnLAVMz8UZ76NlR-m8XrmFa6pUxkeO" alt="In-house event execution" />
            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 p-6 md:p-8 bg-surface/90 backdrop-blur-md max-w-sm">
              <span className="text-primary text-[10px] uppercase tracking-widest mb-4 block">In-House Capability</span>
              <h3 className="font-display text-2xl md:text-3xl mb-4">Everything Under One Roof</h3>
              <p className="text-secondary text-sm leading-relaxed">From culinary curation and decor to photography, live production, and on-ground direction — everything is handled by our own team.</p>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center space-y-12 pl-0 md:pl-12">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl leading-tight">One Team. <br /><span className="italic">One Standard.</span></h2>
              <p className="text-on-surface-variant/80 text-lg font-light leading-relaxed">
                Other companies manage your event. We own it. Every service we offer is delivered by our own in-house team. There is no outsourcing, no handoffs, no dependency on a vendor who is simultaneously working three other events on your celebration day.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
              <div>
                <span className="text-primary font-bold text-2xl">100%</span>
                <p className="text-xs uppercase tracking-widest text-secondary mt-2">In-House Delivery</p>
              </div>
              <div>
                <span className="text-primary font-bold text-2xl">9+</span>
                <p className="text-xs uppercase tracking-widest text-secondary mt-2">Destinations</p>
              </div>
            </div>
            <Link to="/services" className="inline-flex items-center gap-4 font-label text-xs uppercase tracking-[0.2em] font-bold text-primary group no-underline">
              View Our Capabilities
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Category Teasers */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1920px]">
          <div className="mb-20 flex flex-col md:flex-row items-baseline gap-4 px-6">
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">Our Experiences</span>
            <h2 className="font-headline text-4xl text-on-surface">Four Distinct Domains</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 px-6">
            {categoryTeasers.map((exp) => (
              <div key={exp.title} className={`group cursor-pointer ${exp.offset ? 'md:mt-24' : ''}`}>
                <div className="aspect-[3/4] overflow-hidden mb-6 relative border border-primary-container/10 p-4">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={exp.image} alt={exp.title} />
                </div>
                <span className="font-label text-primary text-[10px] uppercase tracking-widest block mb-2">{exp.label}</span>
                <h3 className="font-headline text-xl mb-4 group-hover:text-primary transition-colors">{exp.title}</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-6">{exp.description}</p>
                <Link to="/experiences" className="text-xs font-headline uppercase tracking-widest border-b border-outline-variant pb-1 group-hover:border-primary transition-colors no-underline text-on-surface">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 border-b border-primary-container/10">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">Venues</span>
            <h2 className="font-headline text-4xl text-on-surface">Preferred Destinations</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
            {['Udaipur', 'Jaipur', 'Goa', 'Kerala', 'Hyderabad'].map((dest, i, arr) => (
              <span key={dest} className="flex items-center gap-8 md:gap-12">
                <Link to="/destinations" className="font-headline text-2xl md:text-4xl text-outline-variant hover:text-primary transition-colors cursor-pointer no-underline">{dest}</Link>
                {i < arr.length - 1 && <div className="h-[1px] w-8 bg-primary-container/20" />}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-secondary">
            Also: Across Telangana & Andhra Pradesh &middot; International destinations on request
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-40 bg-surface-container-low relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none luxury-gradient" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-8 block">Let's Begin</span>
          <h2 className="font-headline text-4xl md:text-6xl mb-8 text-on-surface leading-tight">
            If your celebration matters — it deserves to be in the right hands.
          </h2>
          <p className="font-body text-secondary mb-16 leading-relaxed max-w-xl mx-auto">
            We accept a limited number of commissions each year to ensure uncompromising quality. Tell us about your vision.
          </p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-16 py-6 font-label uppercase tracking-[0.2rem] text-sm hover:scale-[1.05] transition-transform no-underline inline-block">
            Begin the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
