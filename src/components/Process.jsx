const steps = [
  {
    num: '01',
    title: 'Discovery',
    description:
      "Understanding the client's silent desires and establishing the creative core. This is where we listen to what remains unsaid, identifying the emotional resonance that will guide the entire experience.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCN6gFlJuh37bacEWt59rUOqUp7obfw9jeCS99ERkjZUAeYpwYNuUrWS0dBQ0GVSYFtrNKgxSSZG7NhnIIr06KLpq4uQUFHiChAgRh0wkdm4QberYha9XRNuMEpG48P7Jw_nkK6tJoGqfPDarKCPAcgQt5CsoCYMVTYajQXzYqWplBID0NH-ZjRfQ0LQZAkTOLJNXWNU5bJilj7uFaxUhawlEZ9rAji-Gr7BMBHfVYAc5yyiKCwe7W7cIAPGbSwGkTX1HgevjsJfRxM',
    imageAspect: 'aspect-[4/3]',
    layout: 'normal',
  },
  {
    num: '02',
    title: 'Concept Development',
    description:
      'Crafting a bespoke vision board and sensory palette. We move beyond visuals to define textures, scents, and sounds\u2014the atmospheric pillars of your event.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA96EqhICT_a8PDCqUUAiXmevl0By_FwH-Y4lQ6TndXOABCwRjHdnB02NBm7MnjGteO362l6LzzwXu8U5r4_LZiV1g_FbOiPUISHbuqVwN_nMXnw26hhVO28lK1lM_Es7zJ4VCjMssqVoBuYkjI69E9XQ9mADdD49o4d5ntmv1tn2oqrrITJCD1q1piFq7ky-3Tvf5lo_bc9zEZHYMl2njU91ZjpUiRhRkAwWKUX7ggKzE7NCWZJUSWWHYliWcU-q26fZXpUciIL5XT',
    imageAspect: 'aspect-square max-w-md mx-auto',
    layout: 'reversed',
    bg: true,
  },
  {
    num: '03',
    title: 'Planning & Structure',
    description:
      'The architectural phase. Precision logistics and venue sourcing. Every logistical detail is treated with the gravity of structural engineering, ensuring a foundation of absolute stability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqItUyMTbgD1MNv9n1QikLJzqhZ2CGdPXwC4_XsNwerH5qEbgXTX19HHS6KO232abMnOuPv4Rv3bVWDHH9rNzhuB0tiWibKqvWKPf6S32ZuXwqzG5Hgky4IdtEnzwVA3S3uN72BYXjkcBclnZMBNT8CLAVq88BA_93FF4OZX5Yl-E30oWVyxbPdoLgDdRvxqZ6BO9gPsn7tUxG3gzK4z2hWM61PM2W_rBWVs7BYE6zRj8I1sVzUF8NsH89j1OYlva_MX1FqcFGkAUw',
    imageAspect: 'aspect-[3/4] w-full md:w-4/5 ml-auto',
    layout: 'normal',
    listItems: ['Global Venue Sourcing', 'Technical Site Mapping', 'Risk Mitigation'],
  },
  {
    num: '04',
    title: 'Curation & Preparation',
    description:
      'Selecting the finest artisans, florists, and materials. We curate a dream team of creators who share our commitment to the impeccable and the extraordinary.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLvMWQliCBIXIKAkL--kFWmF9MYu0MO_uU9uZzrlKpwErITj4axdOzDzH5WOsmPb58fMi6wQscRSkPk1rwSDec4S0dRsimS3Xw_JiQ8-luhGuFaI-JQGZg_NHYa67g07HK1NfXOtwXykdRrGExzWYSGZ4mW5mrAEptkXxsAkWXVKfWeHKo6oSf3VkSDN2KJMDmM1DRyj62VlRmsbYwdVxkWRf4rO5Wrr7UaMVf5Zy-tgBPqFRl5fXoQu3drGDorwziYX985wj_aUhl',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlMt6Au6JhL_RXClKzeMtObPXafHbJTpi9F6XZEO0xBgA73T2gAhNUGRQPHdhM-Wx0w_ZlgOCVBVcKoiSR7TIITDzuCYyJGfpQaQeRNOnTISqRzLKpSOLSI2ZNDv8HDkH2Mw4gCS_nCTCDoBbHD0zMzk0w-y5Pkswv6xIL5inGxyJHge3u4xuCYi5bgZGatZXPjEPlW03diX6atpWmOqoXOIFj23WPaX5xaXgWMPsPRrG1ERnfO5Bo28DD32lUpTQZv35E7BZIx5fy',
    ],
    layout: 'grid',
    bg: true,
  },
]

