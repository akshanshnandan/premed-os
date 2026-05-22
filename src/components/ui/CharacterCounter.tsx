type CharacterCounterProps = {
  value: string;
  limit: number;
};

export function CharacterCounter({ value, limit }: CharacterCounterProps) {
  const remaining = limit - value.length;
  const overLimit = remaining < 0;

  return (
    <div className="flex items-center justify-between text-xs">
      <span className={overLimit ? "font-medium text-rose-600" : "text-slate-500"}>
        {value.length.toLocaleString()} / {limit.toLocaleString()} characters
      </span>
      <span className={overLimit ? "font-medium text-rose-600" : "text-slate-500"}>
        {overLimit ? `${Math.abs(remaining)} over` : `${remaining} remaining`}
      </span>
    </div>
  );
}
