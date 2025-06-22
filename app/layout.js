import ComponentProvider from "@/components/provider/component-provider";
import GoogleProvider from "@/components/provider/google-provider";
import VercelProvider from "@/components/provider/vercel-provider";
import { CompanyData } from "@/lib/config";
import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: CompanyData.tradeName,
  description: CompanyData.description,
  applicationName: CompanyData.tradeName,
  publisher: CompanyData.tradeName,
  creator: CompanyData.tradeName,
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  category:
    "holding company, investment, investor, founder, technology, business, digital, collective, saas, software, hardware, portfolio",
  keywords: [
    "lazuardy",
    "holding company",
    "investment",
    "investor",
    "founder",
    "portfolio",
    "technology",
    "business",
    "startup",
    "digital",
    "saas",
    "software",
    "hardware",
    "innovation",
    "venture",
    "corporate",
    "group",
    "ai",
    "artificial intelligence",
  ],
  authors: [
    { name: CompanyData.tradeName, url: process.env.NEXT_PUBLIC_APP_URL },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [{ color: CompanyData.themeColor }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#0A0A0A] text-white dark ${Plus_Jakarta_Sans.className}`}
      >
        {children}
        <ComponentProvider />
        <VercelProvider />
      </body>
      <GoogleProvider />
    </html>
  );
}
