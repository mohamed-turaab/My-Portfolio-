const testimonials = [
  {
    name: "Mr Sharafdiin",
    role: "Website Client",
    quote:
      "The work Mohamed did for me was clean, fast, and exactly how I wanted it to feel.",
  },
  {
    name: "Omar Tood",
    role: "Project Client",
    quote:
      "He handled the project in a professional way and delivered a smooth frontend with solid backend work.",
  },
  {
    name: "Salah Sharafdiin",
    role: "Work Testimonial",
    quote:
      "The website he built for me looked modern, worked well on every screen, and gave the project a strong presence.",
  },
];

function TestimonialPage() {
  return (
    <section id="testimonial" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-900 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
            Client Feedback
          </span>
          <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
            Words from people I built for.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Feedback from clients who trusted me to design, build, and deliver
            modern web experiences for their projects.
          </p>
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
