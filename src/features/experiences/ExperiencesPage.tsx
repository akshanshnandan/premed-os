import { useMemo, useState } from "react";
import { EmptyState } from "../../components/ui/EmptyState";
import { ExperienceCard } from "../../components/ui/ExperienceCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { experiences, type Competency } from "../../data/mockData";
import { competencies, experienceTypes } from "../../lib/constants";

export function ExperiencesPage() {
  const [type, setType] = useState("All");
  const [competency, setCompetency] = useState("All");
  const filtered = useMemo(
    () =>
      experiences.filter((experience) => {
        const matchesType = type === "All" || experience.type === type;
        const matchesCompetency = competency === "All" || experience.competencies.includes(competency as Competency);
        return matchesType && matchesCompetency;
      }),
    [type, competency],
  );

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Experience tracker"
        title="All experiences"
        description="Keep the details that are easy to forget: who supervised you, what you actually did, what changed, and what the experience taught you."
        action={<button className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Add experience</button>}
      />
      <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Type
          <select value={type} onChange={(event) => setType(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2">
            <option>All</option>
            {experienceTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Competency
          <select value={competency} onChange={(event) => setCompetency(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2">
            <option>All</option>
            {competencies.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      {filtered.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {filtered.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        <EmptyState title="No experiences match these filters" description="Try a broader competency or type filter. Sometimes the evidence is there; it just belongs under a different theme." />
      )}
    </div>
  );
}
