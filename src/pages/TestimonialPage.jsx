const testimonials = [
  {
    name: "Ayaan Studio",
    role: "Brand Founder",
    quote: "Sharp, premium, and easy to trust.",
  },
  {
    name: "Nuur Media",
    role: "Creative Director",
    quote: "Dark, clean, and far from a generic template.",
  },
  {
    name: "Sahal Tech",
    role: "Startup Team",
    quote: "Simple structure, stronger presence.",
  },
];

function TestimonialPage() {
  return (
    <section id="testimonial" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
            Community
          </span>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            Short words. Strong impression.
          </h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col justify-between rounded-[1.8rem] border border-white/10 bg-zinc-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <p className="text-lg leading-8 text-zinc-300">"{item.quote}"</p>
              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="font-display text-3xl text-white">{item.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.24em] text-zinc-500">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialPage;
