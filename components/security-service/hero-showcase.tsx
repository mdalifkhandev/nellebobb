import Link from "next/link";

import { heroImage } from "./security-service-data";

export function HeroShowcase() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[815px] w-full">
        <img src={heroImage} alt="Security service hero" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/5" />

        <div className="-translate-x-1/2 absolute left-1/2 top-[320px] w-[min(718px,calc(100%-2rem))] rounded-[10px] bg-white px-6 py-6 text-center shadow-[0_25px_50px_0px_rgba(0,0,0,0.25)] sm:px-8 sm:py-7">
          <p className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-[#0f172b]">
            Best of all - it&apos;s completely free!
          </p>
          <Link
            href="#services"
            className="mx-auto mt-3 inline-flex h-12 w-full max-w-[441px] items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 font-[family-name:var(--font-public-sans)] text-sm font-bold tracking-[0.016em] text-white"
          >
            Get Site a Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
