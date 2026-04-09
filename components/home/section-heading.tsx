export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight text-[#015555] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">{subtitle}</p>
    </div>
  );
}
