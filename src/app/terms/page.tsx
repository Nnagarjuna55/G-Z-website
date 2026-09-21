import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Gen-Z Technologies",
  description: "The terms that govern use of the Gen-Z Technologies website and its AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal products.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    paragraphs: [
      "By accessing this website or using our products, you agree to these terms. If you use our products on behalf of an institution or company, you confirm you have authority to accept these terms for that organization.",
    ],
  },
  {
    id: "services",
    title: "Our services",
    paragraphs: [
      "Gen-Z Technologies provides AI LMS, AI Interviewer, AI Resume Builder and AI Job Portal. The scope, plan and duration of services for each organization are set out in its order form or agreement with us.",
    ],
  },
  {
    id: "accounts",
    title: "Accounts",
    paragraphs: [
      "You are responsible for keeping your login credentials secure and for all activity under your account. Tell us promptly if you suspect unauthorized access.",
    ],
  },
  {
    id: "organization-responsibilities",
    title: "Institution and company responsibilities",
    paragraphs: ["Organizations using our products are responsible for how they use them with their learners, staff and candidates."],
    bullets: [
      "Having a lawful basis and any required consents for the data they upload",
      "Making fair, lawful hiring and academic decisions",
      "Managing which users can access their workspace",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: ["You agree not to misuse our website or products."],
    bullets: [
      "Do not attempt to breach security or access data you are not authorized to see",
      "Do not upload unlawful, harmful or infringing content",
      "Do not use AI Interviewer or assessments to misrepresent someone's identity",
      "Do not copy, resell or reverse-engineer our products",
    ],
  },
  {
    id: "ai-outputs",
    title: "AI-generated outputs",
    paragraphs: [
      "Interview feedback, resume suggestions and match scores are generated to support human decisions, not replace them. Organizations should review AI outputs before making academic or hiring decisions.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "We own our products, website and branding. Organizations and users keep ownership of the content and data they provide, and grant us permission to process it only to deliver the services.",
    ],
  },
  {
    id: "fees",
    title: "Fees",
    paragraphs: [
      "Fees, billing terms and payment schedules are set out in each organization's order form or agreement.",
    ],
  },
  {
    id: "liability",
    title: "Disclaimers and limitation of liability",
    paragraphs: [
      "Our products are provided as described in your agreement. To the extent permitted by law, we are not liable for indirect or consequential losses, and our total liability is limited as set out in that agreement.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "We may suspend access for serious breaches of these terms. Either party may end an agreement as its terms allow, after which data is returned or deleted as agreed.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India, and disputes are subject to the courts of Hyderabad, Telangana, unless an organization's agreement states otherwise.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: ["Questions about these terms can be sent to support@gen-ztechnologies.com."],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms explain how you may use the Gen-Z Technologies website and products, and what we each commit to."
      effectiveDate="September 16, 2026"
      sections={SECTIONS}
    />
  );
}
