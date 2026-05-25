type ProgressRingProps = {
  value: number;
  size?: number;
  label?: string;
};

export function ProgressRing({ value, size = 112, label = "Planning" }: ProgressRingProps) {
  const stroke = 9;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e2e8f0" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#4f46e5"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-2xl font-semibold text-slate-950">{value}</p>
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{label}</p>
      </div>
    </div>
  );
}
