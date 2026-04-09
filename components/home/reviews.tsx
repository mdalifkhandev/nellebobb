import { reviews } from "./home-data";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteMark,
  StarIcon,
} from "./home-icons";
import { SectionHeading } from "./section-heading";

export function Reviews() {
  return (
    <section className="bg-[#eef7f4] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Client Reviews"
          subtitle="A few words from the people and teams we’ve helped keep moving."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-[#d6e6f2] bg-[#eaf4fb] p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-[#015555]">Great Quality!</p>
                  <div className="mt-3 flex items-center gap-1 text-[#f7b500]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <QuoteMark />
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">{review.text}</p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-md"
                />
                <p className="text-base font-semibold text-slate-800">{review.name}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#015555] bg-white text-[#015555] shadow-sm transition hover:bg-[#eef8f6]"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#015555] bg-white text-[#015555] shadow-sm transition hover:bg-[#eef8f6]"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
