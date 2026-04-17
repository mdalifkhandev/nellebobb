import { Header } from "../home/header";

export function DetailHeader() {
  return (
    <Header
      navItems={[
        { label: "Our Service", href: "#our-service" },
        { label: "How we work", href: "#how-we-work" },
        { label: "Customer Review", href: "#customer-review" },
        { label: "About US", href: "#about-us" },
      ]}
    />
  );
}
