import { ShieldAlert } from "lucide-react";

type RiskBannerProps = {
  title?: string;
  message: string;
};

export function RiskBanner({ title = "Privacy reminder", message }: RiskBannerProps) {
  return (
    <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
      <ShieldAlert className="mt-0.5 h-5 w-5 flex-none" />
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-6">{message}</p>
      </div>
    </div>
  );
}
