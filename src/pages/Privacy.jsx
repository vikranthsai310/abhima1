const sections = [
  { title: '1. Who We Are', content: 'Abhima Events (formerly KPK Events) is a bespoke event curation company based in Hyderabad, Telangana, India. We manage weddings, corporate events, private celebrations, and spiritual and cultural ceremonies across India and select international destinations.\n\nContact for privacy matters: info@abhimaevents.com' },
  { title: '2. Information We Collect', content: 'We collect personal information only when you choose to provide it to us — primarily when you submit an enquiry through our website or communicate with us directly by email or WhatsApp.\n\nThis may include: your name, email address, phone number, event type, location, date, guest count, and any details you share in your message.\n\nWe do not collect any sensitive personal data such as financial information or identification documents through our website.' },
  { title: '3. How We Use Your Information', content: 'We use the information you provide solely to respond to your enquiry and to discuss, plan, and manage your event if you choose to engage us.\n\nWe do not use your personal information for marketing, advertising, automated profiling, or any purpose beyond the direct management of your enquiry and event.' },
  { title: '4. How We Store Your Information', content: 'All personal information is stored securely and accessed only by members of our team who require it. We retain personal information only for as long as is necessary to fulfil the purpose for which it was collected, or as required by applicable law.' },
  { title: '5. Confidentiality', content: 'Abhima Events operates under a strict policy of client confidentiality. We will never share, publish, reference, feature, or disclose any information about you, your family, your organisation, or your event — including photographs, videos, or any identifying detail — without your explicit prior written consent.\n\nThis commitment applies without exception to social media, marketing materials, press features, portfolio listings, and all other forms of communication.' },
  { title: '6. Sharing of Information', content: 'We do not sell, rent, trade, or share your personal information with any third party, advertising platform, data broker, or external organisation for any purpose.' },
  { title: '7. Cookies & Website Data', content: 'Our website may use standard cookies and analytics tools to understand how visitors use the site. This data is collected in aggregate and anonymised form. You can disable cookies through your browser settings at any time.' },
  { title: '8. Your Rights', content: 'You have the right to request access to the personal information we hold about you, to ask us to correct any inaccurate information, and to request that we delete your information from our records at any time. Contact us at info@abhimaevents.com.' },
  { title: '9. Children\'s Privacy', content: 'Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.' },
  { title: '10. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. Any updates will be published on this page with a revised effective date.' },
  { title: '11. Contact Us', content: 'If you have any questions regarding this Privacy Policy, please contact us at info@abhimaevents.com.\n\nAbhima Events, Hyderabad, Telangana, India.' },
]

export default function Privacy() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Legal</span>
        <h1 className="font-headline text-5xl md:text-7xl tracking-tighter leading-none mb-8">Privacy Policy</h1>
        <p className="text-secondary text-sm">Effective Date: 2025 &middot; Last Updated: 2025</p>
      </header>

      <section className="pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <p className="text-secondary leading-relaxed text-lg mb-16">
          Abhima Events is committed to protecting the privacy of every individual who interacts with us. This Privacy Policy explains what information we collect, how we use it, and the steps we take to keep it safe.
        </p>
        <div className="space-y-16">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-headline text-2xl mb-6">{s.title}</h2>
              {s.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-secondary leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
