import type { Experience } from "../data/mockData";

const EXPERIENCES_KEY = "premed-os-experiences";
const DRAFTS_KEY = "premed-os-drafts";

export type ExperienceDraft = {
  activityText: string;
  meaningfulText: string;
  isMeaningful: boolean;
};

export function loadStoredExperiences(): Experience[] | null {
  try {
    const raw = localStorage.getItem(EXPERIENCES_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Experience[];
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveStoredExperiences(experiences: Experience[]) {
  localStorage.setItem(EXPERIENCES_KEY, JSON.stringify(experiences));
}

export function loadStoredDrafts(): Record<string, ExperienceDraft> {
  try {
    const raw = localStorage.getItem(DRAFTS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, ExperienceDraft>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveStoredDrafts(drafts: Record<string, ExperienceDraft>) {
  localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
}
