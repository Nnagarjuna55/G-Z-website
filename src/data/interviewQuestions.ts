export interface InterviewRole {
  id: string;
  label: string;
}

export interface InterviewQuestion {
  question: string;
  followUp: string;
  feedback: string;
  score: number;
}

export const INTERVIEW_ROLES: InterviewRole[] = [
  { id: "frontend", label: "Frontend Engineer" },
  { id: "backend", label: "Backend Engineer" },
  { id: "data", label: "Data Analyst" },
  { id: "pm", label: "Product Manager" },
];

export const INTERVIEW_DIFFICULTIES = ["Beginner", "Intermediate", "Advanced"] as const;

export const INTERVIEW_QUESTIONS: Record<string, InterviewQuestion[]> = {
  frontend: [
    {
      question: "Walk me through how you'd optimize a React app that's re-rendering too often.",
      followUp: "Good start — can you say more about how you'd actually measure the re-renders before fixing them?",
      feedback: "Strong structure. You named memoization and key-based reconciliation — next time, lead with how you'd profile first.",
      score: 82,
    },
    {
      question: "Tell me about a time you had to make a tradeoff between shipping speed and code quality.",
      followUp: "What would you do differently if you had one more day before that deadline?",
      feedback: "Clear STAR structure and a believable tradeoff. Quantify the impact next time — e.g. how much time it actually saved.",
      score: 78,
    },
    {
      question: "How would you explain the CSS box model to a junior developer?",
      followUp: "Nice. How does box-sizing: border-box change that explanation?",
      feedback: "Accurate and clearly sequenced. A quick diagram reference would make this land even faster in a live interview.",
      score: 88,
    },
  ],
  backend: [
    {
      question: "How would you design a rate limiter for a public API?",
      followUp: "What happens at the edge case where multiple requests arrive in the same millisecond?",
      feedback: "Good coverage of token bucket vs sliding window. Be ready to discuss distributed rate limiting across multiple servers.",
      score: 80,
    },
    {
      question: "Describe a bug that was especially hard to track down. What was your process?",
      followUp: "What monitoring or logging would have caught this sooner?",
      feedback: "Solid debugging narrative. Naming the specific tool you used to isolate it would add credibility.",
      score: 76,
    },
    {
      question: "When would you choose a message queue over a direct API call between two services?",
      followUp: "What failure mode does that introduce that a direct call doesn't have?",
      feedback: "Correct core reasoning on decoupling and backpressure. Mention idempotency next time — it's usually the follow-up.",
      score: 84,
    },
  ],
  data: [
    {
      question: "How do you decide whether a change in a metric is signal or noise?",
      followUp: "What sample size would make you confident in that call?",
      feedback: "Good instinct toward statistical significance. Naming a specific test (e.g. t-test) would sharpen this further.",
      score: 79,
    },
    {
      question: "Walk me through how you'd investigate a sudden drop in conversion rate.",
      followUp: "Which segment would you check first, and why?",
      feedback: "Logical funnel-based approach. Consider mentioning how you'd rule out a tracking/instrumentation bug first.",
      score: 81,
    },
    {
      question: "How do you communicate a nuanced statistical result to a non-technical stakeholder?",
      followUp: "Can you give a concrete example of a chart you'd use for that?",
      feedback: "Clear plain-language framing. Leading with the business implication before the method builds even more trust.",
      score: 85,
    },
  ],
  pm: [
    {
      question: "How would you prioritize a backlog with three high-impact but conflicting feature requests?",
      followUp: "How do you bring the deprioritized stakeholders back on board?",
      feedback: "Good use of an impact/effort framework. Naming the framework explicitly (e.g. RICE) makes this land faster.",
      score: 77,
    },
    {
      question: "Tell me about a product decision you made that didn't work out.",
      followUp: "What signal would have told you earlier that it wasn't working?",
      feedback: "Honest and specific. Strong answers here always end with the process change you made afterward — you did that well.",
      score: 83,
    },
    {
      question: "How do you write a success metric for a feature before it ships?",
      followUp: "What's your fallback if that metric turns out to be un-trackable?",
      feedback: "Clear grasp of leading vs lagging indicators. Consider anchoring the metric to a specific user behavior next time.",
      score: 80,
    },
  ],
};
