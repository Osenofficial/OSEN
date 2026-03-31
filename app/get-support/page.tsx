import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HowToPartner } from "@/components/how-to-partner"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Get Support for Your Event | OSEN",
  description:
    "Request support for your hackathon, workshop, or developer meetup — swag, speakers, mentorship, and reach across India.",
}

export default function GetSupportPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A]">
      <Navbar />
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#7C3AED]/15 bg-[#050E1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] mb-3">For organizers</p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Get Support for Your <span className="text-gradient-purple">Hackathon or Meetup</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Tell us about your event — swag, speakers, mentorship, sponsorships, and reach. We&apos;ll help you ship
            something students remember.
          </p>
        </div>
      </section>
      <HowToPartner />
      <Footer />
    </main>
  )
}
