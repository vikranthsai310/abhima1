import { Link } from 'react-router-dom'

const destinations = [
  { city: 'Hyderabad', region: 'Telangana', tagline: 'Our Home. Our Foundation.', description: 'Hyderabad is where the Abhima legacy began. From the grand heritage properties of the Old City to the premium urban venues of Banjara Hills and Jubilee Hills — we know this city\'s event landscape in complete detail. The cultural heart of Telugu celebrations.' },
  { city: 'Chennai', region: 'Tamil Nadu', tagline: 'Tradition, Grace, and Cultural Depth.', description: 'A city where tradition is lived, not merely observed. We curate celebrations here with an understanding of Tamil ceremonial customs — the importance of ritual sequence, the formality of family protocols, and the specific aesthetic of South Indian celebrations.' },
  { city: 'New Delhi', region: 'NCR', tagline: 'India\'s Capital. A Stage for Statement Events.', description: 'Delhi\'s event landscape is defined by scale, formality, and an expectation of grandeur. Heritage hotels, palace properties, and premium banquet venues. We manage both corporate events and personal celebrations with the gravitas the city demands.' },
  { city: 'Goa', region: 'Coastal India', tagline: 'Open Skies, Ocean Views, and Effortless Beauty.', description: 'One of India\'s most loved destination wedding locations. Sea-facing venues, open-air settings, and a natural warmth. We bring structure to Goa\'s inherently relaxed atmosphere, ensuring beauty is fully experienced rather than undermined by complexity.' },
  { city: 'Jaipur', region: 'Rajasthan', tagline: 'Heritage, Grandeur, and Rajasthani Splendour.', description: 'Palace hotels and heritage havelis create backdrops simply without equal in India. We manage Jaipur events with a sensitivity to the heritage context and a discipline that ensures the property\'s natural beauty is framed, not competed with.' },
  { city: 'Udaipur', region: 'Rajasthan', tagline: 'The City of Lakes. India\'s Most Romantic Destination.', description: 'The destination most often named by families planning a celebration that will be remembered forever. Lake-facing venues, rooftop ceremony spaces, and royal properties. We have deep familiarity with its finest properties and logistical particularities.' },
  { city: 'Kerala', region: 'South India', tagline: 'Serenity, Nature, and a Unique Cultural Richness.', description: 'A setting entirely unlike anywhere else in India — backwaters, heritage homesteads, lush green landscapes, and a quality of light that is simply beautiful. Celebrations here carry a natural intimacy.' },
  { city: 'Bangalore', region: 'Karnataka', tagline: 'The Garden City. Modern, Cultured, and Diverse.', description: 'Bangalore spans modern luxury hotels, heritage properties, private estates, and curated outdoor venues. A city comfortable with both contemporary aesthetics and traditional celebrations.' },
  { city: 'Mumbai', region: 'Maharashtra', tagline: 'India\'s Commercial Capital. Excellence Expected.', description: 'Sea-facing banquet halls, rooftop venues, premium hotel properties, and private clubs — the city\'s event landscape is world-class, and the standards expected at its gatherings reflect that.' },
]

export default function Destinations() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Destinations</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          India & <span className="italic font-light">Beyond</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          The standard we keep does not change depending on where we work. Abhima Events operates with the same discipline, the same team, and the same quality of execution regardless of location.
        </p>
      </header>

      <section className="pb-32">
        {destinations.map((dest, i) => (
          <div key={dest.city} className={`py-20 ${i % 2 === 0 ? 'bg-surface-container-low' : ''}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4">
                <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-2">{dest.region}</span>
                <h2 className="font-headline text-4xl md:text-5xl mb-4">{dest.city}</h2>
                <p className="font-headline italic text-primary text-lg">{dest.tagline}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-secondary leading-relaxed text-lg">{dest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Also Covering */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs mb-6 block">Also Covering</span>
          <p className="font-headline text-2xl text-on-surface mb-4">Telangana & Andhra Pradesh</p>
          <p className="text-secondary mb-8">Vijayawada, Vizag, Tirupati, Warangal, Nellore, Kakinada, and all major cities across both states.</p>
          <p className="font-headline italic text-primary">International destinations — curated on request.</p>
        </div>
      </section>

      <section className="py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-4xl mb-8">Plan Your Destination Event</h2>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Begin the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
