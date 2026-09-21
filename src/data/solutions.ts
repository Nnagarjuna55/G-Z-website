import {
  GraduationCap, Building2, Briefcase, UserRound,
  type LucideIcon,
} from "lucide-react";
import { PHOTOS } from "./images";

export interface Solution {
  slug: string;
  label: string;
  audience: string;
  icon: LucideIcon;
  image: string;
  headline: string;
  summary: string;
  challenges: { title: string; description: string }[];
  outcomes: { value: string; label: string }[];
  products: { id: string; label: string; href: string; why: string }[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "universities-and-colleges",
    label: "Universities & Colleges",
    audience: "For Higher Education",
    icon: GraduationCap,
    image: PHOTOS.graduation,
    headline: "Turn Placement Season Into a Year-Round System",
    summary:
      "Run academics, skill-building, and placements on one platform — so your placement cell walks into recruiter conversations with verified data, not spreadsheets.",
    challenges: [
      {
        title: "Placement data lives in spreadsheets",
        description: "Student readiness, mock interview results, and recruiter feedback sit in disconnected files nobody trusts by drive season.",
      },
      {
        title: "Students prepare too late",
        description: "Interview practice starts weeks before placements instead of being built into the curriculum from year one.",
      },
      {
        title: "Recruiters can't verify skills",
        description: "Companies receive identical-looking resumes with no evidence of what a student can actually do.",
      },
    ],
    outcomes: [
      { value: "4", label: "Connected products" },
      { value: "1", label: "Profile per student" },
      { value: "Verified", label: "Student credentials" },
    ],
    products: [
      { id: "ai-lms", label: "AI LMS", href: "/ai-lms", why: "Run departments, batches, and credit-bearing courses under your own brand." },
      { id: "ai-interviewer", label: "AI Interviewer", href: "/ai-interviewer", why: "Embed mock interviews into the curriculum from the first semester." },
      { id: "ai-resume-builder", label: "AI Resume Builder", href: "/resume-builder", why: "Every student graduates with an ATS-ready, institution-branded resume." },
      { id: "ai-job-portal", label: "AI Job Portal", href: "/job-portal", why: "Run campus drives and give recruiters verified candidate profiles." },
    ],
  },
  {
    slug: "training-institutes",
    label: "Training Institutes & EdTech",
    audience: "For Skilling Providers",
    icon: Building2,
    image: PHOTOS.classroomStudents,
    headline: "Sell Outcomes, Not Just Course Hours",
    summary:
      "Launch your own branded learning platform with guided onboarding, and prove placement outcomes with data your next cohort of students can actually see.",
    challenges: [
      {
        title: "Building a platform costs a year",
        description: "Custom LMS development burns budget and delays launch while competitors are already enrolling students.",
      },
      {
        title: "Placement claims are hard to prove",
        description: "Prospective students ask for outcome data, and anecdotes no longer convert.",
      },
      {
        title: "Tools are stitched together",
        description: "Separate systems for content, practice, resumes, and hiring means nothing connects and everything leaks.",
      },
    ],
    outcomes: [
      { value: "White-label", label: "Your brand and domain" },
      { value: "Built-in", label: "AI interview practice" },
      { value: "Connected", label: "Hiring partners" },
    ],
    products: [
      { id: "ai-lms", label: "AI LMS", href: "/ai-lms", why: "Your logo, your domain, your pricing — without building a platform from scratch." },
      { id: "ai-interviewer", label: "AI Interviewer", href: "/ai-interviewer", why: "Offer unlimited mock interviews as a premium differentiator." },
      { id: "ai-resume-builder", label: "AI Resume Builder", href: "/resume-builder", why: "Turn every completed course into resume-ready proof of skill." },
      { id: "ai-job-portal", label: "AI Job Portal", href: "/job-portal", why: "Connect your graduates directly to hiring partners." },
    ],
  },
  {
    slug: "corporates",
    label: "Corporates & Enterprises",
    audience: "For L&D and Talent Teams",
    icon: Briefcase,
    image: PHOTOS.officeMeeting,
    headline: "Train Your Team. Hire Your Next One.",
    summary:
      "One platform for internal upskilling and external hiring — so the skills you build and the talent you recruit are measured the same way.",
    challenges: [
      {
        title: "Training completion isn't impact",
        description: "L&D reports completion percentages, but nobody can show what capability actually improved.",
      },
      {
        title: "Screening eats engineering time",
        description: "Senior engineers spend weeks in first-round interviews that a structured process could have filtered.",
      },
      {
        title: "Onboarding restarts from zero",
        description: "New hires repeat training that their pre-hire assessments already proved they didn't need.",
      },
    ],
    outcomes: [
      { value: "AI-ranked", label: "Candidate shortlists" },
      { value: "Structured", label: "First-round screening" },
      { value: "One", label: "Platform to train and hire" },
    ],
    products: [
      { id: "ai-lms", label: "AI LMS", href: "/ai-lms", why: "Deliver compliance, onboarding, and upskilling tracks with real analytics." },
      { id: "ai-interviewer", label: "AI Interviewer", href: "/ai-interviewer", why: "Standardize first-round screening and free up senior engineers." },
      { id: "ai-job-portal", label: "AI Job Portal", href: "/job-portal", why: "Rank applicants by verified signal and shorten time-to-hire." },
      { id: "ai-resume-builder", label: "AI Resume Builder", href: "/resume-builder", why: "Help internal talent present themselves for internal mobility." },
    ],
  },
  {
    slug: "students",
    label: "Students & Job Seekers",
    audience: "For Learners",
    icon: UserRound,
    image: PHOTOS.studentClassroom,
    headline: "Walk Into the Interview Already Prepared",
    summary:
      "Access the tools through your institution — learn the skill, practice the interview, build the resume, and get seen by companies hiring right now.",
    challenges: [
      {
        title: "Practice is limited and awkward",
        description: "A handful of mock interviews with seniors isn't enough repetition to get genuinely comfortable.",
      },
      {
        title: "Resumes are a guessing game",
        description: "No feedback on what recruiters or ATS systems actually filter for until rejections arrive.",
      },
      {
        title: "Applications disappear",
        description: "Hundreds of applications, no responses, and no idea which skills were missing.",
      },
    ],
    outcomes: [
      { value: "Unlimited", label: "Mock interviews" },
      { value: "ATS", label: "Resume scoring" },
      { value: "Verified", label: "Skill profile" },
    ],
    products: [
      { id: "ai-lms", label: "AI LMS", href: "/ai-lms", why: "Follow a structured, project-based path with progress you can see." },
      { id: "ai-interviewer", label: "AI Interviewer", href: "/ai-interviewer", why: "Practice as often as you want, with feedback after every answer." },
      { id: "ai-resume-builder", label: "AI Resume Builder", href: "/resume-builder", why: "Build a resume that passes ATS filters on the first try." },
      { id: "ai-job-portal", label: "AI Job Portal", href: "/job-portal", why: "Get matched to roles that fit the skills you actually proved." },
    ],
  },
];
