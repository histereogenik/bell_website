import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { CookieConsent } from "@/components/layout/CookieConsent/CookieConsent";
import { getSiteUrl } from "@/utils/site-url";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const siteDescription =
  "Mentoria, consultoria, palestras e treinamentos para líderes e negócios que querem crescer com método.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bell Nacif | Liderança & Vendas",
  description: siteDescription,
  applicationName: "Bell Nacif",
  authors: [{ name: "Bell Nacif", url: siteUrl }],
  creator: "Bell Nacif",
  publisher: "Bell Nacif",
  openGraph: {
    title: "Bell Nacif | Liderança & Vendas",
    description: siteDescription,
    url: "/",
    siteName: "Bell Nacif",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logos/bell-nacif.png",
        alt: "Bell Nacif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bell Nacif | Liderança & Vendas",
    description: siteDescription,
    images: ["/logos/bell-nacif.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logos/tab_logo.png",
    shortcut: "/logos/tab_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${poppins.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <CookieConsent gaId={gaId} />
      </body>
    </html>
  );
}
