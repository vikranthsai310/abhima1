export default function Testimonials() {
  return (
    <section className="pt-32 pb-24">
      {/* Header */}
      <header className="px-6 md:px-24 mb-32 max-w-7xl mx-auto">
        <div className="inline-block w-12 h-px bg-primary mb-8" />
        <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface tracking-[0.5rem] leading-tight mb-6">
          The <br />
          <span className="italic font-light">Testimonials</span>
        </h2>
        <p className="max-w-md font-body text-secondary text-lg leading-relaxed ml-auto md:mr-12">
          Voices from the curated estates. A collection of shared moments and
          enduring memories from our most distinguished clients.
        </p>
      </header>

      {/* Testimonials */}
      <div className="px-6 md:px-24 max-w-[1440px] mx-auto space-y-48">
        {/* Testimonial 01 — Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxo7O5muSTpG2HNnq-qV5ByjLG9lgPCLBMJpE8HfhrZuCLC5LkPANUab7pbM_s2HeV-sdLXyE8jimgwKpeUKd47Zg7ggg3fXwEqFMFRZO_lBpVcnc_1_N5XBV5UycytUzxom34lazQxj2ZDp5UaNKVPaHXAdJyY6z-L9gf78iXsBn2TXk-EoZYdEvLwFY0vIJPF5MIZuyE4dORH0gsoAJWXia3BLjnv5dgf2FoEeFbYME5IrtRbTDvuRhG_1VxyIb3xi-DV2mouqiY"
                alt="Luxurious wedding table setting with gold accents"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <span className="font-headline text-7xl text-primary-container leading-none select-none opacity-40">
              &ldquo;
            </span>
            <blockquote className="font-headline text-2xl md:text-3xl text-on-surface italic leading-relaxed mb-8">
              Abhima didn't just plan an event; they curated a visual
              symphony. Every petal was perfectly placed, every light was
              intentional.
            </blockquote>
            <div>
              <p className="font-label text-sm uppercase tracking-[0.2rem] font-bold text-on-surface mb-1">
                Eleanor & Julian
              </p>
              <p className="font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">
                Heritage Wedding, Udaipur
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 02 — Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kCyYczARtHj6WLXsDX9amzPbNOlNI-eZ6TSdZpMo3a1o14_vTa3C7udEnj3Ex9Z3o9t_s7Mrb9uW7ZZx2Z7VYpIVpYl9K-ULIIa6-SmBNpmMj_bYFm1pEgpKubO9zE6XTWB7GBrhJmssA0NpkVonSQgKrDneFih9mw5dJ_weEObNlUjXaq5rf25_JU_2YX3v6qYPXTgJ8k6t3H3fgWVDGfuEbG6BqFFkhDwcZ7Y0SjgvpfyurcXfiddBLQblic7T2F8mUYFE_Te"
                alt="Elegant corporate gala in a grand ballroom"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <span className="font-headline text-7xl text-primary-container leading-none select-none opacity-40">
              &ldquo;
            </span>
            <blockquote className="font-headline text-2xl md:text-3xl text-on-surface italic leading-relaxed mb-8">
              An absolute masterclass in discretion and luxury. They
              understood our need for privacy while delivering an unmatched
              sensory experience.
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-10 h-px bg-primary" />
              <div>
                <p className="font-label text-sm uppercase tracking-[0.2rem] font-bold text-on-surface mb-1">
                  Marcus Thorne
                </p>
                <p className="font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">
                  Private Estate Soiree, London
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 03 — Full Width Tonal Shift */}
        <div className="w-full bg-surface-container-low py-24 -mx-6 md:-mx-24 px-6 md:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-headline text-8xl text-primary opacity-20 block mb-6">
              &ldquo;
            </span>
            <blockquote className="font-headline text-3xl md:text-5xl text-on-surface-variant leading-tight mb-12 tracking-wide">
              The distinction is in the details. ABHIMA translates dreams into a
              tangible, golden reality.
            </blockquote>
            <div className="inline-block border border-outline-variant/30 px-8 py-4">
              <p className="font-label text-sm uppercase tracking-[0.3rem] font-bold text-primary mb-1">
                Sophia Van Der Built
              </p>
              <p className="font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">
                Anniversary Gala, Paris
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 04 — Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="aspect-square overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7wx0m2ID7Fap89mJ3zgoXt6rWANKBcCAvRDeew42FQb_FiGyPEp6x7Q6zoeLs8KcIFb8aoEuEzoK2m780RNwtBfTxkN46LmK2jDpEOfKVZCLAfHZN5-WHk5tQzHamku2tWCDr9HrnJqKs5xvWNBr85mRlgCplytx0jF5a-_jRm8CSPXO6w1rwIvK1Zpaj2bc6c88HfEAV_cxMiqAuTXblIGcRqfT__QYRP6Q566qFaxQN3tydP2vUhnhvDcXKmjCil7i_Fm4UFPH"
                alt="Blurred night lights of a high-end outdoor party"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <span className="font-headline text-7xl text-primary-container leading-none opacity-40">
              &ldquo;
            </span>
            <blockquote className="font-headline text-2xl md:text-3xl text-on-surface italic leading-relaxed mb-8">
              Beyond management, it is artistry. They captured the essence of
              our family heritage and wove it into every thread of the
              celebration.
            </blockquote>
            <div>
              <p className="font-label text-sm uppercase tracking-[0.2rem] font-bold text-on-surface mb-1">
                The Arnault Family
              </p>
              <p className="font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">
                Centennial Celebration, Loire Valley
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-48 px-6 md:px-8 py-32 bg-surface-container-highest text-center">
        <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-12 tracking-[0.3rem] uppercase">
          Begin Your Curated Journey
        </h2>
        <button className="bg-primary text-on-primary px-12 py-5 text-sm font-label tracking-[0.4rem] uppercase hover:bg-on-surface transition-all duration-500">
          Book a Consultation
        </button>
      </div>
    </section>
  )
}
