const services = [
  {
    title: "Portfolio Design",
    description: "Clean personal pages with strong visual balance.",
  },
  {
    title: "Landing Pages",
    description: "Focused layouts for brands, offers, and launches.",
  },
  {
    title: "Frontend Styling",
    description: "Modern React styling with a polished dark finish.",
  },
];

function ServicesPage() {
  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
            Services
          </span>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            Clean work with a darker edge.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Short, clear, and styled to match the portrait-led mood.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group min-h-[280px] rounded-[1.8rem] border border-white/10 bg-zinc-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-xs font-bold tracking-[0.25em] text-zinc-300">
                0{index + 1}
              </span>
              <h2 className="mt-6 font-display text-4xl text-white">
                {service.title}
              </h2>
              <p className="mt-4 leading-8 text-zinc-400">
                {service.description}
              </p>
              <div className="mt-8 h-px w-full bg-white/10" />
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-zinc-500">
                Tailored and polished
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
