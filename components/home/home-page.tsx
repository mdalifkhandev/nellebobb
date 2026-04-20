import { CtaBand } from "./cta-band";
import { Header } from "./header";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Reviews } from "./reviews";
import { Services } from "./services";
import { SiteFooter } from "./site-footer";
import { BlackStrip } from "../security-service/black-strip";

type HomePageProps = {
  activeService?: string;
};

export function HomePage({ activeService }: HomePageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f6fbf7_0%,#eef5ef_100%)] text-slate-900">
      <Header />
      <Hero />
      <BlackStrip />
      <HowItWorks />
      <Services activeService={activeService} />
      <Reviews />
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
