import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { WhyPartner } from "@/components/why-partner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About OSEN | Student Tech Community Partner",
  description:
    "Why colleges and student communities choose OSEN — reach, end-to-end support, proven events, and a student-first mission across India.",
}

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A] pt-20 md:pt-24">
      <Navbar />
      <h1 className="sr-only">About OSEN</h1>
      <WhyPartner />
      <Footer />
    </main>
  )
}
