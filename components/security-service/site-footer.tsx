import {
  footerMark,
  footerLinks,
  socialLinks,
} from "./security-service-data";
import { FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon, XIcon } from "@/components/home/home-icons";
import { FooterColumn } from "./footer-column";
import { FooterContact } from "./footer-contact";

const socialIconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#f3f8f4] px-4 pb-10 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[24px] bg-[#015555] px-6 py-8 text-white shadow-[0_20px_50px_-34px_rgba(15,23,42,0.55)] sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/20 pb-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div className="space-y-6">
            <img src={footerMark} alt="investigator ltd logo" className="h-9 w-auto" />
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
          <FooterColumn title="Product" links={footerLinks.support} />

          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-medium">About US</h3>
            <FooterContact icon={PhoneIcon} text="+284 4995975" />
            <FooterContact icon={MailIcon} text="info@bvisecurityservices.com" />
            <FooterContact icon={LocationIcon} text="19 Waterfront Drive, Road Town, Tortola, BVI VG1110" />
          </div>
        </div>

        <div className="pt-5 text-sm text-white/90">
          © 2026 investigatorltd. Global Limited. Terms & Conditions / Cookie policy / Privacy policy
        </div>
      </div>
    </footer>
  );
}
