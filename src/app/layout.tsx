import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { company, seo } from "@/config/kayhon";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s — ${company.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  applicationName: company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: seo.ogType,
    locale: seo.ogLocale,
    url: seo.siteUrl,
    siteName: company.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: seo.twitterCard,
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  category: "Home & Garden",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: seo.description,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressRegion: company.region,
    addressCountry: "TJ",
  },
  areaServed: "Tajikistan",
  sameAs: [company.instagram, company.facebook].filter(Boolean) as string[],
  url: seo.siteUrl,
  image: seo.ogImage,
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Корпусная мебель на заказ" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Мягкая мебель на заказ" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Дизайн мебели" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Замер" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Доставка" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Установка" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
