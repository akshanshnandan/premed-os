import { useNavigate } from "react-router-dom";
import { ExperienceForm } from "../../components/ui/ExperienceForm";
import { RiskBanner } from "../../components/ui/RiskBanner";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { createEmptyExperience, useAppData } from "../../context/AppDataContext";

export function ExperienceNewPage() {
  const { upsertExperience } = useAppData();
  const navigate = useNavigate();
  const experience = createEmptyExperience();

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Experience tracker"
        title="Add experience"
        description="Capture details while they are still fresh. Edits save to this browser only."
      />
      <RiskBanner message="Do not include patient names, birthdates, medical record numbers, or any information that could identify a patient." />
      <ExperienceForm
        experience={experience}
        saveLabel="Add experience"
        onSave={(saved) => {
          upsertExperience(saved);
          navigate(`/experiences/${saved.id}`);
        }}
      />
    </div>
  );
}
