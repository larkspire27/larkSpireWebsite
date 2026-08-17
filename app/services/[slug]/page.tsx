import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData } from "@/lib/servicesData";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = servicesData[params.slug];

  if (!service) {
    return {
      title: "Service Not Found | Larkspire",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://larkspire.com/services/${service.slug}`,
      siteName: "Larkspire",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default function DynamicServicePage({ params }: PageProps) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service} />;
}
