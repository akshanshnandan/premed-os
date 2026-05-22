import { competencies, experienceTypes } from "../lib/constants";

export type ExperienceType = (typeof experienceTypes)[number];
export type Competency = (typeof competencies)[number];

export type Experience = {
  id: string;
  title: string;
  type: ExperienceType;
  organization: string;
  dateRange: string;
  hours: number;
  location: string;
  contact: string;
  reflection: string;
  impact: string;
  lessons: string;
  competencies: Competency[];
  draftStatus: "Not started" | "Outline" | "Drafted" | "Reviewed";
};

export type ReadinessCategory = {
  key: string;
  label: string;
  score: number;
  rationale: string;
  evidence: string[];
  nextActions: string[];
};

export const profiles = [
  {
    id: "strong",
    name: "Maya Chen",
    cycle: "2027 application cycle",
    headline: "Strong service-centered applicant with growing research output",
    readinessScore: 82,
    stats: { gpa: "3.78", mcat: "513", totalHours: 1458, drafts: 11, monthsUntilCycle: 8 }
  },
  {
    id: "developing",
    name: "Jordan Patel",
    cycle: "2028 application cycle",
    headline: "Developing profile with clinical depth still in progress",
    readinessScore: 61,
    stats: { gpa: "3.52", mcat: "Not taken", totalHours: 426, drafts: 3, monthsUntilCycle: 18 }
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-001",
    title: "Emergency Department Volunteer",
    type: "Clinical volunteering",
    organization: "Riverside Community Hospital",
    dateRange: "Sep 2024 - Present",
    hours: 186,
    location: "Indianapolis, IN",
    contact: "Volunteer Services Coordinator",
    reflection: "I learned how small acts of orientation and calm communication can change a stressful visit for families.",
    impact: "Supported patient transport, stocked rooms, and helped visitors navigate a high-volume emergency department.",
    lessons: "Clinical care depends on trust, role clarity, and respect for every team member.",
    competencies: ["Empathy", "Teamwork", "Reliability", "Oral communication"],
    draftStatus: "Reviewed"
  },
  {
    id: "exp-002",
    title: "Hospice Companionship Volunteer",
    type: "Clinical volunteering",
    organization: "Harbor Light Hospice",
    dateRange: "Jan 2025 - Present",
    hours: 74,
    location: "Carmel, IN",
    contact: "Hospice Volunteer Manager",
    reflection: "Sitting quietly with families taught me that presence can be a form of service.",
    impact: "Provided weekly companionship visits, caregiver respite, and nonmedical support.",
    lessons: "Good care often begins with listening before trying to solve.",
    competencies: ["Empathy", "Service orientation", "Cultural competence"],
    draftStatus: "Drafted"
  },
  {
    id: "exp-003",
    title: "Primary Care Shadowing",
    type: "Shadowing",
    organization: "North Meridian Family Medicine",
    dateRange: "Jun 2025 - Aug 2025",
    hours: 42,
    location: "Indianapolis, IN",
    contact: "Family Medicine Physician",
    reflection: "Longitudinal care showed me how prevention, context, and continuity shape medical decisions.",
    impact: "Observed wellness visits, chronic disease follow-ups, and care coordination huddles.",
    lessons: "A physician's questions can reveal barriers that lab values alone cannot.",
    competencies: ["Critical thinking", "Oral communication", "Empathy"],
    draftStatus: "Outline"
  },
  {
    id: "exp-004",
    title: "Cardiology Shadowing",
    type: "Shadowing",
    organization: "HeartCare Associates",
    dateRange: "Mar 2025",
    hours: 18,
    location: "Indianapolis, IN",
    contact: "Cardiologist",
    reflection: "I saw how imaging, patient goals, and risk conversations meet in specialty care.",
    impact: "Observed clinic visits and echocardiography review sessions.",
    lessons: "Specialists translate complex data into decisions patients can understand.",
    competencies: ["Critical thinking", "Scientific inquiry"],
    draftStatus: "Not started"
  },
  {
    id: "exp-005",
    title: "Neuroscience Lab Research Assistant",
    type: "Research",
    organization: "IU Cognitive Aging Lab",
    dateRange: "Aug 2024 - Present",
    hours: 310,
    location: "Bloomington, IN",
    contact: "Principal Investigator",
    reflection: "The slow pace of careful data validation changed how I think about evidence.",
    impact: "Cleaned behavioral datasets, ran literature reviews, and contributed to a poster in preparation.",
    lessons: "Scientific progress depends on disciplined uncertainty.",
    competencies: ["Scientific inquiry", "Critical thinking", "Reliability"],
    draftStatus: "Reviewed"
  },
  {
    id: "exp-006",
    title: "Food Pantry Shift Lead",
    type: "Nonclinical service",
    organization: "Hoosier Mutual Aid Pantry",
    dateRange: "Sep 2023 - Present",
    hours: 220,
    location: "Bloomington, IN",
    contact: "Pantry Director",
    reflection: "Service felt most meaningful when our team changed processes based on what clients told us.",
    impact: "Coordinated volunteers, redesigned intake flow, and reduced average wait times during busy shifts.",
    lessons: "Sustained service requires humility and operational follow-through.",
    competencies: ["Service orientation", "Leadership", "Cultural competence", "Teamwork"],
    draftStatus: "Reviewed"
  },
  {
    id: "exp-007",
    title: "Peer Chemistry Tutor",
    type: "Teaching",
    organization: "College Learning Center",
    dateRange: "Jan 2024 - May 2025",
    hours: 140,
    location: "Bloomington, IN",
    contact: "Learning Center Supervisor",
    reflection: "Tutoring helped me explain hard ideas without making students feel small.",
    impact: "Led weekly sessions for general chemistry and helped develop practice problem sets.",
    lessons: "Teaching is most effective when it starts with how a learner is already thinking.",
    competencies: ["Oral communication", "Social skills", "Empathy"],
    draftStatus: "Drafted"
  },
  {
    id: "exp-008",
    title: "Pre-Health Society President",
    type: "Leadership",
    organization: "Campus Pre-Health Society",
    dateRange: "May 2025 - Present",
    hours: 96,
    location: "Bloomington, IN",
    contact: "Faculty Advisor",
    reflection: "Leadership meant making the club useful for students who lacked family knowledge of medicine.",
    impact: "Built physician panels, application workshops, and a mentorship program for first-year students.",
    lessons: "Inclusive leadership turns access into concrete systems.",
    competencies: ["Leadership", "Service orientation", "Teamwork"],
    draftStatus: "Drafted"
  },
  {
    id: "exp-009",
    title: "Medical Assistant",
    type: "Paid employment",
    organization: "QuickCare Pediatrics",
    dateRange: "May 2024 - Aug 2024",
    hours: 260,
    location: "Fishers, IN",
    contact: "Clinic Manager",
    reflection: "Working in clinic operations gave me respect for the pace and precision of ambulatory care.",
    impact: "Roomed patients, documented vitals, prepared supplies, and supported care team workflow.",
    lessons: "Reliability is clinical professionalism before any title is attached.",
    competencies: ["Reliability", "Teamwork", "Oral communication"],
    draftStatus: "Reviewed"
  },
  {
    id: "exp-010",
    title: "Varsity Rowing",
    type: "Athletics",
    organization: "University Rowing Club",
    dateRange: "Aug 2022 - May 2024",
    hours: 360,
    location: "Bloomington, IN",
    contact: "Head Coach",
    reflection: "Training taught me to handle discomfort without dramatizing it.",
    impact: "Balanced early practices, travel, and academics while mentoring novice rowers.",
    lessons: "Resilience is built through repeatable habits, not one dramatic moment.",
    competencies: ["Resilience", "Teamwork", "Reliability"],
    draftStatus: "Outline"
  },
  {
    id: "exp-011",
    title: "Crisis Text Line Volunteer",
    type: "Nonclinical service",
    organization: "Crisis Text Line",
    dateRange: "Feb 2025 - Present",
    hours: 88,
    location: "Remote",
    contact: "Volunteer Coach",
    reflection: "The training made me more careful with language during moments of vulnerability.",
    impact: "Completed supervised shifts providing structured, nonjudgmental text-based support.",
    lessons: "Empathy requires boundaries, patience, and clear escalation protocols.",
    competencies: ["Empathy", "Ethical responsibility", "Oral communication"],
    draftStatus: "Drafted"
  },
  {
    id: "exp-012",
    title: "Public Health Data Internship",
    type: "Research",
    organization: "County Health Department",
    dateRange: "May 2025 - Jul 2025",
    hours: 150,
    location: "Indianapolis, IN",
    contact: "Epidemiology Supervisor",
    reflection: "Population health work showed me how data can point to preventable gaps in care.",
    impact: "Built dashboards summarizing immunization outreach and neighborhood access trends.",
    lessons: "Data should clarify where systems need to change, not just describe disparities.",
    competencies: ["Scientific inquiry", "Critical thinking", "Service orientation"],
    draftStatus: "Outline"
  },
  {
    id: "exp-013",
    title: "Surgical Shadowing",
    type: "Shadowing",
    organization: "St. Anne Medical Center",
    dateRange: "Dec 2024",
    hours: 16,
    location: "Indianapolis, IN",
    contact: "General Surgeon",
    reflection: "I observed how preparation and communication shape team performance in the OR.",
    impact: "Observed pre-op, laparoscopic procedures, and post-op rounding.",
    lessons: "Technical excellence depends on shared situational awareness.",
    competencies: ["Teamwork", "Critical thinking"],
    draftStatus: "Not started"
  },
  {
    id: "exp-014",
    title: "Anatomy Teaching Assistant",
    type: "Teaching",
    organization: "Biology Department",
    dateRange: "Aug 2025 - Dec 2025",
    hours: 72,
    location: "Bloomington, IN",
    contact: "Course Director",
    reflection: "Helping students in lab reinforced the value of careful observation.",
    impact: "Led review sessions, answered lab questions, and helped students prepare for practical exams.",
    lessons: "Confidence grows when learners can name what they are seeing.",
    competencies: ["Oral communication", "Scientific inquiry", "Leadership"],
    draftStatus: "Not started"
  },
  {
    id: "exp-015",
    title: "Campus EMS Observer",
    type: "Clinical volunteering",
    organization: "Campus Emergency Response Team",
    dateRange: "Oct 2024 - Apr 2025",
    hours: 54,
    location: "Bloomington, IN",
    contact: "EMS Captain",
    reflection: "I saw how calm logistics support urgent care even before a patient reaches a hospital.",
    impact: "Assisted with event coverage, equipment checks, and supervised response observation.",
    lessons: "Preparedness reduces panic for both responders and bystanders.",
    competencies: ["Reliability", "Teamwork", "Resilience"],
    draftStatus: "Outline"
  },
  {
    id: "exp-016",
    title: "Refugee Health Navigation Volunteer",
    type: "Nonclinical service",
    organization: "Neighborhood Welcome Center",
    dateRange: "Jan 2024 - Dec 2024",
    hours: 112,
    location: "Indianapolis, IN",
    contact: "Program Coordinator",
    reflection: "I learned to slow down and check assumptions when helping families navigate unfamiliar systems.",
    impact: "Helped clients schedule appointments, complete forms, and locate transportation resources.",
    lessons: "Access depends on language, trust, and practical support.",
    competencies: ["Cultural competence", "Service orientation", "Empathy"],
    draftStatus: "Reviewed"
  },
  {
    id: "exp-017",
    title: "Organic Chemistry Supplemental Instructor",
    type: "Teaching",
    organization: "Academic Support Programs",
    dateRange: "Aug 2024 - Dec 2024",
    hours: 64,
    location: "Bloomington, IN",
    contact: "SI Coordinator",
    reflection: "I became better at diagnosing confusion without giving away the answer too early.",
    impact: "Hosted problem-solving sessions for 25-40 students each week.",
    lessons: "The best support teaches students how to recover from mistakes.",
    competencies: ["Oral communication", "Critical thinking", "Social skills"],
    draftStatus: "Not started"
  },
  {
    id: "exp-018",
    title: "Mobile Clinic Intake Volunteer",
    type: "Clinical volunteering",
    organization: "Street Health Outreach",
    dateRange: "Jun 2025 - Present",
    hours: 68,
    location: "Indianapolis, IN",
    contact: "Outreach Nurse",
    reflection: "Mobile clinic work made the barriers to follow-up feel concrete and urgent.",
    impact: "Helped with intake flow, supply setup, and resource handouts during supervised outreach nights.",
    lessons: "Care plans only work when they fit a person's life outside the clinic.",
    competencies: ["Service orientation", "Cultural competence", "Empathy"],
    draftStatus: "Drafted"
  },
  {
    id: "exp-019",
    title: "Research Poster Presenter",
    type: "Research",
    organization: "Undergraduate Research Symposium",
    dateRange: "Apr 2026",
    hours: 24,
    location: "Bloomington, IN",
    contact: "Faculty Mentor",
    reflection: "Presenting forced me to explain uncertainty clearly instead of hiding behind jargon.",
    impact: "Prepared and presented a poster on cognitive task performance in older adults.",
    lessons: "Communication is part of scientific responsibility.",
    competencies: ["Scientific inquiry", "Oral communication", "Critical thinking"],
    draftStatus: "Drafted"
  },
  {
    id: "exp-020",
    title: "Student Conduct Board Member",
    type: "Leadership",
    organization: "Office of Student Life",
    dateRange: "Aug 2023 - May 2025",
    hours: 80,
    location: "Bloomington, IN",
    contact: "Conduct Board Advisor",
    reflection: "Hearing cases taught me to separate accountability from judgment.",
    impact: "Served on panels reviewing conduct cases and recommending educational outcomes.",
    lessons: "Ethical judgment requires fairness, context, and careful listening.",
    competencies: ["Ethical responsibility", "Leadership", "Oral communication"],
    draftStatus: "Outline"
  },
  {
    id: "exp-021",
    title: "Resident Assistant",
    type: "Leadership",
    organization: "University Housing",
    dateRange: "Aug 2024 - May 2025",
    hours: 210,
    location: "Bloomington, IN",
    contact: "Residence Life Supervisor",
    reflection: "RA work taught me to recognize concerns early and connect students with support.",
    impact: "Managed community programming, conflict mediation, duty rounds, and incident documentation.",
    lessons: "Trust grows through consistency before difficult conversations happen.",
    competencies: ["Leadership", "Social skills", "Reliability", "Resilience"],
    draftStatus: "Not started"
  },
  {
    id: "exp-022",
    title: "Weekend Barista",
    type: "Paid employment",
    organization: "Maple & Main Coffee",
    dateRange: "Sep 2022 - May 2024",
    hours: 310,
    location: "Bloomington, IN",
    contact: "Store Manager",
    reflection: "Customer service taught me to stay composed and kind during rushed moments.",
    impact: "Handled opening shifts, trained new staff, and managed high-volume service periods.",
    lessons: "Professionalism is visible in ordinary interactions.",
    competencies: ["Reliability", "Social skills", "Teamwork"],
    draftStatus: "Not started"
  }
];

