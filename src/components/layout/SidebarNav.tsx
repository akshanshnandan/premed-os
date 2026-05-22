import {
  BarChart3,
  BookOpenText,
  ClipboardCheck,
  Files,
  Home,
  ListChecks,
  PenLine,
  Settings,
  Sparkles
} from "lucide-react";
import { NavLink } from "react-router-dom";
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

export function SidebarNav() {
  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="font-semibold tracking-tight text-slate-950">Premed OS</p>
          <p className="text-xs text-slate-500">Applicant readiness</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
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
      </nav>
      <div className="m-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
        <p className="text-sm font-semibold text-emerald-950">Steady progress beats last-minute panic</p>
        <p className="mt-1 text-xs leading-5 text-emerald-800">Use scores to prioritize your next step, not to predict your future.</p>
      </div>
    </aside>
  );
}
