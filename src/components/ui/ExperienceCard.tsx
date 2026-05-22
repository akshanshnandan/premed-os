import { Link } from "react-router-dom";
import type { Experience } from "../../data/mockData";
import { formatHours, truncate } from "../../lib/utils";
import { CompetencyTag } from "./CompetencyTag";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link
      to={`/experiences/${experience.id}`}
      className="block rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-soft"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{experience.type}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-950">{experience.title}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {experience.organization} / {experience.dateRange}
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-semibold text-slate-950">{formatHours(experience.hours)}</p>
          <p className="mt-1 text-xs text-slate-500">{experience.draftStatus}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{truncate(experience.impact, 150)}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.competencies.slice(0, 3).map((competency) => (
          <CompetencyTag key={competency} competency={competency} />
        ))}
      </div>
    </Link>
  );
}
