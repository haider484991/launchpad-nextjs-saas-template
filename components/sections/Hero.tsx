import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/sections/Navbar";

/**
 * The signature section: a rounded gradient container inset from the
 * viewport edges, holding both the nav and the hero content.
 */
export function Hero() {
  const { hero } = siteConfig;

  return (
    <div className="mx-2 mt-2 lg:mx-4">
      <div className="gradient-mesh relative overflow-hidden rounded-[2.5rem] ring-1 ring-black/5 dark:ring-white/10">
        <Navbar />

        <div className="relative px-6 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-20 lg:px-14 lg:pb-32 lg:pt-24">
          {/* Announcement pill */}
          <a
            href={hero.announcement.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white/80 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10 dark:hover:bg-white/15"
          >
            {hero.announcement.label}
            <span aria-hidden="true">&rarr;</span>
          </a>

          {/* Headline */}
          <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tighter text-gray-950 sm:text-7xl lg:text-8xl dark:text-white">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-300">
            {hero.subline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white/70 px-7 py-3.5 text-base font-semibold text-gray-950 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
