import Link from "next/link";

import { heroImage } from "./security-service-data";

export function HeroShowcase() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative aspect-4/5 w-full sm:aspect-16/10 lg:h-203.5 lg:aspect-auto">
        <img
          src={heroImage}
          alt="Security service hero"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5" />

        <div className="absolute left-1/2 top-80 flex w-[min(718px,calc(100%-2rem))] -translate-x-1/2 flex-col items-center gap-4 rounded-lg bg-white px-6 py-6 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:px-8 sm:py-6">
          <p className="font-(family-name:--font-inter) text-[18px] font-bold leading-7 text-[#0f172b]">
            Best of all - it&apos;s completely free!
          </p>
          <Link
            href="#services"
            className="inline-flex h-12 w-full max-w-110.25 items-center justify-center rounded-lg bg-[linear-gradient(121deg,#39c8ee_0%,#18aae2_52%,#11a8de_100%)] px-6 font-(family-name:--font-public-sans) text-[15px] font-bold tracking-[0.016em] text-white shadow-[0_8px_20px_-12px_rgba(17,168,222,0.75)]"
          >
            Get Site a Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
