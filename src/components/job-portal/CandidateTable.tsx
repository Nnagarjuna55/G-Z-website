"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CANDIDATES, type Candidate } from "@/data/candidates";

const STATUS_VARIANT: Record<Candidate["status"], "neutral" | "default" | "accent" | "success"> = {
  New: "neutral",
  Shortlisted: "default",
  Interviewing: "accent",
  Offer: "success",
};

export default function CandidateTable() {
  const [sortDesc, setSortDesc] = useState(true);

  const sorted = useMemo(() => {
    return [...CANDIDATES].sort((a, b) => (sortDesc ? b.matchScore - a.matchScore : a.matchScore - b.matchScore));
  }, [sortDesc]);

  return (
    <div className="bg-white rounded-3xl border border-border shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h3 className="font-display font-bold text-foreground">AI-Shortlisted Candidates</h3>
        <button
          onClick={() => setSortDesc((s) => !s)}
          className="flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary-strong transition-colors"
        >
          <ArrowUpDown className="w-3.5 h-3.5" /> Sort by match
        </button>
      </div>

      <div className="divide-y divide-border">
        {sorted.map((c) => (
          <div key={c.id} className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-background/60 transition-colors">
            <div className="w-11 h-11 rounded-full bg-primary/10 text-primary-strong flex items-center justify-center font-bold text-sm shrink-0">
              {c.initials}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-foreground text-sm">{c.name}</span>
                <Badge variant={STATUS_VARIANT[c.status]}>{c.status}</Badge>
              </div>
              <p className="text-xs text-muted font-medium mt-0.5">{c.role} &bull; {c.experience} &bull; <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{c.location}</span></p>
              <p className="text-xs text-muted font-medium mt-1.5 leading-relaxed max-w-2xl">{c.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {c.skills.map((skill) => (
                  <span key={skill} className="text-[10px] font-bold text-foreground bg-background border border-border px-2 py-0.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
              <span className="text-2xl font-display font-bold text-accent">{c.matchScore}%</span>
              <span className="text-[10px] font-mono text-muted uppercase">Match</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
