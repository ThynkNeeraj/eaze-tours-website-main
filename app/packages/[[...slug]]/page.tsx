import PackagesList from "../../../components/Packages";
import PackageDetail from "../../../components/PackageDetail";
import packageData from '../../../data/packages.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Head from 'next/head';

type Params = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata(
  props: Params,
): Promise<Metadata> {
  const param = await props.params;
  const slug = param.slug;

  if (slug !== undefined && slug.length == 1) {
    const packageUri = slug[0]
    const tourPackage = packageData.find(tourPackage => tourPackage.Uri === packageUri);

    if (tourPackage) {
      return {
        title: tourPackage.Title,
        description: tourPackage.Description,
      };
    }
  }

  return {
    title: "Luxury Holiday Tour Packages in India - Eaze Tours",
    description: "Explore luxury holiday packages in India with Eaze Tours. From India tour packages from Delhi to the best tours to India from the USA, plan your trip today!",
  };
}

export default async function Packages(props: Params) {
  const param = await props.params;
  const slug = param.slug;

  if (!slug) {
    return (
      <div className="mt-[78px] sm:mt-[135px]">
        <PackagesList />
      </div>
    );
  } else if (slug.length === 1) {
    const packageUri = slug[0];
    const tourPackage = packageData.find(p => p.Uri === packageUri);

    if (tourPackage) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": tourPackage.Title,
        "description": tourPackage.Description,
        "url": `https://www.eazetours.com/packages/${tourPackage.Uri}`,
        "image": tourPackage.Itinerary?.[0]?.M?.description?.images?.[0]?.src || "",
        "duration": "P14D", // Update if dynamic
        "provider": {
          "@type": "TravelAgency",
          "name": "EazeTours",
          "url": "https://www.eazetours.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Eaze House ~2nd Floor, RZP-146 Palam Colony",
            "addressLocality": "New Delhi",
            "addressRegion": " South West Delhi",
            "postalCode": "110075",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "heritage specialist",
              "telephone": "+91 9911684818",
              "email": "info@eazetours.com"
            },
            {
              "@type": "ContactPoint",
              "contactType": "emergency support",
              "telephone": "+91 9818006830",
              "email": "harshit@eazetours.com"
            }
          ]
        }
      };

      return (
        <>
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          </Head>
          <div className="mt-[78px] sm:mt-[135px]">
            <PackageDetail packageUri={packageUri} />
          </div>
        </>
      );
    }
  }

  return notFound();
}
