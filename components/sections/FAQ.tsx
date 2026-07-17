import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

/**
 * Accessible accordion built on native <details>/<summary> —
 * keyboard-navigable and screen-reader-friendly with zero JavaScript.
 * The plus icon rotates into an × via CSS (see globals.css).
 */
export function FAQ() {
  const { faq } = siteConfig;

  return (
    <section id="faq" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {faq.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl dark:text-white">
              {faq.headline}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 space-y-3">
            {faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-gray-50 ring-1 ring-black/5 transition open:bg-white open:shadow-sm dark:bg-white/[0.03] dark:ring-white/10 dark:open:bg-white/[0.06]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-base font-semibold text-gray-950 dark:text-white">
                    {item.question}
                  </span>
                  <span
                    className="faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 ring-1 ring-black/5 dark:bg-white/10 dark:text-gray-300 dark:ring-white/10"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-3.5 w-3.5">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
