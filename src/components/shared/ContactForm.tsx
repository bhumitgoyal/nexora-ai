"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const budgets = [
  "$100 – $500 (₹8,000 – ₹42,000)",
  "$500 – $1,000 (₹42,000 – ₹84,000)",
  "$1,000 – $1,500 (₹84,000 – ₹1,25,000)",
  "$1,500 – $2,000 (₹1,25,000 – ₹1,70,000)",
  "$2,000+ (₹1,70,000+)",
];

const services = [
  "Custom Automation / Service",
  "AI Voice Agents",
  "WhatsApp Automation",
  "Chatbot / AI Assistant",
  "Campaign and Marketing Automation",
  "Lead Generation System",
  "Content and SEO Automation",
  "Workflow Automation",
  "Reporting and Analytics",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  function set(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Request failed");
      }
      setStatus("success");
      toast.success("Message received!", {
        description: "We'll reply within one business day with a no-fluff perspective.",
      });
    } catch (err) {
      setStatus("error");
      toast.error("Something went wrong.", {
        description: err instanceof Error ? err.message : "Try emailing us directly at hello@nuvero.space",
      });
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-12 text-center">
        <span className="inline-flex size-14 items-center justify-center border-2 border-[var(--color-success)] text-[var(--color-success)]">
          <CheckCircle2 className="size-7" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            Message received!
          </h3>
          <p className="text-sm text-[var(--color-fg-muted)]">
            We&apos;ll reply within one business day with a no-fluff perspective.
          </p>
        </div>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}
          className="text-xs text-[var(--color-fg-subtle)] underline underline-offset-4 hover:text-[var(--color-fg-muted)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputBase = cn(
    "w-full border border-[var(--color-border)] bg-[var(--color-bg)]",
    "px-4 py-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)]",
    "outline-none transition-all duration-150",
    "focus:border-[var(--color-brand)] focus:bg-[var(--color-bg-elev)]",
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
            Name <span className="text-[var(--color-brand)]">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Bhumit Goyal"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
            Email <span className="text-[var(--color-brand)]">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputBase}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
          Company / Project
        </label>
        <input
          type="text"
          placeholder="Acme Corp"
          value={form.company}
          onChange={(e) => set("company", e.target.value)}
          className={inputBase}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
            Service interested in
          </label>
          <select
            value={form.service}
            onChange={(e) => set("service", e.target.value)}
            className={cn(inputBase, "cursor-pointer appearance-none")}
          >
            <option value="" disabled>Pick one…</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[var(--color-bg-elev)]">{s}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
            Approximate budget
          </label>
          <select
            value={form.budget}
            onChange={(e) => set("budget", e.target.value)}
            className={cn(inputBase, "cursor-pointer appearance-none")}
          >
            <option value="" disabled>Range…</option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-[var(--color-bg-elev)]">{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
          What do you want AI to own? <span className="text-[var(--color-brand)]">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe the workflow, the current pain, and what a win looks like for you…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className={cn(inputBase, "resize-none leading-relaxed")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "group inline-flex items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-150",
          "hover:bg-[var(--color-brand-strong)] hover:border-[var(--color-brand-strong)]",
          "disabled:opacity-60 disabled:cursor-not-allowed",
        )}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
