import { starStrip } from "./security-service-data";
import { reviews } from "./security-service-data";

export function ReviewSection() {
  return (
    <section className="bg-[#f3f8f4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(2rem,4vw,3rem)] font-semibold text-[#015555]">
            Review
          </h2>
          <p className="mt-3 text-[18px] text-[#3a3a3a]">See what our customers say about our service.</p>
        </div>

        <div className="mt-10 space-y-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[16px] bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <img src={review.avatar} alt={review.name} className="h-9 w-9 rounded-full object-cover" />
                  <div>
                    <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-[#0a0a0a]">
                      {review.name}
                    </p>
                    <img src={starStrip} alt="" className="mt-1 h-3 w-auto" />
                  </div>
                </div>
                <span className="text-xs text-[#333]">{review.date}</span>
              </div>
              <p className="mt-4 text-[12px] leading-6 text-[#333]">{review.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 font-[family-name:var(--font-public-sans)] text-[14px] font-bold text-white"
          >
            Get Quotes from Security Services
          </a>
        </div>
      </div>
    </section>
  );
}
