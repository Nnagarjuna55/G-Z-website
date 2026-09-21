export interface ResumeExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ResumeEducation {
  id: string;
  school: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
}

export const DEFAULT_RESUME: ResumeData = {
  fullName: "",
  title: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  skills: "",
  experience: [],
  education: [],
};
