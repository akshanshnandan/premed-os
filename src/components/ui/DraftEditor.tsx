import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppData } from "../../context/AppDataContext";
import type { Experience } from "../../data/mockData";
import { draftVersions } from "../../data/mockData";
import { CharacterCounter } from "./CharacterCounter";
import { CompetencyTag } from "./CompetencyTag";
import { RiskBanner } from "./RiskBanner";

const ACTIVITY_LIMIT = 700;
const MEANINGFUL_LIMIT = 1325;

type MobileTab = "evidence" | "write" | "guide";

function EvidencePanel({ experience }: { experience: Experience }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-slate-950">Source evidence</p>
      <p className="text-xs leading-5 text-slate-500">Read-only from your experience log. Edit on the experience page.</p>
      {[
        ["Impact", experience.impact],
        ["Reflection", experience.reflection],
        ["Lessons learned", experience.lessons],
      ].map(([label, text]) => (
        <div key={label} className="rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{text || "—"}</p>
        </div>
      ))}
      <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
        <span className="font-medium text-slate-700">{experience.hours.toLocaleString()} hrs</span>
        <span className="text-slate-400"> · </span>
        {experience.organization}
        <span className="text-slate-400"> · </span>
        {experience.dateRange}
      </div>
    </div>
  );
}

function ExperiencePicker({
  experiences,
  selectedId,
  onSelect,
}: {
  experiences: Experience[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <>
      <p className="text-sm font-semibold text-slate-950">Choose the source experience</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">Start with activity evidence before polishing the sentence.</p>
      <div className="mt-3 max-h-48 space-y-2 overflow-y-auto xl:max-h-40">
        {experiences.map((experience) => (
          <button
            key={experience.id}
            type="button"
            onClick={() => onSelect(experience.id)}
            className={`w-full rounded-md border p-3 text-left text-sm transition ${experience.id === selectedId ? "border-brand-200 bg-brand-50" : "border-transparent hover:bg-slate-50"}`}
          >
            <span className="font-medium text-slate-950">{experience.title}</span>
            <span className="mt-1 block text-xs text-slate-500">{experience.type}</span>
          </button>
        ))}
      </div>
    </>
  );
}

export function DraftEditor() {
  const { experiences, getDraft, updateDraft } = useAppData();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramId = searchParams.get("experience");
  const [experienceId, setExperienceId] = useState(paramId ?? experiences[0]?.id ?? "");
  const [mobileTab, setMobileTab] = useState<MobileTab>("write");

  const selected = experiences.find((e) => e.id === experienceId) ?? experiences[0];
  const draft = selected ? getDraft(selected.id) : { activityText: "", meaningfulText: "", isMeaningful: false };
  const experienceDrafts = draftVersions.filter((d) => d.experienceId === selected?.id);

  useEffect(() => {
    if (paramId && experiences.some((e) => e.id === paramId)) {
      setExperienceId(paramId);
    }
  }, [paramId, experiences]);

  if (!selected) {
    return <p className="text-sm text-slate-600">Add an experience to start drafting.</p>;
  }

  function selectExperience(id: string) {
    setExperienceId(id);
    setSearchParams({ experience: id });
    setMobileTab("write");
  }

  function setActivityText(text: string) {
    updateDraft(selected.id, { activityText: text });
  }

  function setMeaningfulText(text: string) {
    updateDraft(selected.id, { meaningfulText: text });
  }

  function setMeaningful(checked: boolean) {
    updateDraft(selected.id, { isMeaningful: checked });
  }

  const writePanel = (
    <div className="rounded-lg border border-brand-100 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{selected.type}</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">{selected.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            AMCAS activity descriptions are limited to 700 characters. Most Meaningful selections also require a separate 1,325-character essay.
          </p>
        </div>
        <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={draft.isMeaningful}
            onChange={(event) => setMeaningful(event.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600"
          />
          Most Meaningful
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-slate-950">Activity description (700 characters)</label>
      <textarea
        value={draft.activityText}
        onChange={(event) => setActivityText(event.target.value)}
        rows={10}
        className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-[#fffdf8] p-4 text-sm leading-7 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
      <div className="mt-2">
        <CharacterCounter value={draft.activityText} limit={ACTIVITY_LIMIT} />
      </div>
      {experienceDrafts.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {experienceDrafts.map((version) => (
            <button
              key={version.id}
              type="button"
              onClick={() => setActivityText(version.text)}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-brand-200 hover:bg-brand-50"
            >
              Load {version.label}
            </button>
          ))}
        </div>
      ) : null}
      {draft.isMeaningful ? (
        <div className="mt-6 border-t border-slate-200 pt-6">
          <label className="block text-sm font-semibold text-slate-950">Most Meaningful essay (1,325 characters)</label>
          <p className="mt-1 text-xs leading-5 text-slate-500">Separate from the 700-character activity description on AMCAS.</p>
          <textarea
            value={draft.meaningfulText}
            onChange={(event) => setMeaningfulText(event.target.value)}
            rows={10}
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-[#fffdf8] p-4 text-sm leading-7 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
          <div className="mt-2">
            <CharacterCounter value={draft.meaningfulText} limit={MEANINGFUL_LIMIT} />
          </div>
        </div>
      ) : null}
    </div>
  );

  const guidePanel = (
    <div className="space-y-5">
      <RiskBanner
        title="Voice and accuracy"
        message="Brainstorming support can help you revise, but final wording must be accurate, verifiable, and in your own voice."
      />
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-950">What reviewers need to see</p>
        <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
          <li>Your specific role, not just the organization&apos;s mission.</li>
          <li>Concrete evidence: hours, actions, outcomes, or responsibility.</li>
          <li>Reflection that shows maturity without overclaiming.</li>
        </ul>
      </div>
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
        <p className="text-sm font-semibold text-emerald-950">Draft focus</p>
        <p className="mt-2 text-sm leading-6 text-emerald-800">
          A strong activity description usually answers: What did I do? Who benefited? What did I understand differently afterward?
        </p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-950">Competencies</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.competencies.map((competency) => (
            <CompetencyTag key={competency} competency={competency} />
          ))}
        </div>
      </div>
    </div>
  );

  const leftPanel = (
    <aside className="space-y-5 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <ExperiencePicker experiences={experiences} selectedId={selected.id} onSelect={selectExperience} />
      <div className="border-t border-slate-200 pt-5">
        <EvidencePanel experience={selected} />
      </div>
    </aside>
  );

  return (
    <div>
      <div className="mb-4 flex gap-1 rounded-lg border border-slate-200 bg-white p-1 shadow-sm xl:hidden">
        {(
          [
            ["evidence", "Evidence"],
            ["write", "Write"],
            ["guide", "Guide"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMobileTab(id)}
            className={
              mobileTab === id
                ? "flex-1 rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white"
                : "flex-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            }
          >
            {label}
          </button>
        ))}
      </div>
      <div className="hidden gap-5 xl:grid xl:grid-cols-[300px_1fr_320px]">
        {leftPanel}
        {writePanel}
        {guidePanel}
      </div>
      <div className="xl:hidden">
        {mobileTab === "evidence" ? leftPanel : null}
        {mobileTab === "write" ? writePanel : null}
        {mobileTab === "guide" ? guidePanel : null}
      </div>
    </div>
  );
}
