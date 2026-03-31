"use client"

import {
  Gift,
  Banknote,
  Users,
  Megaphone,
  ClipboardList,
  Camera,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { APPLY_FORM_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

const offerings = [
  {
    icon: Gift,
    title: "Swags & Merchandise",
    description: "T-shirts, stickers, notebooks, and goodies for all participants",
    accent: "#7C3AED",
  },
  {
    icon: Banknote,
    title: "Sponsorship & Monetary Support",
    description: "Financial assistance or prize pool contribution",
    accent: "#00F0FF",
  },
  {
    icon: Users,
    title: "Speakers & Mentors",
    description: "Expert sessions and 1:1 mentorship from industry professionals",
    accent: "#7C3AED",
  },
  {
    icon: Megaphone,
    title: "Promotion & Reach",
    description: "Shoutouts across our 8,000+ active community members on LinkedIn and Instagram",
    accent: "#00F0FF",
  },
  {
    icon: ClipboardList,
    title: "On-ground Execution Help",
    description: "Volunteers, logistics, and event management support",
    accent: "#7C3AED",
  },
  {
    icon: Camera,
    title: "Post-Event Momentum",
    description:
      "Curated highlights, shout-outs for standout teams, and social-ready posts so your event keeps reaching new people",
    accent: "#00F0FF",
  },
] as const

export function SupportOfferings() {
  return (
    <section
      id="support"
      className="relative py-24 overflow-hidden bg-[#050E1A] border-t border-[#7C3AED]/10"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/35 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-[#7C3AED]/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[320px] h-[320px] rounded-full bg-[#00F0FF]/5 blur-[90px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00F0FF]/25 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-semibold uppercase tracking-widest mb-5">
            For organizers
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-5"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            What Support Does{" "}
            <span className="text-gradient-purple">OSEN Provide?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We help organizers make their events successful by providing practical support.
          </p>
        </div>

        <p className="text-center text-slate-300 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
          OSEN supports hackathons, workshops, dev meetups, and tech fests by offering:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {offerings.map((item) => (
            <div
              key={item.title}
              className={cn(
                "group relative rounded-2xl border p-6 sm:p-7 transition-all duration-300",
                "bg-[#0A2540]/35 hover:bg-[#0A2540]/60 border-[#7C3AED]/15 hover:border-[#7C3AED]/35",
                "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#7C3AED]/5"
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
                  style={{
                    backgroundColor: `${item.accent}12`,
                    borderColor: `${item.accent}30`,
                  }}
                >
                  <item.icon className="h-5 w-5" style={{ color: item.accent }} aria-hidden />
                </div>
                <div className="min-w-0 text-left">
                  <h3
                    className="text-base font-semibold text-white mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  backgroundImage: `linear-gradient(90deg, transparent, ${item.accent}55, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Perfect for colleges, student clubs, and independent organizers who want to run high-quality events with
          limited resources.
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-3 text-base rounded-xl shadow-xl shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 transition-all duration-200 hover:-translate-y-0.5 group glow-purple"
          >
            <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply for Event Support Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
