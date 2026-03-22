import { Link } from 'react-router-dom'

const stories = [
  {
    event: 'Destination Wedding — 3 Days, 5 Ceremonies, 220 Guests',
    location: 'Udaipur, Rajasthan',
    title: 'A Lakeside Wedding, Udaipur',
    brief: 'A Hyderabad-based Telugu family wanted a destination wedding in Udaipur that honoured the full depth of their ceremonial traditions while feeling genuinely at home in a Rajasthani palace setting. Guests were travelling from five cities. The family\'s priority was simple: they wanted to be present, not organising.',
    approach: 'We began planning nine months ahead. The venue was selected after evaluating four properties. Decor was designed to integrate traditional Telugu ceremonial elements within the backdrop of a Rajasthani palace without either aesthetic overwhelming the other. Guest logistics were managed door-to-door from five cities.',
    result: 'Five ceremonies across three days — each distinct in character, each executed without a moment of visible effort. The family was fully present for every ritual. Their guests described it as the most effortlessly beautiful wedding they had ever attended.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTa93AbXQDaNuLAcRlYlY2ldno2aMnMSrak3mPjrl7qoLZ0mDXTpN2TzkmWyJg1EuUAPsWmmiRUVSFAX3jGnG5cNtHNynVaq6fitRAIK8okqIXiTWrLN-5xDKIJfaPlzyB-BJoUOiAW_ifWmkwetslfDN4K7AbvrDL11CDsMhUVggJ6G_4JM0XfssD1fD6Y-zPv0YNV4_8gh69NEuXFSLv3tkmk71hPTh798wXUPC2l9hu4KyxJ5ltMIlugueb4c11ECzdsFCmcbMu',
  },
  {
    event: 'Corporate Conference — 1 Day, 400 Attendees, Awards Evening',
    location: 'Hyderabad',
    title: 'Annual Leadership Summit, Hyderabad',
    brief: 'A leading national organisation needed their annual leadership conference delivered to the exacting standard their senior leadership, external partners, and corporate guests expected. Precision timing, faultless AV, and dignified hospitality were non-negotiable.',
    approach: 'We assumed complete ownership six weeks ahead. Stage design, delegate flow, AV production, and catering were planned in parallel and rehearsed the day prior. A dedicated hospitality team managed the 400-person delegate experience throughout.',
    result: 'A conference that ran to the minute. The awards evening was specifically commended for its production quality and tone. The client returned for their next event without interviewing another company.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC392Q7AW2ivDqmr03y0YR4KBXM4t1IAnTmJOK4QCtzPno_u0MhXBqUWjBk2R5MUv680p98Y9SR_yQBlEoPhserNre6s7wgTv-j-MrzLcDX_PUBhxphzp3_DS8bIfqlIKcuFmzRPO3nZS0xzshmEZRVZW2RVxBcs1U_BJONoOI07TRbtHDSh_Y7o8QL5s3b6j460WR72XCatBp9ifhS1lCRGzbtWh4V3wEOS0WCL_JTSlYd1occw-xBPGzE3Az2q67DvL4r7aXVsvX4',
  },
  {
    event: 'Private Milestone Celebration — Intimate Dinner, 40 Guests',
    location: 'Private Residence, Hyderabad',
    title: 'A 60th Birthday Dinner, Hyderabad',
    brief: 'A family wanted to celebrate a parent\'s 60th birthday in the most personal way possible — elegantly, intimately, and entirely at home. Absolute privacy was essential.',
    approach: 'We designed the evening around the person being celebrated — their story, their favourite food, their preferred atmosphere. Decor was minimal and meaningful. The menu was built from personal favourites. All setup was completed before guests arrived.',
    result: 'Forty people had an evening that felt entirely unplanned — warm, personal, and quietly beautiful. The family later told us it was the first celebration in years where they had not spent the evening managing something.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA7wx0m2ID7Fap89mJ3zgoXt6rWANKBcCAvRDeew42FQb_FiGyPEp6x7Q6zoeLs8KcIFb8aoEuEzoK2m780RNwtBfTxkN46LmK2jDpEOfKVZCLAfHZN5-WHk5tQzHamku2tWCDr9HrnJqKs5xvWNBr85mRlgCplytx0jF5a-_jRm8CSPXO6w1rwIvK1Zpaj2bc6c88HfEAV_cxMiqAuTXblIGcRqfT__QYRP6Q566qFaxQN3tydP2vUhnhvDcXKmjCil7i_Fm4UFPH',
  },
  {
    event: 'Two Traditional Telugu Ceremonies — One Weekend, 150 Guests',
    location: 'Hyderabad',
    title: 'Gruhapravesam & Namakaranam, Hyderabad',
    brief: 'A family planned to host a Gruhapravesam and a Namakaranam for their newborn across one weekend — both to be conducted with full traditional observance. The family wanted complete spiritual integrity and zero logistical stress.',
    approach: 'Both ceremonies were designed as a single integrated programme. Separate pandit teams were briefed and sequenced. Catering was designed with menu continuity and an appropriate shift in tone between the two occasions.',
    result: 'The family was spiritually and emotionally present for both ceremonies. Guests commented on how two significant occasions had been held in one weekend without a moment of visible effort. The family later engaged us for the same child\'s Seemantham.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWKiwBN_iC2sjWOE41HO3F_ZBjdZ4DLfAezUM59eLxK2-_FkaQY8-VgJkjTNBNeIv_GXvSD0giLsBKx82CdXX3BGsoGOuAOU4xmhkZT9BTP70MZE_tCLlbtppfBe8J1m0pLcCQoFQxfwKq2j8L_SpWDCw0ABbTW8SDUQBUm9tVBKG--Q2Z6g5SJ_bGXWNBVsyQPJkFi5ygs5efZWdaD_RBFj3hEt6qVPpESWMXWxq-zMBACUmPF2ujvV2QSb5WSVm_JItASeWL-EVt',
  },
]

export default function Stories() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Event Stories</span>
        <h1 className="font-headline text-5xl md:text-8xl tracking-tighter leading-none mb-8">
          The Detail Behind <span className="italic font-light">the Day</span>
        </h1>
        <p className="font-body text-xl text-secondary max-w-2xl leading-relaxed">
          Behind every celebration we manage is a story of listening, designing, and executing — quietly and completely. These are a few of those stories.
        </p>
      </header>

      {stories.map((story, i) => (
        <section key={story.title} className={`py-32 ${i % 2 === 1 ? 'bg-surface-container-low' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className={i % 2 === 1 ? 'order-2' : ''}>
                <div className="aspect-[4/5] overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={story.image} alt={story.title} />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'order-1' : ''}>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="font-label text-[10px] uppercase tracking-widest text-primary bg-primary/5 px-4 py-2">{story.event}</span>
                </div>
                <p className="font-label text-[10px] uppercase tracking-widest text-secondary mb-4">{story.location}</p>
                <h2 className="font-headline text-4xl mb-8 leading-tight">{story.title}</h2>

                <div className="space-y-8">
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary block mb-3">The Brief</span>
                    <p className="text-secondary leading-relaxed">{story.brief}</p>
                  </div>
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary block mb-3">Our Approach</span>
                    <p className="text-secondary leading-relaxed">{story.approach}</p>
                  </div>
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-primary block mb-3">The Day</span>
                    <p className="text-secondary leading-relaxed">{story.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 bg-surface-container text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-headline text-2xl italic text-on-surface mb-12">Your story is waiting to be written. We would be honoured to help tell it.</p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Begin Your Story
          </Link>
        </div>
      </section>
    </div>
  )
}
