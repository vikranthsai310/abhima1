export default function Philosophy() {
  return (
    <section className="py-32 bg-surface-container-low border-y border-primary-container/10">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[0.5px] w-12 bg-primary-container" />
          <span className="font-label text-primary tracking-[0.2rem] uppercase text-xs">
            02 — Philosophy
          </span>
          <div className="h-[0.5px] w-12 bg-primary-container" />
        </div>
        <h2 className="font-headline text-3xl md:text-5xl leading-snug text-on-surface italic">
          "Discretion over display. <br />
          Precision over excess."
        </h2>
        <div className="mt-12 h-20 w-[0.5px] bg-primary-container mx-auto" />
      </div>
    </section>
  )
}
