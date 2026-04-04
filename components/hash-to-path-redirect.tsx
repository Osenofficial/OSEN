"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/** Maps legacy hash anchors to path-based URLs (no `#` in the address bar). */
const HASH_TO_PATH: Record<string, string> = {
  hero: "/",
  about: "/about",
  events: "/events",
  products: "/products",
  faq: "/faq",
}

/**
 * One-time redirect on load when the URL contains a known section hash (e.g. bookmarked `/#about`).
 * Leaves unknown hashes (e.g. `#main-content` for skip link) unchanged.
 */
export function HashToPathRedirect() {
  const router = useRouter()

  useEffect(() => {
    const raw = window.location.hash.slice(1)
    if (!raw) return
    const segment = raw.split("?")[0]
    const target = HASH_TO_PATH[segment]
    if (!target) return
    router.replace(target)
  }, [router])

  return null
}
