import { BlackStrip } from "./black-strip";
import { DetailHeader } from "./detail-header";
import { FaqSection } from "./faq-section";
import { HeroShowcase } from "./hero-showcase";
import { HowItWorksSection } from "./how-it-works-section";
import { ReviewSection } from "./review-section";
import { SiteFooter } from "./site-footer";

export function SecurityServicePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <DetailHeader />
      <HeroShowcase />
      <BlackStrip />
      <HowItWorksSection />
      <ReviewSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
