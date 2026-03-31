"use client"

import { Users, Wrench, Trophy, Heart } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Real Reach",
    description:
      "Direct access to 8,000+ active community members and thousands of student developers across North & East India.",
    color: "#7C3AED",
  },
  {
    icon: Wrench,
    title: "End-to-End Support",
    description:
      "Swags, sponsorships, speakers, mentors, and on-ground execution — we handle everything so you can focus on your community.",
    color: "#00F0FF",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description:
      "Sessions & support at HackTU 7.0, XENOTHON 2026, Hack-N-Win 3.0, HackCraft 3.0, Community Builder Night (MetaMask), Algo-Rush, HackX 4.0, and many more.",
    color: "#7C3AED",
  },
  {
    icon: Heart,
    title: "Student-First Mission",
    description:
      "We don&apos;t just sponsor — we build the next generation of builders. Every event is a step toward a stronger developer ecosystem.",
    color: "#00F0FF",
  },
]

export function WhyPartner() {
  return (
    <section id="about" className="py-24 bg-[#050E1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-4">
            Why OSEN
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Why Top Colleges &amp; Communities{" "}
            <span className="text-gradient-purple">Choose OSEN</span>
          </h2>
        </div>

        {/* Value cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-2xl border border-[#7C3AED]/15 bg-[#0A2540]/40 hover:bg-[#0A2540]/70 hover:border-[#7C3AED]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at top left, ${item.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}30` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 relative">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed relative">
                {item.title === "Student-First Mission"
                  ? "We don't just sponsor — we build the next generation of builders. Every event is a step toward a stronger developer ecosystem."
                  : item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
