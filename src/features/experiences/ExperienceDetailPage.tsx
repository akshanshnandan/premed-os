import { Link, useParams } from "react-router-dom";
import { ExperienceForm } from "../../components/ui/ExperienceForm";
import { RiskBanner } from "../../components/ui/RiskBanner";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { experiences } from "../../data/mockData";

export function ExperienceDetailPage() {
  const { id } = useParams();
  const experience = experiences.find((item) => item.id === id) ?? experiences[0];

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Experience detail"
        title={experience.title}
        description={`${experience.organization} / ${experience.location}`}
        action={<Link to="/experiences" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Back to list</Link>}
      />
      <RiskBanner message="Do not include patient names, birthdates, medical record numbers, or any information that could identify a patient." />
      <ExperienceForm experience={experience} />
    </div>
  );
}
