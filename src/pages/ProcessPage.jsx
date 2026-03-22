import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'We listen before we design.',
    description: 'Every engagement begins with a conversation — not a presentation, not a proposal. We sit with you and we listen. We want to understand the occasion, the people it is for, the traditions that matter, the memories you want to create, and the things you never want to worry about.',
    extra: 'There is no right or wrong brief. Some clients arrive with a fully formed vision. Others know only how they want it to feel. We work with both — and everything in between.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN6gFlJuh37bacEWt59rUOqUp7obfw9jeCS99ERkjZUAeYpwYNuUrWS0dBQ0GVSYFtrNKgxSSZG7NhnIIr06KLpq4uQUFHiChAgRh0wkdm4QberYha9XRNuMEpG48P7Jw_nkK6tJoGqfPDarKCPAcgQt5CsoCYMVTYajQXzYqWplBID0NH-ZjRfQ0LQZAkTOLJNXWNU5bJilj7uFaxUhawlEZ9rAji-Gr7BMBHfVYAc5yyiKCwe7W7cIAPGbSwGkTX1HgevjsJfRxM',
  },
  {
    num: '02',
    title: 'Concept Development',
    subtitle: 'We translate what you feel into what your guests will experience.',
    description: 'Based on our discovery conversations, we develop a bespoke event concept — covering the design language, the mood, the experiential flow, and the specific cultural or brand elements that make your celebration yours.',
    extra: 'We refine this concept with you until it is exactly right. Nothing moves forward until you are completely satisfied with the direction.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA96EqhICT_a8PDCqUUAiXmevl0By_FwH-Y4lQ6TndXOABCwRjHdnB02NBm7MnjGteO362l6LzzwXu8U5r4_LZiV1g_FbOiPUISHbuqVwN_nMXnw26hhVO28lK1lM_Es7zJ4VCjMssqVoBuYkjI69E9XQ9mADdD49o4d5ntmv1tn2oqrrITJCD1q1piFq7ky-3Tvf5lo_bc9zEZHYMl2njU91ZjpUiRhRkAwWKUX7ggKzE7NCWZJUSWWHYliWcU-q26fZXpUciIL5XT',
  },
  {
    num: '03',
    title: 'Planning & Structure',
    subtitle: 'Every variable is accounted for before the day begins.',
    description: 'Venue selection and negotiation. Ceremony scheduling and ritual sequencing. Catering menus and culinary briefings. Photography and AV direction. Guest communication plans. Transport and accommodation logistics. Contingency planning for every scenario.',
    extra: 'No detail is too small to plan. No possibility is too remote to consider. By the time planning is complete, the event has already happened — on paper, in meticulous detail.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqItUyMTbgD1MNv9n1QikLJzqhZ2CGdPXwC4_XsNwerH5qEbgXTX19HHS6KO232abMnOuPv4Rv3bVWDHH9rNzhuB0tiWibKqvWKPf6S32ZuXwqzG5Hgky4IdtEnzwVA3S3uN72BYXjkcBclnZMBNT8CLAVq88BA_93FF4OZX5Yl-E30oWVyxbPdoLgDdRvxqZ6BO9gPsn7tUxG3gzK4z2hWM61PM2W_rBWVs7BYE6zRj8I1sVzUF8NsH89j1OYlva_MX1FqcFGkAUw',
  },
  {
    num: '04',
    title: 'Curation & Preparation',
    subtitle: 'Everything is prepared in-house, to our standard, before the day.',
    description: 'Our team executes in parallel — designing and producing decor, preparing catering, briefing photography and AV teams, coordinating guest communications, and completing technical rehearsals. Every element is tested, reviewed, and approved before the day.',
    extra: 'The only surprises on the day should be beautiful ones.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLvMWQliCBIXIKAkL--kFWmF9MYu0MO_uU9uZzrlKpwErITj4axdOzDzH5WOsmPb58fMi6wQscRSkPk1rwSDec4S0dRsimS3Xw_JiQ8-luhGuFaI-JQGZg_NHYa67g07HK1NfXOtwXykdRrGExzWYSGZ4mW5mrAEptkXxsAkWXVKfWeHKo6oSf3VkSDN2KJMDmM1DRyj62VlRmsbYwdVxkWRf4rO5Wrr7UaMVf5Zy-tgBPqFRl5fXoQu3drGDorwziYX985wj_aUhl',
  },
  {
    num: '05',
    title: 'The Day',
    subtitle: 'You are present. We are everywhere.',
    description: 'On the day of your celebration, our on-ground direction team takes over completely. Timeline management, ceremony pacing, vendor coordination, guest management, technical direction — all of it runs through our team. Issues are resolved before they surface.',
    extra: 'You will not be asked to make decisions, chase a vendor, or manage a problem. You will simply be present — in every moment that matters.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXS-UwZy7C91QjegCiRN9wTaI45hmFrSb0AetnOkh_7t1cDW5s0bdd_1MbTKpd_lme59_t3hM3PM7hcsqysyHhlg_kzDHebFra3nQ8x1gQk188gwqYwhw_hfeqgRQdE0DpEz-2W_n-XPmiypEnjzzC26ErE0HUOtl7YqdDy9wZ78Yo5RXcBSNHzFpyfYFKkUU77_yITdCQF79xMCHcmdEvNRKoqP7QqbpOO_kRrxq6CQlRrlBJD3EvTW7aBd6RL7WR9gpFOoLOoRTu',
  },
]

