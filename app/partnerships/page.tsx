import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CompanyCollaboration } from "@/components/company-collaboration"
import { ImpactStats } from "@/components/impact-stats"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Partner with OSEN | Companies & Platforms",
  description:
    "Collaborate with OSEN to reach talented student developers across India through hackathons, workshops, and high-signal campus programs.",
}

export default function PartnershipsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A]">
      <Navbar />
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#7C3AED]/15 bg-[#050E1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] mb-3">For companies &amp; platforms</p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Partner with OSEN to <span className="text-gradient-purple">Reach Student Builders</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Hackathons, workshops, and high-signal campus moments — built for adoption, feedback, and long-term
            relationships with India&apos;s next generation of developers.
          </p>
        </div>
      </section>
      <ImpactStats />
      <CompanyCollaboration sectionId="collaboration" />
      <Footer />
    </main>
  )
}
