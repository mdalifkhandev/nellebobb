import { useState } from "react";

import { CloseIcon } from "../security-service/security-service-icons";

type EmailAdminModalProps = {
  open: boolean;
  onClose: () => void;
};

export function EmailAdminModal({ open, onClose }: EmailAdminModalProps) {
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const getErrorMessage = async (response: Response) => {
    try {
      const data = (await response.json()) as { error?: string };
      return data.error || "Email send failed. Please try again.";
    } catch {
      return "Email send failed. Please try again.";
    }
  };

  if (!open) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/security-service-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromEmail,
          subject,
          details,
        }),
      });

      if (!response.ok) {
        throw new Error(await getErrorMessage(response));
      }

      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      window.alert(
        error instanceof Error
          ? error.message
          : "Email send failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 px-4 py-6">
      {showSuccess ? (
        <div className="relative w-full max-w-sm rounded-3xl bg-white px-6 pb-8 pt-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
          <button
            type="button"
            onClick={() => {
              setShowSuccess(false);
              onClose();
            }}
            aria-label="Close success modal"
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#FE6C5D] transition hover:bg-[#fff1ef]"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
          <div className="mx-auto mt-2 flex h-24 w-24 items-center justify-center rounded-full bg-[#e6f4f7]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9eff4]">
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 text-[#0b5f6b]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="mt-5 font-(family-name:--font-poppins) text-xl font-semibold text-[#2c2f33]">
            Email Sent!
          </h2>
          <p className="mt-2 text-sm text-[#5b6169]">
            Thanks for your request. Our team will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setShowSuccess(false);
              onClose();
            }}
            className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#0ba8dd] text-sm font-semibold text-white transition hover:brightness-105"
          >
            Done
          </button>
        </div>
      ) : (
        <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] sm:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close email modal"
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#FE6C5D] transition hover:bg-[#fff1ef]"
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          <h2 className="text-center font-(family-name:--font-poppins) text-xl font-semibold text-[#015555]">
            Email Admin
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Send your request directly to our admins.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-[#0f172b]">
              Your Email
              <input
                type="email"
                value={fromEmail}
                onChange={(event) => setFromEmail(event.target.value)}
                required
                className="mt-2 h-11 w-full rounded-lg border border-[#dce6e2] px-4 text-sm text-slate-700 shadow-sm focus:border-[#0ba8dd] focus:outline-none focus:ring-2 focus:ring-[#0ba8dd]/30"
                placeholder="your@email.com"
              />
            </label>

            <label className="block text-sm font-medium text-[#0f172b]">
              Subject
              <input
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
                className="mt-2 h-11 w-full rounded-lg border border-[#dce6e2] px-4 text-sm text-slate-700 shadow-sm focus:border-[#0ba8dd] focus:outline-none focus:ring-2 focus:ring-[#0ba8dd]/30"
                placeholder="Subject"
              />
            </label>

            <label className="block text-sm font-medium text-[#0f172b]">
              Details
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                required
                rows={4}
                className="mt-2 w-full rounded-lg border border-[#dce6e2] px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#0ba8dd] focus:outline-none focus:ring-2 focus:ring-[#0ba8dd]/30"
                placeholder="Write your details"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="shine-button inline-flex h-11 w-full items-center justify-center rounded-lg bg-[linear-gradient(169.66deg,#0ba8dd_4.49%,#60d8ff_27.57%,#0ba8dd_56.04%)] px-6 text-sm font-bold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Email"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
