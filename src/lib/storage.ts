import type { Experience } from "../data/mockData";

const EXPERIENCES_KEY = "premed-os-experiences";
const DRAFTS_KEY = "premed-os-drafts";

export type ExperienceDraft = {
  activityText: string;
  meaningfulText: string;
  isMeaningful: boolean;
};

function isBrowserStorageAvailable() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return false;
    const probe = "__premed_os_storage_probe__";
    window.localStorage.setItem(probe, "1");
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

function isValidExperience(value: unknown): value is Experience {
  if (!value || typeof value !== "object") return false;
  const record = value as Experience;
  return typeof record.id === "string" && typeof record.title === "string" && typeof record.type === "string";
}

function isValidDraft(value: unknown): value is ExperienceDraft {
  if (!value || typeof value !== "object") return false;
  const record = value as ExperienceDraft;
  return (
    typeof record.activityText === "string" &&
    typeof record.meaningfulText === "string" &&
    typeof record.isMeaningful === "boolean"
  );
}

export function loadStoredExperiences(): Experience[] | null {
  if (!isBrowserStorageAvailable()) return null;
  try {
    const raw = localStorage.getItem(EXPERIENCES_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return null;
    const valid = parsed.filter(isValidExperience);
    return valid.length ? valid : null;
  } catch {
    return null;
  }
}

export function saveStoredExperiences(experiences: Experience[]) {
  if (!isBrowserStorageAvailable()) return;
  try {
    localStorage.setItem(EXPERIENCES_KEY, JSON.stringify(experiences));
  } catch {
    // Private browsing, quota exceeded, or blocked storage — app still works with in-memory state.
  }
}

export function loadStoredDrafts(): Record<string, ExperienceDraft> {
  if (!isBrowserStorageAvailable()) return {};
  try {
    const raw = localStorage.getItem(DRAFTS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const entries = Object.entries(parsed as Record<string, unknown>).filter(([, value]) => isValidDraft(value));
    return Object.fromEntries(entries) as Record<string, ExperienceDraft>;
  } catch {
    return {};
  }
}

export function saveStoredDrafts(drafts: Record<string, ExperienceDraft>) {
  if (!isBrowserStorageAvailable()) return;
  try {
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
  } catch {
    // Ignore persistence failures; session state remains usable.
  }
}
