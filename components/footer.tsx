"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, ExternalLink, Youtube, Instagram } from "lucide-react"
import { SocialXIcon } from "@/components/social-x-icon"
import {
  APPLY_FORM_URL,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  MEDIA_KIT_URL,
  X_URL,
  YOUTUBE_URL,
  INSTAGRAM_URL,
} from "@/lib/site"

const mailto = `mailto:${CONTACT_EMAIL}`

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About OSEN", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Products", href: "/products" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
    { label: "Partnerships", href: "/partnerships" },
  ],
  Partnership: [
    { label: "Company collaboration", href: "/partnerships" },
    { label: "Apply Now", href: APPLY_FORM_URL },
    { label: "Brand kit", href: MEDIA_KIT_URL },
    { label: "Contact Us", href: mailto },
  ],
  Community: [
    { label: "LinkedIn", href: LINKEDIN_URL },
    { label: "X", href: X_URL },
    { label: "YouTube", href: YOUTUBE_URL },
    { label: "Instagram", href: INSTAGRAM_URL },
    { label: "Email", href: mailto },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#030A14] border-t border-[#7C3AED]/15">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-5 flex w-fit items-center rounded-lg bg-white p-2 ring-1 ring-black/5"
              aria-label="OSEN home"
            >
              <Image
                src="/OSEN.png"
                alt="OSEN — student tech community partner"
                width={180}
                height={40}
                className="h-9 w-auto max-h-9 object-contain object-left"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              India&apos;s most trusted student tech community partner. Powering hackathons, workshops, and developer
              events across North &amp; East India.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
                { Icon: SocialXIcon, href: X_URL, label: "X" },
                { Icon: Youtube, href: YOUTUBE_URL, label: "YouTube" },
                { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
                { Icon: Mail, href: mailto, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[#7C3AED]/25 bg-[#7C3AED]/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#7C3AED]/20 hover:border-[#7C3AED]/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((item) => {
                  const isHttp = item.href.startsWith("http")
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={isHttp ? "_blank" : undefined}
                        rel={isHttp ? "noopener noreferrer" : undefined}
                        className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                      >
                        {item.label}
                        {isHttp && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                        )}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#7C3AED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} OSEN. All rights reserved. Built with passion for student developers in India.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse-slow motion-reduce:animate-none" />
            <span>Active & Building</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
