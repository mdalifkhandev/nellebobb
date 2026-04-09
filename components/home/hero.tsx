import { heroAccent, heroIllustration } from "./home-data";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden bg-[#015555] px-4 py-12 text-[#e6e6e6] sm:px-8 sm:py-16 lg:px-16 lg:py-24">
          <div className="absolute left-24 top-8 hidden h-10 w-28 opacity-80 lg:block">
            <img src={heroAccent} alt="" className="h-full w-full object-contain" />
          </div>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-semibold tracking-[-0.01em] sm:text-5xl lg:text-[3.85rem] lg:leading-[1.05]">
              Find the best
              <br />
              professionals in the BVI
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#e6e6e6]/95 sm:mt-5 sm:text-lg">
              Get free quotes within minutes
            </p>

            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <label className="sr-only" htmlFor="service-search">
                What service are you looking for?
              </label>
              <input
                id="service-search"
                name="service-search"
                placeholder="What service are you looking for?"
                className="h-11 min-w-0 w-full flex-1 rounded-md border-2 border-[#e6e7ec] bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0ba8dd] sm:h-12 sm:max-w-[304px]"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[linear-gradient(158deg,#0ba8dd_4%,#60d8ff_28%,#0ba8dd_56%)] px-8 font-[family-name:var(--font-public-sans)] text-sm font-bold tracking-[0.14em] text-white shadow-[0_10px_22px_-16px_rgba(0,0,0,0.45)] transition hover:translate-y-[-1px] hover:brightness-105 sm:h-12"
              >
                Search
              </button>
            </form>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#e6e6e6]/90 sm:text-base lg:mx-0">
              Popular: Security service, Process Service, Search, Legal Service
            </p>
          </div>
        </div>

        <div className="relative flex justify-center bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-4 lg:py-16">
          <div className="relative aspect-square w-full max-w-[640px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eaf7ff] via-white to-[#eef8ff] shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)] sm:aspect-[4/3] sm:min-h-[420px] lg:aspect-auto lg:h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,168,221,0.15),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(15,118,110,0.12),transparent_22%),radial-gradient(circle_at_52%_74%,rgba(11,168,221,0.12),transparent_24%)]" />
            <img
              src={heroIllustration}
              alt="Person holding a phone with service bubbles"
              className="relative z-10 h-full w-full object-contain object-center p-3 sm:p-4 lg:p-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