export default function ProcessPage() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">The Methodology</span>
        <h1 className="font-headline text-5xl md:text-7xl font-light leading-tight tracking-[0.3rem] mb-8">
          From First Conversation <br />to the Perfect Day
        </h1>
        <p className="text-secondary max-w-2xl font-light leading-relaxed text-lg">
          Our process is designed around one principle: the more clearly we understand your vision, the more completely we can bring it to life. Every step builds on the last, every decision is made together.
        </p>
      </header>

      <section className="relative px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-primary-container/30 hidden md:block" />

        {steps.map((step, i) => (
          <div key={step.num} className={`relative md:pl-24 mb-32 ${i % 2 === 1 ? 'py-24 bg-surface-container-low/50' : ''}`}>
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary hidden md:block" />
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-start ${i % 2 === 1 ? 'px-6 md:px-12' : ''}`}>
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                {i % 2 !== 1 && (
                  <>
                    <span className="font-headline text-4xl italic text-primary-container/60 mb-2 block">{step.num}</span>
                    <h2 className="font-headline text-4xl mb-4 font-light tracking-[0.3rem]">{step.title}</h2>
                    <p className="font-headline text-lg italic text-primary mb-6">{step.subtitle}</p>
                    <p className="text-secondary leading-relaxed font-light text-lg mb-6">{step.description}</p>
                    <p className="text-secondary leading-relaxed font-light">{step.extra}</p>
                    <div className="h-px w-12 bg-primary mt-8" />
                  </>
                )}
                {i % 2 === 1 && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img className="w-full h-full object-cover transition-all duration-700" src={step.image} alt={step.title} />
                  </div>
                )}
              </div>
              <div className={`md:col-span-7 ${i % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                {i % 2 !== 1 && (
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container-low">
                    <img className="w-full h-full object-cover transition-all duration-700" src={step.image} alt={step.title} />
                  </div>
                )}
                {i % 2 === 1 && (
                  <>
                    <span className="font-headline text-4xl italic text-primary-container/60 mb-2 block">{step.num}</span>
                    <h2 className="font-headline text-4xl mb-4 font-light tracking-[0.3rem]">{step.title}</h2>
                    <p className="font-headline text-lg italic text-primary mb-6">{step.subtitle}</p>
                    <p className="text-secondary leading-relaxed font-light text-lg mb-6">{step.description}</p>
                    <p className="text-secondary leading-relaxed font-light">{step.extra}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-32 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-4xl mb-8">Ready to Begin?</h2>
          <p className="text-secondary mb-12 text-lg">Join us for a private consultation to discuss how we can bring your most ambitious visions to life.</p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  )
}
