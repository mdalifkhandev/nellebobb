"use client";

import { useState } from "react";

import { serviceImages, steps } from "./home-data";
import { MailIcon, PlayIcon, SearchIcon } from "./home-icons";
import { SectionHeading } from "./section-heading";
import { SecurityServicePreviewModal } from "./security-service-preview-modal";

const iconMap = [SearchIcon, MailIcon, PlayIcon];

export function HowItWorks() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const securityService = serviceImages.find((service) => service.title === "Security Service");

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          title="How we work"
          subtitle="A simple path from search to service, designed to keep the process quick and clear."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <article
                key={step.title}
                className="rounded-2xl border border-[#dce6e2] bg-white p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-28px_rgba(15,23,42,0.5)] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#effaf9] text-[#015555]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#015555] sm:text-lg">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-600 sm:text-base">
          First time looking for a Security Service and not sure where to start? Tell us about your project and
          we&apos;ll send you a list of Security Services to review. There&apos;s no pressure to hire, so you
          can compare profiles, read previous reviews and ask for more information before you make your decision.
        </p>

        <div className="mt-6 text-center sm:mt-8">
          <p className="font-[family-name:var(--font-poppins)] text-base font-semibold text-[#0f172b] sm:text-[18px]">
            Best of all - it&apos;s completely free!
          </p>
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="mx-auto mt-3 inline-flex h-11 items-center justify-center rounded-[8px] bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 font-[family-name:var(--font-public-sans)] text-xs font-bold tracking-[0.016em] text-white transition hover:brightness-105 sm:h-12 sm:px-8 sm:text-[15px]"
          >
            Get Quotes from Security Services
          </button>
        </div>
      </section>

      <SecurityServicePreviewModal
        open={previewOpen}
        imageSrc={securityService?.src ?? ""}
        onClose={() => setPreviewOpen(false)}
      />
    </>
  );
}
