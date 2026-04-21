import type { StaticImageData } from "next/image";

import consultingServiceImage from "@/assets/image/Consulting.png";
import eventManagementServiceImage from "@/assets/image/Event-Management.png";
import houseCleaningServiceImage from "@/assets/image/House-Cleaning.png";
import legalServiceImage from "@/assets/image/Legal-Service.png";
import localLogoAsset from "@/assets/image/logo.svg";
import securityServiceImage from "@/assets/image/Security-Service.png";
import trainingServiceImage from "@/assets/image/Training.png";

type ServiceImage = {
  src: StaticImageData;
  title: string;
  slug: string;
  href: string;
  keywords: string[];
  openContactModal?: boolean;
};

export const heroAccent =
  "https://www.figma.com/api/mcp/asset/cc4fa7db-a6f2-43b9-98ac-0a00a15e8941";

export const ctaPortrait =
  "https://www.figma.com/api/mcp/asset/1cf5c3c8-79ac-4e7f-8a4a-2f57e202401c";

const localLogoSrc =
  typeof localLogoAsset === "string" ? localLogoAsset : localLogoAsset.src;

export const logoMark = localLogoSrc;
export const footerMark = localLogoSrc;

export const serviceImages: readonly ServiceImage[] = [
  {
    src: securityServiceImage,
    title: "Security Service",
    slug: "security-service",
    href: "/security-service",
    keywords: ["security", "bodyguard", "patrol", "officers", "protection"],
    openContactModal: false,
  },
  {
    src: legalServiceImage,
    title: "Legal Service",
    slug: "legal-service",
    href: "https://www.aumonds.com/",
    keywords: ["legal", "law", "lawyer", "attorney"],
    openContactModal: false,
  },
  {
    src: eventManagementServiceImage,
    title: "Event Management",
    slug: "event-management",
    href: "#",
    openContactModal: true,
    keywords: ["event", "events", "management", "planning"],
  },
  {
    src: houseCleaningServiceImage,
    title: "House Cleaning",
    slug: "house-cleaning",
    href: "#",
    openContactModal: true,
    keywords: ["cleaning", "house", "home cleaning", "maid"],
  },
  {
    src: trainingServiceImage,
    title: "Training",
    slug: "training",
    href: "#",
    openContactModal: true,
    keywords: ["training", "course", "certification", "class"],
  },
  {
    src: consultingServiceImage,
    title: "Consulting",
    slug: "consulting",
    href: "#",
    openContactModal: true,
    keywords: ["consulting", "consultant", "advisory", "advice"],
  },
];

export function normalizeSearchTerm(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function findServiceMatch(query: string) {
  const normalizedQuery = normalizeSearchTerm(query);

  if (!normalizedQuery) {
    return null;
  }

  return (
    serviceImages.find((service) => {
      const title = normalizeSearchTerm(service.title);

      return (
        title.includes(normalizedQuery) ||
        normalizedQuery.includes(title) ||
        service.keywords.some((keyword) =>
          normalizeSearchTerm(keyword).includes(normalizedQuery),
        ) ||
        service.keywords.some((keyword) =>
          normalizedQuery.includes(normalizeSearchTerm(keyword)),
        )
      );
    }) ?? null
  );
}

export const reviews = [
  {
    name: "Joanne Humphries",
    avatar:
      "https://www.figma.com/api/mcp/asset/8df30a14-aae5-42e4-9b85-219f132efbd9",
    text: "Excellent Security Service! We have been partnering with this company for several years, and they consistently provide top-notch security for our business. Professional security personnel and swift response to any incidents.",
  },
  {
    name: "Claris Green",
    avatar:
      "https://www.figma.com/api/mcp/asset/bbf9254c-9f11-4ec8-818d-5387127a1ffc",
    text: "The BEST hands down!! Got both my certification for American Heart BLS, great high-quality training! Paul took his time to make sure you understand and practice everything! I would definitely recommend calling here for your security training!",
  },
  {
    name: "Nicole Lucas",
    avatar:
      "https://www.figma.com/api/mcp/asset/69e2356e-d687-4c29-802e-a4c61f943f58",
    text: "Quick, thorough, no up-selling of services. They do a great job and always respond quickly to our requests. My go-to Office, wouldn't think of going to any other place for investigations!",
  },
] as const;

export const steps = [
  {
    title: "Find Your Service",
    description:
      "Find the service you need in seconds. Just tell us what you’re looking for, and we’ll handle the rest.",
  },
  {
    title: "Email Admin",
    description:
      "Your request is sent directly to our admins. We review your details and get back to you with the best solution.",
  },
  {
    title: "Start Work",
    description:
      "Once everything is confirmed, we begin working with your request and deliver the service as quickly as possible.",
  },
] as const;

export const footerLinks = {
  product: ["Home", "How It Works", "Customer Review"],
  company: ["FAQ’s", "Contact", "Privacy Policy", "Terms of Service"],
} as const;

export const socialLinks = [
  { label: "Facebook" },
  { label: "Instagram" },
  { label: "TikTok" },
  { label: "LinkedIn" },
] as const;
