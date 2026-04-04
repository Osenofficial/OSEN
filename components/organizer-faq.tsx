"use client"

import type { ReactNode } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  APPLY_FORM_URL,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  X_URL,
} from "@/lib/site"

const listClass = "mt-3 space-y-2 pl-4 list-disc text-slate-400 marker:text-[#7C3AED]"

const faqItems: { q: string; content: ReactNode }[] = [
  {
    q: "Who can apply for OSEN support?",
    content: (
      <p>
        Anyone organizing a hackathon, workshop, dev meetup, tech fest, or coding event can apply. We support college
        clubs, student communities, and independent organizers across India — especially in Tier-1, Tier-2, and Tier-3
        cities.
      </p>
    ),
  },
  {
    q: "What kind of support does OSEN actually provide?",
    content: (
      <>
        <p>We offer practical help including:</p>
        <ul className={listClass}>
          <li>Swags &amp; merchandise (T-shirts, stickers, notebooks, etc.)</li>
          <li>Sponsorship or prize pool contribution</li>
          <li>Speakers and mentors from industry</li>
          <li>Promotion across our 8,000+ community</li>
          <li>On-ground execution and volunteer support</li>
          <li>Post-event highlights and social media amplification</li>
        </ul>
      </>
    ),
  },
  {
    q: "Is there any cost to get support from OSEN?",
    content: (
      <p>
        No. Our core support for student-led events is completely free. We only ask for co-branding opportunities so we
        can showcase the impact we create together.
      </p>
    ),
  },
  {
    q: "How do I apply for OSEN Event Support?",
    content: (
      <>
        <p>
          Just fill out our simple Event Support Form. Our team usually reviews applications within 24–48 hours.
        </p>
        <p className="mt-4">
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#00F0FF] hover:underline underline-offset-2"
          >
            Apply Now
            <span aria-hidden>→</span>
          </a>
        </p>
      </>
    ),
  },
  {
    q: "When should I apply? How much in advance?",
    content: (
      <p>
        We recommend applying at least 3–4 weeks before your event date. Earlier applications (6–8 weeks) get better
        support as we can arrange swags, mentors, and promotion more effectively.
      </p>
    ),
  },
  {
    q: "Do you support only hackathons or other events too?",
    content: (
      <p>
        We support a wide range: Hackathons, coding competitions, workshops, dev meetups, Web3 nights, AI build
        challenges, cybersecurity events, and more. As long as it&apos;s student-focused and promotes building &amp;
        learning, we&apos;re happy to help.
      </p>
    ),
  },
  {
    q: "What information do you need in the application?",
    content: (
      <p>
        We ask for basic details like: event name, date, expected number of participants, theme, college name, past
        event links (if any), and what kind of support you need the most.
      </p>
    ),
  },
  {
    q: "How do you decide which events to support?",
    content: (
      <p>
        We look at the quality of the event, potential impact on students, clarity of execution plan, and how well it
        aligns with building &amp; open-source culture. We try to support as many genuine student-led events as
        possible.
      </p>
    ),
  },
  {
    q: "I have a small event with limited participants. Can I still apply?",
    content: (
      <p>
        Absolutely! We love supporting passionate small and medium-sized events. Quality and intent matter more to us
        than just the size.
      </p>
    ),
  },
  {
    q: "How can I stay updated with OSEN?",
    content: (
      <p>
        Follow us on{" "}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">
          Instagram (@osenofficial)
        </a>
        ,{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">
          LinkedIn
        </a>
        , and{" "}
        <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">
          X
        </a>
        . You can also join our community to get regular opportunities and updates.
      </p>
    ),
  },
  {
    q: "Still have questions?",
    content: (
      <p>
        Feel free to reach out directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#00F0FF] hover:underline font-medium">
          {CONTACT_EMAIL}
        </a>
        . Our team responds within 24 hours.
      </p>
    ),
  },
]

export function OrganizerFaq() {
  return (
    <section
      id="faq"
      className="relative py-24 overflow-hidden border-t border-[#7C3AED]/10 bg-[#050E1A]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/35 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[360px] h-[360px] rounded-full bg-[#7C3AED]/6 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] text-xs font-semibold uppercase tracking-widest mb-4">
            FAQ
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white text-balance mb-3"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Frequently Asked Questions <span className="text-gradient-purple">(FAQs)</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-medium">
            Common Questions from Event Organizers
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full rounded-2xl border border-[#7C3AED]/15 bg-[#0A2540]/25 px-4 sm:px-6">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="border-[#7C3AED]/15 last:border-b-0"
            >
              <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-[15px] sm:text-base font-semibold [&>svg]:text-[#00F0FF]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-sm sm:text-[15px] leading-relaxed pb-5">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
