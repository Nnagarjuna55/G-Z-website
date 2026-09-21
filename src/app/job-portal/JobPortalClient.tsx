"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoleForm from "@/components/job-portal/RoleForm";
import CandidateTable from "@/components/job-portal/CandidateTable";

export default function JobPortalClient() {
  const [posted, setPosted] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5">
        <RoleForm onPosted={() => setPosted(true)} />
      </div>
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          {posted ? (
            <motion.div key="results" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <CandidateTable />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full min-h-[300px] flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-dashed border-border p-10"
            >
              <p className="font-display text-lg font-bold text-foreground mb-2">Your Shortlist Appears Here</p>
              <p className="text-sm text-muted font-medium max-w-sm">
                Post a role on the left and the AI will screen, score, and rank candidates by fit.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
