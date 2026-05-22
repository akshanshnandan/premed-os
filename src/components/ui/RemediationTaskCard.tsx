import { useState } from "react";

type Task = {
  id: string;
  priority: string;
  title: string;
  description: string;
  status: string;
};

export function RemediationTaskCard({ task }: { task: Task }) {
  const [checked, setChecked] = useState(task.status === "Complete");
  const priorityTone =
    task.priority === "High"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : task.priority === "Medium"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : "border-slate-200 bg-slate-50 text-slate-600";

  return (
    <label className="flex cursor-pointer gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-slate-950">{task.title}</h3>
          <span className={`rounded-md border px-2 py-0.5 text-xs font-medium ${priorityTone}`}>{task.priority}</span>
          <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
            {checked ? "Complete" : task.status}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600">{task.description}</p>
      </div>
    </label>
  );
}
