import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { draftVersions, experiences as defaultExperiences, type Experience } from "../data/mockData";
import { competencies, experienceTypes } from "../lib/constants";
import {
  loadStoredDrafts,
  loadStoredExperiences,
  saveStoredDrafts,
  saveStoredExperiences,
  type ExperienceDraft,
} from "../lib/storage";

type Competency = (typeof competencies)[number];

function applyExperiencesUpdate(
  prev: Experience[],
  updater: Experience[] | ((current: Experience[]) => Experience[]),
) {
  return typeof updater === "function" ? updater(prev) : updater;
}

type AppDataContextValue = {
  experiences: Experience[];
  upsertExperience: (experience: Experience) => void;
  getExperience: (id: string) => Experience | undefined;
  getDraft: (experienceId: string) => ExperienceDraft;
  updateDraft: (experienceId: string, patch: Partial<ExperienceDraft>) => void;
};

const AppDataContext = createContext<AppDataContextValue | null>(null);

function defaultDraftFor(experience: Experience): ExperienceDraft {
  const mock = draftVersions.find((d) => d.experienceId === experience.id);
  return {
    activityText: mock?.text ?? experience.impact ?? "",
    meaningfulText: "",
    isMeaningful: false,
  };
}

function mergeDrafts(
  experiences: Experience[],
  stored: Record<string, ExperienceDraft>,
): Record<string, ExperienceDraft> {
  const merged = { ...stored };
  for (const exp of experiences) {
    if (!merged[exp.id]) {
      merged[exp.id] = defaultDraftFor(exp);
    }
  }
  return merged;
}

export function createEmptyExperience(): Experience {
  return {
    id: `exp-${Date.now()}`,
    title: "",
    type: experienceTypes[0],
    organization: "",
    dateRange: "",
    hours: 0,
    location: "",
    contact: "",
    reflection: "",
    impact: "",
    lessons: "",
    competencies: [] as Competency[],
    draftStatus: "Not started",
  };
}

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [experiences, setExperiences] = useState<Experience[]>(
    () => loadStoredExperiences() ?? [...defaultExperiences],
  );
  const [drafts, setDrafts] = useState<Record<string, ExperienceDraft>>(() => {
    const stored = loadStoredDrafts();
    const initial = loadStoredExperiences() ?? defaultExperiences;
    return mergeDrafts(initial, stored);
  });

  const persistExperiences = useCallback((updater: Experience[] | ((current: Experience[]) => Experience[])) => {
    setExperiences((prev) => {
      const next = applyExperiencesUpdate(prev, updater);
      saveStoredExperiences(next);
      return next;
    });
  }, []);

  const persistDrafts = useCallback(
    (updater: Record<string, ExperienceDraft> | ((current: Record<string, ExperienceDraft>) => Record<string, ExperienceDraft>)) => {
      setDrafts((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater;
        saveStoredDrafts(next);
        return next;
      });
    },
    [],
  );

  const upsertExperience = useCallback(
    (experience: Experience) => {
      persistExperiences((prev) => {
        const index = prev.findIndex((e) => e.id === experience.id);
        if (index === -1) return [...prev, experience];
        const next = [...prev];
        next[index] = experience;
        return next;
      });
      setDrafts((prev) => {
        if (prev[experience.id]) return prev;
        const next = { ...prev, [experience.id]: defaultDraftFor(experience) };
        saveStoredDrafts(next);
        return next;
      });
    },
    [persistExperiences],
  );

  const getExperience = useCallback(
    (id: string) => experiences.find((e) => e.id === id),
    [experiences],
  );

  const getDraft = useCallback(
    (experienceId: string) => {
      const exp = experiences.find((e) => e.id === experienceId);
      if (!drafts[experienceId] && exp) {
        return defaultDraftFor(exp);
      }
      return drafts[experienceId] ?? { activityText: "", meaningfulText: "", isMeaningful: false };
    },
    [drafts, experiences],
  );

  const updateDraft = useCallback(
    (experienceId: string, patch: Partial<ExperienceDraft>) => {
      persistDrafts((prev) => {
        const exp = experiences.find((e) => e.id === experienceId);
        const base = prev[experienceId] ?? (exp ? defaultDraftFor(exp) : { activityText: "", meaningfulText: "", isMeaningful: false });
        return { ...prev, [experienceId]: { ...base, ...patch } };
      });
    },
    [experiences, persistDrafts],
  );

  const value = useMemo(
    () => ({ experiences, upsertExperience, getExperience, getDraft, updateDraft }),
    [experiences, upsertExperience, getExperience, getDraft, updateDraft],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) {
    throw new Error("useAppData must be used within AppDataProvider");
  }
  return ctx;
}
