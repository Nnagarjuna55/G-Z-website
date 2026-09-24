export interface PillarItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  stat: { value: string; label: string };
  iconName: "BookOpen" | "MessageSquareText" | "FileText" | "Users";
  color: "primary" | "accent";
}

export const PILLARS: PillarItem[] = [
  {
    id: "ai-job-portal",
    number: "01",
    title: "AI Job Portal",
    tagline: "For Companies",
    description:
      "Companies post roles once and let AI screen, score, and shortlist candidates instantly — matching verified skills and signal, not just keywords.",
    href: "/job-portal",
    stat: { value: "Verified", label: "skill signals" },
    iconName: "Users",
    color: "accent",
  },
  {
    id: "ai-interviewer",
    number: "02",
    title: "AI Interviewer",
    tagline: "For Learners",
    description:
      "Rehearse real interview scenarios with an AI interviewer that adapts to role and level, then get instant, structured feedback on every answer.",
    href: "/ai-interviewer",
    stat: { value: "Unlimited", label: "practice sessions" },
    iconName: "MessageSquareText",
    color: "accent",
  },
  {
    id: "ai-resume-builder",
    number: "03",
    title: "AI Resume Builder",
    tagline: "For Learners",
    description:
      "Turn experience into a recruiter-ready resume in minutes, with AI suggestions for phrasing, keywords, and formatting tuned to the target role.",
    href: "/resume-builder",
    stat: { value: "ATS-ready", label: "templates and scoring" },
    iconName: "FileText",
    color: "primary",
  },
  {
    id: "ai-lms",
    number: "04",
    title: "AI LMS",
    tagline: "For Institutions",
    description:
      "A complete, white-labeled learning management system — course authoring, learner management, analytics, and certification, deployable under your institution's own brand.",
    href: "/ai-lms",
    stat: { value: "White-label", label: "under your brand" },
    iconName: "BookOpen",
    color: "primary",
  },
];
