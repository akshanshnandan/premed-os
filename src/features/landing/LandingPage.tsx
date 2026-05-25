import { ArrowRight, CheckCircle2, Menu, ShieldCheck, X } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ScoreWithDisclaimer } from "../../components/ui/ScoreWithDisclaimer";
import { experiences, profiles, readinessCategories } from "../../data/mockData";

export function LandingPage() {
  const profile = profiles[0];
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const startReadinessHref = "/onboarding";
  const demoHref = "/dashboard";

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [mobileMenuOpen]);

  function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoinedWaitlist(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <header ref={headerRef} className="relative z-30 border-b border-slate-200">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Premed OS
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
            <Link to="/login" className="hover:text-slate-950">Log in</Link>
            <Link to={demoHref} className="rounded-md bg-slate-950 px-4 py-2 text-white hover:bg-slate-800">
              View demo
            </Link>
          </nav>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close site navigation" : "Open site navigation"}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="rounded-md border border-slate-200 p-2 text-slate-700 sm:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {mobileMenuOpen ? (
          <div className="absolute left-0 right-0 top-full z-30 border-b border-slate-200 bg-white px-4 py-4 shadow-soft sm:hidden">
            <nav className="grid gap-2 text-sm font-medium">
              <Link onClick={() => setMobileMenuOpen(false)} to="/login" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50">
                Log in
              </Link>
              <Link onClick={() => setMobileMenuOpen(false)} to={startReadinessHref} className="rounded-md bg-brand-600 px-3 py-2 text-center font-semibold text-white">
                Start readiness check
              </Link>
              <Link onClick={() => setMobileMenuOpen(false)} to={demoHref} className="rounded-md bg-slate-950 px-3 py-2 text-center font-semibold text-white">
                View demo
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
      <main>
        <section className="border-b border-slate-200 bg-[#faf9f6]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Premed application command center</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Your med school application should not start in May.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Premed OS helps you track clinical, service, research, shadowing, and leadership experiences as they happen, then turn that evidence into AMCAS-ready drafts, interview stories, and a clear plan for what to fix before applying.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
                Because by application season, the hardest part should not be remembering what mattered, who supervised you, or whether your file has real depth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={startReadinessHref} className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
                  Start free readiness check <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to={demoHref} className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                  View demo
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Planning preview</p>
                  <p className="text-sm font-semibold text-slate-950">{profile.name}</p>
                  <p className="text-xs text-slate-500">{profile.headline}</p>
                </div>
                <ScoreWithDisclaimer value={profile.readinessScore} size={96} />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Experiences", experiences.length],
                  ["Drafts", profile.stats.drafts],
                  ["Hours", profile.stats.totalHours]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-semibold text-slate-950">{value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {readinessCategories.slice(0, 4).map((category) => (
                  <div key={category.key} className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                    <span className="text-sm font-medium text-slate-700">{category.label}</span>
                    <span className="text-sm font-semibold text-slate-950">{category.score}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">Next best move</p>
                <p className="mt-1 text-sm leading-6 text-emerald-800">Strengthen shadowing breadth before draft season, while keeping service reflections current.</p>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Preview scores are for planning and product demonstration only. They do not predict admissions outcomes.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-4">
            {[
              ["Track your experiences", "Log clinical, service, research, shadowing, work, leadership, and reflection while details are fresh."],
              ["Turn them into AMCAS-ready drafts", "Shape short descriptions around role, evidence, impact, and honest reflection."],
              ["Build your story bank", "Save STAR stories for secondaries and interviews before prompts arrive."],
              ["See what to fix next", "Find gaps early enough to take real action, not just worry about them."]
            ].map(([title, text], index) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 text-sm font-semibold text-brand-700">
                  {index + 1}
                </div>
                <h2 className="mt-4 font-semibold text-slate-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Capture the story while it is still fresh", "Log hours, contacts, reflections, impact, and competencies before the semester blurs together."],
            ["Turn activity into evidence", "Move from vague involvement to concrete drafts that show what you did, what changed, and what you learned."],
            ["Know what to fix early", "See gaps by category and work a monthly plan before application season compresses every decision."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <h2 className="mt-4 font-semibold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </section>
        <section className="border-y border-slate-200 bg-[#faf9f6]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Early access</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Start building your application before application season starts.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Join the early-access list for students who want a calmer way to organize experiences, drafts, and readiness before the cycle gets loud.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              {joinedWaitlist ? (
                <div className="flex min-h-72 flex-col justify-center rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-700" />
                  <h3 className="mt-4 text-lg font-semibold text-emerald-950">You're on the early-access list.</h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-emerald-800">
                    Thanks for raising your hand. When Premed OS opens to more students, this is the kind of profile we are building for.
                  </p>
                  <button
                    type="button"
                    onClick={() => setJoinedWaitlist(false)}
                    className="mx-auto mt-5 rounded-md border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-800"
                  >
                    Add another student
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                      Name
                      <input required placeholder="Maya Chen" className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                    </label>
                    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                      Email
                      <input required type="email" placeholder="maya@example.com" className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                    </label>
                    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                      School year
                      <select required defaultValue="" className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100">
                        <option value="" disabled>Select year</option>
                        <option>First-year</option>
                        <option>Sophomore</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Gap year</option>
                      </select>
                    </label>
                    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                      Target application cycle
                      <select required defaultValue="" className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100">
                        <option value="" disabled>Select cycle</option>
                        <option>2027 cycle</option>
                        <option>2028 cycle</option>
                        <option>2029 cycle</option>
                        <option>Still deciding</option>
                      </select>
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-slate-500">Early access only. We use these details to understand your timeline and invite the right students first.</p>
                  <button type="submit" className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
                    Join early access
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Trust and ethics are part of the product.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">Premed planning is personal, but it should stay accurate, private, and grounded.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Premed OS is a planning tool, not an admissions guarantee.",
                  "It does not predict acceptance odds.",
                  "Students remain responsible for final wording.",
                  "Users should not enter patient-identifying information."
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-700 bg-slate-900 p-4">
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-emerald-400" />
              <div>
                <p className="font-semibold">Built for serious premed planning</p>
                <p className="mt-1 text-sm text-slate-300">No PHI, no admissions guarantees, no pressure theater. Just a focused workspace for becoming a clearer, better-prepared applicant.</p>
              </div>
            </div>
            <Link to={demoHref} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950">
              View demo
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm text-slate-600">© Premed OS — early access</p>
          <nav className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
            <Link to="/pricing" className="hover:text-slate-950">
              Pricing
            </Link>
            <Link to="/login" className="hover:text-slate-950">
              Log in
            </Link>
            <Link to={startReadinessHref} className="hover:text-slate-950">
              Start free
            </Link>
            <Link to={demoHref} className="hover:text-slate-950">
              View demo
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
