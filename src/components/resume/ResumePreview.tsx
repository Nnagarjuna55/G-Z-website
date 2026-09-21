import { Mail, Phone, MapPin } from "lucide-react";
import type { ResumeData } from "./types";

export default function ResumePreview({ data }: { data: ResumeData }) {
  const skillList = data.skills.split(",").map((s) => s.trim()).filter(Boolean);
  const isEmpty =
    !data.fullName && !data.title && !data.email && !data.phone && !data.location &&
    !data.summary && skillList.length === 0 && data.experience.length === 0 && data.education.length === 0;

  return (
    <div className="bg-white rounded-3xl border border-border shadow-lg p-8 sm:p-10 aspect-[8.5/11] overflow-y-auto">
      {isEmpty && (
        <p className="text-xs text-muted font-medium mb-6 pb-4 border-b border-dashed border-border">
          Your live preview appears here as you fill in the form on the left.
        </p>
      )}

      <div className="border-b-2 border-foreground pb-4 mb-5">
        <h1 className="font-display text-2xl font-bold text-foreground">{data.fullName || "Your Name"}</h1>
        <p className="text-sm font-bold text-primary-strong mt-0.5">{data.title || "Target Role"}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[11px] font-mono text-muted">
          {data.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {data.email}</span>}
          {data.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {data.phone}</span>}
          {data.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {data.location}</span>}
        </div>
      </div>

      {data.summary && (
        <div className="mb-5">
          <h2 className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-1.5">Summary</h2>
          <p className="text-xs text-foreground font-medium leading-relaxed">{data.summary}</p>
        </div>
      )}

      {skillList.length > 0 && (
        <div className="mb-5">
          <h2 className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-1.5">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skillList.map((skill) => (
              <span key={skill} className="text-[10px] font-bold text-foreground bg-background border border-border px-2.5 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-2">Experience</h2>
          <div className="space-y-3">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold text-foreground">{exp.role || "Role"} {exp.company && <span className="font-medium text-muted">&middot; {exp.company}</span>}</span>
                  <span className="text-[10px] font-mono text-muted shrink-0 ml-2">{exp.duration}</span>
                </div>
                {exp.description && <p className="text-[11px] text-muted font-medium leading-relaxed mt-0.5">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div>
          <h2 className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-2">Education</h2>
          <div className="space-y-2">
            {data.education.map((ed) => (
              <div key={ed.id} className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-foreground">{ed.degree || "Degree"} {ed.school && <span className="font-medium text-muted">&middot; {ed.school}</span>}</span>
                <span className="text-[10px] font-mono text-muted shrink-0 ml-2">{ed.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
