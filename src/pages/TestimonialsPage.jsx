import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: 'Everything unfolded exactly as we had imagined — and then better. We didn\'t feel the weight of a single detail on our wedding day. Not once. The Abhima team had taken care of everything, quietly and completely. We were just present — and that is the greatest gift they gave us.',
    by: 'A Bride\'s Family',
    event: 'Destination Wedding, Udaipur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxo7O5muSTpG2HNnq-qV5ByjLG9lgPCLBMJpE8HfhrZuCLC5LkPANUab7pbM_s2HeV-sdLXyE8jimgwKpeUKd47Zg7ggg3fXwEqFMFRZO_lBpVcnc_1_N5XBV5UycytUzxom34lazQxj2ZDp5UaNKVPaHXAdJyY6z-L9gf78iXsBn2TXk-EoZYdEvLwFY0vIJPF5MIZuyE4dORH0gsoAJWXia3BLjnv5dgf2FoEeFbYME5IrtRbTDvuRhG_1VxyIb3xi-DV2mouqiY',
    layout: 'left',
  },
  {
    quote: 'Our annual leadership conference had 400 attendees across a full day and evening. The timing precision, the production quality, and the calm professionalism of the team on the ground was unlike anything we have experienced with any event company before. They owned it completely.',
    by: 'VP, Corporate Affairs',
    event: 'Leadership Conference, Hyderabad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kCyYczARtHj6WLXsDX9amzPbNOlNI-eZ6TSdZpMo3a1o14_vTa3C7udEnj3Ex9Z3o9t_s7Mrb9uW7ZZx2Z7VYpIVpYl9K-ULIIa6-SmBNpmMj_bYFm1pEgpKubO9zE6XTWB7GBrhJmssA0NpkVonSQgKrDneFih9mw5dJ_weEObNlUjXaq5rf25_JU_2YX3v6qYPXTgJ8k6t3H3fgWVDGfuEbG6BqFFkhDwcZ7Y0SjgvpfyurcXfiddBLQblic7T2F8mUYFE_Te',
    layout: 'right',
  },
  {
    quote: 'I have attended events all my life. Grand ones, intimate ones, corporate ones, family ones. I have never attended one where I could not feel the seams — until this one. That is the only way I know how to describe what Abhima Events delivered for our family\'s celebration. Seamless.',
    by: 'A Patron Family',
    event: 'Private Milestone Celebration, Hyderabad',
    layout: 'center',
  },
  {
    quote: 'We trusted Abhima Events with our most important corporate event of the year. They took complete ownership — from the concept brief to the final delegate departure. The confidence that comes from having a team that truly owns your event, not just manages it, is something I had not experienced before.',
    by: 'Director, Business Operations',
    event: 'Annual Dealer Conference, New Delhi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA7wx0m2ID7Fap89mJ3zgoXt6rWANKBcCAvRDeew42FQb_FiGyPEp6x7Q6zoeLs8KcIFb8aoEuEzoK2m780RNwtBfTxkN46LmK2jDpEOfKVZCLAfHZN5-WHk5tQzHamku2tWCDr9HrnJqKs5xvWNBr85mRlgCplytx0jF5a-_jRm8CSPXO6w1rwIvK1Zpaj2bc6c88HfEAV_cxMiqAuTXblIGcRqfT__QYRP6Q566qFaxQN3tydP2vUhnhvDcXKmjCil7i_Fm4UFPH',
    layout: 'left',
  },
  {
    quote: 'The Gruhapravesam was everything we hoped it would be — deeply traditional, spiritually unhurried, and beautifully managed. Our family could focus on the ceremonies and the meaning behind them. The Abhima team had handled everything else so completely that we never had to think about any of it.',
    by: 'A Family',
    event: 'Gruhapravesam, Hyderabad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWKiwBN_iC2sjWOE41HO3F_ZBjdZ4DLfAezUM59eLxK2-_FkaQY8-VgJkjTNBNeIv_GXvSD0giLsBKx82CdXX3BGsoGOuAOU4xmhkZT9BTP70MZE_tCLlbtppfBe8J1m0pLcCQoFQxfwKq2j8L_SpWDCw0ABbTW8SDUQBUm9tVBKG--Q2Z6g5SJ_bGXWNBVsyQPJkFi5ygs5efZWdaD_RBFj3hEt6qVPpESWMXWxq-zMBACUmPF2ujvV2QSb5WSVm_JItASeWL-EVt',
    layout: 'right',
  },
]

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <header className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="inline-block w-12 h-px bg-primary mb-8" />
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface tracking-[0.3rem] leading-tight mb-6">
          The <br /><span className="italic font-light">Testimonials</span>
        </h1>
        <p className="max-w-md font-body text-secondary text-lg leading-relaxed">
          The measure of our work is not what we executed. It is what you experienced. These are the words our clients use when they describe the difference.
        </p>
      </header>

      <div className="px-6 md:px-24 max-w-[1440px] mx-auto space-y-32 pb-32">
        {testimonials.map((t, i) => {
          if (t.layout === 'center') {
            return (
              <div key={i} className="w-full bg-surface-container-low py-24 px-6 md:px-24">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="font-headline text-8xl text-primary opacity-20 block mb-6">&ldquo;</span>
                  <blockquote className="font-headline text-3xl md:text-4xl text-on-surface-variant leading-tight mb-12 tracking-wide">
                    {t.quote}
                  </blockquote>
                  <div className="inline-block border border-outline-variant/30 px-8 py-4">
                    <p className="font-label text-sm uppercase tracking-[0.3rem] font-bold text-primary mb-1">{t.by}</p>
                    <p className="font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">{t.event}</p>
                  </div>
                </div>
              </div>
            )
          }

          const isRight = t.layout === 'right'

          return (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {!isRight && t.image && (
                <div className="md:col-span-7 relative group">
                  <div className="aspect-[4/5] overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={t.image} alt={t.event} />
                  </div>
                </div>
              )}
              <div className={isRight ? 'md:col-start-6 md:col-span-7' : 'md:col-span-5'}>
                {isRight && t.image && (
                  <div className="aspect-[16/9] overflow-hidden bg-surface-container mb-12">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={t.image} alt={t.event} />
                  </div>
                )}
                <div className={isRight ? 'md:pl-12' : ''}>
                  <span className="font-headline text-7xl text-primary-container leading-none select-none opacity-40 block mb-[-1rem]">&ldquo;</span>
                  <blockquote className="font-headline text-2xl md:text-3xl text-on-surface italic leading-relaxed mb-8">
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-px bg-primary" />
                    <div>
                      <p className="font-label text-sm uppercase tracking-[0.2rem] font-bold text-on-surface mb-1">{t.by}</p>
                      <p className="font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">{t.event}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <section className="py-32 bg-surface-container-highest text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-12 tracking-[0.3rem] uppercase">Begin Your Curated Journey</h2>
          <Link to="/contact" className="bg-primary text-on-primary px-12 py-5 text-sm font-label tracking-[0.4rem] uppercase hover:bg-on-surface transition-all duration-500 no-underline inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
