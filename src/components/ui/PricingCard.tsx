import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type PricingCardProps = {
  name: string;
  price: string;
  detail: string;
  features: string[];
  featured?: boolean;
  cta?: string;
  ctaHref?: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
};

export function PricingCard({
  name,
  price,
  detail,
  features,
  featured,
  cta = "Start free",
  ctaHref = "/onboarding",
  comingSoon = false,
  comingSoonLabel = "Coming soon",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-lg border bg-white p-6 shadow-sm",
        featured && !comingSoon && "border-brand-300 shadow-soft ring-1 ring-brand-100",
        comingSoon && "border-slate-300 bg-slate-100",
      )}
    >
      {comingSoon ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-slate-950/55 backdrop-blur-[1px]">
          <span className="rounded-md border border-white/20 bg-slate-900/90 px-4 py-2 text-sm font-semibold tracking-wide text-white">
            {comingSoonLabel}
          </span>
        </div>
      ) : null}
      <div className={cn("flex h-full flex-col", comingSoon && "opacity-50 saturate-50")}>
        {featured && !comingSoon ? (
          <span className="mb-4 w-fit rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            Best for applicants
          </span>
        ) : null}
        <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{price}</p>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{detail}</p>
        {comingSoon ? (
          <span className="mt-6 inline-flex items-center justify-center rounded-md border border-slate-300 bg-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-500">
            {cta}
          </span>
        ) : (
          <Link
            to={ctaHref}
            className={cn(
              "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold",
              featured ? "bg-brand-600 text-white hover:bg-brand-700" : "border border-slate-300 text-slate-800 hover:bg-slate-50",
            )}
          >
            {cta}
          </Link>
        )}
        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