export const draftVersions = [
  {
    id: "draft-1",
    experienceId: "exp-001",
    label: "Version 3",
    text: "In the emergency department, I helped transport patients, restock rooms, and guide visitors through a confusing environment. The work looked simple from the outside, but I learned that orientation and calm communication can reduce stress for families who feel powerless. I became more attentive to how every role supports clinical care."
  },
  {
    id: "draft-2",
    experienceId: "exp-006",
    label: "Most Meaningful draft",
    text: "As a food pantry shift lead, I coordinated volunteers and redesigned intake flow after clients described long waits as discouraging. The change reduced bottlenecks and made service feel more respectful. This experience shaped how I think about medicine: listening should lead to operational change, not just sympathy."
  },
  {
    id: "draft-3",
    experienceId: "exp-005",
    label: "Version 1",
    text: "In the Cognitive Aging Lab, I cleaned behavioral datasets and reviewed literature for a project on aging and task performance. Research taught me patience with uncertainty and respect for the quiet discipline behind trustworthy evidence."
  }
];

export const stories = [
  {
    id: "story-1",
    theme: "empathy",
    experienceId: "exp-002",
    title: "Learning presence in hospice",
    situation: "A caregiver seemed exhausted during a weekly visit.",
    task: "Provide companionship without overstepping my nonmedical role.",
    action: "I listened, asked what would make the hour useful, and kept the visit calm.",
    result: "The caregiver rested nearby while I sat with their family member.",
    lesson: "Empathy can mean being steady instead of trying to fix everything."
  },
  {
    id: "story-2",
    theme: "leadership",
    experienceId: "exp-006",
    title: "Redesigning pantry intake",
    situation: "Clients were waiting too long during peak pantry hours.",
    task: "Improve flow while preserving dignity and choice.",
    action: "I gathered volunteer feedback, watched bottlenecks, and tested a clearer station layout.",
    result: "Wait times decreased and volunteers had clearer roles.",
    lesson: "Leadership turns listening into a process people can trust."
  },
  {
    id: "story-3",
    theme: "ethical judgment",
    experienceId: "exp-020",
    title: "Balancing context and accountability",
    situation: "A student conduct case involved harm, stress, and conflicting accounts.",
    task: "Participate fairly in the panel recommendation.",
    action: "I focused on evidence, asked clarifying questions, and separated assumptions from facts.",
    result: "The panel recommended an educational outcome with clear accountability.",
    lesson: "Ethical decisions require humility about what you know."
  },
  {
    id: "story-4",
    theme: "resilience",
    experienceId: "exp-010",
    title: "Recovering after a poor race",
    situation: "Our boat underperformed after weeks of strong practices.",
    task: "Help reset morale before the next regatta.",
    action: "I named what went wrong, kept practices focused, and checked in with younger rowers.",
    result: "The team improved the next weekend and stayed cohesive.",
    lesson: "Resilience is a shared habit, not just personal toughness."
  },
  {
    id: "story-5",
    theme: "curiosity",
    experienceId: "exp-005",
    title: "Finding the error behind a trend",
    situation: "A dataset showed a surprising pattern that seemed publishable.",
    task: "Validate the result before presenting it.",
    action: "I traced the pipeline and found miscoded task labels.",
    result: "The corrected analysis prevented an inaccurate conclusion.",
    lesson: "Curiosity includes asking whether exciting results are true."
  },
  {
    id: "story-6",
    theme: "teamwork",
    experienceId: "exp-009",
    title: "Keeping clinic moving",
    situation: "A busy pediatric clinic fell behind during back-to-school physicals.",
    task: "Support flow without compromising patient attention.",
    action: "I prepared rooms, communicated delays, and asked nurses where I could be most useful.",
    result: "The team recovered schedule rhythm by late afternoon.",
    lesson: "Teamwork often means noticing friction before being asked."
  }
];

