"use client";

import { useState } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-full bg-[#2D7A54]/10 p-5 sm:px-6 sm:py-4 ring-1 ring-[#2D7A54]/20 w-full max-w-md animate-in fade-in slide-in-from-bottom-2 duration-500">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2D7A54] text-white shrink-0">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <div>
          <p className="text-sm font-bold text-[#1A1A1A]">
            You're in! Check your inbox.
          </p>
          <p className="text-sm text-[#555555]">
            We just sent you a welcome email with a quick question.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {/* Responsive Wrapper: 
        Mobile -> flex-col, rounded-2xl, stacked
        Desktop (sm+) -> flex-row, rounded-full, pill-shape 
      */}
      <div className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 rounded-2xl sm:rounded-full bg-white p-2 sm:p-1.5 ring-1 ring-black/10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] focus-within:ring-2 focus-within:ring-[#2D7A54]/60 transition-all">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 w-full min-w-0 bg-transparent px-4 py-3 sm:px-5 text-[15px] text-[#1A1A1A] placeholder:text-[#888888] focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full sm:w-auto justify-center items-center gap-1.5 rounded-xl sm:rounded-full bg-[#1A1A1A] px-6 py-3.5 sm:py-3 text-sm font-semibold text-white transition-all hover:bg-[#2D7A54] active:scale-95 disabled:opacity-70 disabled:pointer-events-none whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <span>Reserve my spot</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      
      {status === "error" && (
        <p className="mt-2 text-sm text-red-500 font-medium ml-2 sm:ml-4">{errorMessage}</p>
      )}
      <p className="mt-3 text-[13px] text-[#666666] ml-2 sm:ml-4">
        Free to join. Early members get the first 3 months free — no card required.
      </p>
    </form>
  );
}