"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "OSEN turned our college hackathon from good to unforgettable. The swag, session by Vikash, and energy were next level.",
    author: "Tech Fest Lead",
    org: "CGC University",
    initials: "CG",
    color: "#7C3AED",
  },
  {
    quote:
      "Their support and mentorship made our event truly impactful for 300+ builders. Couldn't have done it without OSEN.",
    author: "Organizer",
    org: "HackTU 7.0",
    initials: "HT",
    color: "#00F0FF",
  },
  {
    quote:
      "Professional, reliable, and genuinely student-first. Highly recommended for any college looking to run a quality event!",
    author: "Community Lead",
    org: "MetaMask Community Builder Night",
    initials: "MM",
    color: "#7C3AED",
  },
  {
    quote:
      "OSEN brought real credibility and reach to Algo-Rush. Their sessions elevated the quality of content significantly.",
    author: "Event Organizer",
    org: "Algo-Rush, BPIT Delhi",
    initials: "AR",
    color: "#00F0FF",
  },
  {
    quote:
      "Partnering with OSEN for HackX 4.0 was seamless. From branding to mentorship, they delivered on every promise.",
    author: "Lead Organizer",
    org: "HackX 4.0",
    initials: "HX",
    color: "#7C3AED",
  },
  {
    quote:
      "Hack Forge felt elevated with OSEN in our corner — clear communication, solid promotion, and students still talk about the experience.",
    author: "Organizing Team",
    org: "Hack Forge",
    initials: "HF",
    color: "#00F0FF",
  },
  {
    quote:
      "Vibecode needed a partner who gets student energy. OSEN brought structure without killing the vibe — exactly what we needed.",
    author: "Fest Lead",
    org: "Vibecode",
    initials: "VB",
    color: "#7C3AED",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => {
      if (mq.matches) setIsAutoPlaying(false)
    }
    onChange()
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#050E1A] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#7C3AED]/7 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            What Our{" "}
            <span className="text-gradient-purple">Partners Say</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Card */}
          <div className="relative p-8 sm:p-10 rounded-2xl border border-[#7C3AED]/25 bg-[#0A2540]/60 backdrop-blur-sm min-h-[220px] flex flex-col justify-between">
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-8 right-8 h-px rounded-b-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${testimonials[current].color}60, transparent)`,
              }}
            />

            {/* Quote icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
              style={{
                backgroundColor: `${testimonials[current].color}18`,
                border: `1px solid ${testimonials[current].color}30`,
              }}
            >
              <Quote className="w-5 h-5" style={{ color: testimonials[current].color }} />
            </div>

            {/* Quote text */}
            <blockquote
              className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium flex-1 mb-8"
              aria-live="polite"
            >
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${testimonials[current].color}40, ${testimonials[current].color}20)`,
                  border: `1px solid ${testimonials[current].color}40`,
                  color: testimonials[current].color,
                }}
              >
                {testimonials[current].initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{testimonials[current].author}</div>
                <div className="text-xs text-slate-500">{testimonials[current].org}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 h-2 bg-[#7C3AED]"
                      : "w-2 h-2 bg-[#7C3AED]/30 hover:bg-[#7C3AED]/60"
                  )}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-xl border border-[#7C3AED]/25 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-xl border border-[#7C3AED]/25 bg-[#7C3AED]/10 hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
