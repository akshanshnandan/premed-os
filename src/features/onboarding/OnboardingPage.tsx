import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const steps = [
  {
    title: "When are you applying?",
    description: "Premed OS works best when you start before application season compresses every decision.",
    field: "cycle",
    options: ["2027 cycle", "2028 cycle", "2029 cycle", "Still deciding"],
  },
  {
    title: "What feels hardest right now?",
    description: "This helps us show the right starting point in the workspace.",
    field: "pain",
    options: [
      "Remembering experience details",
      "Writing AMCAS descriptions",
      "Interview and secondary stories",
      "Knowing what gaps to fix",
    ],
  },
  {
    title: "How do you track experiences today?",
    description: "No wrong answer — most students are patching together notes and memory.",
    field: "tracking",
    options: ["Spreadsheet or notes app", "Nothing consistent yet", "Advisor docs only", "Mix of everything"],
  },
  {
    title: "What would make this worth using?",
    description: "Your answer shapes what we build next.",
    field: "goal",
    options: [
      "One place for hours, contacts, and reflections",
      "Drafts tied to real experiences",
      "A calm plan for what to fix next",
      "All of the above",
    ],
  },
];

export function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const current = steps[step];
  const selected = answers[current.field];

  function finish() {
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="font-semibold text-slate-950">
            Premed OS
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-950">
            Skip to workspace
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Step {step + 1} of {steps.length}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{current.title}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">{current.description}</p>
        <div className="mt-8 grid gap-2">
          {current.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setAnswers((prev) => ({ ...prev, [current.field]: option }))}
              className={
                selected === option
                  ? "rounded-lg border border-brand-300 bg-brand-50 px-4 py-3 text-left text-sm font-medium text-brand-900"
                  : "rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              }
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40"
          >
            Back
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              disabled={!selected}
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-40"
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={!selected}
              onClick={finish}
              className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-40"
            >
              Open workspace <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
        <p className="mt-8 text-xs leading-5 text-slate-500">
          This short questionnaire is for early feedback only. Answers stay in this session and do not change planning scores.
        </p>
      </main>
    </div>
  );
}
