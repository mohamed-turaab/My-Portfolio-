const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonial", label: "Community" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="px-3 py-4 md:px-5 md:pb-8">
      <div className="mx-auto w-full max-w-7xl rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,#141417_0%,#09090b_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] md:p-6">
     <div className="w-full px-3 md:px-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[1.4rem] border border-white/10 bg-zinc-900 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
              Mohamed Turaab
            </p>
            <h2  className="mt-3 font-display text-lg text-white md:text-3xl">
              Full Stack Developer building clean modern products.
            </h2>
            <p className="mt-3 max-w-lg leading-7 text-zinc-400">
              Frontend, backend, and thoughtful details shaped into polished
              digital experiences.
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-white/10 bg-zinc-900 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
              Quick Links
            </p>
            <nav className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-[1rem] border border-white/5 bg-zinc-950 px-4 py-3 text-sm font-semibold text-zinc-300 transition duration-300 hover:border-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-[1.4rem] border border-white/10 bg-zinc-900 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">
              Contact
            </p>
            <a
              href="mailto:mohamedturaab1991@gmail.com"
              className="mt-4 block font-display text-xl text-white transition duration-300 hover:text-zinc-300"
            >
              mohamedturaab1991@gmail.com
            </a>
            <p className="mt-3 leading-7 text-zinc-400">
              Available for website projects, frontend work, and full stack
              development.
            </p>
            <a
              href="#about"
              className="mt-5 inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white px-5 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5"
            >
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-5 text-center text-sm text-zinc-500">
          <p>Copyright &copy; 2026 Mohamed Turaab. All rights reserved.</p>
          <p className="mt-3">Designed and developed by Mohamed Turaab.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
