import { Link } from "react-router-dom";
import { FeedbackLink } from "../../components/ui/FeedbackLink";
import { PricingCard } from "../../components/ui/PricingCard";
import { SectionHeader } from "../../components/ui/SectionHeader";

export function PricingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-semibold text-slate-950">
            Premed OS
          </Link>
          <Link to="/dashboard" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
            View demo
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Start free while we validate with real premed students"
          description="Premed OS is in early access. Use the free workspace now; paid tiers will open after we learn what students actually need."
        />
        <div className="mt-10 max-w-xl">
          <PricingCard
            name="Free"
            price="$0"
            detail="Useful for students who want to stop losing details before application season."
            features={[
              "Track experiences while details are fresh",
              "Planning preview and full workspace",
              "Starter AMCAS draft workspace",
              "Competency tags for early planning",
            ]}
            featured
            cta="Start free"
            ctaHref="/onboarding"
          />
        </div>
        <p className="mt-10 text-sm font-medium text-slate-500">Planned tiers (not available yet)</p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          <PricingCard
            name="Premium"
            price="$15/mo or $99/cycle"
            detail="The serious planning tier for students preparing primary essays, activity descriptions, and interviews."
            features={[
              "Unlimited experiences",
              "Full AMCAS draft builder",
              "Interview and secondary story bank",
              "Ongoing planning reviews",
              "Monthly remediation plan",
            ]}
            cta="Plan my application"
            comingSoon
            comingSoonLabel="Coming soon"
          />
          <PricingCard
            name="Family"
            price="$149/cycle"
            detail="For families who want to support the process without taking over the student's voice or decisions."
            features={[
              "Everything in Premium",
              "Parent view focused on milestones",
              "Progress sharing without draft editing pressure",
              "Cycle summaries for calmer check-ins",
            ]}
            cta="Support the cycle"
            comingSoon
            comingSoonLabel="Coming later"
          />
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© Premed OS — early access</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="font-medium hover:text-slate-950">
              Home
            </Link>
            <Link to="/onboarding" className="font-medium hover:text-slate-950">
              Start free
            </Link>
            <Link to="/dashboard" className="font-medium hover:text-slate-950">
              View demo
            </Link>
            <FeedbackLink variant="inline" className="text-slate-600 hover:text-slate-950" />
          </div>
        </div>
      </footer>
    </div>
  );
}