export const readinessCategories: ReadinessCategory[] = [
  {
    key: "academics",
    label: "Academics",
    score: 78,
    rationale: "Coursework and metrics are competitive, with room to protect the science trend.",
    evidence: ["3.78 cumulative GPA", "Strong upper-level biology performance", "MCAT 513 on file"],
    nextActions: ["Keep spring grades stable", "Build a concise academic context note"]
  },
  {
    key: "clinical",
    label: "Clinical exposure",
    score: 86,
    rationale: "Clinical exposure is sustained across hospital, hospice, pediatrics, and mobile outreach.",
    evidence: ["382 clinical hours logged", "Multiple care settings", "Strong reflection depth"],
    nextActions: ["Add 40 more direct clinical hours", "Clarify role boundaries in drafts"]
  },
  {
    key: "shadowing",
    label: "Shadowing",
    score: 68,
    rationale: "Shadowing exists but is weighted toward primary care and needs specialty breadth.",
    evidence: ["76 total shadowing hours", "Primary care, cardiology, surgery"],
    nextActions: ["Add one longitudinal specialty shadowing experience", "Document takeaways by specialty"]
  },
  {
    key: "service",
    label: "Service",
    score: 88,
    rationale: "Nonclinical service is sustained and mission-aligned with clear community impact.",
    evidence: ["Food pantry leadership", "Refugee navigation", "Crisis support"],
    nextActions: ["Select one service activity as Most Meaningful", "Quantify sustained impact carefully"]
  },
  {
    key: "research",
    label: "Research",
    score: 74,
    rationale: "Research has depth and a poster pathway, but output should be finalized.",
    evidence: ["310 lab hours", "Public health internship", "Poster in preparation"],
    nextActions: ["Submit poster abstract", "Draft research description without jargon"]
  },
  {
    key: "leadership",
    label: "Leadership",
    score: 84,
    rationale: "Leadership appears in formal titles and service operations.",
    evidence: ["Pre-Health Society President", "Food pantry shift lead", "Resident Assistant"],
    nextActions: ["Choose one leadership story with measurable outcome", "Avoid listing titles without decisions made"]
  },
  {
    key: "narrative",
    label: "Narrative readiness",
    score: 72,
    rationale: "Stories are strong, but several drafts need sharper personal insight.",
    evidence: ["11 draft starts", "6 STAR stories", "Clear service-through-systems theme"],
    nextActions: ["Draft three Most Meaningful essays", "Connect experiences to why medicine"]
  },
  {
    key: "school-list",
    label: "School list readiness",
    score: 58,
    rationale: "School list work is early and needs mission fit, geography, and metrics alignment.",
    evidence: ["No finalized list", "Service-heavy profile", "MCAT range identified"],
    nextActions: ["Build initial 25-school list", "Flag mission-fit reaches and state schools"]
  }
];

