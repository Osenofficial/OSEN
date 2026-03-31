"use client"

import { Check, Mail, ArrowRight, Eye, Sparkles, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT_EMAIL } from "@/lib/site"
import { cn } from "@/lib/utils"

const goals = [
  "Test your SDK or API with hundreds of fresh student projects in real hackathon conditions",
  "Get instant feedback and real usage data from active builders",
  "Drive adoption through hands-on workshops and branded tracks",
  "Run “Build with [Your Product]” challenges or themed sessions",
  "Conduct speaker sessions, live demos, and mentorship",
  "Build brand visibility among the next generation of developers",
  "Identify early talent and turn participants into long-term champions",
]

const pillars = [
  {
    title: "Visibility & Support",
    description:
      "Brand presence across events, digital touchpoints, and student communities — with hands-on support that keeps your story consistent.",
    icon: Eye,
    accent: "#7C3AED",
  },
  {
    title: "Engagement & Activation",
    description:
      "Workshops, hack tracks, and builder challenges that turn curiosity into real product usage and memorable experiences.",
    icon: Sparkles,
    accent: "#00F0FF",
  },
  {
    title: "Strategic Partnership",
    description:
      "Longer-term collaborations, co-branded programs, and repeatable playbooks that scale with your roadmap.",
    icon: Handshake,
    accent: "#7C3AED",
  },
] as const

type CompanyCollaborationProps = {
  /** Anchor id for deep links (e.g. home vs /partnerships) */
  sectionId?: string
}

export function CompanyCollaboration({ sectionId = "collaboration" }: CompanyCollaborationProps) {
  return (
    <section id={sectionId} className="py-24 bg-[#050E1A] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-5">
            Companies &amp; platforms
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            We Collaborate with{" "}
            <span className="text-gradient-purple">Companies &amp; Platforms</span>
          </h2>
        </div>

        <div className="glass-card rounded-2xl border border-[#7C3AED]/20 overflow-hidden mb-12">
          <div className="p-8 sm:p-10 border-b border-[#7C3AED]/15 space-y-6">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              We partner with forward-thinking companies, developer platforms, and sponsors who want to reach talented
              student developers across India.
            </p>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              <span className="text-white font-semibold">
                Bring your SDK, API, tools, products, or challenges
              </span>{" "}
              — and we&apos;ll help you get maximum real-world impact through high-signal hackathons and events.
            </p>
          </div>

          <div className="p-8 sm:p-10 border-b border-[#7C3AED]/15">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">Whether you want to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#7C3AED]/20 border border-[#7C3AED]/40">
                    <Check className="w-2.5 h-2.5 text-[#7C3AED]" />
                  </span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 sm:p-10">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              ...we create the perfect environment for your goals. At OSEN, every event becomes a live testing ground
              where your product gets tested, feedback flows instantly, adoption grows, and meaningful connections are
              made.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={cn(
                "group relative rounded-2xl border p-6 sm:p-8 transition-all duration-300",
                "bg-[#0A2540]/40 hover:bg-[#0A2540]/70 border-[#7C3AED]/20 hover:border-[#7C3AED]/45",
                "hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7C3AED]/10"
              )}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border"
                style={{
                  backgroundColor: `${pillar.accent}14`,
                  borderColor: `${pillar.accent}33`,
                }}
              >
                <pillar.icon className="w-6 h-6" style={{ color: pillar.accent }} />
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-6 sm:p-8 rounded-2xl border border-[#00F0FF]/20 bg-[#00F0FF]/5">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white font-semibold text-base mb-1">Ready to partner? Reach out directly.</p>
            <p className="text-slate-400 text-sm">
              Our partnerships team typically responds within 24 hours.
            </p>
          </div>
          <Button
            asChild
            className="shrink-0 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-xl px-6 py-2.5 shadow-lg shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 transition-all duration-200 group"
          >
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="w-4 h-4 mr-2" />
              {CONTACT_EMAIL}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
