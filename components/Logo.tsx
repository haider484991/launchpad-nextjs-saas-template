import { siteConfig } from "@/config/site";

/** Rocket glyph in a black rounded square + wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-950 dark:bg-white">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-white dark:text-gray-950"
          aria-hidden="true"
        >
          <path d="M12.75 2.75c2.9.35 5.6 1.66 7.03 3.1 1.44 1.43 2.75 4.13 3.1 7.03.05.42-.1.84-.4 1.14l-2.68 2.68a1.4 1.4 0 0 1-1.62.26l-.9-.45-4.99 4.99a1.4 1.4 0 0 1-1.98 0l-.7-.7 2.97-4.46a.75.75 0 1 0-1.25-.83l-2.78 4.17-1.28-1.28 4.17-2.78a.75.75 0 1 0-.83-1.25l-4.46 2.97-.7-.7a1.4 1.4 0 0 1 0-1.98l4.99-4.99-.45-.9a1.4 1.4 0 0 1 .26-1.62l2.68-2.68c.3-.3.72-.45 1.14-.4Zm2.9 5.02a1.9 1.9 0 1 0-2.69 2.69 1.9 1.9 0 0 0 2.69-2.69ZM5.4 17.18a.75.75 0 0 1 .06 1.06c-.45.5-.86 1.51-1.13 2.46a13 13 0 0 0-.3 1.27 13 13 0 0 0 1.27-.3c.95-.28 1.96-.69 2.46-1.14a.75.75 0 0 1 1 1.12c-.77.69-2.06 1.16-3.03 1.45-1 .29-1.9.44-2.24.47a.9.9 0 0 1-.98-.98c.03-.34.18-1.25.47-2.24.29-.97.76-2.26 1.45-3.03a.75.75 0 0 1 .97-.14Z" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-gray-950 dark:text-white">
        {siteConfig.name}
      </span>
    </a>
  );
}
