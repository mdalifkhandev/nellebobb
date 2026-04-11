"use client";

import Link from "next/link";

type SecurityServicePreviewModalProps = {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
};

export function SecurityServicePreviewModal({ open, onClose, imageSrc }: SecurityServicePreviewModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Security Service preview"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[420px] overflow-hidden rounded-[20px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="shine-button absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/90 text-white shadow-sm transition hover:bg-slate-700"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <div className="relative aspect-[16/10]">
          <img src={imageSrc} alt="Security Service preview" className="h-full w-full object-cover" />
        </div>

        <div className="space-y-4 px-5 py-5 text-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#015555]">Security Service</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Preview the service details or open the dedicated security service page.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onClose}
              className="shine-button inline-flex h-10 items-center justify-center rounded-[8px] bg-slate-800 px-5 text-sm font-bold text-white transition hover:bg-slate-700"
            >
              Close
            </button>
            <Link
              href="/security-service"
              className="shine-button inline-flex h-10 items-center justify-center rounded-[8px] bg-[linear-gradient(149.405deg,#0ba8dd_4.4863%,#60d8ff_27.566%,#0ba8dd_56.038%)] px-5 text-sm font-bold text-white shadow-[0_10px_24px_-14px_rgba(11,168,221,0.9)] transition hover:brightness-105"
            >
              Open page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
