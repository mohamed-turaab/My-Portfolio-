import { useEffect, useState } from "react";

const links = [
  { to: "#about", label: "About", id: "about" },
  { to: "#services", label: "Services", id: "services" },
  { to: "#testimonial", label: "Testimonial", id: "testimonial" },
  { to: "#contact", label: "Contact", id: "contact" },
];

const navLinkClass = (active, centered = false) =>
  [
    "relative overflow-hidden rounded-[1.15rem] px-4 py-3 text-sm font-semibold tracking-[0.14em] transition duration-300",
    active
      ? "border border-white/10 bg-white/[0.08] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
      : "border border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/[0.07] hover:text-white",
    centered ? "text-center" : "",
  ].join(" ");

function DesktopNavigation({ activeSection, onNavigate }) {
  return (
    <div className="hidden items-center md:flex">
      <div className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,26,29,0.96),rgba(10,10,12,0.94))] p-[0.5rem] shadow-[0_28px_70px_rgba(0,0,0,0.34)]">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-6 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="relative flex items-center gap-2">
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-2 rounded-[1.35rem] border border-white/5 bg-white/[0.03] px-1.5 py-1.5 backdrop-blur"
          >
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className={navLinkClass(activeSection === link.id)}
                onClick={() => onNavigate(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.28;
      let currentSection = links[0].id;

      for (const link of links) {
        const section = document.getElementById(link.id);

        if (section && section.offsetTop <= threshold) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="px-3 pt-3 md:px-5 md:pt-5">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,27,0.96),rgba(10,10,12,0.94))] px-4 py-4 shadow-[0_30px_85px_rgba(0,0,0,0.38)] backdrop-blur md:px-6 md:py-5">
          <div className="relative">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute -left-6 top-4 h-16 w-16 rounded-full bg-white/[0.03] blur-3xl" />
            <div className="absolute -right-4 bottom-2 h-16 w-16 rounded-full bg-white/[0.03] blur-3xl" />

            <div className="relative flex items-center justify-between gap-4">
              <a
                href="#about"
                className="group flex min-w-0 items-center gap-3"
                onClick={() => handleNavigate("about")}
              >
                <div className="relative">
                  <span className="absolute inset-0 rounded-[1.45rem] bg-white/[0.08] blur-md transition duration-300 group-hover:bg-white/[0.12]" />
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] font-display text-xl text-white shadow-lg shadow-black/25">
                    M
                  </span>
                </div>
                <div className="min-w-0 rounded-[1.2rem] border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur">
                  <p className="truncate font-display text-[1.35rem] leading-none text-white">
                    Mohamed Turaab
                  </p>
                </div>
              </a>

              <DesktopNavigation
                activeSection={activeSection}
                onNavigate={handleNavigate}
              />

              <div className="hidden items-center gap-3 xl:flex">
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5"
                  onClick={() => handleNavigate("contact")}
                >
                  Contact Me
                </a>
              </div>

              <button
                type="button"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.35rem] border border-white/10 bg-white/[0.04] text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] md:hidden"
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
                <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,15,17,0.98),rgba(8,8,10,0.96))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.34)]">
                  <nav aria-label="Mobile navigation" className="grid gap-2">
                    {links.map((link) => (
                      <a
                        key={link.to}
                        href={link.to}
                        className={navLinkClass(activeSection === link.id, true)}
                        onClick={() => handleNavigate(link.id)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <a
                    href="#contact"
                    className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20"
                    onClick={() => handleNavigate("contact")}
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
