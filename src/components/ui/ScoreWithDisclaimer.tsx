import { ProgressRing } from "./ProgressRing";

type ScoreWithDisclaimerProps = {
  value: number;
  size?: number;
  label?: string;
  className?: string;
};

export function ScoreWithDisclaimer({
  value,
  size = 112,
  label = "Planning",
  className = "",
}: ScoreWithDisclaimerProps) {
  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
      <ProgressRing value={value} size={size} label={label} />
      <p className="max-w-[11rem] text-center text-[10px] leading-4 text-slate-500">
        Planning preview only. Not an admissions prediction.
      </p>
    </div>
  );
}
