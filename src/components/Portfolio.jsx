const filters = ['All', 'Weddings', 'Corporate', 'Private', 'Spiritual']

const projects = [
  {
    span: 'md:col-span-7',
    aspect: 'aspect-[4/5]',
    category: 'Heritage Wedding',
    title: 'The Udaipur Palace Gala',
    description:
      'A breathtaking three-day celebration blending royal traditions with contemporary luxury at the heart of the Lake Palace.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTa93AbXQDaNuLAcRlYlY2ldno2aMnMSrak3mPjrl7qoLZ0mDXTpN2TzkmWyJg1EuUAPsWmmiRUVSFAX3jGnG5cNtHNynVaq6fitRAIK8okqIXiTWrLN-5xDKIJfaPlzyB-BJoUOiAW_ifWmkwetslfDN4K7AbvrDL11CDsMhUVggJ6G_4JM0XfssD1fD6Y-zPv0YNV4_8gh69NEuXFSLv3tkmk71hPTh798wXUPC2l9hu4KyxJ5ltMIlugueb4c11ECzdsFCmcbMu',
    titleSize: 'text-4xl',
  },
  {
    span: 'md:col-span-5 md:pt-32',
    aspect: 'aspect-square',
    category: 'Corporate',
    title: 'Tech Visionary Summit',
    description:
      'Curating an atmosphere of innovation for global industry leaders.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC392Q7AW2ivDqmr03y0YR4KBXM4t1IAnTmJOK4QCtzPno_u0MhXBqUWjBk2R5MUv680p98Y9SR_yQBlEoPhserNre6s7wgTv-j-MrzLcDX_PUBhxphzp3_DS8bIfqlIKcuFmzRPO3nZS0xzshmEZRVZW2RVxBcs1U_BJONoOI07TRbtHDSh_Y7o8QL5s3b6j460WR72XCatBp9ifhS1lCRGzbtWh4V3wEOS0WCL_JTSlYd1occw-xBPGzE3Az2q67DvL4r7aXVsvX4',
    titleSize: 'text-3xl',
    quote: '"The architecture of an event is in its silence."',
  },
  {
    span: 'md:col-span-5',
    aspect: 'aspect-[3/4] md:aspect-square',
    category: 'Spiritual',
    title: 'Vedic Echoes Retreat',
    description:
      'A sacred journey of mindfulness curated in the Himalayan foothills.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWKiwBN_iC2sjWOE41HO3F_ZBjdZ4DLfAezUM59eLxK2-_FkaQY8-VgJkjTNBNeIv_GXvSD0giLsBKx82CdXX3BGsoGOuAOU4xmhkZT9BTP70MZE_tCLlbtppfBe8J1m0pLcCQoFQxfwKq2j8L_SpWDCw0ABbTW8SDUQBUm9tVBKG--Q2Z6g5SJ_bGXWNBVsyQPJkFi5ygs5efZWdaD_RBFj3hEt6qVPpESWMXWxq-zMBACUmPF2ujvV2QSb5WSVm_JItASeWL-EVt',
    titleSize: 'text-3xl',
  },
  {
    span: 'md:col-span-7 md:-mt-40',
    aspect: 'aspect-video md:aspect-[4/3]',
    category: 'Private Gallery',
    title: "The Artisan's Table",
    description:
      'An intimate dinner for twenty, set amongst priceless artifacts, celebrating the intersection of fine art and culinary excellence.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAq71qQGGF4cWs6aPbOjVK18BNWQo6h4N8APTuGR5ZHQCUZceAdQc3LEbyYBoOXmc5OVwT18HIduPIVeHvUCW_6PCrS7UVTsZ4ZPvc-Ct5MqkhRxaN8JZFwM837qsV4lPMDe2NtGSbhKYtyK2J-fxeaVsZdeaK3jnadjgBq97m_w4JDUA3J0F8qVz4BMbgoVYL4ENvuuafVUIEdbJq2zOTFNL2JYFFB-JZfSyPBdQqYTp0fCrEOVy_Zz1SPN8dgw96EXfI-mZgoLmrT',
    titleSize: 'text-5xl',
    hasLine: true,
  },
]

export default function Portfolio() {
  return (
    <section className="bg-surface">
      {/* Header */}
      <header className="pt-32 pb-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary mb-6 block">
            The Gallery
          </span>
          <h2 className="font-headline text-6xl md:text-8xl tracking-tighter leading-none mb-8">
            THE PORTFOLIO
          </h2>
          <p className="font-headline italic text-2xl text-secondary max-w-xl opacity-80">
            Moments curated, stories told.
          </p>
        </div>
      </header>

      {/* Filter Controls */}
      <div className="px-6 md:px-8 max-w-screen-2xl mx-auto mb-20">
        <div className="flex flex-wrap gap-12 items-end border-b border-outline-variant/20 pb-6">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`font-label text-xs uppercase tracking-[0.2em] font-semibold pb-6 -mb-6 transition-all ${
                i === 0
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary/60 hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Masonry Grid */}
      <div className="px-6 md:px-8 max-w-screen-2xl mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {projects.map((project) => (
            <div key={project.title} className={project.span}>
              <div
                className={`editorial-reveal group relative ${project.aspect} bg-surface-container overflow-hidden cursor-pointer`}
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c16]/90 via-[#3D3226]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end reveal-content">
                  {project.hasLine && (
                    <div className="flex items-center gap-6 mb-4">
                      <span className="h-px w-12 bg-primary" />
                      <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-container">
                        {project.category}
                      </span>
                    </div>
                  )}
                  {!project.hasLine && (
                    <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-container mb-4">
                      {project.category}
                    </span>
                  )}
                  <h3
                    className={`font-headline ${project.titleSize} text-surface-bright mb-4`}
                  >
                    {project.title}
                  </h3>
                  <p className="font-body text-surface-bright/70 text-sm max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              {project.quote && (
                <div className="mt-8">
                  <p className="font-headline italic text-lg text-secondary/60">
                    {project.quote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Break */}
      <div className="bg-surface-container-low py-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-5xl md:text-7xl tracking-tighter mb-8 leading-tight">
              Excellence is in <br />
              <span className="italic text-primary">every whisper.</span>
            </h2>
            <p className="font-body text-secondary text-lg leading-loose max-w-lg mb-10">
              We don't just manage events; we architect legacies. Each project
              in our portfolio represents a unique partnership, a shared vision,
              and a flawless execution of silent luxury.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-4 font-label text-xs uppercase tracking-[0.2em] font-bold text-primary group"
            >
              Start Your Journey
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-surface-variant overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBc2XuniBidN64iWjuu64124b4nHpcHbAryzsqFOIVTf1Gz-EiXMtDpyQOswppaskWRCpRLaz-gRUo5_ht98iCiCc5I9RqkrjdkbRVO-PINMKMIlI5I2yxhcccjy_WjvRYk2p1mTIqnQ7IQlgj_iXPg7X1vElVieh6Hi_Q7guwvZUrSRrsJJJucWJMfqtje4FWmIuWOwG-h5kPlPbVvc4zS68tpWYQJ9IOYrL_bt4frsXyiD8ig3ODZoaDDaAYbPUR8rWrOVF6s7i"
                alt="Macro shot of silk and gold event textures"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary p-12 hidden md:block">
              <p className="text-on-primary font-headline italic text-2xl">
                Tailored to your singular essence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
