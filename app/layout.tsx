import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { CookieConsent } from "@/components/layout/CookieConsent/CookieConsent";
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

export const metadata: Metadata = {
  title: "Bell Nacif | Liderança e vendas",
  description:
    "Mentoria, consultoria, palestras e treinamentos para líderes e negócios que querem crescer com método.",
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
