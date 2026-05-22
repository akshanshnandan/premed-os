import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ProgressRing } from "../../components/ui/ProgressRing";
import { experiences, profiles, readinessCategories } from "../../data/mockData";

export function LandingPage() {
  const profile = profiles[0];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Premed OS
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
            <Link to="/pricing" className="hover:text-slate-950">Pricing</Link>
            <Link to="/login" className="hover:text-slate-950">Log in</Link>
            <Link to="/dashboard" className="rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-800">
              View demo
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="border-b border-slate-200 bg-[#faf9f6]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Premed application command center</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Your med school application should not start in May.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Premed OS helps you track clinical, service, research, shadowing, and leadership experiences as they happen, then turn that evidence into AMCAS-ready drafts, interview stories, and a clear plan for what to fix before applying.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                Because by application season, the hardest part should not be remembering what mattered, who supervised you, or whether your file has real depth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
                  Start your free readiness check <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-white">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Application readiness</p>
                  <p className="text-sm font-semibold text-slate-950">{profile.name}</p>
                  <p className="text-xs text-slate-500">{profile.headline}</p>
                </div>
                <ProgressRing value={profile.readinessScore} size={96} />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Experiences", experiences.length],
                  ["Drafts", profile.stats.drafts],
                  ["Hours", profile.stats.totalHours]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-semibold text-slate-950">{value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {readinessCategories.slice(0, 4).map((category) => (
                  <div key={category.key} className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                    <span className="text-sm font-medium text-slate-700">{category.label}</span>
                    <span className="text-sm font-semibold text-slate-950">{category.score}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">Next best move</p>
                <p className="mt-1 text-sm leading-6 text-emerald-800">Strengthen shadowing breadth before draft season, while keeping service reflections current.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Capture the story while it is still fresh", "Log hours, contacts, reflections, impact, and competencies before the semester blurs together."],
            ["Turn activity into evidence", "Move from vague involvement to concrete drafts that show what you did, what changed, and what you learned."],
            ["Know what to fix early", "See gaps by category and work a monthly plan before application season compresses every decision."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <h2 className="mt-4 font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </section>
        <section className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-semibold">Built for serious premed planning</p>
                <p className="mt-1 text-sm text-slate-300">No PHI, no admissions guarantees, no pressure theater. Just a focused workspace for becoming a clearer, better-prepared applicant.</p>
              </div>
            </div>
            <Link to="/dashboard" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950">
              View demo
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
