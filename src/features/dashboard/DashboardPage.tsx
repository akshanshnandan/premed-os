import { Link } from "react-router-dom";
import { ExperienceCard } from "../../components/ui/ExperienceCard";
import { ProgressRing } from "../../components/ui/ProgressRing";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { StatCard } from "../../components/ui/StatCard";
import { experiences, profiles, readinessCategories, timeline, weeklyActions } from "../../data/mockData";

export function DashboardPage() {
  const profile = profiles[0];
  const weaknesses = [...readinessCategories].sort((a, b) => a.score - b.score).slice(0, 3);
  const strongest = [...readinessCategories].sort((a, b) => b.score - a.score).slice(0, 3);
  const topActions = weeklyActions.slice(0, 3);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Application command center"
        title={`You're ${profile.stats.monthsUntilCycle} months from application season.`}
        description="Here are the 3 actions most likely to strengthen your file this week, based on your evidence, gaps, and draft readiness."
        action={<Link to="/drafts" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Open drafts</Link>}
      />
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          <div className="flex items-center gap-5 rounded-lg border border-brand-100 bg-brand-50 p-5">
            <ProgressRing value={profile.readinessScore} />
            <div>
              <p className="text-sm font-semibold text-brand-900">Readiness signal</p>
              <p className="mt-1 text-sm leading-6 text-brand-800">Strong foundation. The work now is sharpening evidence and closing the gaps that can still be fixed.</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {topActions.map((action, index) => (
              <div key={action} className="rounded-lg border border-slate-200 bg-[#fffdf8] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Priority {index + 1}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-900">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Application clock" value={`${profile.stats.monthsUntilCycle} mo`} detail="Until primary application season" tone="indigo" />
        <StatCard label="Draft readiness" value={`${profile.stats.drafts}/15`} detail="Activities with a usable first draft" tone="emerald" />
        <StatCard label="Strongest evidence" value={strongest[0].label} detail={`${strongest[0].score}/100 with sustained examples`} />
        <StatCard label="Weakest gap" value={weaknesses[0].label} detail="Highest leverage area to address next" />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Evidence map</h2>
              <p className="mt-1 text-sm text-slate-600">Scores reflect what you can currently support with hours, roles, reflections, and clear outcomes.</p>
            </div>
            <ProgressRing value={profile.readinessScore} />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {readinessCategories.slice(0, 6).map((category) => (
              <div key={category.key} className="rounded-md border border-slate-200 p-3">
                <div className="flex justify-between gap-3">
                  <span className="text-sm font-medium text-slate-700">{category.label}</span>
                  <span className="text-sm font-semibold text-slate-950">{category.score}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-brand-600" style={{ width: `${category.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className="space-y-5">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-950">Weekly priorities</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Small steps now prevent rushed, vague writing later.</p>
            <ul className="mt-4 space-y-3">
              {weeklyActions.map((action) => (
                <li key={action} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-600" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-950">What to fix next</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">These gaps are addressable if you plan before the cycle starts.</p>
            <div className="mt-4 space-y-3">
              {weaknesses.map((item) => (
                <Link key={item.key} to="/readiness" className="flex items-center justify-between rounded-md border border-slate-200 p-3 hover:bg-slate-50">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-950">{item.score}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-950">Recent evidence</h2>
            <Link to="/experiences" className="text-sm font-semibold text-brand-700">View all</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.slice(0, 4).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-950">Application timeline</h2>
          <div className="mt-4 space-y-4">
            {timeline.map((item) => (
              <div key={item.month} className="flex gap-3">
                <div className="flex h-9 w-12 flex-none items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-700">{item.month}</div>
                <div>
                  <p className="text-sm font-medium text-slate-950">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
