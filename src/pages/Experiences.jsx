import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Heritage Events',
    title: 'Weddings & Ceremonial Celebrations',
    tagline: 'Honouring Every Tradition. Elevating Every Moment.',
    description: 'A wedding is not a single event. It is a series of ceremonies — each with its own meaning, its own rhythm, its own emotional weight. At Abhima Events, we carry a practised, deep understanding of Telugu and South Indian wedding traditions — every ceremony, every ritual, every customary detail.',
    subtext: 'We do not impose aesthetics. We reveal yours. The design, the decor, the tone of your wedding — all of it emerges from who you are and what your celebration means to your family.',
    items: [
      'Destination weddings — across India and international locations',
      'Pelli Choopulu & Nischitartham',
      'Sangeeth & cocktail evenings',
      'Haldi & Mehendi ceremonies',
      'Mangalsnanam & all wedding rituals',
      'Receptions & after-parties',
      'Gruhapravesam',
      'Seemantham & baby shower ceremonies',
      'Namakaranam — naming ceremonies',
      'Upanayanam & sacred thread ceremonies',
      'Sashtiapthapoorthi & milestone celebrations',
      'Intercultural & blended wedding celebrations',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtDiyn4BRFqtHH7M0zqJAyLtghIXW4rcb2HC7KZqEkovMqGMKxqnTa2awznHvo7xr_RMqPJssOwjN7tSL3OzWKbkbXcTtBkba3F7UN0yxaBC9SWmvNkIjoHC3xUEK421hzUzM0d4zBAQ9fASndLzf-8A0ev7i2o8pz1xbgoWmaggnRKWYOv2IFaJD7N15SFx8KqT6VJnitzy8PE6_9bvy5mlHHkgGACQIrt4PKBvQrk2VCCWboQutDUyOlU6EwSjsaM-BupgWyfHlU',
  },
  {
    label: 'Corporate Atelier',
    title: 'Corporate & Brand Experiences',
    tagline: 'Events That Reflect Your Organisation at Its Best.',
    description: 'A corporate event is a statement. The quality of your conference, the precision of your awards evening, the hospitality you extend to your partners — these moments shape how your brand is perceived. They are not logistics exercises. They are brand experiences.',
    subtext: 'From a 50-person executive retreat to a 500-delegate national conference — the discipline is the same. Your team focuses on the agenda. We handle everything else.',
    items: [
      'Leadership conferences & annual strategy summits',
      'Annual general meetings & board-level events',
      'Product launches & brand activation events',
      'Awards evenings & employee recognition nights',
      'Dealer meets & channel partner conferences',
      'Executive offsites & leadership retreats',
      'Investor meets & stakeholder dinners',
      'Team engagement events & corporate celebrations',
      'Exhibitions, trade shows & brand activations',
      'MICE — Meetings, Incentives, Conferences, Exhibitions',
      'CSR events & community programmes',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw-prKcyHWGuGfbyvEBgkx8xTSZRh6Nbxc7ox3L6R9-bl28PdZlAZZ6P5XrxCtSST7sC87tQPbChWom12YBQGgIhgumXKDkWia7Orl0OO1zitzbut0eFwaKjoeah0bVNB_W3QewVx_HvP2qhpJ37a7VMhiTWH7EEINCKs9J6JjwzDqmfUh6Tm7gS6djGbAJaYam00fOAsLKN8jt3C-mvFqLzuBSTBz7BQ5UZWmjygvaoCL_06jxYo1QN5Wl8rAO2YpILSatl2_HFPn',
  },
  {
    label: 'Bespoke Gatherings',
    title: 'Private & Social Celebrations',
    tagline: 'Personal Milestones, Quietly Extraordinary.',
    description: 'Not every great celebration is a grand one. Some of the most meaningful events we have managed have been the most intimate — a milestone birthday, an anniversary dinner, a gathering of close family that felt warm and effortless rather than managed.',
    subtext: 'At Abhima Events, we approach every private celebration as if it were our own — with the same attention, the same quality, and the same pride.',
    items: [
      'Birthday celebrations across all age groups',
      'Silver, golden & platinum anniversaries',
      'Milestone celebrations — 25, 50, 60, 75 years',
      'Private residence & villa events',
      'Intimate dining experiences & curated gatherings',
      'Baby showers & family milestone ceremonies',
      'Farewell celebrations & homecoming events',
      'Engagement parties & pre-wedding social events',
      'Reunion gatherings — family & professional',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm_Ld70vATW6s7hVb0aeAPaTwM8o8C9uPyoG_JxFceGKhLoM2bgR9qYNSTIE_KmfsClApvQi_25T-BZJVpMbyWBfVFk-I-Ca2YgsRH4ka9lFFFBYOT4s_qcOe5hul9QGIDIXbErjE9ZmMtRmgsx1p99RlRToqr8iP3TL7xFhNP-mmp-jyQ-vYkWD3EFyZlJS7b4husprT3KquOcq3P7Y_Y9f33ElnfbQ29PLjyX2LPsFpwsoq4ocGviUXmmxvnj8ng4rrMsBlmukGH',
  },
  {
    label: 'Soulful Journeys',
    title: 'Spiritual & Cultural Events',
    tagline: 'Managed with Reverence. Executed with Precision.',
    description: 'Spiritual gatherings are among the most responsibility-laden events we manage. They require cultural knowledge, ritual accuracy, and a quality of presence that is attentive without being intrusive. The sacred nature demands a team that understands not just the logistics — but the meaning.',
    subtext: null,
    items: [
      'Pujas, homams & vrathams — all occasions',
      'Satyanarayan puja & Varalakshmi Vratam',
      'Temple ceremonies & annadanam',
      'Festival celebrations — Ugadi, Diwali, Navratri & more',
      'Spiritual congregations & satsangs',
      'Gruhapravesam — traditional housewarming ceremonies',
      'Ayushya homam & Sashtiapthapoorthi',
      'Cultural programmes & community celebrations',
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLQiyLZpOrTnrJC6zvbX0nIf6IaNF4zFLsOvAu8iPSYmzaot1vxksLHbszpMy4E_FM6Uiyr-Q04l0Typ4hMEhp5KcP94yH7PGKE1lNVp76Qa1tvIelvBYs8VUAhySFZKE1VvZQUkuNssfjnrjvAAR5SUDdzKXp09WgTSFJpFsNJmVGDiJa3IvjBqF9U_Lc4pWf_Mc8t-9KGqFus0h-zW8S0T15K83-6CqGR-MAYey2OpLCKseWmm8VkEKXZWXo18PqLip9lq65AFeN',
  },
]

export default function Experiences() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Our Experiences</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          Every Celebration. <span className="italic font-light">One Standard.</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          We curate experiences across four distinct domains — each requiring a different kind of knowledge, a different emotional register, and a different execution discipline. What never changes is the standard we bring to all of them.
        </p>
      </header>

      {/* Categories */}
      {categories.map((cat, index) => {
        const isReversed = index % 2 === 1

        return (
          <section key={cat.title} className={`py-24 md:py-32 ${isReversed ? 'bg-surface-container-low' : ''}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* Top: Section label + title + tagline */}
              <div className="mb-12">
                <span className="font-label text-primary text-[10px] uppercase tracking-widest block mb-4">{cat.label}</span>
                <h2 className="font-headline text-4xl md:text-5xl mb-4 leading-tight">{cat.title}</h2>
                <p className="font-headline text-lg italic text-primary">{cat.tagline}</p>
              </div>

              {/* Middle: Image + Description side by side */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16`}>
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="aspect-[3/2] overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      src={cat.image}
                      alt={cat.title}
                    />
                  </div>
                </div>
                <div className={`flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                  <p className="text-secondary leading-relaxed text-lg mb-6">{cat.description}</p>
                  {cat.subtext && <p className="text-secondary leading-relaxed">{cat.subtext}</p>}
                </div>
              </div>

              {/* Bottom: Events list in compact grid */}
              <div className="bg-surface-container/50 p-8 md:p-12">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary block mb-8">Events We Manage</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-secondary">
                      <span className="w-4 h-px bg-primary/40 mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-32 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-4xl mb-8">Your Celebration Awaits</h2>
          <p className="text-secondary mb-12 text-lg leading-relaxed">Every event begins with a conversation. Tell us about yours.</p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Begin the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
