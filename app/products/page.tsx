import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { OsenProducts } from "@/components/osen-products"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "OSEN Products | HACKCOMET & OSENCHAIN",
  description:
    "Upcoming OSEN initiatives — HACKCOMET and OSENCHAIN — built for hackers, communities, and long-term impact.",
}

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A] pt-20 md:pt-24">
      <Navbar />
      <h1 className="sr-only">OSEN products and initiatives</h1>
      <OsenProducts />
      <Footer />
    </main>
  )
}
