import { Link, useParams } from "react-router-dom";
import { ExperienceForm } from "../../components/ui/ExperienceForm";
import { RiskBanner } from "../../components/ui/RiskBanner";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { useAppData } from "../../context/AppDataContext";

export function ExperienceDetailPage() {
  const { id } = useParams();
  const { getExperience, upsertExperience } = useAppData();
  const experience = id ? getExperience(id) : undefined;

  if (!experience) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-600">Experience not found.</p>
        <Link to="/experiences" className="text-sm font-semibold text-brand-700">
          Back to experiences
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Experience detail"
        title={experience.title}
        description={`${experience.organization} / ${experience.location}`}
        action={
          <div className="flex flex-wrap gap-2">
            <Link
              to={`/drafts?experience=${experience.id}`}
              className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Open in draft editor
            </Link>
            <Link to="/experiences" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Back to list
            </Link>
          </div>
        }
      />
      <RiskBanner message="Do not include patient names, birthdates, medical record numbers, or any information that could identify a patient." />
      <ExperienceForm experience={experience} onSave={upsertExperience} />
    </div>
  );
}
