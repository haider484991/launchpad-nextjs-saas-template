"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

/**
 * Nav lives INSIDE the hero's gradient container (see Hero.tsx),
 * so it has no background of its own.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const { nav } = siteConfig;

  return (
    <header className="relative z-20">
      <nav
        className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14"
        aria-label="Main navigation"
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href={nav.login.href}
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
          >
            {nav.login.label}
          </a>
          <a
            href={nav.cta.href}
            className="rounded-full bg-gray-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="mx-4 mb-4 rounded-2xl bg-white/80 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-md md:hidden dark:bg-gray-900/80 dark:ring-white/10"
        >
          <div className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={nav.login.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
            >
              {nav.login.label}
            </a>
            <a
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gray-950 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              {nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
