import { ScoreWithDisclaimer } from "../../components/ui/ScoreWithDisclaimer";
import { ReadinessScoreCard } from "../../components/ui/ReadinessScoreCard";
import { RiskBanner } from "../../components/ui/RiskBanner";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { profiles, readinessCategories } from "../../data/mockData";

export function ReadinessPage() {
  const profile = profiles[0];

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Planning report"
        title="Know where your application is strong, and where it still needs care"
        description="This preview shows how Premed OS can organize evidence, gaps, and next actions. Scores measure planning completeness—not admissions chances."
      />
      <RiskBanner title="Planning tool, not a prediction" message="Premed OS does not estimate admissions odds or guarantee outcomes. Use this report to make better decisions about your time, evidence, writing, and school list." />
      <section className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
          <ScoreWithDisclaimer value={profile.readinessScore} size={150} />
          <h2 className="mt-5 text-lg font-semibold text-slate-950">{profile.headline}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">This sample profile has a strong service foundation and meaningful clinical exposure. The next layer is practical: broaden shadowing, clarify school list fit, and turn the best experiences into sharper writing.</p>
          <div className="mt-5 rounded-lg border border-slate-200 bg-[#fffdf8] p-4 text-left">
            <p className="text-sm font-semibold text-slate-950">How to read this</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">A lower score is not a verdict. It is a planning signal that an area needs more evidence, clearer reflection, or more deliberate preparation before applications open.</p>
          </div>
        </div>
        <div className="grid gap-4">
          {readinessCategories.map((category) => (
            <ReadinessScoreCard key={category.key} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
