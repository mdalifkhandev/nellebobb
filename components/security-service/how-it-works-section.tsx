"use client";

import { useState } from "react";

import { SecurityServiceWizardModal } from "./security-service-wizard-modal";
import { serviceSteps } from "./security-service-data";

export function HowItWorksSection() {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <>
      <section id="services" className="bg-[#f3f8f4] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight text-[#015555] sm:text-[clamp(2.2rem,4vw,3rem)]">
              Need help finding a Security Service?
            </h1>
            <p className="mt-3 text-sm text-[#3a3a3a] sm:text-base lg:text-xl">
              You can find the best Security Services here. Start your search and get free quotes now!
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
            {serviceSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[12px] border border-[#e3e6f0] bg-white p-5 text-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] sm:p-6"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#f3f8f4] font-[family-name:var(--font-poppins)] text-[22px] font-bold text-[#015555] sm:h-[50px] sm:w-[50px] sm:text-[24px]">
                  {step.number}
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-[18px] font-semibold leading-snug text-[#015555] sm:text-[20px]">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#7a7a7a] sm:text-[16px]">{step.body}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-5xl text-center text-sm leading-7 text-[#3a3a3a] sm:mt-8 sm:text-[18px] sm:leading-8">
            First time looking for a Security Service and not sure where to start? Tell us about your project and
            we&apos;ll send you a list of Security Services to review. There&apos;s no pressure to hire, so you can
            compare profiles, read previous reviews and ask for more information before you make your decision.
          </p>

          <div className="mt-7 text-center sm:mt-8">
            <p className="font-[family-name:var(--font-poppins)] text-base font-semibold text-[#0f172b] sm:text-[18px]">
              Best of all - it&apos;s completely free!
            </p>
            <button
              type="button"
              onClick={() => setWizardOpen(true)}
              className="mx-auto mt-3 inline-flex h-11 items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 font-[family-name:var(--font-public-sans)] text-xs font-bold tracking-[0.016em] text-white sm:h-12 sm:px-8 sm:text-[15px]"
            >
              Get Quotes from Security Services
            </button>
          </div>
        </div>
      </section>

      <SecurityServiceWizardModal open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
}