export default function Process() {
  return (
    <section className="bg-surface">
      {/* Header */}
      <header className="px-6 md:px-12 pt-32 mb-32 max-w-7xl mx-auto">
        <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">
          The Methodology
        </span>
        <h2 className="font-headline text-5xl md:text-7xl font-light leading-tight tracking-[0.5rem] text-on-surface">
          The Orchestration <br />
          of Excellence
        </h2>
        <p className="mt-8 text-secondary max-w-2xl font-light leading-relaxed text-lg">
          At ABHIMA, we believe true luxury is found in the unspoken. Our
          process is a silent choreography of precision, artistry, and
          intuition, turning abstract desires into tangible legacies.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-primary-container/30 hidden md:block" />

        {steps.map((step) => {
          if (step.layout === 'grid') {
            return (
              <div
                key={step.num}
                className={`relative md:pl-24 mb-48 py-32 ${
                  step.bg ? 'bg-surface-dim/20' : ''
                }`}
              >
                <div className="absolute left-[-4px] top-32 w-2 h-2 rounded-full bg-primary hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center px-6 md:px-12">
                  <div className="md:col-span-6">
                    <div className="grid grid-cols-2 gap-4">
                      {step.images.map((img, i) => (
                        <img
                          key={i}
                          className={`w-full h-64 object-cover ${
                            i === 1 ? 'mt-12' : ''
                          }`}
                          src={img}
                          alt={`${step.title} detail ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <span className="font-headline text-4xl italic text-primary-container/60 mb-2 block">
                      {step.num}
                    </span>
                    <h3 className="font-headline text-4xl mb-6 font-light tracking-[0.5rem]">
                      {step.title}
                    </h3>
                    <p className="text-secondary leading-relaxed font-light text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          }

          if (step.layout === 'reversed') {
            return (
              <div
                key={step.num}
                className={`relative md:pl-24 mb-48 py-24 ${
                  step.bg ? 'bg-surface-container-low/50' : ''
                } px-6 md:px-12`}
              >
                <div className="absolute left-[-4px] top-24 w-2 h-2 rounded-full bg-primary hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                  <div className="md:col-span-7 order-2 md:order-1">
                    <div className={`${step.imageAspect} overflow-hidden`}>
                      <img
                        className="w-full h-full object-cover opacity-80"
                        src={step.image}
                        alt={step.title}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5 order-1 md:order-2">
                    <span className="font-headline text-4xl italic text-primary-container/60 mb-2 block">
                      {step.num}
                    </span>
                    <h3 className="font-headline text-4xl mb-6 font-light tracking-[0.5rem]">
                      {step.title}
                    </h3>
                    <p className="text-secondary leading-relaxed font-light text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          }

          // Normal layout
          return (
            <div key={step.num} className="relative md:pl-24 mb-48 group">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5">
                  <span className="font-headline text-4xl italic text-primary-container/60 mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="font-headline text-4xl mb-6 font-light tracking-[0.5rem]">
                    {step.title}
                  </h3>
                  <p className="text-secondary leading-relaxed font-light text-lg mb-8">
                    {step.description}
                  </p>
                  <div className="h-px w-12 bg-primary mb-8" />
                  {step.listItems && (
                    <ul className="space-y-4 font-label text-[10px] tracking-widest uppercase text-primary">
                      {step.listItems.map((item) => (
                        <li key={item} className="flex items-center gap-4">
                          <span className="w-8 h-px bg-primary/30" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="md:col-span-7">
                  <div
                    className={`${step.imageAspect} overflow-hidden bg-surface-container-low`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={step.image}
                      alt={step.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Step 05 — The Day */}
        <div className="relative md:pl-24">
          <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary hidden md:block" />
          <div className="max-w-4xl">
            <span className="font-headline text-4xl italic text-primary-container/60 mb-2 block">
              05
            </span>
            <h3 className="font-headline text-5xl md:text-7xl mb-12 font-light tracking-[0.5rem]">
              The Day
            </h3>
            <div className="aspect-video w-full mb-12 overflow-hidden">
              <img
                className="w-full h-full object-cover brightness-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXS-UwZy7C91QjegCiRN9wTaI45hmFrSb0AetnOkh_7t1cDW5s0bdd_1MbTKpd_lme59_t3hM3PM7hcsqysyHhlg_kzDHebFra3nQ8x1gQk188gwqYwhw_hfeqgRQdE0DpEz-2W_n-XPmiypEnjzzC26ErE0HUOtl7YqdDy9wZ78Yo5RXcBSNHzFpyfYFKkUU77_yITdCQF79xMCHcmdEvNRKoqP7QqbpOO_kRrxq6CQlRrlBJD3EvTW7aBd6RL7WR9gpFOoLOoRTu"
                alt="Elegant luxury dining room prepared for a gala"
              />
            </div>
            <p className="text-secondary leading-relaxed font-light text-xl">
              Flawless execution where every detail is a dialogue between vision
              and craftsmanship. On the day, our presence is invisible but our
              impact is felt in every seamless transition and perfected moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
