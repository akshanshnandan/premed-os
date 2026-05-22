import { DraftEditor } from "../../components/ui/DraftEditor";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { experiences } from "../../data/mockData";

export function DraftsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="AMCAS drafts"
        title="Turn real experiences into AMCAS-ready writing"
        description="Activity descriptions are short. Use this workspace to keep the draft grounded in concrete evidence, personal reflection, and impact without losing your own voice."
      />
      <DraftEditor experiences={experiences} />
    </div>
  );
}
