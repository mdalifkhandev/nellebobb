export function BlackStrip() {
  const logos = [
    { name: "RGS Cleaning", href: "https://www.bvisecurityservices.com/" },
    { name: "Aumonds", href: "https://aumonds.com/" },
    { name: "SSI", href: "https://www.bvisecurityservices.com/" },
    { name: "BNM Services", href: "https://www.bnmservices.com/" },
  ];
  const marqueeItems = [...logos, ...logos];

  return (
    <section className="bg-[#141414] py-8 text-white sm:py-10">
      <div className="marquee mx-auto w-full max-w-7xl px-6 overflow-hidden">
        <div className="marquee-track flex items-center gap-x-10 text-center font-(family-name:--font-poppins) text-[clamp(1.05rem,3vw,2.5rem)] font-normal motion-reduce:animate-none">
          {marqueeItems.map((logo, index) => (
            <a
              key={`${logo.name}-${index}`}
              href={logo.href}
              className="min-w-[220px] px-4 pointer-events-auto cursor-pointer transition-opacity hover:opacity-85"
            >
              {logo.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
