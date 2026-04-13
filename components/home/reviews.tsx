"use client";

import { useState } from "react";

import { reviews } from "../security-service/security-service-data";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteMark,
  StarIcon,
} from "./home-icons";
import { SectionHeading } from "./section-heading";

export function Reviews() {
  const avatarColors = ["bg-[#0ea5e9]", "bg-[#f97316]", "bg-[#10b981]", "bg-[#f59e0b]", "bg-[#111827]"];
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const total = reviews.length;

  const visibleReviews = Array.from({ length: Math.min(visibleCount, total) }).map(
    (_, offset) => {
      const index = (startIndex + offset) % total;
      return { review: reviews[index], colorIndex: index };
    }
  );

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="bg-[#eef7f4] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Reviews"
          subtitle="A few words from the people and teams we’ve helped keep moving."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:mt-10">
          {visibleReviews.map(({ review, colorIndex }) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-[#d6e6f2] bg-[#eaf4fb] p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.45)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#015555] sm:text-base">Great Quality!</p>
                  <div className="mt-3 flex items-center gap-1 text-[#f7b500]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <QuoteMark />
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600 sm:text-[15px]">{review.text}</p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white shadow-md ring-2 ring-white sm:h-12 sm:w-12 ${
                    avatarColors[colorIndex % avatarColors.length]
                  }`}
                >
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <p className="text-sm font-semibold text-slate-800 sm:text-base">{review.name}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5e2ec] bg-white text-[#8fa0ad] shadow-[0_6px_14px_rgba(15,23,42,0.08)] transition hover:border-[#0ba8dd] hover:text-[#0ba8dd] sm:h-12 sm:w-12"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5e2ec] bg-white text-[#8fa0ad] shadow-[0_6px_14px_rgba(15,23,42,0.08)] transition hover:border-[#0ba8dd] hover:text-[#0ba8dd] sm:h-12 sm:w-12"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
