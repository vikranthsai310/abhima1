export default function Contact() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Contact</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          Begin a Timeless <span className="italic font-light">Celebration</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          If your celebration matters — and we believe every celebration does — it deserves to be in thoughtful, disciplined hands. Share a few details below and a member of our team will be in touch personally.
        </p>
      </header>

      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Name *</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" required />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Email Address *</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Phone Number</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="tel" />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Event Type</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none appearance-none cursor-pointer">
                    <option value="">Select event type</option>
                    <option>Wedding & Ceremonial</option>
                    <option>Corporate & Brand</option>
                    <option>Private & Social</option>
                    <option>Spiritual & Cultural</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Event Location</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" placeholder="City or destination" />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Approximate Date</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" placeholder="Month and year" />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Guest Count</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none appearance-none cursor-pointer">
                    <option value="">Select range</option>
                    <option>Under 50</option>
                    <option>50 - 150</option>
                    <option>150 - 300</option>
                    <option>300 - 600</option>
                    <option>600+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Tell us about your celebration</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none resize-none" rows={4} />
              </div>

              <button type="submit" className="luxury-gradient text-on-primary px-14 py-5 font-headline uppercase tracking-widest text-xs hover:opacity-90 transition-all">
                Send Your Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 lg:pl-12">
            <div className="bg-surface-container p-10 md:p-12 space-y-10">
              <div>
                <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-3">Email</span>
                <a href="mailto:info@abhimaevents.com" className="font-headline text-lg text-on-surface no-underline hover:text-primary transition-colors">info@abhimaevents.com</a>
              </div>
              <div>
                <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-3">WhatsApp</span>
                <a href="https://wa.me/?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20an%20upcoming%20celebration%20with%20Abhima%20Events." className="font-headline text-lg text-on-surface no-underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
              </div>
              <div>
                <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-3">Based In</span>
                <p className="font-headline text-lg text-on-surface">Hyderabad, Telangana</p>
              </div>
              <div>
                <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-3">Serving</span>
                <p className="text-secondary leading-relaxed">Across India and international destinations on request</p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30">
                <span className="font-label text-[10px] tracking-widest uppercase text-primary block mb-3">Availability Note</span>
                <p className="text-secondary leading-relaxed text-sm">We limit the number of engagements we accept each season to ensure focused, undivided attention for every client.</p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30">
                <span className="font-label text-[10px] tracking-widest uppercase text-secondary block mb-3">Privacy Assurance</span>
                <p className="text-secondary leading-relaxed text-sm">All enquiries are handled with complete confidentiality. We will never share your information or contact you without purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
