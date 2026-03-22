const pillars = [
  {
    icon: 'diamond',
    title: 'Precision',
    description:
      'The architecture of an event is found in the smallest details, executed with surgical exactness.',
  },
  {
    icon: 'lock',
    title: 'Discretion',
    description:
      'Our most loyal clients value privacy above all else. We operate in the shadows to let you shine.',
  },
  {
    icon: 'castle',
    title: 'Heritage',
    description:
      'We weave local culture and timeless traditions into modern narratives for a lasting legacy.',
  },
]

export default function Pillars() {
  return (
    <section className="py-32 bg-surface-container">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3">
            <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">
              04 — Excellence
            </span>
            <h2 className="font-headline text-5xl text-on-surface leading-tight">
              The Pillars of Our Craft.
            </h2>
            <p className="mt-8 text-secondary font-body leading-relaxed max-w-sm">
              Behind every extraordinary event lies a disciplined commitment to
              three non-negotiable standards.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="space-y-6">
                <span className="material-symbols-outlined text-primary text-4xl">
                  {pillar.icon}
                </span>
                <h4 className="font-headline text-xl text-on-surface">
                  {pillar.title}
                </h4>
                <p className="text-sm text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
