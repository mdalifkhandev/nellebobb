import localLogoAsset from "@/assets/image/logo.svg";

const localLogoSrc =
  typeof localLogoAsset === "string" ? localLogoAsset : localLogoAsset.src;

export const heroImage = "https://www.figma.com/api/mcp/asset/98fdff65-7d12-4751-a913-e34be17ffb57";
export const logoMark = localLogoSrc;
export const footerMark = localLogoSrc;
export const starStrip = "https://www.figma.com/api/mcp/asset/1b8b0337-dd17-46db-b583-c61f12189069";
export const reviewAvatar1 = "https://www.figma.com/api/mcp/asset/5fe7ff60-e8c8-449d-a69a-8a9749d95b03";
export const reviewAvatar2 = "https://www.figma.com/api/mcp/asset/08533b8d-28f2-4093-819c-98cf84da8cc8";
export const reviewAvatar3 = "https://www.figma.com/api/mcp/asset/a64345bb-ef9a-4b7b-9744-ce3b53663bf5";
export const reviewAvatar4 = "https://www.figma.com/api/mcp/asset/c56799eb-61f1-4414-a78b-aec923bd73f5";
export const arrowIcon = "https://www.figma.com/api/mcp/asset/3295f7b9-cb77-46a2-bb4c-ab6d3a9ddd6d";
export const socialGroup = "https://www.figma.com/api/mcp/asset/dcb385a7-f45f-4af2-bdcb-c34c2309333c";
export const socialFb = "https://www.figma.com/api/mcp/asset/26ce46cf-bf8a-4c4b-8de8-bcc5a0c24337";
export const socialIg = "https://www.figma.com/api/mcp/asset/430cedd1-4a9b-40b7-909c-ac2d506a659d";
export const socialLi = "https://www.figma.com/api/mcp/asset/827242b9-d552-42e0-abc2-7845eb3eec6e";

export const serviceSteps = [
  {
    number: "1",
    title: "Tell us about your security needs",
    body:
      "Tell us your specific requirements - whether for event security, on-site patrols, or corporate protection. We'll instantly connect your security providers in your area.",
  },
  {
    number: "2",
    title: "Receive free, no-obligation quotes",
    body:
      "You'll receive free quotes from professionals and get quick notifications via our website or app. We make sure we do the leg work for you!",
  },
  {
    number: "3",
    title: "Hire the right security partner with confidence",
    body:
      "Compare proposals, read verified customer reviews, and communicate directly with top-rated security firms. Make an informed decision before you hire.",
  },
] as const;

export const reviews = [
  {
    name: "Jammie Schmitt",
    avatar: reviewAvatar1,
    date: "2 years ago",
    text:
      "Excellent Security Service! We have been partnering with this company for several years, and they consistently provide top-notch security for our business. Professional security personnel and swift response to any incidents.",
  },
  {
    name: "Claris Green",
    avatar: reviewAvatar2,
    date: "3 years ago",
    text:
      "The BEST hands down!! Got both my certification for American Heart BLS, great high-quality training! Paul took his time to make sure you understand and practice everything! I would definitely recommend calling here for your security training!",
  },
  {
    name: "Nicole Lucas",
    avatar: reviewAvatar3,
    date: "3 years ago",
    text:
      "Quick, thorough, no up-selling of services. They do a great job and always respond quickly to our requests. My go-to Office, wouldn't think of going any other place for investigations!",
  },
  {
    name: "Joanne Humphries",
    avatar: reviewAvatar4,
    date: "5 years ago",
    text:
      "Absolutely the best. Efficient, fast, patient, responsive and KIND! Can’t thank them enough for their professionalism and care!",
  },
  {
    name: "Ufo Medz",
    avatar: reviewAvatar2,
    date: "5 years ago",
    text:
      "my name is mickoye wallace .. and my experience working with Samuels' Security and investigators is going to be something to remember, they take a no nonsense approach on how they carry out their operations.. the team execute with.......",
  },
] as const;

export const faqs = [
  {
    question: "What should I consider hiring a security guard?",
    answer: (
      <>
        <p className="mb-2">You should consider your security needs carefully when hiring a security guard.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Business Needs:</strong> retail stores, private parties, weddings, and corporate functions.
          </li>
          <li>
            <strong>Events:</strong> concerts, festivals, trade shows, and large venues.
          </li>
          <li>
            <strong>Properties:</strong> gated communities, HOA areas, construction sites, and transport centers.
          </li>
          <li>
            <strong>Personal Protection:</strong> high-profile individuals or those facing specific threats.
          </li>
          <li>
            <strong>Emergency Cover:</strong> alarm failures, natural disasters, labor disputes, or temporary threats.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How does the subscription plan work?",
    answer:
      "With a subscription, you pre-pay for a certain number of visits per month at a discounted rate. You can schedule pick-ups at your convenience throughout the month until you've used your allotted visits.",
  },
  {
    question: "Can I mix different types of service requests in one quote?",
    answer:
      "Certainly. You can combine partner services for a single quote and compare options before making a decision.",
  },
] as const;

export const footerLinks = {
  product: ["Home", "How It Works", "Customer Review"],
  support: ["FAQ’s", "Contact", "Privacy Policy", "Terms of Service"],
} as const;

export const socialLinks = [
  { label: "Facebook", src: socialGroup },
  { label: "Instagram", src: socialIg },
  { label: "X", src: socialFb },
  { label: "LinkedIn", src: socialLi },
] as const;
