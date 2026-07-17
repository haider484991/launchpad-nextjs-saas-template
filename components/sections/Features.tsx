import { siteConfig, type Feature } from "@/config/site";
import { Reveal } from "@/components/Reveal";

/* ── CSS-drawn product visuals (zero images) ────────────────────────────── */

function ChartVisual() {
  const bars = [35, 55, 40, 70, 52, 85, 65, 95, 78, 100, 88, 60];
  return (
    <div className="flex h-full flex-col justify-end rounded-2xl bg-gray-50 p-5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Monthly revenue</div>
          <div className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">$48,290</div>
        </div>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
          +23.4%
        </span>
      </div>
      <div className="flex h-28 items-end gap-1.5 sm:h-32">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-t-sm transition-all ${
              i === bars.length - 3
                ? "bg-indigo-500 dark:bg-indigo-400"
                : "bg-indigo-200 dark:bg-indigo-500/30"
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-medium text-gray-400 dark:text-gray-500">
        <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
      </div>
    </div>
  );
}

function KanbanVisual() {
  const cards = [
    { title: "Ship onboarding flow", tag: "Design", tagClass: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400" },
    { title: "Fix billing webhook", tag: "Urgent", tagClass: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400" },
    { title: "Write launch tweet", tag: "Growth", tagClass: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400" },
  ];
  return (
    <div className="h-full rounded-2xl bg-gray-50 p-5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">In progress</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-[10px] font-bold text-gray-600 dark:bg-white/10 dark:text-gray-300">3</span>
      </div>
      <div className="space-y-2.5">
        {cards.map((card) => (
          <div key={card.title} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
            <div className="text-xs font-medium text-gray-900 dark:text-gray-100">{card.title}</div>
            <div className="mt-2 flex items-center justify-between">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${card.tagClass}`}>{card.tag}</span>
              <span className="h-4 w-4 rounded-full bg-gradient-to-br from-indigo-400 to-sky-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagesVisual() {
  return (
    <div className="flex h-full flex-col justify-end gap-2.5 rounded-2xl bg-gray-50 p-5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
      <div className="flex items-start gap-2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-rose-400 text-[9px] font-bold text-white">KL</span>
        <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs text-gray-800 shadow-sm ring-1 ring-black/5 dark:bg-gray-900 dark:text-gray-200 dark:ring-white/10">
          Did we ship the new pricing page?
        </div>
      </div>
      <div className="flex items-start justify-end gap-2">
        <div className="rounded-2xl rounded-tr-sm bg-indigo-600 px-3 py-2 text-xs text-white shadow-sm dark:bg-indigo-500">
          Deployed 20 minutes ago 🚀
        </div>
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 text-[9px] font-bold text-white">JD</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-rose-400 text-[9px] font-bold text-white">KL</span>
        <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs text-gray-800 shadow-sm ring-1 ring-black/5 dark:bg-gray-900 dark:text-gray-200 dark:ring-white/10">
          Conversion is already up 12% 📈
        </div>
      </div>
      <div className="ml-8 text-[10px] font-medium text-gray-400 dark:text-gray-500">Seen just now</div>
    </div>
  );
}

function TogglesVisual() {
  const rows = [
    { label: "Email notifications", on: true },
    { label: "Weekly digest", on: true },
    { label: "Usage alerts", on: false },
    { label: "Public API access", on: true },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2 rounded-2xl bg-gray-50 p-5 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between rounded-xl bg-white px-3.5 py-2.5 shadow-sm ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{row.label}</span>
          <span className={`flex h-5 w-9 items-center rounded-full p-0.5 transition ${row.on ? "justify-end bg-indigo-600 dark:bg-indigo-500" : "justify-start bg-gray-200 dark:bg-white/15"}`}>
            <span className="h-4 w-4 rounded-full bg-white shadow-sm" />
          </span>
        </div>
      ))}
    </div>
  );
}

const visuals: Record<Feature["visual"], () => React.ReactElement> = {
  chart: ChartVisual,
  kanban: KanbanVisual,
  messages: MessagesVisual,
  toggles: TogglesVisual,
};

/* ── Section ────────────────────────────────────────────────────────────── */

export function Features() {
  const { features } = siteConfig;

  return (
    <section id="features" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {features.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
            {features.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {features.subline}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature, i) => {
            const Visual = visuals[feature.visual];
            return (
              <Reveal
                key={feature.title}
                delay={i * 80}
                className={feature.wide ? "sm:col-span-2" : ""}
              >
                <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md dark:bg-white/[0.03] dark:ring-white/10">
                  <div className="min-h-56 flex-1">
                    <Visual />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
