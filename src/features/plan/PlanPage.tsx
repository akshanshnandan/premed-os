import { RemediationTaskCard } from "../../components/ui/RemediationTaskCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { remediationTasks } from "../../data/mockData";

export function PlanPage() {
  const months = Array.from(new Set(remediationTasks.map((task) => task.month)));

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Remediation plan"
        title="Monthly action plan"
        description="Convert vague anxiety into concrete work by month, priority, and status. The goal is not to do everything; it is to do the right next things early enough."
        action={<button className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Add task</button>}
      />
      <div className="grid gap-5">
        {months.map((month) => (
          <section key={month} className="rounded-lg border border-slate-200 bg-slate-100/60 p-4">
            <h2 className="font-semibold text-slate-950">{month}</h2>
            <div className="mt-4 grid gap-3">
              {remediationTasks.filter((task) => task.month === month).map((task) => (
                <RemediationTaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
