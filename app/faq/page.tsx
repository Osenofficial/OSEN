import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { OrganizerFaq } from "@/components/organizer-faq"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQ | OSEN for Event Organizers",
  description:
    "Frequently asked questions about OSEN support for hackathons and student tech events in India — applying, timelines, and what we provide.",
}

export default function FaqPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A] pt-20 md:pt-24">
      <Navbar />
      <h1 className="sr-only">Frequently asked questions — OSEN</h1>
      <OrganizerFaq />
      <Footer />
    </main>
  )
}
