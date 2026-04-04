"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { APPLY_FORM_URL } from "@/lib/site"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Products", href: "/products" },
  { label: "Support", href: "/support" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "FAQ", href: "/faq" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A2540]/90 backdrop-blur-xl border-b border-[#7C3AED]/20 shadow-lg shadow-[#7C3AED]/5"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-lg bg-white p-1.5 ring-1 ring-black/5"
            aria-label="OSEN home"
          >
            <Image
              src="/OSEN.png"
              alt="OSEN — student tech community partner"
              width={160}
              height={32}
              className="h-8 w-auto max-h-8 object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 transition-all duration-200 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-5 py-2 rounded-lg shadow-lg shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0A2540]/95 backdrop-blur-xl border-t border-[#7C3AED]/20 pb-4">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 transition-colors hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Button
                  asChild
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold"
                >
                  <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
