import { footerMark, footerLinks, socialLinks } from "./home-data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "./home-icons";

const socialIconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#f3f8f4] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#015555] px-6 py-8 text-white shadow-[0_20px_50px_-34px_rgba(15,23,42,0.55)] sm:px-8 lg:px-10">
        <div className="grid gap-10 border-b border-white/20 pb-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div className="space-y-6">
            <img src={footerMark} alt="nellebobb logo" className="h-12 w-auto" />
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label];
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#015555] ring-1 ring-white/20 transition hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Product" links={footerLinks.company} />

          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-medium">About US</h3>
            <FooterContact icon={PhoneIcon} text="+123 456 789" />
            <FooterContact icon={MailIcon} text="hello@mail.com" />
            <FooterContact icon={LocationIcon} text="10 3rd Avenue Houghton Estate" />
          </div>
        </div>

        <div className="pt-5 text-sm text-white/90">
          © 2026 Bark.com Global Limited. Terms & Conditions / Cookie policy / Privacy policy
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-medium">{title}</h3>
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

function FooterContact({
  icon: Icon,
  text,
}: {
  icon: typeof PhoneIcon;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 text-sm text-white/90">
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
}
