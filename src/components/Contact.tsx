"use client";

import { useState } from "react";
import MagneticButton from "./ui/MagneticButton";
import { Mail, MapPin, CheckCircle2, Send, Loader2 } from "lucide-react";

const connectTopics = [
  "AI LMS for My Institution",
  "AI Interviewer",
  "AI Resume Builder",
  "AI Job Portal for My Company",
  "Partnerships",
  "General Inquiry",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full border-b border-border py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 via-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Let&apos;s Talk About Your Rollout.
            </h2>

            <p className="text-sm md:text-base font-medium text-muted leading-relaxed">
              Questions about courses, the AI Interviewer, resume builder, or hiring & shortlisting for your company? Reach out — our team will get back to you.
            </p>

            {/* Quick Topic Badges */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-foreground">
                What Can We Help With
              </h4>
              <div className="flex flex-wrap gap-2">
                {connectTopics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-foreground bg-white border border-border px-3 py-1.5 rounded-full shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Specs */}
            <div className="pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono font-bold text-foreground">
                <Mail className="w-4 h-4 text-primary-strong" />
                <a href="mailto:support@gen-ztechnologies.com" className="hover:text-primary-strong transition-colors font-sans font-semibold">
                  support@gen-ztechnologies.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono font-bold text-accent">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-2xl relative">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">
                  Message Received!
                </h3>
                <p className="text-muted max-w-md text-sm font-medium">
                  Thank you for reaching out to Gen-Z Technologies. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono font-bold text-primary-strong underline hover:text-foreground"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="border-b border-border pb-4">
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="text-xs font-mono font-extrabold mt-1 flex items-center gap-1.5">
                    <span className="text-accent">Learn</span>
                    <span className="text-muted font-normal">&bull;</span>
                    <span className="text-foreground">Practice</span>
                    <span className="text-muted font-normal">&bull;</span>
                    <span className="text-primary-strong">Get Hired</span>
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-mono font-bold text-red-600">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono font-bold text-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono font-bold text-foreground">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono font-bold text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono font-bold text-foreground">Location</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-foreground">Inquiry Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary text-sm text-foreground font-medium"
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-primary-strong text-white text-xs font-bold tracking-wider hover:bg-primary-hover transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
