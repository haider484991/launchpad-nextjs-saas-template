import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Thanks",
  description: "You're on the list. We'll be in touch soon.",
  robots: { index: false },
};

/**
 * Minimal post-signup placeholder. Point your real signup flow,
 * Stripe success URL, or waitlist confirmation here.
 */
export default function ThanksPage() {
  return (
    <main className="mx-2 mt-2 lg:mx-4">
      <div className="gradient-mesh flex min-h-[calc(100vh-1rem)] flex-col items-center justify-center rounded-[2.5rem] px-6 py-20 text-center ring-1 ring-black/5 dark:ring-white/10">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur-sm dark:bg-white/10 dark:ring-white/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h1 className="mt-8 text-4xl font-bold tracking-tighter text-gray-950 sm:text-6xl dark:text-white">
          You&apos;re in. 🚀
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg font-medium text-gray-700 dark:text-gray-300">
          Thanks for signing up for {siteConfig.name}. Check your inbox — your
          launch checklist is on its way.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
