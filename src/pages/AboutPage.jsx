const stats = [
  { value: "03+", label: "Years in development" },
  { value: "UI", label: "Clean responsive interfaces" },
  { value: "API", label: "Backend and database integration" },
];

function AboutPage() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
            About
          </span>
          <h1 className="max-w-4xl font-display text-4xl leading-[0.98] text-white sm:text-5xl lg:text-6xl">
            Mohamed Turaab builds modern full stack web experiences.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Building clean interfaces and solid backend systems since 2023 with
            a focus on polished, responsive, and reliable products.
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
                  Developer Vision
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
                Full Stack Focus
              </p>
              <h2 className="mt-4 font-display text-4xl text-white">
                Building modern web products from interface to backend logic.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                Mohamed Turaab works across frontend and backend to create
                responsive websites, connected APIs, and reliable digital
                experiences that solve real problems.
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
