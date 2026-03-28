import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    location: '',
    date: '',
    guestCount: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `━━━━━━━━━━━━━━━━━━━━`,
      `✉️ *NEW ENQUIRY — ABHIMA EVENTS*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `👤 *Client Details*`,
      `┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`,
      `• *Name:* ${form.name}`,
      `• *Email:* ${form.email}`,
      form.phone ? `• *Phone:* ${form.phone}` : null,
      ``,
      `🎯 *Event Details*`,
      `┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`,
      form.eventType ? `• *Event Type:* ${form.eventType}` : null,
      form.location ? `• *Location:* ${form.location}` : null,
      form.date ? `• *Approx. Date:* ${form.date}` : null,
      form.guestCount ? `• *Guest Count:* ~${form.guestCount}` : null,
      ``,
      form.message ? `💬 *Additional Details*` : null,
      form.message ? `┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄` : null,
      form.message || null,
      ``,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via abhimaevents.com_`,
    ]

    const text = lines.filter((l) => l !== null).join('\n')
    const url = `https://wa.me/919177020208?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

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
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" required />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Email Address *</label>
                  <input name="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="tel" />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Event Type</label>
                  <select name="eventType" value={form.eventType} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none appearance-none cursor-pointer">
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
                  <input name="location" value={form.location} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" placeholder="City or destination" />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Approximate Date</label>
                  <input name="date" value={form.date} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" placeholder="Month and year" />
                </div>
                <div>
                  <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Guest Count (Approx.)</label>
                  <input name="guestCount" value={form.guestCount} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none" type="text" inputMode="numeric" placeholder="e.g. 200" />
                </div>
              </div>

              <div>
                <label className="block font-label text-[10px] tracking-widest uppercase text-secondary mb-2">Tell us about your celebration</label>
                <textarea name="message" value={form.message} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 pb-4 font-body outline-none resize-none" rows={4} />
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
                <a href="https://wa.me/919177020208?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20an%20upcoming%20celebration%20with%20Abhima%20Events." className="font-headline text-lg text-on-surface no-underline hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">+91 91770 20208</a>
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
