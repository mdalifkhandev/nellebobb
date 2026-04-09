import { Suspense } from "react";

import { DetailHeader } from "./detail-header";
import { BlackStrip } from "./black-strip";
import { HeroShowcase } from "./hero-showcase";
import { HowItWorksSection } from "./how-it-works-section";
import { ReviewSection } from "./review-section";
import { FaqSection } from "./faq-section";
import { SiteFooter } from "./site-footer";

export function SecurityServicePage() {
  return (
    <main className="min-h-screen bg-[#f3f8f4] text-slate-900">
      <DetailHeader />
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Suspense
          fallback={
            <div className="mx-auto flex w-full max-w-[728px] items-center justify-center rounded-[24px] bg-white py-20 shadow-[0_16px_50px_rgba(15,23,42,0.08)]">
              <div className="h-4 w-4 animate-pulse rounded-full bg-[#015555]" />
            </div>
          }
        >
          
      <HeroShowcase />
      <BlackStrip />
      <HowItWorksSection />
      <ReviewSection />
      <FaqSection />
      <SiteFooter />
        </Suspense>
      </div>
    </main>
  );
}
