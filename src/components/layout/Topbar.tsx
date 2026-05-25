import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { profiles } from "../../data/mockData";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const profile = profiles[0];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Open navigation"
            onClick={onMenuClick}
            className="rounded-md border border-slate-200 p-2 text-slate-600"
          >
            <Menu className="h-4 w-4" />
          </button>
          <Link to="/" className="font-semibold text-slate-950">
            Premed OS
          </Link>
        </div>
        <div className="hidden items-center gap-4 text-sm font-medium lg:flex">
          <Link to="/" className="text-slate-600 hover:text-slate-950">
            Landing
          </Link>
          <Link to="/pricing" className="text-slate-600 hover:text-slate-950">
            Pricing
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Link to="/pricing" className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 lg:hidden">
            Pricing
          </Link>
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-950">{profile.name}</p>
            <p className="text-xs text-slate-500">{profile.cycle}</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
            MC
          </div>
        </div>
      </div>
    </header>
  );
}
