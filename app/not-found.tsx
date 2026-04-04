import Link from "next/link"
import { Home, Compass } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050E1A] flex flex-col">
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden px-4 sm:px-6 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(90vw,520px)] h-[min(90vw,520px)] rounded-full bg-[#7C3AED]/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] rounded-full bg-[#00F0FF]/6 blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-lg w-full text-center">
          <p
            className="text-8xl sm:text-9xl font-extrabold tabular-nums leading-none mb-2 bg-gradient-to-br from-[#7C3AED] via-white to-[#00F0FF] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            aria-hidden
          >
            404
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00F0FF] mb-4">Page not found</p>
          <h1
            className="text-2xl sm:text-3xl font-bold text-white text-balance mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            This page doesn&apos;t exist or was moved.
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10">
            The link might be outdated. Head back home or open support if you were looking for event help.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-[#7C3AED]/25"
            >
              <Link href="/">
                <Home className="w-4 h-4" aria-hidden />
                Back to home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#7C3AED]/40 bg-transparent text-slate-200 hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60 hover:text-white font-semibold px-8 py-6 rounded-xl"
            >
              <Link href="/support">
                <Compass className="w-4 h-4" aria-hidden />
                Event support
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
