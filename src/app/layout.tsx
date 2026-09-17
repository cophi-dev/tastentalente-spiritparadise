import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heyde-websites.vercel.app"),
  title: {
    default: "Dr. Eva-Marie Heyde · Tastentalente & Spirit Paradise",
    template: "%s · Dr. Eva-Marie Heyde",
  },
  description:
    "Zwei Websites von Dr. Eva-Marie Heyde: Musikschule Tastentalente in Hamburg-Alstertal und Spirit Paradise – spirituelle Publikationen, Reisen und Samtpfoten.",
  openGraph: {
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
