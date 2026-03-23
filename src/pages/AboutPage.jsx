const stats = [
  { value: "03+", label: "Years refining style" },
  { value: "12", label: "Clean page concepts" },
  { value: "24h", label: "Fast updates" },
];

function AboutPage() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="grid items-center gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] lg:grid-cols-[0.92fr_1.08fr] md:p-8">
        <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,#202024_0%,#0f0f11_100%)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.25)]">
          <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.3)]">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
              <img
                src="/my-photo.jpg.jpg"
                alt="Portfolio preview"
                className="h-[420px] w-full object-cover object-center grayscale contrast-125 md:h-[460px] md:object-[center_22%]"
              />
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">
                  Portfolio Style
                </p>
                <p className="mt-2 font-display text-3xl text-white">
                  The site now mirrors your image tone
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-zinc-200">
                Editorial
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
              About
            </span>
            <h1 className="max-w-xl font-display text-5xl leading-none text-white md:text-7xl">
              Dark, clean, and made to feel sharp.
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            The full page now follows your portrait with layered grays, deep
            blacks, and softer silver highlights.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.6rem] border border-white/10 bg-zinc-900 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                <p className="font-display text-4xl text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
