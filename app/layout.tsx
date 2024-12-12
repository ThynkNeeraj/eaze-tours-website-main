'use client';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/bundle";
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../styles/globals.css';
import React from "react";
import Script from 'next/script';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../public/images/logo.png";

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eaze Tours",
  "url": "https://www.eazetours.com/",
  "logo": logo.src,
  "alternateName": "Eaze Tours",
  "sameAs": [
    "https://www.facebook.com/eazetour/",
    "https://www.instagram.com/eazetourpackages/",
    "https://www.pinterest.com/eazetourpackages/",
    "https://www.tripadvisor.in/Attraction_Review-g304551-d17734269-Reviews-EAZE_TOURS-New_Delhi_National_Capital_Territory_of_Delhi.html"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 987 318 6168",
      "contactType": "sales",
      "email": "info@eazetours.com",
      "areaServed": [
        "US",
        "CA",
        "GB",
        "IN"
      ],
      "availableLanguage": "en"
    }
  ]
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Making your Indian journey easy." />
          <meta name="keywords" content="travel, tours, India, journey, itinerary" />
          <meta name="author" content="Eaze Tours" />
          <meta name="google-site-verification" content="Onwjmct_4h7Zidg3dgn_ybMwxYsipyAREOHgDHawUKs" />
          <title>Eaze Tours</title>
        </Head>
        <body>
          <Script
              id="organization-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
            />
            <NavBar />
            <main>{children}</main>
            <Footer />
            <Analytics/>
            <SpeedInsights/>
        </body>
      </html>
    )
  }