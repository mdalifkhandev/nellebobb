import Link from "next/link";

import { ContactUsButton } from "./contact-us-button";
import { logoMark } from "./home-data";

type NavItem = {
  label: string;
  href: string;
};

const defaultNavItems: NavItem[] = [
  { label: "Our Service", href: "/#our-service" },
  { label: "How we work", href: "/#how-we-work" },
  { label: "Customer Review", href: "/#customer-review" },
  { label: "About US", href: "/#about-us" },
];

export function Header({
  navItems = defaultNavItems,
}: {
  navItems?: NavItem[];
}) {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-360 items-center gap-8 px-6 sm:px-8 lg:px-12">
        <div className="flex shrink-0 items-center">
          <Link href="/" className="flex items-center gap-3">
            {/* <img
              src={logoMark}
              alt="nellebobb logo"
              className="h-11 w-auto sm:h-12"
            /> */}
            <span className="sr-only">nellebobb</span>
          </Link>
        </div>

        <nav className="flex flex-1 justify-center overflow-x-auto">
          <ul className="flex min-w-max items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center font-(family-name:--font-poppins) text-[15px] font-medium tracking-[0.01em] text-[#015555] transition hover:opacity-80 sm:text-[17px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center">
          <ContactUsButton className="shine-button inline-flex h-10 items-center justify-center rounded-lg bg-[linear-gradient(180deg,#18bee8_0%,#0ca8dd_100%)] px-7 text-sm font-bold text-white shadow-[0_5px_0_0_rgba(0,0,0,0.35)] transition hover:brightness-105" />
        </div>
      </div>
    </header>
  );
}
