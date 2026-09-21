import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Gen-Z Technologies",
  description: "How Gen-Z Technologies collects, uses and protects personal information on this website and across its AI products.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "When you contact us or request a demo, we collect the details you enter in the form: your name, email address, phone number, location and message.",
      "When an institution or company uses our products, we process information about their learners, faculty, recruiters and candidates on that organization's behalf.",
    ],
    bullets: [
      "Contact details you submit through our forms",
      "Account details such as name, email and role",
      "Learning and assessment activity within AI LMS",
      "Interview practice sessions and scores in AI Interviewer",
      "Resume content created in AI Resume Builder",
      "Job applications and hiring pipeline data in AI Job Portal",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: ["We use personal information only to provide and improve our services and to communicate with you."],
    bullets: [
      "Respond to demo requests and support questions",
      "Operate, secure and maintain our products",
      "Generate learning analytics, interview feedback and match scores",
      "Send service updates related to your account",
      "Meet legal and regulatory obligations",
    ],
  },
  {
    id: "institution-data",
    title: "Data we process for institutions and companies",
    paragraphs: [
      "Institutions and companies that use our products control the data of their learners and candidates. We process that data according to their instructions and our agreement with them.",
      "Each organization operates in its own isolated workspace. We do not share one organization's learner or candidate data with another organization.",
    ],
  },
  {
    id: "sharing",
    title: "How we share information",
    paragraphs: [
      "We do not sell personal information. We share it only with trusted service providers that help us run our website and products, such as hosting, email and form-handling services, under confidentiality obligations.",
      "A learner's verified profile is shared with a hiring company only through the AI Job Portal and only as configured by the learner's institution.",
    ],
  },
  {
    id: "retention",
    title: "Data retention",
    paragraphs: [
      "We keep personal information only as long as needed for the purposes described here or as required by law. When an organization ends its agreement, we delete or return its data as that agreement specifies.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We protect information with encryption in transit and at rest, role-based access controls and audit logging. No system is perfectly secure, but we work continuously to safeguard the data entrusted to us.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: [
      "You can ask to access, correct or delete your personal information, or object to how we use it. If your data is held on behalf of your institution or employer, we may direct your request to them.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "This website uses only the cookies and similar storage needed for it to work. We do not use advertising cookies.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our products evolve. When we make material changes, we will update the effective date at the top of this page.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      "For privacy questions or requests, email support@gen-ztechnologies.com. Gen-Z Technologies is based in Hyderabad, Telangana, India.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="We build products that institutions trust with learner data. This policy explains what we collect, why, and the control you have over it."
      effectiveDate="September 16, 2026"
      sections={SECTIONS}
    />
  );
}
