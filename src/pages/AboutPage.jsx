const stats = [
  { value: "03+", label: "Years refining style" },
  { value: "12", label: "Clean page concepts" },
  { value: "24h", label: "Fast updates" },
];

function AboutPage() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
            About
          </span>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            Mohamed Turaab is a Full Stack Developer creating modern digital experiences since 2023.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            He builds clean interfaces and solid backend systems that feel
            smooth, refined, and built with purpose.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.8rem] border border-white/10 bg-zinc-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <img
                src="/my-photo.jpg.jpg"
                alt="Portfolio preview"
                className="h-[420px] w-full object-cover object-center grayscale contrast-125 md:h-[460px] md:object-[center_22%]"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Visual Identity
                </p>
                <p className="mt-3 font-display text-3xl text-white">
                  Mr Turaab "I Turn Ideas Into Reality"
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
                Profile
              </span>
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-zinc-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Developer Profile
              </p>
              <h2 className="mt-4 font-display text-4xl text-white">
                Blending frontend precision with reliable backend structure.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                From layout to logic, every project is designed to feel modern,
                responsive, and technically strong from end to end.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5"
                >
                  <p className="font-display text-4xl text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
