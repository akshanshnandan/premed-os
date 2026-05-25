import { AppDataProvider } from "../../context/AppDataContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FeedbackLink } from "../ui/FeedbackLink";
import { SidebarNav } from "./SidebarNav";
import { Topbar } from "./Topbar";

function EarlyAccessBanner() {
  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-sm text-amber-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        <p>
          <strong>Early access.</strong> Example profile—your edits save in this browser only. Planning scores are not admissions predictions.
        </p>
        <FeedbackLink />
      </div>
    </div>
  );
}

export function AppShell() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <AppDataProvider>
      <div className="min-h-screen bg-[#faf9f6]">
        <EarlyAccessBanner />
        <div className="flex min-h-[calc(100vh-44px)]">
          <SidebarNav />
          {mobileNavOpen ? (
            <div className="fixed inset-0 z-40 lg:hidden">
              <button
                type="button"
                aria-label="Close navigation"
                className="absolute inset-0 h-full w-full bg-slate-950/30"
                onClick={() => setMobileNavOpen(false)}
              />
              <div className="relative h-full w-80 max-w-[86vw] bg-white shadow-soft">
                <SidebarNav mobile onClose={() => setMobileNavOpen(false)} />
              </div>
            </div>
          ) : null}
          <div className="min-w-0 flex-1">
            <Topbar onMenuClick={() => setMobileNavOpen(true)} />
            <main className="px-4 py-8 sm:px-6 lg:px-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </AppDataProvider>
  );
}
