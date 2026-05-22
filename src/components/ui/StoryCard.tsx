import { experiences, stories } from "../../data/mockData";

export function StoryCard({ story }: { story: (typeof stories)[number] }) {
  const experience = experiences.find((item) => item.id === story.experienceId);

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{story.theme}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-950">{story.title}</h3>
          <p className="mt-1 text-sm text-slate-500">From {experience?.title}</p>
        </div>
      </div>
      <dl className="mt-5 grid gap-3 text-sm">
        {(["situation", "task", "action", "result", "lesson"] as const).map((key) => (
          <div key={key} className="grid gap-1 sm:grid-cols-[96px_1fr]">
            <dt className="font-semibold capitalize text-slate-700">{key}</dt>
            <dd className="leading-6 text-slate-600">{story[key]}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
