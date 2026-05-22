import type { Experience } from "../../data/mockData";
import { competencies } from "../../lib/constants";
import { CompetencyTag } from "./CompetencyTag";

export function ExperienceForm({ experience }: { experience: Experience }) {
  return (
    <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Title
          <input defaultValue={experience.title} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Type
          <input defaultValue={experience.type} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Organization
          <input defaultValue={experience.organization} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Date range
          <input defaultValue={experience.dateRange} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Hours
          <input type="number" defaultValue={experience.hours} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Location
          <input defaultValue={experience.location} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700 md:col-span-2">
          Contact
          <input defaultValue={experience.contact} className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
      </div>
      {[
        ["Reflection", experience.reflection],
        ["Impact", experience.impact],
        ["Lessons learned", experience.lessons]
      ].map(([label, value]) => (
        <label key={label} className="grid gap-1.5 text-sm font-medium text-slate-700">
          {label}
          <textarea defaultValue={value} rows={4} className="resize-y rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
      ))}
      <div>
        <p className="text-sm font-medium text-slate-700">Competencies</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {competencies.map((competency) => (
            <button
              key={competency}
              type="button"
              className={experience.competencies.includes(competency) ? "rounded-md border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700" : "rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600"}
            >
              {competency}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.competencies.map((competency) => (
            <CompetencyTag key={competency} competency={competency} />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
        <button type="button" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Save as draft
        </button>
        <button type="button" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
          Save changes
        </button>
      </div>
    </form>
  );
}
