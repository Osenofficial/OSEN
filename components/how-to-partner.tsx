"use client"

import { ArrowRight, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { APPLY_FORM_URL, CONTACT_EMAIL } from "@/lib/site"

export function HowToPartner() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #0D1B35 100%)" }}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#7C3AED]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#00F0FF]/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-6">
          Get Started
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance leading-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
        >
          Ready to Create{" "}
          <span className="text-gradient-purple">Something Big</span>{" "}
          Together?
        </h2>

        {/* Body copy */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
          Whether you&apos;re a college tech club, student organization, or corporate looking to empower the next
          generation — let&apos;s talk.
        </p>

        {/* Fast turnaround */}
        <div className="inline-flex items-center gap-2 text-sm text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-4 py-2 rounded-full mb-10">
          <Clock className="w-4 h-4 flex-shrink-0" />
          Applications are reviewed within 48 hours.
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-10 py-4 text-base rounded-xl shadow-xl shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 transition-all duration-200 hover:-translate-y-0.5 group glow-purple"
          >
            <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
              Get Support for Your Event
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Email fallback */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          <Mail className="w-4 h-4 text-[#7C3AED]" />
          <span>Or email us directly at</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[#00F0FF] hover:text-white transition-colors font-medium underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}
