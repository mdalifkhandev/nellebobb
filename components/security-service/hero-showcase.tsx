"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import firstImage from "@/assets/image/first.jpeg";
import secondImage from "@/assets/image/second.png";
import thredImage from "@/assets/image/thred.png";
import fourImage from "@/assets/image/four.jpeg";

export function HeroShowcase() {
  const slides = [firstImage, secondImage, thredImage, fourImage];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="our-service" className="relative overflow-hidden bg-white">
      <div className="relative aspect-4/5 w-full sm:aspect-16/10 lg:h-203.5 lg:aspect-auto">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt="Security service hero"
            aria-hidden={activeIndex !== index}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/5" />

        <div className="absolute left-1/2 top-80 flex w-[min(718px,calc(100%-2rem))] -translate-x-1/2 flex-col items-center gap-4 rounded-lg bg-white px-6 py-6 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:px-8 sm:py-6">
          <p className="font-(family-name:--font-inter) text-[18px] font-bold leading-7 text-[#0f172b]">
            Best of all - it&apos;s completely free!
          </p>
          <Link
            href="#how-we-work"
            className="shine-button inline-flex h-12 w-full max-w-110.25 items-center justify-center rounded-lg bg-[linear-gradient(121deg,#39c8ee_0%,#18aae2_52%,#11a8de_100%)] px-6 font-(family-name:--font-public-sans) text-[15px] font-bold tracking-[0.016em] text-white shadow-[0_8px_20px_-12px_rgba(17,168,222,0.75)]"
          >
            Get Site a Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