export const weeklyActions = [
  "Request updated volunteer hour verification from Riverside",
  "Turn food pantry leadership into a Most Meaningful outline",
  "Email two physicians for specialty shadowing",
  "Draft school list criteria before adding school names"
];

export const timeline = [
  { month: "May", label: "Finalize activity inventory", status: "In progress" },
  { month: "Jun", label: "Complete primary drafts", status: "Next" },
  { month: "Jul", label: "Submit AMCAS and begin secondaries", status: "Planned" },
  { month: "Aug", label: "Interview story bank review", status: "Planned" }
];

export const remediationTasks = [
  {
    id: "task-1",
    month: "May 2026",
    priority: "High",
    title: "Add 40 more clinical hours",
    description: "Schedule six ED or mobile clinic shifts and log reflections within 24 hours.",
    status: "In progress"
  },
  {
    id: "task-2",
    month: "May 2026",
    priority: "High",
    title: "Draft three Most Meaningful experiences",
    description: "Prioritize ED volunteering, food pantry leadership, and research.",
    status: "Not started"
  },
  {
    id: "task-3",
    month: "June 2026",
    priority: "Medium",
    title: "Diversify shadowing specialties",
    description: "Add one outpatient specialty and one inpatient specialty observation block.",
    status: "Planned"
  },
  {
    id: "task-4",
    month: "June 2026",
    priority: "Medium",
    title: "Turn research into a poster or abstract",
    description: "Finalize poster title, mentor approval, and plain-language explanation.",
    status: "In progress"
  },
  {
    id: "task-5",
    month: "July 2026",
    priority: "High",
    title: "Identify two service activities with sustained impact",
    description: "Quantify continuity, role growth, and community-facing outcomes.",
    status: "Planned"
  },
  {
    id: "task-6",
    month: "July 2026",
    priority: "Low",
    title: "Build school list review rubric",
    description: "Score schools by mission fit, geography, cost, metrics, and curriculum model.",
    status: "Not started"
  }
];
