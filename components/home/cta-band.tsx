import { ctaPortrait } from "./home-data";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#015555]">
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-[#f0c41c] blur-[1px]" />
      <div className="absolute -right-12 -top-16 h-72 w-72 rounded-full border border-black/50 opacity-60" />
      <div className="absolute -right-40 top-12 h-48 w-48 rounded-full border border-black/50 opacity-60" />
      <div className="absolute left-[36%] top-[22%] hidden h-20 w-20 grid-cols-4 grid-rows-4 gap-1 opacity-80 lg:grid">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-white/80" />
        ))}
      </div>
      <div className="absolute left-[14%] top-[14%] hidden h-16 w-16 grid-cols-4 grid-rows-4 gap-1 opacity-80 lg:grid">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-white/80" />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative mx-auto max-w-70 sm:max-w-sm lg:mx-0">
          <img
            src={ctaPortrait}
            alt="Team member portrait"
            className="relative z-10 h-auto w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
          />
          <div className="absolute left-4 top-10 h-24 w-24 rounded-full bg-[#0ba8dd]/20 blur-2xl" />
          <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
        </div>

        <div className="relative flex items-center justify-center lg:min-h-55 lg:justify-start">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-[0.01em] text-white sm:text-5xl">
              Need help finding the right Service?
            </h2>
            <a
              href="#"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#0ba8dd] px-6 font-(family-name:--font-public-sans) text-xs font-bold tracking-[0.14em] text-white shadow-[3px_4px_0px_0px_#3d3d3d] transition hover:-translate-y-px hover:bg-[#19b5e5] sm:h-12 sm:text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
