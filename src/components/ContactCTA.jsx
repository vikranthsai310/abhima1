export default function ContactCTA() {
  return (
    <section className="py-40 bg-surface-container-low relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none luxury-gradient" />
      <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="h-[400px] md:h-[600px] w-full bg-surface-variant p-6">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTvqyarJwcu95uLG6Dj20a0XuZjjSUiQQ8C5HDB9xx8rOj5eru2trmWh93QhQ2vLy9BHHQLhJWjnf9Yx7i5FERJrsnxAKm2X48gVEEo62R9KMeKlXQeD_M0Yi7-FT7Mqd7HOhCHEalGNCD7CK0ZFxdHz1q7ACCl456gcgOqdJIbN0lrcMl7hlkwS8iu4WQsBMNYb81-X8xKTM-7BdYkRL7cLxGUrKiImk9k4wbXZN5TNgKzVbpX0xpg5cp9rhU6BodABz8W8-xGHPb"
                alt="Close up of high quality fabric texture and gold threads"
              />
            </div>
            <div className="absolute top-1/2 -right-6 lg:-right-24 -translate-y-1/2 bg-surface p-8 md:p-12 hidden md:block max-w-md">
              <p className="font-headline text-2xl md:text-3xl italic text-on-surface mb-6">
                "Every detail is a dialogue between the client's vision and our
                craftsmanship."
              </p>
              <span className="font-label tracking-widest uppercase text-xs text-secondary">
                — The ABHIMA Standard
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:pl-20">
            <span className="font-label uppercase tracking-[0.2rem] text-xs text-primary mb-6 block">
              07 — Contact
            </span>
            <h2 className="font-headline text-5xl mb-8 leading-tight">
              Begin Your <br />
              Narrative
            </h2>
            <p className="font-body text-secondary mb-12 text-lg">
              We accept a limited number of commissions annually to ensure our
              hallmark of uncompromised quality and focused attention.
            </p>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">
                  Full Name
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 transition-colors font-body outline-none"
                  type="text"
                />
              </div>
              <div className="relative">
                <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">
                  Nature of Inquiry
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 transition-colors font-body outline-none"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="luxury-gradient text-on-primary px-12 py-5 font-headline uppercase tracking-widest text-xs hover:opacity-90 transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
