import { arrowIcon, faqs } from "./security-service-data";

export function FaqSection() {
  return (
    <section className="bg-[#f3f8f4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-(family-name:--font-poppins) text-[clamp(1.9rem,4vw,3rem)] font-semibold text-[#015555]">
            Security Services FAQs
          </h2>
          <p className="mt-3 text-sm text-[#3a3a3a] sm:text-[18px]">
            Have questions or need assistance? We&apos;re here to help. Reach out to us or learn using any of the
            methods below.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl bg-white px-4 py-4 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.11)] sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-(family-name:--font-poppins) text-sm text-[#1f1d1d] sm:gap-4">
                <span className="pr-2">{faq.question}</span>
                <img
                  src={arrowIcon}
                  alt=""
                  className="h-5 w-5 rotate-90 transition group-open:-rotate-90"
                />
              </summary>
              <div className="mt-4 text-[13px] leading-6 text-[#3a3a3a] sm:text-[13.6px]">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
