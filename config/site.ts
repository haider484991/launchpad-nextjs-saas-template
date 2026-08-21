/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LaunchPad — site configuration
 *
 * This file is the single source of truth for every word on the page.
 * Change the copy here and every section updates. No component edits needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type NavLink = { label: string; href: string };

export type Feature = {
  title: string;
  description: string;
  /** Which CSS-drawn visual the bento card renders. */
  visual: "chart" | "kanban" | "messages" | "toggles";
  /** Bento layout: the first "wide" card spans 2 columns on lg screens. */
  wide?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  /** Two-letter initials shown in the gradient avatar circle. */
  initials: string;
  /** One accent card per grid adds visual spice. */
  accent?: boolean;
};

export type PricingTier = {
  name: string;
  id: string;
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  cta: string;
  href: string;
  /** The featured tier renders as the elevated dark card. */
  featured?: boolean;
};

export type FaqItem = { question: string; answer: string };

export type FooterColumn = { heading: string; links: NavLink[] };

export const siteConfig = {
  name: "LaunchPad",
  url: "https://pixelandoak-launchpad.pages.dev",
  title: "LaunchPad — SaaS Landing Page Template",
  description:
    "A free, production-ready SaaS landing page template built with Next.js and Tailwind CSS. Hero, features, pricing, FAQ — everything your startup needs to launch this weekend.",

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ] satisfies NavLink[],
    login: { label: "Log in", href: "#" },
    cta: { label: "Sign up", href: "#pricing" },
  },

  hero: {
    announcement: {
      label: "LaunchPad 2.0 is here",
      href: "#features",
    },
    headline: "Launch your product this weekend.",
    subline:
      "LaunchPad is the landing page your side project deserves — pricing table included, procrastination not. Clone it, change one config file, ship it before Monday.",
    primaryCta: { label: "Get started free", href: "#pricing" },
    secondaryCta: { label: "See pricing", href: "#pricing" },
  },

  logoCloud: {
    tagline: "Backed by absolutely no one famous — yet.",
    companies: ["Acme", "Polaris", "Vertex", "Nimbus", "Quartz"],
  },

  features: {
    eyebrow: "Everything included",
    headline: "Everything you need. Nothing you'll never use.",
    subline:
      "Four sections you'd build anyway, already built — and styled better than you'd have time to.",
    items: [
      {
        title: "Analytics that answer questions",
        description:
          "A dashboard mock so convincing your users will think the product already exists. Revenue, growth, retention — all drawn in pure CSS.",
        visual: "chart",
        wide: true,
      },
      {
        title: "Projects that run themselves",
        description:
          "Kanban columns, status pills, drag-ready cards. The board every team screenshot starts with.",
        visual: "kanban",
      },
      {
        title: "Conversations in context",
        description:
          "Threaded messages with read receipts and reactions. Support inbox looks, zero backend required.",
        visual: "messages",
      },
      {
        title: "Settings people actually find",
        description:
          "Toggle lists with sensible defaults. Notifications, billing, API keys — the boring pages, made unboring.",
        visual: "toggles",
      },
    ] satisfies Feature[],
  },

  screenshot: {
    eyebrow: "The product",
    headline: "A dashboard worth a thousand mockups.",
    subline:
      "This entire browser window is drawn with divs and Tailwind classes. Swap it for a real screenshot when you have one — or don't. Nobody can tell.",
    url: "app.launchpad.dev/dashboard",
  },

  testimonials: {
    eyebrow: "Testimonials",
    headline: "Loved by founders who ship.",
    subline:
      "All six of these people are fictional. Your real customers go here — that's the whole point.",
    items: [
      {
        quote:
          "I cloned the repo on Friday night and my landing page was live before my coffee went cold. The pricing toggle alone would have taken me a week.",
        name: "Maya Chen",
        title: "Founder, Driftwood",
        initials: "MC",
      },
      {
        quote:
          "We replaced a $12k agency quote with this template and a Saturday afternoon. Our conversion rate went up. I'm still upset about it.",
        name: "Jonas Berg",
        title: "CEO, Fjordly",
        initials: "JB",
        accent: true,
      },
      {
        quote:
          "The dark mode actually works. Every section, every card, every hover state. Do you know how rare that is in a free template?",
        name: "Priya Raman",
        title: "CTO, Lumenstack",
        initials: "PR",
      },
      {
        quote:
          "I've bought three premium templates that looked worse than this. I'm not telling you which ones.",
        name: "Sam Okafor",
        title: "Indie hacker",
        initials: "SO",
      },
      {
        quote:
          "Changed one config file, swapped the logo, deployed to Cloudflare Pages. Total time: 41 minutes. My cofounder thinks I hired someone.",
        name: "Elena Vasquez",
        title: "Cofounder, Parcelio",
        initials: "EV",
      },
      {
        quote:
          "The bento grid made our four half-finished features look like a product suite. That's not a testimonial, that's a confession.",
        name: "Tom Nakamura",
        title: "Product lead, Hearthbase",
        initials: "TN",
      },
    ] satisfies Testimonial[],
  },

  pricing: {
    eyebrow: "Pricing",
    headline: "Pricing that scales with you.",
    subline:
      "Start free, upgrade when your users demand it. Annual billing gets you two months free — the badge says so.",
    annualBadge: "2 months free",
    tiers: [
      {
        name: "Hobby",
        id: "hobby",
        monthly: 0,
        annual: 0,
        description: "For weekend projects and proofs of concept.",
        features: [
          "Up to 3 projects",
          "1,000 monthly events",
          "Community support",
          "LaunchPad branding",
        ],
        cta: "Start for free",
        href: "/thanks/",
      },
      {
        name: "Pro",
        id: "pro",
        monthly: 19,
        annual: 190,
        description: "For products with real users and real ambition.",
        features: [
          "Unlimited projects",
          "100,000 monthly events",
          "Custom domains",
          "Email support",
          "Remove branding",
          "API access",
        ],
        cta: "Get started",
        href: "/thanks/",
        featured: true,
      },
      {
        name: "Team",
        id: "team",
        monthly: 49,
        annual: 490,
        description: "For teams who need to ship together.",
        features: [
          "Everything in Pro",
          "Unlimited events",
          "5 team seats included",
          "Role-based access",
          "Priority support",
          "Audit log",
        ],
        cta: "Start a trial",
        href: "/thanks/",
      },
    ] satisfies PricingTier[],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Questions? Answers.",
    items: [
      {
        question: "Is this template really free?",
        answer:
          "Yes — MIT licensed, free for personal and commercial projects. Use it for your startup, your client work, your seventeenth side project. Attribution is appreciated but not required.",
      },
      {
        question: "How do I customize the content?",
        answer:
          "Every word on this page lives in one file: config/site.ts. Change the headline, pricing tiers, FAQ answers, and footer links there, and every component updates. You never have to touch a component to change copy.",
      },
      {
        question: "How do I deploy it?",
        answer:
          "Run `npm run build` and you get a fully static site in the /out folder — no server required. Drop it on Cloudflare Pages, Vercel, Netlify, GitHub Pages, or any static host. The README has step-by-step instructions for each.",
      },
      {
        question: "Does it support dark mode?",
        answer:
          "Fully. There's a toggle in the navbar, your preference is remembered in localStorage, it respects your OS setting on first visit, and a tiny inline script prevents the dreaded flash of the wrong theme.",
      },
      {
        question: "Will the template get updates?",
        answer:
          "Yes. Watch or star the GitHub repo to get notified. Since it's a template you clone rather than a dependency you install, updates never break your customized version — you pull in what you want, when you want.",
      },
      {
        question: "What if I need help or a custom version?",
        answer:
          "Open an issue on GitHub for bugs and questions. If you'd rather hand it off entirely, Pixel & Oak — the studio behind LaunchPad — builds fast, SEO-ready sites for startups. We answer emails quicker than the average free-template maintainer.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    headline: "Ready for liftoff?",
    subline:
      "Clone the repo, edit one file, deploy for free. Your landing page could be live in under an hour.",
    cta: { label: "Get started free", href: "#pricing" },
  },

  footer: {
    tagline: "The landing page your side project deserves.",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
          { label: "Changelog", href: "#" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Documentation", href: "#" },
          { label: "Community", href: "#" },
          { label: "GitHub", href: "#" },
          { label: "Status", href: "#" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "License", href: "#" },
        ],
      },
    ] satisfies FooterColumn[],
    attribution: {
      label: "Built by Pixel & Oak",
      href: "https://pixelandoak.com/templates/saas-landing-page-template/?utm_source=launchpad-template",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
