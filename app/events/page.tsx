import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { FeaturedEvents } from "@/components/featured-events"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Featured Events | OSEN",
  description:
    "Hackathons, workshops, and student tech events OSEN has supported across India — from campus fests to Web3 builder nights.",
}

export default function EventsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A] pt-20 md:pt-24">
      <Navbar />
      <h1 className="sr-only">Featured events supported by OSEN</h1>
      <FeaturedEvents />
      <Footer />
    </main>
  )
}
