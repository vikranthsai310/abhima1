import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  { q: 'Do you handle small events as well as large ones?', a: 'Yes — and with the same rigour. Abhima Events manages celebrations of every scale, from an intimate puja at a private residence to a multi-day destination wedding with hundreds of guests. Scale does not define our standard. Whether there are 20 guests or 500, our approach, our team, and our quality of execution remain unchanged.' },
  { q: 'Is everything delivered in-house, or do you use external vendors?', a: 'Everything is in-house. Our decor and styling team, culinary and catering team, photography and cinematography team, AV and production team, and on-ground event direction team are all Abhima\'s own. We do not subcontract your celebration to third parties. There is one team, one standard, and one point of accountability throughout.' },
  { q: 'Do you take multiple events on the same date?', a: 'We deliberately limit the number of events we manage on any given date. This is a commitment, not a constraint. It means every client receives the full attention of our senior team — on every day of planning and on the event day itself.' },
  { q: 'Can you manage traditional and modern celebrations together?', a: 'Absolutely. Cultural authenticity and contemporary design coexist very naturally in our work. Many of our celebrations blend traditional Telugu or South Indian ceremonies with modern aesthetics, international entertainment, or contemporary settings. Neither element loses its integrity.' },
  { q: 'Do you offer destination wedding planning?', a: 'Yes. We curate destination weddings across India — Udaipur, Jaipur, Goa, Kerala, Hyderabad, Delhi, Mumbai, and beyond — as well as select international destinations. For destination events, we manage everything: venue scouting, pandit coordination, accommodation and transport for guests, and complete on-ground management.' },
  { q: 'How involved do clients need to be during planning?', a: 'As much or as little as you prefer — genuinely. Some clients want to be involved in every decision. Others want to articulate their vision and trust us to execute it completely. We are equally comfortable with both. We take full operational responsibility regardless.' },
  { q: 'When should we contact Abhima Events?', a: 'For destination weddings: ideally 9-12 months ahead. For local weddings and major corporate events: 6 months. Private celebrations and smaller events can often be managed within shorter timelines depending on complexity and availability. The earlier you reach out, the more completely we can serve you.' },
  { q: 'How do you protect client privacy?', a: 'With absolute seriousness. All client information, event details, guest lists, and personal conversations are handled with complete confidentiality. We never feature, photograph, reference, or promote a client\'s event without their explicit, prior written consent. Discretion is a practice, not a policy document.' },
  { q: 'Do you work with clients\' preferred vendors or specialists?', a: 'Yes. If you have a photographer, a florist, or any specialist you trust, we are happy to coordinate with them under our direction and within our quality standards. Our in-house capabilities mean we are not dependent on any external party — but we are always open to incorporating trusted relationships.' },
  { q: 'How do you approach budgeting?', a: 'Transparently and practically. We work across a range of budgets and always begin by understanding what matters most to you. We do not inflate scope, create unnecessary spend, or push elements you have not asked for. Every cost is presented clearly and every decision is yours to make.' },
  { q: 'What types of corporate clients do you work with?', a: 'Organisations across sectors — manufacturing, pharmaceuticals, financial services, technology, FMCG, real estate, and professional services. From established family businesses to national corporations and multinational companies with India operations.' },
  { q: 'You were previously KPK Events — what changed?', a: 'The team, the relationships, and the commitment to quality have not changed. What changed is the ambition and the identity. As our capabilities grew, it felt right to build a brand that truly reflected what we had become. Abhima Events is the same trusted team, operating to a higher standard, under a name that says it.' },
]

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">FAQs</span>
        <h1 className="font-headline text-5xl md:text-7xl tracking-tighter leading-none mb-8">
          Everything You <span className="italic font-light">May Wonder</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          We believe in complete transparency from the very first conversation. If anything is not answered here, we are always available to speak personally.
        </p>
      </header>

      <section className="pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="divide-y divide-outline-variant/30">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8">
              <button
                className="w-full flex items-start justify-between gap-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors leading-snug">{faq.q}</h3>
                <span className="material-symbols-outlined text-primary shrink-0 mt-1 transition-transform duration-300" style={{ transform: open === i ? 'rotate(180deg)' : '' }}>
                  expand_more
                </span>
              </button>
              {open === i && (
                <div className="mt-6 pl-0 md:pl-0">
                  <p className="text-secondary leading-relaxed max-w-3xl">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface-container-low text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-3xl mb-8">Still Have Questions?</h2>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
