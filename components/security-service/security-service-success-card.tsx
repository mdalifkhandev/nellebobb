import type { ReactNode } from "react";

import { CloseIcon } from "./security-service-icons";

type SuccessCardProps = {
  title: string;
  subtitle: ReactNode;
  onClose: () => void;
};

export function SecurityServiceSuccessCard({ title, subtitle, onClose }: SuccessCardProps) {
  return (
    <section className="relative w-full max-w-182 rounded-3xl bg-white px-6 pb-8 pt-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close wizard"
        className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#FE6C5D] transition hover:bg-[#fff1ef]"
      >
        <CloseIcon className="h-4 w-4" />
      </button>

      <div className="mx-auto mt-2 h-36 w-36">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full bg-[#e6f4f7]" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e1f1f5]" />
          <svg
            viewBox="0 0 24 24"
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-[#0b5f6b]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>

          <span className="absolute left-3 top-5 h-2.5 w-2.5 rounded-full bg-[#0b5f6b]" />
          <span className="absolute right-6 top-2 h-3.5 w-3.5 rounded-full bg-[#0b5f6b]" />
          <span className="absolute right-10 bottom-6 h-2 w-2 rounded-full bg-[#0b5f6b]" />
          <span className="absolute left-8 bottom-5 h-4 w-4 rounded-full bg-[#0b5f6b]" />
          <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#cfe7ee]" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <h1 className="font-(family-name:--font-inter) text-[28px] font-semibold text-[#2c2f33]">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-80 text-[15px] leading-6 text-[#5b6169]">{subtitle}</p>
      </div>
    </section>
  );
}
