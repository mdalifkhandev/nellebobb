export function LogoStrip() {
  const logos = ["RGS Cleaning", "Aumonds", "SSI", "BNM Services"];

  return (
    <section className="border-t border-white/10 bg-[#151515] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-6 py-10 text-center font-[family-name:Georgia,Times_New_Roman,serif] text-[clamp(1.4rem,3vw,2.35rem)] font-normal tracking-[0.01em] sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:px-10">
        {logos.map((logo) => (
          <div key={logo} className="opacity-95">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
