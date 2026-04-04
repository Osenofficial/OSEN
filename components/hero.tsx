"use client"

import Link from "next/link"
import { ArrowRight, Code2, Terminal, Cpu, Globe, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

const impactPillars = [
  { emoji: "🏆", label: "Hackathons Supported" },
  { emoji: "🛠", label: "Workshops Powered" },
  { emoji: "🌐", label: "Communities Reached" },
  { emoji: "👥", label: "Builders Enabled" },
] as const

const floatingIcons = [
  { icon: Code2, top: "15%", left: "8%", delay: "0s", size: "w-8 h-8" },
  { icon: Terminal, top: "20%", right: "10%", delay: "1.5s", size: "w-7 h-7" },
  { icon: Cpu, bottom: "30%", left: "5%", delay: "3s", size: "w-9 h-9" },
  { icon: Globe, top: "60%", right: "8%", delay: "0.8s", size: "w-8 h-8" },
  { icon: Layers, bottom: "20%", right: "15%", delay: "2.2s", size: "w-7 h-7" },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050E1A]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00F0FF]/8 blur-[100px] pointer-events-none" />

      {floatingIcons.map(({ icon: Icon, top, left, right, bottom, delay, size }) => (
        <div
          key={delay}
          aria-hidden
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 glass-card rounded-xl animate-float opacity-40 motion-reduce:animate-none"
          style={{ top, left, right, bottom, animationDelay: delay }}
        >
          <Icon className={`${size} text-[#7C3AED]`} />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#00F0FF] text-sm font-medium mb-8 animate-float-delayed">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse-slow inline-block" />
          Backed by community · Built for builders
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
        >
          Power Your Hackathon.{" "}
          <span className="text-gradient-purple">Grow Your Community with OSEN.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-10 text-pretty">
          We help colleges, student clubs, and communities run successful hackathons and tech events with swags,
          sponsorship, mentors, promotion &amp; execution support. Companies partner with OSEN to reach talented student
          builders across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-10 py-6 text-lg rounded-xl shadow-xl shadow-[#7C3AED]/35 hover:shadow-[#7C3AED]/55 transition-all duration-200 hover:-translate-y-0.5 group glow-purple w-full sm:w-auto min-h-[52px]"
          >
            <Link href="/support">
              Get Support for Your Event
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-[#7C3AED]/40 bg-transparent text-slate-200 hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60 hover:text-white font-semibold px-8 py-3 text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            asChild
          >
            <Link href="/partnerships">Become a Partner</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          60+ events supported <span className="text-[#7C3AED]/50 mx-2">•</span> 10,000+ students impacted
          <span className="text-[#7C3AED]/50 mx-2">•</span> 8,000+ active community members
        </p>

        <div className="mt-16 pt-10 border-t border-[#7C3AED]/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-4xl mx-auto">
            {impactPillars.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-[#7C3AED]/20 bg-[#0A2540]/40 px-3 py-3 sm:px-4 sm:py-3.5 text-left"
              >
                <span className="text-xl shrink-0" aria-hidden>
                  {item.emoji}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-medium">
            Partnered with leading student communities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm font-medium">
            {["HackTU 7.0", "XENOTHON 2026", "Hack-N-Win 3.0", "HackCraft 3.0", "Algo-Rush", "HackX 4.0"].map(
              (name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 rounded-lg border border-[#7C3AED]/15 bg-[#7C3AED]/5 text-slate-300 hover:border-[#7C3AED]/40 hover:text-white transition-colors cursor-default text-xs"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050E1A] to-transparent pointer-events-none" />
    </section>
  )
}
