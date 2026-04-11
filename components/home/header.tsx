import { logoMark } from "./home-data";

export function Header() {
  const navItems = ["Our Service", "How we work", "Customer Review", "About US"];

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-360 items-center gap-8 px-6 sm:px-8 lg:px-12">
        <div className="flex shrink-0 items-center">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoMark} alt="nellebobb logo" className="h-11 w-auto sm:h-12" />
            <span className="sr-only">nellebobb</span>
          </a>
        </div>

        <nav className="flex flex-1 justify-center overflow-x-auto">
          <ul className="flex min-w-max items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="inline-flex items-center font-(family-name:--font-poppins) text-[15px] font-medium tracking-[0.01em] text-[#0a7073] transition hover:opacity-85 sm:text-[17px]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center">
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#18bee8_0%,#0ca8dd_100%)] px-7 text-sm font-bold text-white shadow-[0_5px_0_0_rgba(0,0,0,0.35)] transition hover:brightness-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
