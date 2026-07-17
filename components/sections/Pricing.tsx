"use client";

import { useState } from "react";
import { siteConfig, type PricingTier } from "@/config/site";
import { Reveal } from "@/components/Reveal";

function CheckIcon({ featured }: { featured?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 shrink-0 ${featured ? "text-indigo-300" : "text-indigo-600 dark:text-indigo-400"}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TierCard({
  tier,
  annual,
}: {
  tier: PricingTier;
  annual: boolean;
}) {
  const featured = tier.featured;
  const price = annual ? Math.round(tier.annual / 12) : tier.monthly;

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 ${
        featured
          ? "bg-gray-950 text-white shadow-2xl ring-1 ring-gray-950 lg:-my-4 lg:py-12 dark:bg-white/[0.07] dark:ring-white/20"
          : "bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/[0.03] dark:ring-white/10"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3.5 py-1 text-xs font-semibold text-white shadow-sm lg:-top-1.5">
          Most popular
        </span>
      )}

      <h3
        className={`text-lg font-semibold tracking-tight ${
          featured ? "text-white" : "text-gray-950 dark:text-white"
        }`}
      >
        {tier.name}
      </h3>
      <p className={`mt-1.5 text-sm ${featured ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className={`text-5xl font-bold tracking-tighter ${featured ? "text-white" : "text-gray-950 dark:text-white"}`}>
          ${price}
        </span>
        <span className={`text-sm font-medium ${featured ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
          /month
        </span>
      </div>
      <div className={`mt-1.5 h-5 text-xs ${featured ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
        {annual && tier.annual > 0 ? `Billed as $${tier.annual}/year` : " "}
      </div>

      <a
        href={tier.href}
        className={`mt-6 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
          featured
            ? "bg-white text-gray-950 hover:bg-gray-200"
            : "bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        }`}
      >
        {tier.cta}
      </a>

      <ul className="mt-8 space-y-3.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon featured={featured} />
            <span className={`text-sm ${featured ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {pricing.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl dark:text-white">
              {pricing.headline}
            </h2>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
              {pricing.subline}
            </p>
          </div>

          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition ${!annual ? "text-gray-950 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual(!annual)}
              className={`flex h-7 w-13 items-center rounded-full p-1 transition ${
                annual ? "justify-end bg-indigo-600 dark:bg-indigo-500" : "justify-start bg-gray-300 dark:bg-white/20"
              }`}
            >
              <span className="h-5 w-5 rounded-full bg-white shadow-sm transition" />
            </button>
            <span
              className={`flex items-center gap-2 text-sm font-medium transition ${annual ? "text-gray-950 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
            >
              Annual
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                {pricing.annualBadge}
              </span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-0">
            {pricing.tiers.map((tier) => (
              <div key={tier.id} className={tier.featured ? "lg:z-10" : ""}>
                <TierCard tier={tier} annual={annual} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
