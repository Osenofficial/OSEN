"use client"

import { Calendar, Users, UsersRound } from "lucide-react"

const stats = [
  {
    value: 60,
    suffix: "+",
    label: "Events Supported",
    icon: Calendar,
    color: "#7C3AED",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Students & Builders Impacted",
    icon: Users,
    color: "#00F0FF",
  },
  {
    value: 8000,
    suffix: "+",
    label: "Active Community Members",
    icon: UsersRound,
    color: "#7C3AED",
  },
] as const

export function ImpactStats() {
  return (
    <section
      id="impact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0D1B35 50%, #080F1E 100%)" }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7C3AED]/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Impact
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Real Impact in{" "}
            <span className="text-gradient-cyan">2026</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-8 rounded-2xl border border-[#7C3AED]/20 bg-[#0A2540]/50 hover:border-[#7C3AED]/50 hover:bg-[#0A2540]/80 transition-all duration-300 text-center hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>

              {/* Counter */}
              <div
                className="text-4xl lg:text-5xl font-extrabold mb-2 tabular-nums"
                style={{
                  fontFamily: "var(--font-space-grotesk, sans-serif)",
                  background: `linear-gradient(135deg, ${stat.color} 0%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span>
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm text-slate-400 font-medium leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
