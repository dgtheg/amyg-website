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
    "Amyralis technik",
    "amyralis technick",
    "amyralis giannis",
    "amyg greece",
    "αμυραλισ",
    "αμυγγ",
    "amyg technologies",
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
      <head>
        {/* ✅ SEO meta tags */}
        <meta
          name="keywords"
          content="Amyg, Amyg Systems, Amyralis, Amyralis tecnik, Amyralis technik, amyralis technick, amyralis giannis, amyg greece, αμυραλισ, αμυγγ, amyg technologies, Engineering, Industrial Projects, Greek Engineering, Systems Integration, Construction Technology"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amyg Systems",
              url: "https://amyg-website.vercel.app",
              logo: "https://amyg-website.vercel.app/og-image.jpg",
              sameAs: ["https://www.youtube.com/@RingoBella"],
              description:
                "Amyg Systems delivers cutting-edge engineering, precision machines, and custom industrial solutions across Europe.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}