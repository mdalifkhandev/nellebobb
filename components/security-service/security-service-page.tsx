import { Suspense } from "react";

import { SecurityServiceWizard } from "./security-service-wizard";

export function SecurityServicePage() {
  return (
    <main className="min-h-screen bg-[#f3f8f4] px-4 py-6 text-slate-900 sm:px-6 sm:py-8 lg:px-8">
      <Suspense
        fallback={
          <div className="mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-[728px] items-center justify-center rounded-[24px] bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
            <div className="h-4 w-4 animate-pulse rounded-full bg-[#015555]" />
          </div>
        }
      >
        <SecurityServiceWizard />
      </Suspense>
    </main>
  );
}
