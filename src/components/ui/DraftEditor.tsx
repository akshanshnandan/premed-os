import { useMemo, useState } from "react";
import type { Experience } from "../../data/mockData";
import { draftVersions } from "../../data/mockData";
import { CharacterCounter } from "./CharacterCounter";
import { CompetencyTag } from "./CompetencyTag";
import { RiskBanner } from "./RiskBanner";

export function DraftEditor({ experiences }: { experiences: Experience[] }) {
  const [experienceId, setExperienceId] = useState(experiences[0]?.id ?? "");
  const selected = experiences.find((experience) => experience.id === experienceId) ?? experiences[0];
  const initialDraft = useMemo(
    () => draftVersions.find((draft) => draft.experienceId === selected?.id)?.text ?? selected?.impact ?? "",
    [selected?.id, selected?.impact],
  );
  const [text, setText] = useState(initialDraft);
  const [meaningful, setMeaningful] = useState(false);
  const limit = meaningful ? 1325 : 700;

  function selectExperience(id: string) {
    const nextExperience = experiences.find((experience) => experience.id === id);
    setExperienceId(id);
    setText(draftVersions.find((draft) => draft.experienceId === id)?.text ?? nextExperience?.impact ?? "");
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[300px_1fr_320px]">
      <aside className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-950">Choose the source experience</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">Start with the activity evidence before polishing the sentence.</p>
        <div className="mt-3 space-y-2">
          {experiences.slice(0, 8).map((experience) => (
            <button
              key={experience.id}
              onClick={() => selectExperience(experience.id)}
              className={`w-full rounded-md border p-3 text-left text-sm transition ${experience.id === selected.id ? "border-brand-200 bg-brand-50" : "border-transparent hover:bg-slate-50"}`}
            >
              <span className="font-medium text-slate-950">{experience.title}</span>
              <span className="mt-1 block text-xs text-slate-500">{experience.type}</span>
            </button>
          ))}
        </div>
      </aside>
      <main className="rounded-lg border border-brand-100 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{selected.type}</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-950">{selected.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              AMCAS gives you limited space. Aim for the role you played, the evidence that proves it, and one honest reflection on why it mattered.
            </p>
          </div>
          <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
            <input type="checkbox" checked={meaningful} onChange={(event) => setMeaningful(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-brand-600" />
            Most Meaningful
          </label>
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={16}
          className="mt-5 w-full resize-y rounded-lg border border-slate-300 bg-[#fffdf8] p-4 text-sm leading-7 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <div className="mt-3">
          <CharacterCounter value={text} limit={limit} />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {draftVersions.map((draft) => (
            <span key={draft.id} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
              {draft.label}
            </span>
          ))}
        </div>
      </main>
      <aside className="space-y-5">
        <RiskBanner
          title="Voice and accuracy"
          message="Brainstorming support can help you revise, but final wording must be accurate, verifiable, and in your own voice."
        />
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">What reviewers need to see</p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
            <li>Your specific role, not just the organization's mission.</li>
            <li>Concrete evidence: hours, actions, outcomes, or responsibility.</li>
            <li>Reflection that shows maturity without overclaiming.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-emerald-950">Draft focus</p>
          <p className="mt-2 text-sm leading-6 text-emerald-800">A strong activity description usually answers: What did I do? Who benefited? What did I understand differently afterward?</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Competencies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {selected.competencies.map((competency) => (
              <CompetencyTag key={competency} competency={competency} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
