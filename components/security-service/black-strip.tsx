export function BlackStrip() {
  return (
    <section className="bg-[#141414] py-8 text-white sm:py-10">
      <div className="marquee mx-auto w-full max-w-7xl px-6 overflow-hidden">
        <div className="marquee-track flex items-center gap-x-10 text-center font-(family-name:--font-poppins) text-[clamp(1.05rem,3vw,2.5rem)] font-normal motion-reduce:animate-none">
          <span className="min-w-[220px] px-4">RGS Cleaning</span>
          <span className="min-w-[220px] px-4">Aumonds</span>
          <span className="min-w-[220px] px-4">SSI</span>
          <span className="min-w-[220px] px-4">BNM Services</span>
          <span className="min-w-[220px] px-4">RGS Cleaning</span>
          <span className="min-w-[220px] px-4">Aumonds</span>
          <span className="min-w-[220px] px-4">SSI</span>
          <span className="min-w-[220px] px-4">BNM Services</span>
        </div>
      </div>
    </section>
  );
}
