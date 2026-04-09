import { logoMark } from "./home-data";

export function Header() {
  const navItems = ["Our Service", "How we work", "Customer Review", "About US"];

  return (
    <header className="border-b border-white/60 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoMark} alt="nellebobb logo" className="h-10 w-auto sm:h-12" />
            <span className="sr-only">nellebobb</span>
          </a>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-800 px-4 text-xs font-bold text-white transition hover:bg-slate-700"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[linear-gradient(149deg,#0ba8dd_4%,#60d8ff_28%,#0ba8dd_56%)] px-4 text-xs font-bold text-white shadow-[0_8px_20px_-12px_rgba(11,168,221,0.85)] transition hover:brightness-105"
            >
              Login
            </a>
          </div>
        </div>

        <nav className="w-full overflow-x-auto pb-1 lg:w-auto lg:pb-0">
          <ul className="flex min-w-max items-center gap-1 sm:gap-2 lg:justify-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="rounded-full px-3 py-2 text-xs font-medium tracking-[0.08em] text-[#015555] transition hover:bg-[#e7f4f1] sm:px-4 sm:text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-800 px-5 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[linear-gradient(149deg,#0ba8dd_4%,#60d8ff_28%,#0ba8dd_56%)] px-5 text-sm font-bold text-white shadow-[0_8px_20px_-12px_rgba(11,168,221,0.85)] transition hover:brightness-105"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
