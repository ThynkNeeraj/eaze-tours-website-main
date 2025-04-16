import PackagesList from "../../../components/Packages";
import PackageDetail from "../../../components/PackageDetail";
import packageData from '../../../data/packages.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Script from 'next/script';

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
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": tourPackage.Itinerary.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": `Day ${item.M.day.N}: ${item.M.name.S}`
          }))
        },
        "provider": {
          "@type": "TravelAgency",
          "name": "EazeTours",
          "url": "https://www.eazetours.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Eaze House ~2nd Floor, RZP-146 Palam Colony",
            "addressLocality": "New Delhi",
            "addressRegion": "South West Delhi",
            "postalCode": "110075",
            "addressCountry": "IN"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "heritage specialist",
              "telephone": "+91 9911684818",
              "email": "mailto:info@eazetours.com"
            },
            {
              "@type": "ContactPoint",
              "contactType": "emergency support",
              "telephone": "+91 9818006830",
              "email": "mailto:harshit@eazetours.com"
            }
          ]
        },
        "duration": "P14D",
        "touristType": ["History Buffs", "Architecture Lovers", "Cultural Explorers"],
        "location": {
          "@type": "Place",
          "name": "Rajasthan Royal Circuit",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "India",
            "addressRegion": "Delhi, Rajasthan & Uttar Pradesh"
          },
          "geo": {
            "@type": "GeoShape",
            "line": "28.6139 77.2090 27.3500 75.0167 26.9124 75.7873 26.4499 74.6399 27.1767 78.0081"
          }
        },
        "includesAttractions": [
          "Amber Fort",
          "Mehrangarh Fort",
          "City Palace Udaipur",
          "Hawa Mahal",
          "Taj Mahal",
          "Fatehpur Sikri",
          "Lake Pichola",
          "Shekhawati Havelis"
        ],
        "physicalRequirement": {
          "@type": "PhysicalActivityRequirement",
          "exerciseIntensity": "LowIntensity",
          "suggestedAge": "All Ages",
          "requiredAttendeeMinimumAge": 5
        },
        "tourCompanion": {
          "@type": "TourCompanion",
          "name": "Royal Heritage Guide",
          "description": "Expert cultural guides, private transport, multilingual support"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.8",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Verified Traveller"
            },
            "itemReviewed": {
              "@type": "Product",
              "name": tourPackage.Title,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "4383"
              }
            }
          }
        ]
      };

      return (
        <>
          <Script
            id="tourist-trip-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <div className="mt-[78px] sm:mt-[135px]">
            <PackageDetail packageUri={packageUri} />
          </div>
        </>
      );
    }
  }

  return notFound();
}
