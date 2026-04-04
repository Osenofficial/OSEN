import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL, LINKEDIN_URL, X_URL, YOUTUBE_URL, INSTAGRAM_URL } from "@/lib/site"
import { HashToPathRedirect } from "@/components/hash-to-path-redirect"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

const title = "OSEN | Hackathon Support & Student Tech Events in India"
const description =
  "OSEN supports hackathons, workshops & dev meetups across India with swags, sponsorship, mentors, and promotion. Apply for event support and grow your college tech community."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "OSEN",
    "hackathon India",
    "student tech events",
    "college hackathon support",
    "developer meetup sponsorship",
    "student community",
  ],
  icons: {
    icon: [
      { url: "/osenonlywhitebg.png?v=1", type: "image/png", sizes: "32x32" },
      { url: "/osenonlywhitebg.png?v=1", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/osenonlywhitebg.png?v=1", type: "image/png", sizes: "180x180" }],
    shortcut: ["/osenonlywhitebg.png?v=1"],
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "OSEN",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@osenofficial",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OSEN",
  url: SITE_URL,
  description,
  sameAs: [LINKEDIN_URL, X_URL, YOUTUBE_URL, INSTAGRAM_URL],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#7C3AED] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:ring-offset-2 focus:ring-offset-[#050E1A]"
        >
          Skip to main content
        </a>
        {children}
        <HashToPathRedirect />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
