import { Bell, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { profiles } from "../../data/mockData";

export function Topbar() {
  const profile = profiles[0];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button className="rounded-md border border-slate-200 p-2 text-slate-600">
            <Menu className="h-4 w-4" />
          </button>
          <Link to="/dashboard" className="font-semibold text-slate-950">
            Premed OS
          </Link>
        </div>
        <div className="hidden w-full max-w-md items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 lg:flex">
          <Search className="h-4 w-4" />
          Search experiences, stories, drafts
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button className="rounded-md border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
            <Bell className="h-4 w-4" />
          </button>
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
