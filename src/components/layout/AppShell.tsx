import { Outlet } from "react-router-dom";
import { SidebarNav } from "./SidebarNav";
import { Topbar } from "./Topbar";

export function AppShell() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="flex min-h-screen">
        <SidebarNav />
        <div className="min-w-0 flex-1">
          <Topbar />
          <main className="px-4 py-8 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
