import { reviews } from "./security-service-data";

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-[#f6a800]">
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.76L10 14.7l-5.18 2.73.99-5.76L1.62 7.59l5.79-.84L10 1.5z" />
    </svg>
  );
}

export function ReviewSection() {
  return (
    <section className="bg-[#f3f8f4] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(1.85rem,4vw,2.9rem)] font-semibold leading-tight text-[#015555]">
            Review
          </h2>
          <p className="mt-3 text-sm text-[#3a3a3a] sm:text-[18px]">
            See what our customers say about our service.
          </p>
        </div>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[16px] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 sm:gap-4">
                  <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11" />
                  <div className="pt-0.5">
                    <p className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#111111] sm:text-base">
                      {review.name}
                    </p>
                    <div className="mt-1 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="shrink-0 pt-1 text-sm text-[#333]">{review.date}</span>
              </div>
              <p className="mt-4 max-w-[1080px] text-[13px] leading-6 text-[#333] sm:text-[14px] sm:leading-7">
                {review.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <a
            href="#"
            className="inline-flex h-11 w-full max-w-[420px] items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 font-[family-name:var(--font-public-sans)] text-xs font-bold text-white shadow-[0_8px_22px_-12px_rgba(11,168,221,0.9)] sm:h-12 sm:text-[14px]"
          >
            Get Quotes from Security Services
          </a>
        </div>
      </div>
    </section>
  );
}
