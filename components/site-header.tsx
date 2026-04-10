"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/getroof/id6760582452";

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  const [isDark, setIsDark] = useState(dark);

  useEffect(() => {
    if (!dark) return; // static dark logo pages (privacy, terms, etc.)

    function handleScroll() {
      // The hero is 100svh, ticker is ~56px, then light section starts
      // Check if we're past the hero + ticker into the light "How it works" section
      const heroEnd = window.innerHeight; // hero is 100svh
      const tickerHeight = 56;
      const scrollY = window.scrollY;

      // Nav is ~64px tall, so check what's behind the nav
      const navMid = scrollY + 32;

      // Light section: from heroEnd + tickerHeight to the start of the CTA
      // We'll detect if the nav overlaps the light section
      const lightStart = heroEnd + tickerHeight;

      // Find the CTA section (dark bg) - it starts after "how it works"
      const ctaSection = document.querySelector("[data-section='cta']");
      const lightEnd = ctaSection
        ? ctaSection.getBoundingClientRect().top + scrollY
        : Infinity;

      if (navMid >= lightStart && navMid < lightEnd) {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <div className="relative h-[28px] w-[68px]">
            <Image
              src="/images/logo.svg"
              alt="Roof"
              width={68}
              height={35}
              className={`absolute inset-0 h-[28px] w-auto transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}
            />
            <Image
              src="/images/logo-dark.svg"
              alt="Roof"
              width={68}
              height={35}
              className={`absolute inset-0 h-[28px] w-auto transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}
            />
          </div>
        </Link>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/app-store-badge.svg"
            alt="Download on the App Store"
            className={`h-[34px] w-auto transition-all duration-300 ${isDark ? "" : "invert"}`}
          />
        </a>
      </div>
    </nav>
  );
}
