"use client";
import { usePathname } from "next/navigation";

export default function CanonicalURL() {
    const siteUrl = "https://eaze-tours-website-main.vercel.app";
    const pathname = usePathname();
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    return <link rel="canonical" href={canonicalUrl} />;
}
