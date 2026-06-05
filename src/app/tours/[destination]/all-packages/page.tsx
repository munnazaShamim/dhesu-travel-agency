import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import TourAllPackagesTemplate from "@/src/components/tours/TourAllPackagesTemplate";
import { getTourPage, tourSlugs } from "@/src/data/tourPages";

type PageProps = {
  params: Promise<{ destination: string }>;
};

// Pre-render an all-packages page for every known destination at build time.
export function generateStaticParams() {
  return tourSlugs.map((destination) => ({ destination }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination } = await params;
  const data = getTourPage(destination);

  if (!data) {
    return { title: "Packages Not Found | Dhesu Travel & Tours" };
  }

  const title = `All ${data.meta.name} Packages | Dhesu Travel & Tours`;
  const description = `Browse every ${data.meta.name} tour package from Dhesu Travel & Tours. ${data.packages.subheading}`;

  return {
    title,
    description,
    keywords: data.meta.targetKeyword,
    alternates: { canonical: `/tours/${data.meta.slug}/all-packages` },
    openGraph: {
      title,
      description,
      url: `/tours/${data.meta.slug}/all-packages`,
      images: [{ url: data.hero.bgImage }],
      type: "website",
    },
  };
}

export default async function TourAllPackagesPage({ params }: PageProps) {
  const { destination } = await params;
  const data = getTourPage(destination);

  if (!data) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <TourAllPackagesTemplate data={data} />
      <Footer />
    </>
  );
}
