import { SectionHeader } from "../../components/ui/SectionHeader";
import { profiles } from "../../data/mockData";

export function SettingsPage() {
  const profile = profiles[0];

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Settings"
        title="Profile and preferences"
        description="Keep your application cycle, academic context, and family sharing preferences aligned as your plan changes."
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-950">Applicant profile</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              Name
              <input defaultValue={profile.name} className="rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              Cycle
              <input defaultValue={profile.cycle} className="rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              GPA
              <input defaultValue={profile.stats.gpa} className="rounded-md border border-slate-300 px-3 py-2" />
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-slate-700">
              MCAT
              <input defaultValue={profile.stats.mcat} className="rounded-md border border-slate-300 px-3 py-2" />
            </label>
          </div>
          <div className="mt-5 flex justify-end">
            <button type="button" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Save settings</button>
          </div>
        </form>
        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-950">Privacy boundaries</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>Keep patient identifiers out of reflections and drafts.</li>
            <li>Share milestones with family only when it helps you feel supported.</li>
            <li>Use readiness scores to guide planning, not to judge your worth as an applicant.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
