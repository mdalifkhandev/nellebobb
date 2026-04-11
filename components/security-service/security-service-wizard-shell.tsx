import type { ReactNode } from "react";

import { CloseIcon } from "./security-service-icons";

type WizardShellProps = {
  progress?: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
  onClose: () => void;
  showProgress?: boolean;
  centerContent?: boolean;
};

export function SecurityServiceWizardShell({
  progress,
  title,
  subtitle,
  children,
  actions,
  onClose,
  showProgress = true,
  centerContent = false,
}: WizardShellProps) {
  return (
    <section className="relative flex w-full max-w-182 min-h-105 flex-col rounded-3xl bg-white px-4 py-4 shadow-[0_16px_50px_rgba(15,23,42,0.08)] sm:px-6 sm:py-6">
      <div className="flex items-start gap-3">
        {showProgress ? (
          <div className="mt-2 h-4 flex-1 overflow-hidden rounded-full bg-[#e1effe]">
            <div
              className="h-full rounded-full bg-[#015555] transition-[width] duration-500 ease-out"
              style={{ width: `${progress ?? 0}%` }}
            />
          </div>
        ) : (
          <div className="flex-1" />
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close wizard"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#FE6C5D] transition hover:bg-[#fff1ef]"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>

      <div className={`${centerContent ? "my-auto" : "mt-6 sm:mt-7"} text-center`}>
        <h1 className="font-(family-name:--font-inter) text-[clamp(1.75rem,4vw,2rem)] font-normal leading-[1.08] tracking-[-0.01em] text-[#015555]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-140 text-sm leading-tight text-[#015555] sm:text-[18px]">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className={`${centerContent ? "hidden" : "mt-6 sm:mt-7"}`}>{children}</div>

      {actions ? <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">{actions}</div> : null}
    </section>
  );
}
