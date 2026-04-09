import { serviceSteps } from "./security-service-data";

export function HowItWorksSection() {
  return (
    <section id="services" className="bg-[#f3f8f4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-poppins)] text-[clamp(2.2rem,4vw,3rem)] font-semibold text-[#015555]">
            Need help finding a Security Service?
          </h1>
          <p className="mt-3 text-base text-[#3a3a3a] sm:text-xl">
            You can find the best Security Services here. Start your search and get free quotes now!
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {serviceSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[12px] border border-[#e3e6f0] bg-white p-6 text-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#f3f8f4] font-[family-name:var(--font-poppins)] text-[24px] font-bold text-[#015555]">
                {step.number}
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-[20px] font-semibold text-[#015555]">
                {step.title}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.5] text-[#7a7a7a]">{step.body}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-5xl text-center text-[18px] leading-8 text-[#3a3a3a]">
          First time looking for a Security Service and not sure where to start? Tell us about your project and
          we&apos;ll send you a list of Security Services to review. There&apos;s no pressure to hire, so you can
          compare profiles, read previous reviews and ask for more information before you make your decision.
        </p>

        <div className="mt-8 text-center">
          <p className="font-[family-name:var(--font-poppins)] text-[18px] font-semibold text-[#0f172b]">
            Best of all - it&apos;s completely free!
          </p>
          <a
            href="#"
            className="mx-auto mt-3 inline-flex h-12 items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-8 font-[family-name:var(--font-public-sans)] text-[15px] font-bold tracking-[0.016em] text-white"
          >
            Get Quotes from Security Services
          </a>
        </div>
      </div>
    </section>
  );
}
