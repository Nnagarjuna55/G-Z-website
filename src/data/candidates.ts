export interface Candidate {
  id: string;
  name: string;
  initials: string;
  role: string;
  matchScore: number;
  experience: string;
  location: string;
  skills: string[];
  status: "New" | "Shortlisted" | "Interviewing" | "Offer";
  summary: string;
}

export const CANDIDATES: Candidate[] = [
  {
    id: "c1",
    name: "Aarav Shah",
    initials: "AS",
    role: "Senior Frontend Engineer",
    matchScore: 96,
    experience: "6 yrs",
    location: "Bengaluru, IN",
    skills: ["React", "TypeScript", "Next.js", "Design Systems"],
    status: "Shortlisted",
    summary: "Led a design-system rebuild that cut UI bugs by 40%. Strong async communicator with startup pace experience.",
  },
  {
    id: "c2",
    name: "Priyanka Das",
    initials: "PD",
    role: "Machine Learning Engineer",
    matchScore: 93,
    experience: "4 yrs",
    location: "Hyderabad, IN",
    skills: ["PyTorch", "MLOps", "LLM Fine-tuning", "Python"],
    status: "Interviewing",
    summary: "Shipped a RAG pipeline serving 2M+ queries/month. Comfortable owning models from prototype to production.",
  },
  {
    id: "c3",
    name: "Daniel Cho",
    initials: "DC",
    role: "Backend Engineer",
    matchScore: 91,
    experience: "5 yrs",
    location: "Remote (GMT+9)",
    skills: ["Go", "PostgreSQL", "Kafka", "System Design"],
    status: "New",
    summary: "Rebuilt a payments service to handle 10x traffic with zero downtime migration. Strong system design fundamentals.",
  },
  {
    id: "c4",
    name: "Fatima Al-Sayed",
    initials: "FA",
    role: "Product Manager",
    matchScore: 89,
    experience: "7 yrs",
    location: "Dubai, UAE",
    skills: ["Roadmapping", "A/B Testing", "SQL", "Stakeholder Mgmt"],
    status: "Shortlisted",
    summary: "Owned a product line from 0 to $4M ARR. Known for turning ambiguous asks into shippable specs fast.",
  },
  {
    id: "c5",
    name: "Marcus Webb",
    initials: "MW",
    role: "Data Analyst",
    matchScore: 87,
    experience: "3 yrs",
    location: "Austin, US",
    skills: ["SQL", "Python", "Tableau", "A/B Testing"],
    status: "New",
    summary: "Built the exec-facing revenue dashboard used company-wide. Excellent at translating data into decisions.",
  },
  {
    id: "c6",
    name: "Neha Kulkarni",
    initials: "NK",
    role: "DevOps Engineer",
    matchScore: 85,
    experience: "5 yrs",
    location: "Pune, IN",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    status: "Offer",
    summary: "Cut deployment time from 40 minutes to 6 by redesigning the CI/CD pipeline. Strong incident-response track record.",
  },
];
