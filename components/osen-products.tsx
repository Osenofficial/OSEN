"use client"

import { Rocket, Link2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/site"

const products = [
  {
    name: "HACKCOMET",
    tagline: "Where hackathon stories turn into real momentum for builders.",
    icon: Rocket,
    accent: "#7C3AED",
  },
  {
    name: "OSENCHAIN",
    tagline: "The on-chain layer connecting communities, events, and the next wave of OSEN programs.",
    icon: Link2,
    accent: "#00F0FF",
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED] mb-3">OSEN roadmap</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Coming <span className="text-gradient-purple">soon</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Two product initiatives are in development — not live yet. We&apos;ll share timelines and early access when
            they&apos;re ready.
          </p>
        </div>

        <div
          className={cn(
            "rounded-2xl border border-dashed border-[#7C3AED]/35 bg-[#0A2540]/25",
            "px-5 py-8 sm:px-8 sm:py-10 backdrop-blur-sm"
          )}
        >
          <p className="text-center text-sm font-medium text-slate-300 mb-8 max-w-lg mx-auto">
            Teasers for what we&apos;re building — names and direction only until launch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-xl border border-[#7C3AED]/15 bg-[#050E1A]/60 p-6 sm:p-7 text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      backgroundColor: `${product.accent}12`,
                      borderColor: `${product.accent}28`,
                    }}
                  >
                    <product.icon className="h-5 w-5" style={{ color: product.accent }} aria-hidden />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold tracking-tight text-white"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    <span style={{ color: product.accent }}>{product.name}</span>
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{product.tagline}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 pt-8 border-t border-[#7C3AED]/15 text-center text-sm text-slate-500">
            Updates:{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF]/90 hover:text-[#00F0FF] underline underline-offset-2"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF]/90 hover:text-[#00F0FF] underline underline-offset-2"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
