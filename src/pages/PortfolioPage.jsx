import { Link } from 'react-router-dom'

const filters = ['All Events', 'Weddings & Ceremonies', 'Corporate & Brand', 'Private Celebrations', 'Spiritual & Cultural']

const portfolioCards = [
  { category: 'Heritage Wedding', title: 'Destination Wedding, Udaipur', description: 'A three-day Telugu wedding celebration at a lakeside palace — five ceremonies, 220 guests, and every ritual honoured without exception.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTa93AbXQDaNuLAcRlYlY2ldno2aMnMSrak3mPjrl7qoLZ0mDXTpN2TzkmWyJg1EuUAPsWmmiRUVSFAX3jGnG5cNtHNynVaq6fitRAIK8okqIXiTWrLN-5xDKIJfaPlzyB-BJoUOiAW_ifWmkwetslfDN4K7AbvrDL11CDsMhUVggJ6G_4JM0XfssD1fD6Y-zPv0YNV4_8gh69NEuXFSLv3tkmk71hPTh798wXUPC2l9hu4KyxJ5ltMIlugueb4c11ECzdsFCmcbMu', span: 'md:col-span-7', aspect: 'aspect-[4/5]' },
  { category: 'Corporate', title: 'Leadership Conference, Hyderabad', description: 'Annual summit for 300 senior delegates — a full-day conference, a formal dinner, and an awards evening delivered without a single visible seam.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC392Q7AW2ivDqmr03y0YR4KBXM4t1IAnTmJOK4QCtzPno_u0MhXBqUWjBk2R5MUv680p98Y9SR_yQBlEoPhserNre6s7wgTv-j-MrzLcDX_PUBhxphzp3_DS8bIfqlIKcuFmzRPO3nZS0xzshmEZRVZW2RVxBcs1U_BJONoOI07TRbtHDSh_Y7o8QL5s3b6j460WR72XCatBp9ifhS1lCRGzbtWh4V3wEOS0WCL_JTSlYd1occw-xBPGzE3Az2q67DvL4r7aXVsvX4', span: 'md:col-span-5 md:pt-32', aspect: 'aspect-square' },
  { category: 'Pre-Wedding', title: 'Sangeeth & Mehendi, Goa', description: 'An intimate two-day pre-wedding celebration for 80 family members — personal, joyful, and beautifully managed.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxo7O5muSTpG2HNnq-qV5ByjLG9lgPCLBMJpE8HfhrZuCLC5LkPANUab7pbM_s2HeV-sdLXyE8jimgwKpeUKd47Zg7ggg3fXwEqFMFRZO_lBpVcnc_1_N5XBV5UycytUzxom34lazQxj2ZDp5UaNKVPaHXAdJyY6z-L9gf78iXsBn2TXk-EoZYdEvLwFY0vIJPF5MIZuyE4dORH0gsoAJWXia3BLjnv5dgf2FoEeFbYME5IrtRbTDvuRhG_1VxyIb3xi-DV2mouqiY', span: 'md:col-span-5', aspect: 'aspect-[3/4]' },
  { category: 'Private', title: 'Milestone Birthday Dinner, Hyderabad', description: 'A curated 60th birthday dinner at a private residence — 40 guests, quiet luxury, and an evening the family still speaks of.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA7wx0m2ID7Fap89mJ3zgoXt6rWANKBcCAvRDeew42FQb_FiGyPEp6x7Q6zoeLs8KcIFb8aoEuEzoK2m780RNwtBfTxkN46LmK2jDpEOfKVZCLAfHZN5-WHk5tQzHamku2tWCDr9HrnJqKs5xvWNBr85mRlgCplytx0jF5a-_jRm8CSPXO6w1rwIvK1Zpaj2bc6c88HfEAV_cxMiqAuTXblIGcRqfT__QYRP6Q566qFaxQN3tydP2vUhnhvDcXKmjCil7i_Fm4UFPH', span: 'md:col-span-7 md:-mt-20', aspect: 'aspect-video md:aspect-[4/3]' },
  { category: 'Corporate', title: 'Product Launch, Bangalore', description: 'A premium product launch with brand-aligned staging, media coordination, and a guest experience managed to the last detail.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kCyYczARtHj6WLXsDX9amzPbNOlNI-eZ6TSdZpMo3a1o14_vTa3C7udEnj3Ex9Z3o9t_s7Mrb9uW7ZZx2Z7VYpIVpYl9K-ULIIa6-SmBNpmMj_bYFm1pEgpKubO9zE6XTWB7GBrhJmssA0NpkVonSQgKrDneFih9mw5dJ_weEObNlUjXaq5rf25_JU_2YX3v6qYPXTgJ8k6t3H3fgWVDGfuEbG6BqFFkhDwcZ7Y0SjgvpfyurcXfiddBLQblic7T2F8mUYFE_Te', span: 'md:col-span-6', aspect: 'aspect-square' },
  { category: 'Spiritual', title: 'Seemantham, Hyderabad', description: 'A traditional Seemantham ceremony — Telugu customs honoured with accuracy, surrounded by contemporary warmth and elegant design.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWKiwBN_iC2sjWOE41HO3F_ZBjdZ4DLfAezUM59eLxK2-_FkaQY8-VgJkjTNBNeIv_GXvSD0giLsBKx82CdXX3BGsoGOuAOU4xmhkZT9BTP70MZE_tCLlbtppfBe8J1m0pLcCQoFQxfwKq2j8L_SpWDCw0ABbTW8SDUQBUm9tVBKG--Q2Z6g5SJ_bGXWNBVsyQPJkFi5ygs5efZWdaD_RBFj3hEt6qVPpESWMXWxq-zMBACUmPF2ujvV2QSb5WSVm_JItASeWL-EVt', span: 'md:col-span-6', aspect: 'aspect-[3/4]' },
  { category: 'Heritage Wedding', title: 'Destination Wedding, Jaipur', description: 'A heritage palace wedding spanning four ceremonies across two days — guests from five cities, one seamless experience.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs9RUu0Ats3wtIj__YqaYo-co1mR95IFI0txCanMswGXwU2GprzxuUdkb0nSMrBom5G0hp6AjnO_DLhNRt5yweIGjz4WFzw98rWjzkwX8Eqdo_jVUc45uE-rx-IpwfB1JPAC_UAXCE0ssvLOe4s5LhcmIeY-xww_8-qYK7btz_2yfwxRTmePUKkerEaaXxnmD_tMIutUZiap2rOcCru4ZCOR9G8A_jNt0y0Oe3jn-N1amGIW1WDjIs5hnsV__BRjw1PahT1iddrLRt', span: 'md:col-span-7', aspect: 'aspect-[4/5]' },
  { category: 'Corporate', title: 'Dealer Meet & Awards, New Delhi', description: 'A pan-India dealer conference with a recognition ceremony — professionally managed from guest travel coordination to stage close.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq71qQGGF4cWs6aPbOjVK18BNWQo6h4N8APTuGR5ZHQCUZceAdQc3LEbyYBoOXmc5OVwT18HIduPIVeHvUCW_6PCrS7UVTsZ4ZPvc-Ct5MqkhRxaN8JZFwM837qsV4lPMDe2NtGSbhKYtyK2J-fxeaVsZdeaK3jnadjgBq97m_w4JDUA3J0F8qVz4BMbgoVYL4ENvuuafVUIEdbJq2zOTFNL2JYFFB-JZfSyPBdQqYTp0fCrEOVy_Zz1SPN8dgw96EXfI-mZgoLmrT', span: 'md:col-span-5 md:pt-24', aspect: 'aspect-square' },
]

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <header className="py-32 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">Our Work</span>
          <h1 className="font-headline text-6xl md:text-8xl tracking-tighter leading-none mb-8">THE PORTFOLIO</h1>
          <p className="font-headline italic text-2xl text-secondary max-w-xl opacity-80">
            Celebrations we have had the honour of curating.
          </p>
          <p className="mt-6 text-secondary leading-relaxed max-w-2xl">
            Every event in this portfolio began as a conversation — a family's vision, a company's ambition, or a personal milestone that deserved to be marked with care. We do not share our work to impress. We share it so that you can see what becomes possible when precision meets care.
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="px-6 md:px-8 max-w-screen-2xl mx-auto mb-20">
        <div className="flex flex-wrap gap-8 md:gap-12 items-end border-b border-outline-variant/20 pb-6">
          {filters.map((f, i) => (
            <button key={f} className={`font-label text-xs uppercase tracking-[0.2em] font-semibold pb-6 -mb-6 transition-all ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-secondary/60 hover:text-primary'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-8 max-w-screen-2xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {portfolioCards.map((card) => (
            <div key={card.title} className={card.span}>
              <div className={`editorial-reveal group relative ${card.aspect} bg-surface-container overflow-hidden cursor-pointer`}>
                <img className="w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-1000 ease-out" src={card.image} alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c16]/90 via-[#3D3226]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end reveal-content">
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-container mb-3">{card.category}</span>
                  <h3 className="font-headline text-2xl md:text-3xl text-surface-bright mb-3">{card.title}</h3>
                  <p className="font-body text-surface-bright/70 text-sm max-w-md leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <section className="py-32 bg-surface-container-low text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-headline text-2xl italic text-on-surface mb-12">
            Every photograph in this portfolio is a moment someone will carry for the rest of their life. That is what we protect.
          </p>
          <Link to="/contact" className="luxury-gradient text-on-primary px-14 py-5 font-label uppercase tracking-widest text-xs no-underline inline-block hover:opacity-90 transition-all">
            Begin Your Story
          </Link>
        </div>
      </section>
    </div>
  )
}
