import { useState } from "react";

const links = [
  { to: "#about", label: "About" },
  { to: "#services", label: "Services" },
  { to: "#testimonial", label: "Testimonial" },
  { to: "#contact", label: "Contact" },
];

const navLinkClass = (centered = false) =>
  [
    "relative rounded-full px-4 py-2.5 text-sm font-medium tracking-[0.02em] text-zinc-300 transition duration-300 hover:bg-zinc-800 hover:text-white",
    centered ? "text-center" : "",
  ].join(" ");

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-3 pt-3 md:px-5 md:pt-5">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.96),rgba(12,12,14,0.94))] px-4 py-4 shadow-[0_24px_65px_rgba(0,0,0,0.35)] md:px-6 md:py-5">
          <div className="relative">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="relative flex items-center justify-between gap-4">
              <a
                href="#about"
                className="flex min-w-0 items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.35rem] bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-700 font-display text-xl text-white shadow-lg shadow-black/25">
                  M
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-2xl leading-none text-white">
                    Mohamed Turaab
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    <p className="truncate text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                      Dark Portfolio
                    </p>
                  </div>
                </div>
              </a>

              <div className="hidden items-center gap-3 lg:flex">
                <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 p-1 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                  {links.map((link) => (
                    <a
                      key={link.to}
                      href={link.to}
                      className={navLinkClass()}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="hidden items-center gap-3 md:flex lg:hidden">
                <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 p-1 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                  {links.map((link) => (
                    <a
                      key={link.to}
                      href={link.to}
                      className={navLinkClass()}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="hidden items-center gap-3 xl:flex">
                <div className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-300">
                  Monochrome Mood
                </div>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
              </div>

              <button
                type="button"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.35rem] border border-white/10 bg-zinc-900 text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] md:hidden"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                onClick={() => setIsOpen((open) => !open)}
              >
                <span className="space-y-1.5">
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition ${
                      isOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-5 rounded-full bg-current transition ${
                      isOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>

            {isOpen ? (
              <div className="relative mt-4 md:hidden">
                <div className="rounded-[1.6rem] border border-white/10 bg-zinc-950 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="mb-3 rounded-[1.25rem] border border-white/10 bg-zinc-900 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                      Navigate Sections
                    </p>
                    <p className="mt-2 font-display text-2xl text-white">
                      Dark Layout
                    </p>
                  </div>

                  <nav className="grid gap-2">
                    {links.map((link) => (
                      <a
                        key={link.to}
                        href={link.to}
                        className={navLinkClass(true)}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <a
                    href="#contact"
                    className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
