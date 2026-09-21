import { PHOTOS } from "./images";

export interface InsightItem {
  id: string;
  category: string;
  title: string;
  href: string;
  cta: string;
  image: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
}

export const MOTTO = "Learn • Practice • Get Hired";

export const INSIGHTS: InsightItem[] = [
  {
    id: "insight-1",
    category: "AI Interviewer",
    title: "How AI Mock Interviews Close the Gap Between Practice and the Real Thing",
    href: "/ai-interviewer",
    cta: "Explore AI Interviewer",
    image: PHOTOS.studentsLaptops,
  },
  {
    id: "insight-2",
    category: "AI Job Portal",
    title: "Why Keyword-Matching Resume Screening Is Dying — and What Replaces It",
    href: "/job-portal",
    cta: "Explore AI Job Portal",
    image: PHOTOS.businessMeeting,
  },
  {
    id: "insight-3",
    category: "AI LMS",
    title: "Teaching the Skills Employers Actually Screen For",
    href: "/ai-lms",
    cta: "Explore AI LMS",
    image: PHOTOS.code,
  },
  {
    id: "insight-4",
    category: "AI Resume Builder",
    title: "Turning a Course Certificate Into an Interview Callback",
    href: "/resume-builder",
    cta: "Explore AI Resume Builder",
    image: PHOTOS.graduation,
  },
];

export const SKILLS: SkillItem[] = [
  { name: "Generative AI", iconName: "Sparkles" },
  { name: "Machine Learning", iconName: "BrainCircuit" },
  { name: "React & Next.js", iconName: "Code2" },
  { name: "Python", iconName: "Terminal" },
  { name: "Data Analytics", iconName: "BarChart3" },
  { name: "Cloud & DevOps", iconName: "Cloud" },
  { name: "System Design", iconName: "Network" },
  { name: "Product Thinking", iconName: "LayoutGrid" },
];
