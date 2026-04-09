import Link from "next/link";

import { heroImage } from "./security-service-data";

export function HeroShowcase() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:h-[815px] lg:aspect-auto">
        <img
          src={heroImage}
          alt="Security service hero"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5" />

        <div className="absolute bottom-4 left-1/2 w-[min(718px,calc(100%-2rem))] -translate-x-1/2 rounded-[10px] bg-white px-4 py-4 text-center shadow-[0_25px_50px_0px_rgba(0,0,0,0.25)] sm:bottom-auto sm:top-[320px] sm:px-8 sm:py-7">
          <p className="font-[family-name:var(--font-poppins)] text-base font-semibold text-[#0f172b] sm:text-lg">
            Best of all - it&apos;s completely free!
          </p>
          <Link
            href="#services"
            className="mx-auto mt-3 inline-flex h-11 w-full max-w-[441px] items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 font-[family-name:var(--font-public-sans)] text-xs font-bold tracking-[0.016em] text-white sm:h-12 sm:text-sm"
          >
            Get Site a Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
