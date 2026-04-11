export function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-(family-name:--font-poppins) text-2xl font-medium">{title}</h3>
      <ul className="space-y-3 text-sm text-white/90">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
