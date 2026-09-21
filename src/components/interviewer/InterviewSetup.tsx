"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { INTERVIEW_ROLES, INTERVIEW_DIFFICULTIES } from "@/data/interviewQuestions";

interface InterviewSetupProps {
  onStart: (roleId: string, difficulty: string) => void;
}

export default function InterviewSetup({ onStart }: InterviewSetupProps) {
  const [role, setRole] = useState(INTERVIEW_ROLES[0].id);
  const [difficulty, setDifficulty] = useState<string>(INTERVIEW_DIFFICULTIES[1]);

  return (
    <div className="bg-white rounded-3xl border border-border shadow-lg p-8 sm:p-10 max-w-xl mx-auto">
      <h2 className="font-display text-2xl font-bold text-foreground mb-1">Start a Mock Interview</h2>
      <p className="text-sm text-muted font-medium mb-8">Choose a role and difficulty — the AI Interviewer adapts its questions to match.</p>

      <div className="mb-6">
        <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-3 block">Role</span>
        <div className="grid grid-cols-2 gap-2.5">
          {INTERVIEW_ROLES.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-bold border transition-colors text-left",
                role === r.id ? "bg-primary-strong text-white border-primary" : "bg-background text-foreground border-border hover:border-primary/50"
              )}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider mb-3 block">Difficulty</span>
        <div className="flex gap-2.5">
          {INTERVIEW_DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={cn(
                "flex-1 px-4 py-3 rounded-xl text-sm font-bold border transition-colors",
                difficulty === d ? "bg-accent text-white border-accent" : "bg-background text-foreground border-border hover:border-accent/50"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => onStart(role, difficulty)}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg"
      >
        <span>Start Mock Interview</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
