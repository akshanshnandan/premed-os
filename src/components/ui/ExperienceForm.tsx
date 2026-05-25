import { useEffect, useState, type FormEvent } from "react";
import type { Competency, Experience } from "../../data/mockData";
import { competencies, experienceTypes } from "../../lib/constants";

type ExperienceFormProps = {
  experience: Experience;
  onSave: (experience: Experience) => void;
  saveLabel?: string;
};

export function ExperienceForm({ experience, onSave, saveLabel = "Save changes" }: ExperienceFormProps) {
  const [form, setForm] = useState(experience);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setForm(experience);
    setSaved(false);
  }, [experience.id]);

  function updateField<K extends keyof Experience>(key: K, value: Experience[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function toggleCompetency(competency: Competency) {
    setForm((prev) => {
      const has = prev.competencies.includes(competency);
      return {
        ...prev,
        competencies: has
          ? prev.competencies.filter((c) => c !== competency)
          : [...prev.competencies, competency],
      };
    });
    setSaved(false);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSave(form);
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Title
          <input
            required
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Type
          <select
            value={form.type}
            onChange={(e) => updateField("type", e.target.value as Experience["type"])}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            {experienceTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Organization
          <input
            value={form.organization}
            onChange={(e) => updateField("organization", e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Date range
          <input
            value={form.dateRange}
            onChange={(e) => updateField("dateRange", e.target.value)}
            placeholder="Sep 2024 - Present"
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Hours
          <input
            type="number"
            min={0}
            value={form.hours}
            onChange={(e) => updateField("hours", Number(e.target.value))}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Location
          <input
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700 md:col-span-2">
          Contact
          <input
            value={form.contact}
            onChange={(e) => updateField("contact", e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>
      {(
        [
          ["reflection", "Reflection"],
          ["impact", "Impact"],
          ["lessons", "Lessons learned"],
        ] as const
      ).map(([key, label]) => (
        <label key={key} className="grid gap-1.5 text-sm font-medium text-slate-700">
          {label}
          <textarea
            value={form[key]}
            onChange={(e) => updateField(key, e.target.value)}
            rows={4}
            className="resize-y rounded-md border border-slate-300 px-3 py-2 text-slate-950 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
      ))}
      <div>
        <p className="text-sm font-medium text-slate-700">Competencies</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {competencies.map((competency) => (
            <button
              key={competency}
              type="button"
              onClick={() => toggleCompetency(competency)}
              className={
                form.competencies.includes(competency)
                  ? "rounded-md border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                  : "rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
              }
            >
              {competency}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5">
        {saved ? <span className="text-sm font-medium text-emerald-700">Saved to this browser.</span> : null}
        <button type="submit" className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
          {saveLabel}
        </button>
      </div>
    </form>
  );
}
