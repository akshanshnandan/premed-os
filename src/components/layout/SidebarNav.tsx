import {
  ArrowLeft,
  BarChart3,
  BookOpenText,
  CreditCard,
  Files,
  Home,
  ListChecks,
  PenLine,
  Settings,
  Sparkles
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

const items = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/experiences", label: "Experiences", icon: Files },
  { to: "/drafts", label: "Drafts", icon: PenLine },
  { to: "/story-bank", label: "Story bank", icon: BookOpenText },
  { to: "/readiness", label: "Readiness", icon: BarChart3 },
  { to: "/plan", label: "Plan", icon: ListChecks },
  { to: "/settings", label: "Settings", icon: Settings }
];

type SidebarNavProps = {
  mobile?: boolean;
  onClose?: () => void;
};

export function SidebarNav({ mobile = false, onClose }: SidebarNavProps) {
  return (
    <aside className={cn("w-72 flex-col border-r border-slate-200 bg-white", mobile ? "flex h-full" : "hidden lg:flex")}>
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
        <Link to="/" onClick={onClose} className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-slate-950 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold tracking-tight text-slate-950">Premed OS</p>
            <p className="text-xs text-slate-500">Planning workspace</p>
          </div>
        </Link>
        {mobile ? (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="rounded-md border border-slate-200 p-2 text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <NavLink
          to="/"
          onClick={onClose}
          className="mb-2 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to landing
        </NavLink>
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950",
                isActive && "bg-brand-50 text-brand-700",
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/pricing"
          onClick={onClose}
          className="mt-2 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
        >
          <CreditCard className="h-4 w-4" />
          Pricing
        </NavLink>
      </nav>
      <div className="m-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-emerald-950">Steady progress beats last-minute panic</p>
        <p className="mt-1 text-xs leading-5 text-emerald-800">Use planning scores to prioritize your next step, not to predict your future.</p>
      </div>
    </aside>
  );
}
