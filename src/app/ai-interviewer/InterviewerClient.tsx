"use client";

import { useState } from "react";
import InterviewSetup from "@/components/interviewer/InterviewSetup";
import ChatInterview from "@/components/interviewer/ChatInterview";

export default function InterviewerClient() {
  const [session, setSession] = useState<{ roleId: string; difficulty: string } | null>(null);

  return session ? (
    <ChatInterview roleId={session.roleId} difficulty={session.difficulty} onRestart={() => setSession(null)} />
  ) : (
    <InterviewSetup onStart={(roleId, difficulty) => setSession({ roleId, difficulty })} />
  );
}
