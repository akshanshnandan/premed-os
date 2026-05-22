import { Link } from "react-router-dom";
import { PricingCard } from "../../components/ui/PricingCard";
import { SectionHeader } from "../../components/ui/SectionHeader";

export function PricingPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-semibold text-slate-950">Premed OS</Link>
          <Link to="/dashboard" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white">View demo</Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Start early. Upgrade when the application starts getting real."
          description="Premed OS is built for the long arc: tracking experiences during college, then turning them into a clearer application when the cycle approaches."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <PricingCard
            name="Free"
            price="$0"
            detail="Useful for students who want to stop losing details before application season."
            features={["Track up to 6 key experiences", "One readiness check", "Starter draft workspace", "Competency tags for early planning"]}
            cta="Start free"
          />
          <PricingCard
            name="Premium"
            price="$15/mo or $99/cycle"
            detail="The serious planning tier for students preparing primary essays, activity descriptions, and interviews."
            features={["Unlimited experiences", "Full AMCAS draft builder", "Interview and secondary story bank", "Ongoing readiness reviews", "Monthly remediation plan"]}
            featured
            cta="Plan my application"
          />
          <PricingCard
            name="Family"
            price="$149/cycle"
            detail="For families who want to support the process without taking over the student's voice or decisions."
            features={["Everything in Premium", "Parent view focused on milestones", "Progress sharing without draft editing pressure", "Cycle summaries for calmer check-ins"]}
            cta="Support the cycle"
          />
        </div>
      </main>
    </div>
  );
}
