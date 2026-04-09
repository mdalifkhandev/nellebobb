import { steps } from "./home-data";
import { MailIcon, PlayIcon, SearchIcon } from "./home-icons";
import { SectionHeading } from "./section-heading";

const iconMap = [SearchIcon, MailIcon, PlayIcon];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        title="How we work"
        subtitle="A simple path from search to service, designed to keep the process quick and clear."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = iconMap[index];
          return (
            <article
              key={step.title}
              className="rounded-2xl border border-[#dce6e2] bg-white p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-28px_rgba(15,23,42,0.5)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#effaf9] text-[#015555]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#015555]">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
