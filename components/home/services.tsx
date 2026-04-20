import Image from "next/image";
import Link from "next/link";

import { serviceImages } from "./home-data";
import { SectionHeading } from "./section-heading";

type ServicesProps = {
  activeService?: string;
};

export function Services({ activeService }: ServicesProps) {

  return (
    <section id="our-service" className="bg-[#f3f8f4] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Service"
          subtitle="Explore our wide range of services designed to make your life easier and faster."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:mt-10 xl:grid-cols-3">
          {serviceImages.map((service) => {
            const isActive = activeService === service.slug;
            const card = (
              <>
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.src}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="border-t border-[#dce6e2] bg-[linear-gradient(180deg,#0ba8dd_0%,#23b8e8_100%)] px-4 py-3 text-center text-xs font-semibold tracking-[0.08em] text-white sm:px-5 sm:text-sm">
                  {service.title}
                </div>
              </>
            );

            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group overflow-hidden rounded-2xl border bg-white shadow-[0_16px_34px_-28px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 ${
                  isActive
                    ? "border-[#0ba8dd] ring-2 ring-[#0ba8dd]/25"
                    : "border-[#dce6e2]"
                }`}
              >
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
