import { HomePage } from "@/components/home/home-page";

type PageProps = {
  searchParams?: Promise<{
    service?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  return <HomePage activeService={params?.service} />;
}
