"use client";

import { useState } from "react";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { DEFAULT_RESUME, type ResumeData } from "@/components/resume/types";

export default function ResumeBuilderClient() {
  const [data, setData] = useState<ResumeData>(DEFAULT_RESUME);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <ResumeForm data={data} onChange={setData} />
      <div className="lg:sticky lg:top-28">
        <ResumePreview data={data} />
      </div>
    </div>
  );
}
