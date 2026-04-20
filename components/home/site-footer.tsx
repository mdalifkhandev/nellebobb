"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { EmailAdminModal } from "./email-admin-modal";
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

const footerLinkHrefMap: Record<string, string> = {
  Home: "/",
  "How It Works": "/#how-we-work",
  "Customer Review": "/#customer-review",
  "FAQ’s": "/#about-us",
  "Privacy Policy": "#",
  "Terms of Service": "#",
};

const socialIconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
} as const;

export function SiteFooter() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      <footer id="about-us" className="bg-[#f3f8f4] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#0A1F44] px-8 py-8 text-white shadow-[0_20px_50px_-34px_rgba(15,23,42,0.55)] sm:px-10 sm:py-10 lg:px-12">
          <div className="grid gap-10 border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.2fr]">
            <div className="space-y-8 sm:col-span-2 lg:col-span-1">
              {/* <Link href="/" className="inline-flex">
                <Image
                  src={footerMark}
                  alt="nellebobb logo"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-xl bg-white/95 p-1.5"
                />
              </Link> */}
              <div className="flex flex-wrap items-center gap-6 text-white mt-10">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.label];
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="inline-flex items-center justify-center text-white/95 transition hover:text-white/70"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <FooterColumn
              links={footerLinks.product}
              onContactClick={() => setEmailOpen(true)}
            />
            <FooterColumn
              links={footerLinks.company}
              onContactClick={() => setEmailOpen(true)}
            />

            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-[family-name:var(--font-poppins)] text-[2rem] font-medium leading-none">
                About US
              </h3>
              {/* <FooterContact icon={PhoneIcon} text="+284 4995975" /> */}
              {/* <FooterContact
                icon={MailIcon}
                text="info@bvisecurityservices.com"
              /> */}
              <FooterContact
                icon={LocationIcon}
                text="19 Waterfront Drive, Road Town, Tortola, BVI VG1110"
              />
            </div>
          </div>
        </div>
      </footer>

      <EmailAdminModal open={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  );
}

function FooterColumn({
  links,
  onContactClick,
}: {
  links: readonly string[];
  onContactClick: () => void;
}) {
  return (
    <div>
      <ul className="space-y-3 text-[1.05rem] text-white/95">
        {links.map((link) => (
          <li key={link}>
            {link === "Contact" ? (
              <button
                type="button"
                onClick={onContactClick}
                className="transition hover:text-white/75"
              >
                {link}
              </button>
            ) : (
              <Link
                href={footerLinkHrefMap[link] ?? "#"}
                className="transition hover:text-white/75"
              >
                {link}
              </Link>
            )}
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
    <div className="flex items-start gap-3 text-[1.05rem] leading-6 text-white/95">
      <Icon className="mt-1 h-4 w-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
}
