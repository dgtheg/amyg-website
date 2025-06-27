import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amyg Systems | Engineering the Future",
  description:
    "Amyg Systems delivers high-performance engineering, precision solutions, and innovative project execution in Greece and beyond.",
  keywords: [
    "Amyg",
    "Amyg Systems",
    "Amyralis",
    "Amyralis tecnik",
    "amyg greece",
    "αμυραλισ",
    "Engineering",
    "Industrial Projects",
    "Greek Engineering",
    "Systems Integration",
    "Construction Technology"
  ],
  authors: [{ name: "Amyg Systems" }],
  robots: "index, follow",
  openGraph: {
    title: "Amyg Systems | Engineering the Future",
    description:
      "Explore Amyg Systems – delivering precision, performance, and reliability across engineering projects in Greece and beyond.",
    url: "https://amyg-website.vercel.app",
    siteName: "Amyg Systems",
    images: [
      {
        url: "https://amyg-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amyg Systems OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://amyg-website.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}