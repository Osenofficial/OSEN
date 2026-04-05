import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { OsenProducts } from "@/components/osen-products"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Coming Soon | HACKCOMET & OSENCHAIN — OSEN",
  description:
    "HACKCOMET and OSENCHAIN are in development. Follow OSEN on LinkedIn and Instagram for launch updates.",
}

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A] pt-20 md:pt-24">
      <Navbar />
      <h1 className="sr-only">Coming soon — OSEN products HACKCOMET and OSENCHAIN</h1>
      <OsenProducts />
      <Footer />
    </main>
  )
}
