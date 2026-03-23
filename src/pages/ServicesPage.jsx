const services = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces built with clean structure and modern styling.",
  },
  {
    title: "Backend Development",
    description: "Reliable server-side logic, database flow, and secure app functionality.",
  },
  {
    title: "Full Stack Web Apps",
    description: "Complete web solutions that connect design, logic, and performance.",
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
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none text-white">
            Full stack services built for modern projects.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From interface design to backend logic, each service is focused on clean code and strong user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3">
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
                Clean and scalable
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
