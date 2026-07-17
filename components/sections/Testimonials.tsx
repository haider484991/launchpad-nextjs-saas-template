import { siteConfig, type Testimonial } from "@/config/site";
import { Reveal } from "@/components/Reveal";

const avatarGradients = [
  "from-indigo-400 to-sky-400",
  "from-amber-400 to-rose-400",
  "from-emerald-400 to-sky-400",
  "from-rose-400 to-indigo-400",
  "from-sky-400 to-emerald-400",
  "from-amber-400 to-indigo-400",
];

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const accent = item.accent;
  return (
    <figure
      className={`break-inside-avoid rounded-2xl p-6 shadow-sm ring-1 transition hover:shadow-md ${
        accent
          ? "bg-indigo-600 ring-indigo-500 dark:bg-indigo-500 dark:ring-indigo-400"
          : "bg-white ring-black/5 dark:bg-white/[0.03] dark:ring-white/10"
      }`}
    >
      <blockquote
        className={`text-sm leading-relaxed ${
          accent ? "text-indigo-50" : "text-gray-700 dark:text-gray-300"
        }`}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${avatarGradients[index % avatarGradients.length]}`}
          aria-hidden="true"
        >
          {item.initials}
        </span>
        <div>
          <div className={`text-sm font-semibold ${accent ? "text-white" : "text-gray-950 dark:text-white"}`}>
            {item.name}
          </div>
          <div className={`text-xs ${accent ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
            {item.title}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {testimonials.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl dark:text-white">
              {testimonials.headline}
            </h2>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
              {testimonials.subline}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {/* Masonry-ish columns so cards of different heights interleave */}
          <div className="mt-14 columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
            {testimonials.items.map((item, i) => (
              <TestimonialCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
