const experiences = [
  {
    label: 'Heritage Events',
    title: 'Weddings',
    description: 'Timeless unions celebrated in the world\'s most storied landscapes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtDiyn4BRFqtHH7M0zqJAyLtghIXW4rcb2HC7KZqEkovMqGMKxqnTa2awznHvo7xr_RMqPJssOwjN7tSL3OzWKbkbXcTtBkba3F7UN0yxaBC9SWmvNkIjoHC3xUEK421hzUzM0d4zBAQ9fASndLzf-8A0ev7i2o8pz1xbgoWmaggnRKWYOv2IFaJD7N15SFx8KqT6VJnitzy8PE6_9bvy5mlHHkgGACQIrt4PKBvQrk2VCCWboQutDUyOlU6EwSjsaM-BupgWyfHlU',
    offset: false,
  },
  {
    label: 'Corporate Atelier',
    title: 'Corporate',
    description: 'Precision-engineered environments for visionary leadership and brand storytelling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw-prKcyHWGuGfbyvEBgkx8xTSZRh6Nbxc7ox3L6R9-bl28PdZlAZZ6P5XrxCtSST7sC87tQPbChWom12YBQGgIhgumXKDkWia7Orl0OO1zitzbut0eFwaKjoeah0bVNB_W3QewVx_HvP2qhpJ37a7VMhiTWH7EEINCKs9J6JjwzDqmfUh6Tm7gS6djGbAJaYam00fOAsLKN8jt3C-mvFqLzuBSTBz7BQ5UZWmjygvaoCL_06jxYo1QN5Wl8rAO2YpILSatl2_HFPn',
    offset: true,
  },
  {
    label: 'Bespoke Gatherings',
    title: 'Private',
    description: 'Discreet celebrations for life\'s most intimate and significant milestones.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm_Ld70vATW6s7hVb0aeAPaTwM8o8C9uPyoG_JxFceGKhLoM2bgR9qYNSTIE_KmfsClApvQi_25T-BZJVpMbyWBfVFk-I-Ca2YgsRH4ka9lFFFBYOT4s_qcOe5hul9QGIDIXbErjE9ZmMtRmgsx1p99RlRToqr8iP3TL7xFhNP-mmp-jyQ-vYkWD3EFyZlJS7b4husprT3KquOcq3P7Y_Y9f33ElnfbQ29PLjyX2LPsFpwsoq4ocGviUXmmxvnj8ng4rrMsBlmukGH',
    offset: false,
  },
  {
    label: 'Soulful Journeys',
    title: 'Spiritual',
    description: 'Curated retreats and pilgrimages designed for introspection and quietude.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLQiyLZpOrTnrJC6zvbX0nIf6IaNF4zFLsOvAu8iPSYmzaot1vxksLHbszpMy4E_FM6Uiyr-Q04l0Typ4hMEhp5KcP94yH7PGKE1lNVp76Qa1tvIelvBYs8VUAhySFZKE1VvZQUkuNssfjnrjvAAR5SUDdzKXp09WgTSFJpFsNJmVGDiJa3IvjBqF9U_Lc4pWf_Mc8t-9KGqFus0h-zW8S0T15K83-6CqGR-MAYey2OpLCKseWmm8VkEKXZWXo18PqLip9lq65AFeN',
    offset: true,
  },
]

export default function ExperienceCards() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-[1920px]">
        <div className="mb-20 flex flex-col md:flex-row items-baseline gap-4 px-6">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">
            03 — Portfolio
          </span>
          <h2 className="font-headline text-4xl text-on-surface">
            The Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 px-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`group cursor-pointer ${exp.offset ? 'md:mt-24' : ''}`}
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative border border-primary-container/10 p-4">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={exp.image}
                  alt={exp.title}
                />
              </div>
              <span className="font-label text-primary text-[10px] uppercase tracking-widest block mb-2">
                {exp.label}
              </span>
              <h3 className="font-headline text-xl mb-4 group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="font-body text-sm text-secondary leading-relaxed mb-6">
                {exp.description}
              </p>
              <a
                href="#"
                className="text-xs font-headline uppercase tracking-widest border-b border-outline-variant pb-1 group-hover:border-primary transition-colors"
              >
                View Portfolio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
