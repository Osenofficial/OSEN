"use client"

import { Rocket, Link2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    name: "HACKCOMET",
    tagline: "Where hackathon stories turn into real momentum for builders.",
    icon: Rocket,
    accent: "#7C3AED",
    glow: "shadow-[#7C3AED]/20",
  },
  {
    name: "OSENCHAIN",
    tagline: "The on-chain layer connecting communities, events, and the next wave of OSEN programs.",
    icon: Link2,
    accent: "#00F0FF",
    glow: "shadow-[#00F0FF]/15",
  },
] as const

export function OsenProducts() {
  return (
    <section
      id="products"
      className="relative py-24 overflow-hidden bg-[#050E1A] border-t border-[#7C3AED]/10"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/35 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[380px] h-[380px] rounded-full bg-[#7C3AED]/6 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[320px] h-[320px] rounded-full bg-[#00F0FF]/5 blur-[90px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-5">
            OSEN Products
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            What we&apos;re <span className="text-gradient-purple">building next</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Upcoming OSEN initiatives — crafted for hackers, communities, and long-term impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.name}
              className={cn(
                "group relative flex flex-col rounded-2xl border p-8 sm:p-10 transition-all duration-300",
                "bg-[#0A2540]/40 hover:bg-[#0A2540]/70 border-[#7C3AED]/20 hover:border-[#7C3AED]/45",
                "hover:-translate-y-1 hover:shadow-xl",
                product.glow
              )}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at 50% 0%, ${product.accent}12, transparent 55%)`,
                }}
              />

              <div className="relative flex items-start justify-between gap-4 mb-6">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                  style={{
                    backgroundColor: `${product.accent}14`,
                    borderColor: `${product.accent}35`,
                  }}
                >
                  <product.icon className="h-7 w-7" style={{ color: product.accent }} aria-hidden />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/25 bg-[#00F0FF]/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#00F0FF]">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  Launching soon
                </span>
              </div>

              <h3
                className="relative text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                <span style={{ color: product.accent }}>{product.name}</span>
              </h3>
              <p className="relative text-sm sm:text-base text-slate-400 leading-relaxed flex-1">
                {product.tagline}
              </p>

              <div
                className="relative mt-8 h-px w-full bg-gradient-to-r from-transparent opacity-60"
                style={{
                  backgroundImage: `linear-gradient(90deg, transparent, ${product.accent}55, transparent)`,
                }}
              />
              <p className="relative mt-4 text-xs text-slate-500">
                Details and early access will be announced across OSEN channels.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
