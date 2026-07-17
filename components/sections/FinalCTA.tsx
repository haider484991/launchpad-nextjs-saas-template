import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

/** Reuses the hero's mesh gradient in a rounded container for a bookend. */
export function FinalCTA() {
  const { finalCta } = siteConfig;

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <Reveal>
        <div className="gradient-mesh mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-20 text-center ring-1 ring-black/5 sm:py-28 dark:ring-white/10">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tighter text-gray-950 sm:text-6xl dark:text-white">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-gray-700 dark:text-gray-300">
            {finalCta.subline}
          </p>
          <div className="mt-10">
            <a
              href={finalCta.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              {finalCta.cta.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
