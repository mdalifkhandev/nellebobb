export const heroIllustration =
  "https://www.figma.com/api/mcp/asset/bab8dd2f-1941-448a-95f0-810f97fb37e8";
export const heroAccent =
  "https://www.figma.com/api/mcp/asset/cc4fa7db-a6f2-43b9-98ac-0a00a15e8941";

export const ctaPortrait =
  "https://www.figma.com/api/mcp/asset/1cf5c3c8-79ac-4e7f-8a4a-2f57e202401c";

export const logoMark =
  "https://www.figma.com/api/mcp/asset/4e9b07cd-7282-444d-ad83-0cddaf2a9a03";
export const footerMark =
  "https://www.figma.com/api/mcp/asset/e73b14da-caaa-43d1-9721-f5a18409fc49";

export const serviceImages = [
  {
    src: "https://www.figma.com/api/mcp/asset/72942804-6569-4457-a139-0230bbd0c0db",
    title: "Security Service",
    slug: "security-service",
    href: "/security-service",
    keywords: ["security", "bodyguard", "patrol", "guard", "protection"],
  },
  {
    src: "https://www.figma.com/api/mcp/asset/44e626b5-f419-4800-9962-74731a14bec8",
    title: "Legal Service",
    slug: "legal-service",
    href: "/security-service",
    keywords: ["legal", "law", "lawyer", "attorney"],
  },
  {
    src: "https://www.figma.com/api/mcp/asset/b0418f56-65fe-41cd-9632-de10e433ca5b",
    title: "Event Management",
    slug: "event-management",
    href: "/security-service",
    keywords: ["event", "events", "management", "planning"],
  },
  {
    src: "https://www.figma.com/api/mcp/asset/cb6643e2-de29-47ce-ac21-4f0f228ed4b2",
    title: "House Cleaning",
    slug: "house-cleaning",
    href: "/security-service",
    keywords: ["cleaning", "house", "home cleaning", "maid"],
  },
  {
    src: "https://www.figma.com/api/mcp/asset/2b0ec7ca-4f7a-43b0-b5ed-660cdf4b7da7",
    title: "Training",
    slug: "training",
    href: "/security-service",
    keywords: ["training", "course", "certification", "class"],
  },
  {
    src: "/consulting.png",
    title: "Consulting",
    slug: "consulting",
    href: "/security-service",
    keywords: ["consulting", "consultant", "advisory", "advice"],
  },
] as const;

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
  { label: "X" },
  { label: "LinkedIn" },
] as const;
