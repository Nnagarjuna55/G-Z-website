import { PHOTOS } from "./images";

/**
 * Rollout scenarios by organization type. These describe how the suite is used,
 * not measured customer results. Add real, client-approved case studies here once available.
 */
export interface UseCase {
  slug: string;
  audience: string;
  image: string;
  headline: string;
  challenge: string;
  approach: string;
  products: string[];
  goals: string[];
}

export const USE_CASES: UseCase[] = [
  {
    slug: "training-institute",
    audience: "Training Institute",
    image: PHOTOS.classroomStudents,
    headline: "Launch a branded learning platform with interview practice built in",
    challenge:
      "Strong technical courses, but learners freeze in interviews and placement readiness lives in spreadsheets.",
    approach:
      "Launch AI LMS under the institute's own brand and embed AI Interviewer as a graded module in every final-term course.",
    products: ["AI LMS", "AI Interviewer"],
    goals: [
      "Run every course under the institute's own brand and domain",
      "Make interview practice part of the curriculum, not an afterthought",
      "See each learner's readiness before placement season starts",
    ],
  },
  {
    slug: "technology-company",
    audience: "Technology Company",
    image: PHOTOS.teamMeeting,
    headline: "Replace days of manual resume screening with ranked shortlists",
    challenge:
      "Senior engineers lose days to first-round screening for every open role, slowing hiring across teams.",
    approach:
      "Post roles on AI Job Portal and rank applicants on verified interview scores and certifications instead of keywords.",
    products: ["AI Job Portal", "AI Interviewer"],
    goals: [
      "Start every role with an AI-ranked shortlist",
      "Give engineers back time spent on first-round screening",
      "Compare candidates on the same structured signals",
    ],
  },
  {
    slug: "college-placement-cell",
    audience: "College Placement Cell",
    image: PHOTOS.studentsGroup,
    headline: "Send every graduate to recruiters with a verified, ATS-ready resume",
    challenge:
      "Resumes reach recruiters looking identical, with no evidence of the projects and certifications students completed.",
    approach:
      "Roll out AI Resume Builder connected to AI LMS, so verified coursework flows straight into every student's resume.",
    products: ["AI Resume Builder", "AI LMS"],
    goals: [
      "Give every graduating student an ATS-ready resume",
      "Back resume claims with verified courses and certificates",
      "Review a whole batch's resumes from one dashboard",
    ],
  },
  {
    slug: "enterprise-hiring",
    audience: "Enterprise",
    image: PHOTOS.devTeam,
    headline: "Hire from partner institutions on verified skill signals",
    challenge:
      "Hiring managers can't tell which candidates can actually do the work until late-stage interviews.",
    approach:
      "Partner with training institutes through the AI Job Portal marketplace and hire learners whose skills are already verified.",
    products: ["AI Job Portal", "AI LMS"],
    goals: [
      "See interview scores and certifications before the first call",
      "Build a steady pipeline from partner institutions",
      "Reduce late-stage surprises in the hiring process",
    ],
  },
];
