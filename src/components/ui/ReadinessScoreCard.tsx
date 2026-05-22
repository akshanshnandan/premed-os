import type { ReadinessCategory } from "../../data/mockData";
import { scoreTone } from "../../lib/utils";

export function ReadinessScoreCard({ category }: { category: ReadinessCategory }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-950">{category.label}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{category.rationale}</p>
        </div>
        <span className={`rounded-md border px-2.5 py-1 text-sm font-semibold ${scoreTone(category.score)}`}>
          {category.score}
        </span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Evidence we can point to</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {category.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">What would strengthen it</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {category.nextActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
