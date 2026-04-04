"use client"

type FeaturedEvent = {
  name: string
  type: string
  description: string
  color: string
  location: string
  date?: string
}

const events: FeaturedEvent[] = [
  {
    name: "Hack Forge",
    type: "Support Partner",
    description: "High-intensity build sprint with mentorship and community shout-outs across OSEN channels.",
    color: "#7C3AED",
    location: "India",
    date: "March 2026",
  },
  {
    name: "Vibecode",
    type: "Community Partner",
    description: "Vibe-led coding fest blending creativity, product, and rapid prototyping for student builders.",
    color: "#00F0FF",
    location: "India",
    date: "March 2026",
  },
  {
    name: "HackTU 7.0",
    type: "Session + Support",
    description: "Premier hackathon at Thapar University with 500+ participants and live mentorship.",
    color: "#7C3AED",
    location: "Thapar University",
    date: "2025–26 season",
  },
  {
    name: "XENOTHON 2026",
    type: "Official Partner",
    description: "High-energy tech fest hackathon at CGC University, Mohali with web3 and AI challenges.",
    color: "#00F0FF",
    location: "CGC University, Mohali",
    date: "2026",
  },
  {
    name: "Hack-N-Win 3.0",
    type: "Support Partner",
    description: "Competitive hackathon series with full swag support and speaker sessions.",
    color: "#7C3AED",
    location: "CGC University, Mohali",
  },
  {
    name: "HackCraft 3.0",
    type: "Community Partner",
    description: "Craftsman-style hackathon focused on product thinking and design engineering.",
    color: "#00F0FF",
    location: "India",
  },
  {
    name: "Community Builder Night",
    type: "MetaMask Collab",
    description: "Exclusive Web3 builder night in partnership with MetaMask, focused on blockchain onboarding.",
    color: "#7C3AED",
    location: "Academy of Technology, Hooghly",
  },
  {
    name: "Algo-Rush",
    type: "Session Partner",
    description: "Algorithm-focused competitive programming event with live editorial sessions.",
    color: "#00F0FF",
    location: "BPIT Delhi",
  },
  {
    name: "HackX 4.0",
    type: "Official Sponsor",
    description: "National-level hackathon with prizes, mentorship, and OSEN co-branding throughout.",
    color: "#7C3AED",
    location: "India",
  },
  {
    name: "Conflux Web3 Workshop",
    type: "Workshop Partner",
    description: "Hands-on blockchain workshop introducing students to the Conflux ecosystem.",
    color: "#00F0FF",
    location: "Online",
  },
]

export function FeaturedEvents() {
  return (
    <section id="events" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #050E1A 0%, #080F1E 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/25 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00F0FF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Events
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Trusted by the Best{" "}
            <span className="text-gradient-cyan">Student Communities</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            From national-level hackathons to intimate Web3 workshops — OSEN has been there, powering every event.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            <div
              key={event.name}
              className="group relative p-5 rounded-2xl border border-[#7C3AED]/15 bg-[#0A2540]/35 hover:bg-[#0A2540]/65 hover:border-[#7C3AED]/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              {/* Color accent line */}
              <div
                className="absolute top-0 left-4 right-4 h-0.5 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }}
              />

              {/* Type badge */}
              <span
                className="inline-flex text-xs font-semibold px-2.5 py-1 rounded-lg mb-3"
                style={{ backgroundColor: `${event.color}15`, color: event.color, border: `1px solid ${event.color}25` }}
              >
                {event.type}
              </span>

              <h3 className="text-base font-bold text-white mb-1.5">{event.name}</h3>
              {event.date ? (
                <p className="text-xs text-[#00F0FF]/75 mb-1 font-medium">{event.date}</p>
              ) : null}
              <p className="text-xs text-slate-500 mb-3">{event.location}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
