import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

/**
 * A full product "screenshot" drawn entirely with divs and Tailwind —
 * browser chrome, sidebar, stat cards, chart, and table. Zero images.
 */
export function Screenshot() {
  const { screenshot } = siteConfig;
  const chartBars = [40, 65, 45, 80, 60, 90, 70, 100, 85, 75, 95, 88, 70, 92];
  const tableRows = [
    { name: "Acme Corp", plan: "Team", mrr: "$490", status: "Active", statusClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" },
    { name: "Polaris Labs", plan: "Pro", mrr: "$190", status: "Active", statusClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400" },
    { name: "Nimbus HQ", plan: "Pro", mrr: "$190", status: "Trialing", statusClass: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400" },
    { name: "Quartz Inc", plan: "Hobby", mrr: "$0", status: "Churned", statusClass: "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400" },
  ];
  const sidebarItems = ["Dashboard", "Analytics", "Customers", "Billing", "Settings"];
  const stats = [
    { label: "MRR", value: "$12,480", delta: "+8.2%" },
    { label: "Active users", value: "3,207", delta: "+12.1%" },
    { label: "Churn", value: "1.9%", delta: "-0.4%" },
  ];

  return (
    <section className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {screenshot.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl dark:text-white">
              {screenshot.headline}
            </h2>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
              {screenshot.subline}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10 dark:bg-gray-900 dark:ring-white/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3 dark:border-white/5 dark:bg-white/5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="mx-auto flex w-full max-w-sm items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-500 ring-1 ring-black/5 dark:bg-gray-950 dark:text-gray-400 dark:ring-white/10">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-emerald-500" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                </svg>
                {screenshot.url}
              </div>
              <div className="w-12" />
            </div>

            {/* App body */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden w-48 shrink-0 border-r border-gray-100 p-4 sm:block dark:border-white/5">
                <div className="mb-5 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-950 text-[10px] font-bold text-white dark:bg-white dark:text-gray-950">L</span>
                  <span className="text-sm font-bold text-gray-950 dark:text-white">LaunchPad</span>
                </div>
                <div className="space-y-1">
                  {sidebarItems.map((item, i) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs font-medium ${
                        i === 0
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main panel */}
              <div className="min-w-0 flex-1 p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-gray-950 dark:text-white">Dashboard</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Last 30 days</div>
                  </div>
                  <span className="rounded-full bg-gray-950 px-3 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-gray-950">
                    Export
                  </span>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-gray-50 p-3 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
                      <div className="text-[10px] font-medium text-gray-500 dark:text-gray-400">{stat.label}</div>
                      <div className="mt-0.5 text-sm font-bold tracking-tight text-gray-950 sm:text-lg dark:text-white">{stat.value}</div>
                      <div className={`mt-0.5 text-[10px] font-semibold ${stat.delta.startsWith("-") ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                        {stat.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-4 rounded-xl bg-gray-50 p-4 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
                  <div className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300">Revenue</div>
                  <div className="flex h-20 items-end gap-1 sm:h-24">
                    {chartBars.map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-sky-400 opacity-80 dark:from-indigo-500 dark:to-sky-500"
                      />
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10">
                  <div className="grid grid-cols-4 gap-2 bg-gray-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-gray-500 dark:bg-white/5 dark:text-gray-400">
                    <span>Customer</span><span>Plan</span><span>MRR</span><span>Status</span>
                  </div>
                  {tableRows.map((row) => (
                    <div key={row.name} className="grid grid-cols-4 items-center gap-2 border-t border-gray-100 px-3 py-2 text-xs dark:border-white/5">
                      <span className="truncate font-medium text-gray-900 dark:text-gray-100">{row.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{row.plan}</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{row.mrr}</span>
                      <span><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.statusClass}`}>{row.status}</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
