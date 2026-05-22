import { useState } from "react";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { StoryCard } from "../../components/ui/StoryCard";
import { stories } from "../../data/mockData";

const themes = ["all", "empathy", "resilience", "leadership", "service", "curiosity", "ethical judgment", "teamwork"];

export function StoryBankPage() {
  const [theme, setTheme] = useState("all");
  const filtered = theme === "all" ? stories : stories.filter((story) => story.theme === theme);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Story bank"
        title="Interview and secondary stories"
        description="When a prompt asks about empathy, resilience, leadership, or a mistake, you should not have to search your memory from scratch."
        action={<button className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white">Add story</button>}
      />
      <div className="flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-sm scrollbar-thin">
        {themes.map((item) => (
          <button
            key={item}
            onClick={() => setTheme(item)}
            className={theme === item ? "rounded-md bg-slate-950 px-3 py-2 text-sm font-medium capitalize text-white" : "rounded-md px-3 py-2 text-sm font-medium capitalize text-slate-600 hover:bg-slate-50"}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {filtered.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
