import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

/** Fictional wordmarks, each styled as an inline SVG-ish text mark. */
const markStyles = [
  "font-black tracking-tight",
  "font-bold italic tracking-tight",
  "font-extrabold uppercase tracking-[0.2em] text-sm",
  "font-bold tracking-tighter",
  "font-black uppercase tracking-widest text-sm",
];

const markGlyphs = [
  // Small geometric glyph preceding each wordmark
  <svg key="0" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M8 0l8 16H0L8 0z" /></svg>,
  <svg key="1" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><circle cx="8" cy="8" r="8" /></svg>,
  <svg key="2" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M0 8l8-8 8 8-8 8-8-8z" /></svg>,
  <svg key="3" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M2 2h5v5H2V2zm7 7h5v5H9V9z" /><path d="M9 2h5v5H9V2zM2 9h5v5H2V9z" opacity="0.4" /></svg>,
  <svg key="4" viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M8 0a8 8 0 018 8h-8V0z" /><path d="M8 16A8 8 0 010 8h8v8z" opacity="0.4" /></svg>,
];

export function LogoCloud() {
  const { logoCloud } = siteConfig;

  return (
    <section className="px-6 py-16 sm:py-20 lg:px-10">
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            {logoCloud.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logoCloud.companies.map((company, i) => (
              <span
                key={company}
                className={`flex items-center gap-2 text-xl text-gray-400 transition hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400 ${markStyles[i % markStyles.length]}`}
              >
                {markGlyphs[i % markGlyphs.length]}
                {company}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
