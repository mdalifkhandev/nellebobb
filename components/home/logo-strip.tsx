export function LogoStrip() {
  const logos = [
    { name: "RGS Cleaning", href: "https://www.bvisecurityservices.com/" },
    { name: "Aumonds", href: "https://aumonds.com/" },
    { name: "SSI", href: "https://www.bvisecurityservices.com/" },
    { name: "BNM Services", href: "https://www.bnmservices.com/" },
  ];

  return (
    <section className="border-t border-white/10 bg-[#151515] text-white">
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-6 py-10 text-center font-[Georgia,Times_New_Roman,serif] text-[clamp(1.4rem,3vw,2.35rem)] font-normal tracking-[0.01em] sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:px-10">
        {logos.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            className="block cursor-pointer opacity-95 transition-opacity hover:opacity-100"
          >
            {logo.name}
          </a>
        ))}
      </div>
    </section>
  );
}
