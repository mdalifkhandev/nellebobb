export function LogoStrip() {
  const logos = ["RGS Cleaning", "Aumonds", "SSI", "BNM Services"];

  return (
    <section className="border-y border-black/5 bg-[#0d0d0d] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-5 text-center text-sm font-medium tracking-[0.08em] sm:grid-cols-2 sm:px-6 sm:text-[clamp(1rem,2vw,1.35rem)] md:grid-cols-4 lg:px-8">
        {logos.map((logo) => (
          <div key={logo} className="opacity-95">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
