import { ArrowUpRight } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  tone?: "indigo" | "emerald" | "slate";
};

const toneMap = {
  indigo: "bg-brand-50 text-brand-700",
  emerald: "bg-emerald-50 text-emerald-700",
  slate: "bg-slate-100 text-slate-700"
};

export function StatCard({ label, value, detail, tone = "slate" }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className={`rounded-md p-1.5 ${toneMap[tone]}`}>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{detail}</p>
    </div>
  );
}
