import { Header } from "../home/header";

export function DetailHeader() {
  return (
    <Header
      navItems={[
        { label: "Our Service", href: "/security-service#our-service" },
        { label: "How we work", href: "/security-service#how-we-work" },
        { label: "Customer Review", href: "/security-service#customer-review" },
        { label: "About US", href: "/security-service#about-us" },
      ]}
    />
  );
}
