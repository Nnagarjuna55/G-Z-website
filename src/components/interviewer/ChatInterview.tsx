"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, RotateCcw, Trophy } from "lucide-react";
import { INTERVIEW_QUESTIONS, INTERVIEW_ROLES } from "@/data/interviewQuestions";

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  feedback?: { score: number; text: string };
}

interface ChatInterviewProps {
  roleId: string;
  difficulty: string;
  onRestart: () => void;
}

export default function ChatInterview({ roleId, difficulty, onRestart }: ChatInterviewProps) {
  const questions = INTERVIEW_QUESTIONS[roleId] ?? [];
  const roleLabel = INTERVIEW_ROLES.find((r) => r.id === roleId)?.label ?? "Role";

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [awaitingFollowUp, setAwaitingFollowUp] = useState(false);
  const [finished, setFinished] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (questions.length > 0) {
      setMessages([{ id: "q0", sender: "ai", text: questions[0].question }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isThinking]);

  const scores = messages.filter((m) => m.feedback).map((m) => m.feedback!.score);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  const handleSend = () => {
    if (!input.trim() || isThinking || finished) return;
    const currentQuestion = questions[questionIndex];
    const userMsg: ChatMessage = { id: `u${questionIndex}`, sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      if (!awaitingFollowUp) {
        setMessages((prev) => [...prev, { id: `f${questionIndex}`, sender: "ai", text: currentQuestion.followUp }]);
        setAwaitingFollowUp(true);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `fb${questionIndex}`,
            sender: "ai",
            text: currentQuestion.feedback,
            feedback: { score: currentQuestion.score, text: currentQuestion.feedback },
          },
        ]);
        setAwaitingFollowUp(false);

        const nextIndex = questionIndex + 1;
        if (nextIndex < questions.length) {
          setTimeout(() => {
            setQuestionIndex(nextIndex);
            setMessages((prev) => [...prev, { id: `q${nextIndex}`, sender: "ai", text: questions[nextIndex].question }]);
          }, 900);
        } else {
          setTimeout(() => setFinished(true), 900);
        }
      }
    }, 1100);
  };

  return (
    <div className="bg-white rounded-3xl border border-border shadow-lg max-w-2xl mx-auto flex flex-col h-[600px]">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <p className="text-sm font-bold text-foreground">{roleLabel} Interview</p>
          <p className="text-xs text-muted font-medium">{difficulty} &bull; Question {Math.min(questionIndex + 1, questions.length)} of {questions.length}</p>
        </div>
        <button onClick={onRestart} className="flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary-strong transition-colors">
          <RotateCcw className="w-3.5 h-3.5" /> Restart
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${m.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.sender === "ai" ? "bg-primary/10 text-primary-strong" : "bg-accent/10 text-accent"}`}>
                {m.sender === "ai" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm font-medium ${m.sender === "ai" ? "bg-background border border-border text-foreground rounded-tl-sm" : "bg-primary/5 border border-primary/20 text-foreground rounded-tr-sm"}`}>
                {m.text}
                {m.feedback && (
                  <div className="mt-2 pt-2 border-t border-border flex items-center gap-1.5 text-xs font-mono font-bold text-accent">
                    <Trophy className="w-3.5 h-3.5" /> Score: {m.feedback.score}/100
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isThinking && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary-strong flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-background border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" />
            </div>
          </motion.div>
        )}

        {finished && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center mt-4">
            <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="font-display text-xl font-bold text-foreground mb-1">Interview Complete</p>
            <p className="text-sm text-muted font-medium mb-4">Average Score: <span className="font-bold text-accent">{avgScore}/100</span></p>
            <button onClick={onRestart} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-colors">
              Practice Another Role
            </button>
          </motion.div>
        )}
      </div>

      {!finished && (
        <div className="p-4 border-t border-border flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your answer..."
            disabled={isThinking}
            className="flex-1 px-4 py-3 rounded-full bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium disabled:opacity-60"
          />
          <button
            onClick={handleSend}
            disabled={isThinking || !input.trim()}
            className="w-11 h-11 rounded-full bg-primary-strong text-white flex items-center justify-center shrink-0 hover:bg-primary-hover transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
