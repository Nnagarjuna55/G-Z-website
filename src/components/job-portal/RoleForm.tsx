"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";

const FIELD_CLASS =
  "w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium";
const LABEL_CLASS = "text-xs font-mono font-bold text-foreground mb-1.5 block";

interface RoleFormProps {
  onPosted: () => void;
}

export default function RoleForm({ onPosted }: RoleFormProps) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onPosted();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-border shadow-lg p-8 space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-foreground text-lg">Post a Role</h3>
        <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-primary-strong">
          <Sparkles className="w-3.5 h-3.5" /> AI-screened
        </span>
      </div>

      <div>
        <label className={LABEL_CLASS}>Role Title</label>
        <input required className={FIELD_CLASS} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Senior Frontend Engineer" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={LABEL_CLASS}>Experience Level</label>
          <select className={FIELD_CLASS} defaultValue="Mid">
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
            <option>Lead</option>
          </select>
        </div>
        <div>
          <label className={LABEL_CLASS}>Work Type</label>
          <select className={FIELD_CLASS} defaultValue="Remote">
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS}>Must-Have Skills</label>
        <input className={FIELD_CLASS} placeholder="e.g. React, TypeScript, System Design" />
      </div>

      <div>
        <label className={LABEL_CLASS}>Role Description</label>
        <textarea rows={3} className={FIELD_CLASS} placeholder="Briefly describe the role and responsibilities" />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors shadow-lg disabled:opacity-75"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> <span>AI is screening candidates...</span>
          </>
        ) : (
          <span>Post Role & Get AI Shortlist</span>
        )}
      </button>
    </form>
  );
}
