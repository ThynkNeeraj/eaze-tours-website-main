"use client";
import { usePathname } from "next/navigation";

export default function CanonicalURL() {
    const siteUrl = "http://localhost:3000";
    const pathname = usePathname();
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    return <link rel="canonical" href={canonicalUrl} />;
}