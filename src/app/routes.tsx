import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { LoginPage } from "../features/auth/LoginPage";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { DraftsPage } from "../features/drafts/DraftsPage";
import { ExperienceDetailPage } from "../features/experiences/ExperienceDetailPage";
import { ExperiencesPage } from "../features/experiences/ExperiencesPage";
import { LandingPage } from "../features/landing/LandingPage";
import { PlanPage } from "../features/plan/PlanPage";
import { PricingPage } from "../features/pricing/PricingPage";
import { ReadinessPage } from "../features/readiness/ReadinessPage";
import { SettingsPage } from "../features/settings/SettingsPage";
import { StoryBankPage } from "../features/storyBank/StoryBankPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/pricing", element: <PricingPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    element: <AppShell />,
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/experiences", element: <ExperiencesPage /> },
      { path: "/experiences/:id", element: <ExperienceDetailPage /> },
      { path: "/drafts", element: <DraftsPage /> },
      { path: "/story-bank", element: <StoryBankPage /> },
      { path: "/readiness", element: <ReadinessPage /> },
      { path: "/plan", element: <PlanPage /> },
      { path: "/settings", element: <SettingsPage /> }
    ]
  },
  { path: "*", element: <Navigate to="/" replace /> }
]);
