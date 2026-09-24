import {
  BookOpen, Users, BarChart3, ShieldCheck, Settings2, LayoutDashboard,
  BrainCircuit, Zap, LineChart, Layers, Link2,
  LayoutTemplate, Sparkles, Eye, Gauge,
  Briefcase, Filter, Columns3, BadgeCheck, Building2,
  Code2, Video,
  type LucideIcon,
} from "lucide-react";
import type { VisualVariant } from "@/components/products/ModuleVisual";
import { PHOTOS } from "./images";

export interface ProductModule {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
  highlights: string[];
  visual: VisualVariant;
  photo: string;
}

export interface ProductNavItem {
  id: string;
  label: string;
  href: string;
  tagline: string;
  modules: ProductModule[];
}

export const PRODUCTS: ProductNavItem[] = [
  {
    id: "ai-job-portal",
    label: "AI Job Portal",
    href: "/job-portal",
    tagline: "For Companies",
    modules: [
      {
        icon: Briefcase,
        title: "Role Posting & Requirements Builder",
        description: "Define must-have skills and experience in minutes.",
        detail:
          "Post a role without a lengthy requisition process. Set the skills, level and work type, and the AI drafts the job description — then uses those same criteria as the screening rubric.",
        highlights: [
          "AI-assisted job description writing",
          "Skill, level and work-type criteria",
          "Multi-location and multi-role posting",
          "Criteria become the screening rubric",
        ],
        visual: "jobpost",
        photo: PHOTOS.businessMeeting,
      },
      {
        icon: Filter,
        title: "AI Screening & Match Scoring",
        description: "Score applicants by real signal, not keyword matching.",
        detail:
          "Every applicant is scored against the role using semantic skill matching plus verified performance data — so a strong candidate who phrased their resume differently does not get filtered out.",
        highlights: [
          "Semantic skill matching, not keyword matching",
          "Ranked shortlist from the first minute",
          "Verified scores weighted into the ranking",
          "Configurable auto-advance rules",
        ],
        visual: "matching",
        photo: PHOTOS.devTeam,
      },
      {
        icon: Columns3,
        title: "Candidate Pipeline & Shortlisting",
        description: "Move candidates from New to Offer in one pipeline.",
        detail:
          "A full applicant tracking pipeline without a separate ATS purchase. Drag candidates through stages, leave team notes and ratings, and schedule interviews without leaving the board.",
        highlights: [
          "Kanban stages from New to Offer",
          "Team notes, ratings and mentions",
          "Interview scheduling with calendar sync",
          "Bulk actions and templated messaging",
        ],
        visual: "kanban",
        photo: PHOTOS.teamMeeting,
      },
      {
        icon: BadgeCheck,
        title: "Verified Performance Signals",
        description: "Interview scores and certifications on every profile.",
        detail:
          "This is the part no job board has. Each candidate profile carries AI Interviewer scores and AI LMS certifications with verification IDs, so hiring decisions rest on evidence rather than claims.",
        highlights: [
          "AI Interviewer readiness scores attached",
          "Verifiable course certifications",
          "Project and assessment history",
          "Tamper-proof verification IDs",
        ],
        visual: "signals",
        photo: PHOTOS.handshake,
      },
      {
        icon: Building2,
        title: "Institution & Company Marketplace",
        description: "Connect job-ready learners directly with hiring companies.",
        detail:
          "Institutions publish their job-ready cohorts and companies browse them by verified skill. Campus drives run end to end in the platform, from eligibility rules to final offer.",
        highlights: [
          "Institutions publish job-ready cohorts",
          "Companies browse by verified skill",
          "Campus drive scheduling and eligibility",
          "Placement outcome reporting",
        ],
        visual: "marketplace",
        photo: PHOTOS.officeMeeting,
      },
    ],
  },
  {
    id: "ai-interviewer",
    label: "AI Interviewer",
    href: "/ai-interviewer",
    tagline: "For Learners",
    modules: [
      {
        icon: BrainCircuit,
        title: "Adaptive Question Engine",
        description: "Questions adjust to role and difficulty level automatically.",
        detail:
          "The interviewer behaves like a real one. It picks questions for the target role and level, then probes deeper based on the answer given — so no two sessions play out the same way.",
        highlights: [
          "Role and difficulty aware question selection",
          "Adaptive follow-up probing",
          "Generate questions from a real job description",
          "Continuously expanding question bank",
        ],
        visual: "chat",
        photo: PHOTOS.meeting,
      },
      {
        icon: Zap,
        title: "Real-Time Feedback",
        description: "Instant, structured feedback scored after every answer.",
        detail:
          "Feedback arrives the second an answer ends. Each response is scored on structure, relevance and evidence, with a specific instruction on what to change — not a vague rating.",
        highlights: [
          "Per-answer scoring out of 100",
          "STAR-structure and clarity analysis",
          "Filler-word and pacing detection",
          "Concrete rewrite suggestions",
        ],
        visual: "scoring",
        photo: PHOTOS.teamTable,
      },
      {
        icon: LineChart,
        title: "Interview Analytics Dashboard",
        description: "Track readiness scores and improvement over time.",
        detail:
          "Learners and placement cells both see the trend line. Readiness scores build session over session, and a skill-gap map shows exactly which competency is still holding someone back.",
        highlights: [
          "Readiness score trend over time",
          "Skill-gap map by competency",
          "Session history with replays",
          "Batch-level analytics for placement cells",
        ],
        visual: "analytics",
        photo: PHOTOS.dataScreen,
      },
      {
        icon: Layers,
        title: "Multi-Role Practice Tracks",
        description: "Technical, behavioral, and case-style interview tracks.",
        detail:
          "Practice the round you are actually facing. Separate tracks cover technical depth, behavioral storytelling, case reasoning and HR screening across engineering, data, product and business roles.",
        highlights: [
          "Technical, behavioral, case and HR tracks",
          "Role-specific sets for engineering, data and product",
          "Difficulty laddering from beginner to advanced",
          "Multilingual interview support",
        ],
        visual: "tracks",
        photo: PHOTOS.studentsLaptops,
      },
      {
        icon: Link2,
        title: "Institution Integration",
        description: "Embeds inside AI LMS courses as a graded practice module.",
        detail:
          "Interview practice stops being an afterthought. Drop it into a course as a graded module, set a minimum readiness score for placement eligibility, and let results flow into the learner profile automatically.",
        highlights: [
          "Embed as a graded LMS module",
          "Minimum readiness thresholds for eligibility",
          "Bulk mock-drive invitations",
          "Scores written to the unified profile",
        ],
        visual: "integration",
        photo: PHOTOS.classroom,
      },
    ],
  },
  {
    id: "ai-resume-builder",
    label: "AI Resume Builder",
    href: "/resume-builder",
    tagline: "For Learners",
    modules: [
      {
        icon: LayoutTemplate,
        title: "Smart Templates",
        description: "ATS-optimized templates that adapt to experience level.",
        detail:
          "Every template is built to survive an applicant tracking system first and impress a human second — and the layout adjusts itself depending on whether the learner is a fresher or has years of experience.",
        highlights: [
          "ATS-safe structure and parsing",
          "Fresher and experienced layout variants",
          "Role-specific section ordering",
          "Institution-branded template options",
        ],
        visual: "templates",
        photo: PHOTOS.teamPlanning,
      },
      {
        icon: Sparkles,
        title: "AI Content Suggestions",
        description: "Phrasing, keyword, and quantified-impact suggestions.",
        detail:
          "The hardest part of a resume is describing your own work. The AI rewrites flat duty statements into quantified achievements, suggests the verbs recruiters respond to, and fills keyword gaps against the target role.",
        highlights: [
          "Rewrites duties into quantified impact",
          "Action-verb and tone improvements",
          "Keyword gap analysis against a job description",
          "Grammar and consistency checks",
        ],
        visual: "suggestions",
        photo: PHOTOS.studying,
      },
      {
        icon: Eye,
        title: "Real-Time Preview & Export",
        description: "Live preview while editing, export to PDF or DOCX.",
        detail:
          "What you type is what you get. The finished document updates live beside the form, then exports to PDF or DOCX — or to a shareable link a recruiter can open without a download.",
        highlights: [
          "Live side-by-side preview",
          "PDF and DOCX export",
          "Shareable public resume link",
          "Version manager for multiple roles",
        ],
        visual: "preview",
        photo: PHOTOS.takingNotes,
      },
      {
        icon: Gauge,
        title: "Resume Scoring",
        description: "An ATS-readiness score highlights what to fix.",
        detail:
          "A single score out of 100 tells a learner whether their resume will clear automated filters, with section-by-section fixes ranked by how much each one will move the number.",
        highlights: [
          "ATS-readiness score out of 100",
          "Section-by-section improvement list",
          "Formatting and parsing warnings",
          "Re-score instantly after each edit",
        ],
        visual: "gauge",
        photo: PHOTOS.teamWorking,
      },
      {
        icon: Link2,
        title: "AI LMS Integration",
        description: "Completed courses auto-populate into the resume.",
        detail:
          "No blank page and no invented claims. Completed courses, certifications, projects and interview scores pull straight from the learner profile into the resume as verified entries.",
        highlights: [
          "Auto-import courses and certifications",
          "Verified project and assignment entries",
          "Interview readiness score attached",
          "Placement-cell bulk review dashboard",
        ],
        visual: "integration",
        photo: PHOTOS.classroomStudents,
      },
    ],
  },
  {
    id: "ai-lms",
    label: "AI LMS",
    href: "/ai-lms",
    tagline: "For Institutions",
    modules: [
      {
        icon: BookOpen,
        title: "Course Authoring Studio",
        description: "Drag-and-drop content builder with AI-assisted content generation.",
        detail:
          "Faculty build a full course without touching code. Drag lessons into order, drop in video, quizzes and assignments, and let AI draft the next module from your syllabus so curriculum design takes days instead of months.",
        highlights: [
          "Drag-and-drop lesson sequencing",
          "Video, PDF, SCORM and quiz blocks",
          "AI-generated lesson drafts and quiz questions",
          "Reusable curriculum templates across batches",
        ],
        visual: "authoring",
        photo: PHOTOS.teamDesk,
      },
      {
        icon: Video,
        title: "Live Classes & Virtual Classroom",
        description: "Zoom and Meet integration with recordings and attendance.",
        detail:
          "Run live sessions inside the platform. Classes are scheduled against a batch, recorded automatically, and attendance is written straight back to the learner record with no manual register.",
        highlights: [
          "Zoom, Google Meet and Teams integration",
          "Automatic session recording and replay",
          "Attendance synced to the learner profile",
          "Scheduled doubt-solving rooms",
        ],
        visual: "liveclass",
        photo: PHOTOS.lecture,
      },
      {
        icon: Users,
        title: "Learner Management",
        description: "Enrollments, cohorts, and roles for students, faculty, and admins.",
        detail:
          "Manage thousands of learners across departments, batches and campuses. Bulk-import a new intake, assign faculty, and track progress per cohort from a single console.",
        highlights: [
          "Bulk enrollment and CSV import",
          "Batches, cohorts and department structures",
          "Roles for student, faculty and admin",
          "Self-paced or instructor-led tracks",
        ],
        visual: "learners",
        photo: PHOTOS.studentsGroup,
      },
      {
        icon: Code2,
        title: "Assessments, Compiler & Proctoring",
        description: "Exams, in-browser coding, and AI proctoring built in.",
        detail:
          "Assess real skill, not recall. Learners solve coding problems in an in-browser compiler with live test-case evaluation, while timed exams run under AI proctoring that flags tab-switching and identity mismatches.",
        highlights: [
          "In-browser compiler with live test cases",
          "Timed exams with question banks",
          "AI proctoring and tab-switch detection",
          "Auto-grading with instant result release",
        ],
        visual: "compiler",
        photo: PHOTOS.code,
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Completion rates, engagement, and at-risk learner dashboards.",
        detail:
          "Leadership sees what is actually happening. Track completion and engagement by batch, surface at-risk learners before they drop out, and export board-ready reports for accreditation reviews.",
        highlights: [
          "Completion and engagement dashboards",
          "Early at-risk learner alerts",
          "Faculty and batch comparison",
          "Exportable accreditation reports",
        ],
        visual: "analytics",
        photo: PHOTOS.analytics,
      },
      {
        icon: ShieldCheck,
        title: "Certification & Compliance",
        description: "Auto-issued certificates with accreditation tracking.",
        detail:
          "Certificates issue themselves the moment a learner qualifies, each with a unique verification ID a recruiter can check — and each one flows into the learner's profile for the AI Job Portal.",
        highlights: [
          "Auto-issued on course completion",
          "Publicly verifiable certificate IDs",
          "Accreditation and compliance tracking",
          "Institution-branded certificate design",
        ],
        visual: "certificate",
        photo: PHOTOS.graduation,
      },
      {
        icon: Settings2,
        title: "Institution Admin Console",
        description: "Multi-branch management, white-labeling, and SSO.",
        detail:
          "The platform runs as your institution, not ours. Apply your logo, colors and domain, connect your existing identity provider, and manage multiple campuses from one administrative console.",
        highlights: [
          "Full white-labeling and custom domain",
          "SSO via SAML, OAuth or LDAP",
          "Multi-branch and multi-campus control",
          "Granular role permissions and audit logs",
        ],
        visual: "admin",
        photo: PHOTOS.teamOffice,
      },
      {
        icon: LayoutDashboard,
        title: "Unified Learner Profile",
        description: "Progress, interview scores, and resume data in one place.",
        detail:
          "Every signal a learner generates lands on one profile — coursework, certifications, interview readiness and resume score — and that profile is exactly what a hiring company sees in the AI Job Portal.",
        highlights: [
          "Single profile across all four products",
          "Verified certifications and scores",
          "Shareable with recruiters and placement cells",
          "Learner-owned, exportable record",
        ],
        visual: "profile",
        photo: PHOTOS.studentClassroom,
      },
    ],
  },
];
