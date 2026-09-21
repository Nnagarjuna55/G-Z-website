"use client";

import { Plus, Trash2, Sparkles } from "lucide-react";
import type { ResumeData, ResumeExperience, ResumeEducation } from "./types";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const FIELD_CLASS =
  "w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium";
const LABEL_CLASS = "text-xs font-mono font-bold text-foreground mb-1.5 block";

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  const update = <K extends keyof ResumeData>(key: K, value: ResumeData[K]) => {
    onChange({ ...data, [key]: value });
  };

  const updateExperience = (id: string, field: keyof ResumeExperience, value: string) => {
    update(
      "experience",
      data.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const addExperience = () => {
    update("experience", [
      ...data.experience,
      { id: `e${Date.now()}`, role: "", company: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (id: string) => {
    update("experience", data.experience.filter((exp) => exp.id !== id));
  };

  const updateEducation = (id: string, field: keyof ResumeEducation, value: string) => {
    update(
      "education",
      data.education.map((ed) => (ed.id === id ? { ...ed, [field]: value } : ed))
    );
  };

  const addEducation = () => {
    update("education", [...data.education, { id: `ed${Date.now()}`, school: "", degree: "", year: "" }]);
  };

  const removeEducation = (id: string) => {
    update("education", data.education.filter((ed) => ed.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Basic Info */}
      <div className="bg-white rounded-3xl border border-border p-6 space-y-4">
        <h3 className="font-display font-bold text-foreground">Basic Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={LABEL_CLASS}>Full Name</label>
            <input className={FIELD_CLASS} placeholder="e.g. Jordan Lee" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Target Title</label>
            <input className={FIELD_CLASS} placeholder="e.g. Frontend Engineer" value={data.title} onChange={(e) => update("title", e.target.value)} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Email</label>
            <input className={FIELD_CLASS} placeholder="you@email.com" value={data.email} onChange={(e) => update("email", e.target.value)} />
          </div>
          <div>
            <label className={LABEL_CLASS}>Phone</label>
            <input className={FIELD_CLASS} placeholder="+1 (000) 000-0000" value={data.phone} onChange={(e) => update("phone", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className={LABEL_CLASS}>Location</label>
            <input className={FIELD_CLASS} placeholder="City, Country" value={data.location} onChange={(e) => update("location", e.target.value)} />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-3xl border border-border p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-foreground">Professional Summary</h3>
          <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-primary-strong">
            <Sparkles className="w-3.5 h-3.5" /> AI-optimized
          </span>
        </div>
        <textarea
          rows={4}
          className={FIELD_CLASS}
          placeholder="2-3 sentences on your experience and what you're looking for next."
          value={data.summary}
          onChange={(e) => update("summary", e.target.value)}
        />
      </div>

      {/* Skills */}
      <div className="bg-white rounded-3xl border border-border p-6 space-y-3">
        <h3 className="font-display font-bold text-foreground">Skills</h3>
        <input
          className={FIELD_CLASS}
          value={data.skills}
          onChange={(e) => update("skills", e.target.value)}
          placeholder="Comma-separated, e.g. React, TypeScript, SQL"
        />
      </div>

      {/* Experience */}
      <div className="bg-white rounded-3xl border border-border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-foreground">Experience</h3>
          <button onClick={addExperience} className="flex items-center gap-1.5 text-xs font-bold text-primary-strong hover:text-primary-hover">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        {data.experience.map((exp) => (
          <div key={exp.id} className="border border-border rounded-2xl p-4 space-y-3 relative">
            <button onClick={() => removeExperience(exp.id)} className="absolute top-3 right-3 text-muted hover:text-destructive">
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-8">
              <input className={FIELD_CLASS} placeholder="Role" value={exp.role} onChange={(e) => updateExperience(exp.id, "role", e.target.value)} />
              <input className={FIELD_CLASS} placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} />
            </div>
            <input className={FIELD_CLASS} placeholder="Duration (e.g. 2022 — Present)" value={exp.duration} onChange={(e) => updateExperience(exp.id, "duration", e.target.value)} />
            <textarea rows={2} className={FIELD_CLASS} placeholder="Impact-focused description" value={exp.description} onChange={(e) => updateExperience(exp.id, "description", e.target.value)} />
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="bg-white rounded-3xl border border-border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold text-foreground">Education</h3>
          <button onClick={addEducation} className="flex items-center gap-1.5 text-xs font-bold text-primary-strong hover:text-primary-hover">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        {data.education.map((ed) => (
          <div key={ed.id} className="border border-border rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
            <button onClick={() => removeEducation(ed.id)} className="absolute top-3 right-3 text-muted hover:text-destructive">
              <Trash2 className="w-4 h-4" />
            </button>
            <input className={FIELD_CLASS} placeholder="School" value={ed.school} onChange={(e) => updateEducation(ed.id, "school", e.target.value)} />
            <input className={FIELD_CLASS} placeholder="Degree" value={ed.degree} onChange={(e) => updateEducation(ed.id, "degree", e.target.value)} />
            <input className={FIELD_CLASS} placeholder="Year" value={ed.year} onChange={(e) => updateEducation(ed.id, "year", e.target.value)} />
          </div>
        ))}
      </div>
    </div>
  );
}
