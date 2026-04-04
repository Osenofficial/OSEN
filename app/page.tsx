import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SupportOfferings } from "@/components/support-offerings"
import { WhyPartner } from "@/components/why-partner"
import { ImpactStats } from "@/components/impact-stats"
import { CompanyCollaboration } from "@/components/company-collaboration"
import { FeaturedEvents } from "@/components/featured-events"
import { OsenProducts } from "@/components/osen-products"
import { Testimonials } from "@/components/testimonials"
import { HowToPartner } from "@/components/how-to-partner"
import { OrganizerFaq } from "@/components/organizer-faq"
import { Footer } from "@/components/footer"

export default function PartnershipsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A]">
      <Navbar />
      <Hero />
      <SupportOfferings />
      <WhyPartner />
      <ImpactStats />
      <CompanyCollaboration />
      <FeaturedEvents />
      <OsenProducts />
      <Testimonials />
      <HowToPartner />
      <OrganizerFaq />
      <Footer />
    </main>
  )
}
