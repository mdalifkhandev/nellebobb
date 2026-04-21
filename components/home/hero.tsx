"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { findServiceMatch } from "./home-data";
import heroIllustration from "@/assets/image/hero-first.png";

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const matchedService = findServiceMatch(query);

    if (matchedService) {
      router.push(matchedService.href);
      return;
    }

    router.push("/#our-service");
  }

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0A1F44]">
      <div className="bg-[#0A1F44] mx-auto grid min-h-125 max-w-360 items-stretch lg:grid-cols-[1.08fr_0.92fr]">
        {/* Left side content area: headline, subtext, and search form */}
        <div className="relative overflow-hidden bg-[#0A1F44] px-6 py-14 text-[#f1f4f4] sm:px-10 sm:py-16 lg:px-14 lg:py-24 xl:px-16">
          <div className="absolute left-24 top-10 hidden h-10 w-28 opacity-80 lg:block">
            {/* <img src={heroAccent} alt="" className="h-full w-full object-contain" /> */}
          </div>

          <div className="mx-auto flex min-h-full max-w-135 flex-col justify-center text-center lg:mx-0 lg:text-left">
            <h1 className="font-(family-name:--font-inter) text-[32px] font-semibold leading-none tracking-[0] align-middle sm:text-[32px] lg:max-w-125 lg:text-[46px]">
              Find the best
              <br />
              professionals in
              {/* <span className="inline-block bg-[#26b4ed] px-1.5 py-0.5 text-white">
                
              </span> */}{" "}
              the BVI
            </h1>
            <p className="mt-4 text-base leading-7 text-[#e6e6e6]/95 sm:mt-5 sm:text-[1.1rem]">
              Get free quotes within minutes
            </p>

            {/* Form stacks on small screens and aligns horizontally from `sm` and up */}
            <form
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
              onSubmit={handleSubmit}
            >
              <label className="sr-only" htmlFor="service-search">
                What service are you looking for?
              </label>
              <input
                id="service-search"
                name="service-search"
                placeholder="What service are you looking for?"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-11.5 min-w-0 w-full flex-1 rounded-sm border border-[#d7dbe2] bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-[#9ba3af] focus:border-[#0ba8dd] sm:h-12 sm:max-w-77.5"
              />
              <button
                type="submit"
                className="group relative inline-flex h-11.5 min-w-46.5 items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(135deg,#16aee0_0%,#12a7da_45%,#109fd1_100%)] px-8 font-(family-name:--font-public-sans) text-sm font-bold text-white shadow-[0_8px_20px_-12px_rgba(11,168,221,0.85)] transition-all duration-300 hover:-translate-y-px hover:brightness-105 sm:h-12"
              >
                <span className="pointer-events-none absolute inset-y-0 left-[-8%] w-[40%] skew-x-[-60deg] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.75)_50%,transparent_100%)] opacity-90 transition-transform duration-500 ease-out group-hover:translate-x-[200%]" />
                <span className="relative z-10 text-black">Search</span>
              </button>
            </form>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#edf4f4]/90 sm:text-base lg:mx-0">
              Popular: Security service, Process Service, Search, Legal Service
            </p>
          </div>
        </div>

        {/* Right side visual area: illustration framed with soft background gradients */}
        {/* <div className="relative flex items-center justify-center overflow-hidden bg-white px-5 py-8 sm:px-6 sm:py-10 lg:px-2 lg:py-0">
          <div className="relative z-10 h-195 w-full">
            <Image
              src={heroIllustration}
              alt="Person holding a phone with service bubbles"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-center p-2 sm:p-3 lg:p-0"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
