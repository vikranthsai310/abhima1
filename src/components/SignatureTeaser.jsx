export default function SignatureTeaser() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Image */}
        <div className="md:col-span-7 relative overflow-hidden h-[400px] md:h-[600px]">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm49pGWUDgCTC95P1nRxaZ8-C5kVSXFkWH0CK9CCvuIk4L8Pqpc5IPqwpS4uUJ2Ekgl06xp9yNyY4JupniURtE9-0g2XE7Eklxrq0BpHubackcgv0QLIDbFazKZFLq3PXgJKCZGUkKDH_b0L80Gkwzu2Qj3ZdmNvTvB4N7NIyYcxe0r6ToViVs6tpI4dSEAXMvR61BzFKeKafU-X20LIylfUy0YoFJn-GjqHbL6Wng8lP3QySnLAVMz8UZ76NlR-m8XrmFa6pUxkeO"
            alt="Grand luxury ballroom gala event setting"
          />
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 p-6 md:p-8 bg-surface/90 backdrop-blur-md max-w-sm">
            <span className="text-primary text-[10px] uppercase tracking-widest mb-4 block">
              Corporate Excellence
            </span>
            <h3 className="font-display text-2xl md:text-3xl mb-4">Global Summits</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Seamlessly executed high-stakes gatherings where every detail mirrors your brand's prestige.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-12 pl-0 md:pl-12">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Tailored to the <br />
              <span className="italic">Last Second.</span>
            </h2>
            <p className="text-on-surface-variant/80 text-lg font-light leading-relaxed">
              We don't just plan events; we architect memories. From the first invitation to the final departure, our concierge-level service ensures silence where there should be peace, and wonder where there should be celebration.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
            <div>
              <span className="text-primary font-bold text-2xl">150+</span>
              <p className="text-xs uppercase tracking-widest text-secondary mt-2">
                Bespoke Weddings
              </p>
            </div>
            <div>
              <span className="text-primary font-bold text-2xl">9</span>
              <p className="text-xs uppercase tracking-widest text-secondary mt-2">
                Elite Destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
