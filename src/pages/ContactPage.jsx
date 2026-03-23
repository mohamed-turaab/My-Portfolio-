function ContactPage() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-3 md:px-5">
      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#17171a_0%,#0f0f11_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-zinc-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:p-8">
            <span className="mb-3 inline-flex rounded-full border border-white/10 bg-zinc-800 px-4 py-1 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
              Contact
            </span>
            <h1 className="font-display text-5xl leading-none text-white md:text-7xl">
              Ready to build something cleaner?
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Share the idea. I will shape the look.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Email
                </p>
                <p className="mt-2 text-lg text-white">
                  mohamedturaab1991@gmail.com
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                  Status
                </p>
                <p className="mt-2 text-lg text-white">Open now</p>
              </div>
            </div>
          </div>

          <form className="rounded-[1.8rem] border border-white/10 bg-zinc-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-300">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-4 focus:ring-zinc-800"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-300">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-4 focus:ring-zinc-800"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-300">Message</span>
                <textarea
                  rows="6"
                  placeholder="Tell me about your project"
                  className="rounded-[1.5rem] border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-zinc-500 focus:ring-4 focus:ring-zinc-800"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-6 text-sm font-bold uppercase tracking-[0.24em] text-zinc-950 transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
