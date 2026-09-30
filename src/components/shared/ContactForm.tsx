"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send, Loader2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import { Stamp } from "@/components/shared/Stamp";
import { DURATION, EASE } from "@/lib/motion";

type Status = "idle" | "submitting" | "success" | "error";
type Field = "name" | "email" | "phone" | "company" | "service" | "budget" | "message";

const budgets = [
  "$100 – $500 (₹8,000 – ₹42,000)",
  "$500 – $1,000 (₹42,000 – ₹84,000)",
  "$1,000 – $1,500 (₹84,000 – ₹1,25,000)",
  "$1,500 – $2,000 (₹1,25,000 – ₹1,70,000)",
  "$2,000+ (₹1,70,000+)",
];

const systems = [
  "Custom automation",
  "AI voice agents",
  "WhatsApp automation",
  "Chat assistant trained on your docs",
  "Campaign and marketing automation",
  "Lead generation system",
  "Content and SEO automation",
  "Workflow automation",
  "Reporting and analytics",
  "Not sure yet",
];

const EMPTY: Record<Field, string> = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// HIG "Entering data": visible labels, format-only placeholders, validate when a
// field is left (not on every keystroke), errors next to the field that say how
// to fix it, never "oops".
function validate(field: Field, value: string): string | undefined {
  const v = value.trim();
  if (field === "name" && !v) return "Enter your name so we know who to reply to.";
  if (field === "email") {
    if (!v) return "Enter an email address — that's where the reply goes.";
    if (!EMAIL_RE.test(v)) return "Enter an email like name@company.com.";
  }
  if (field === "message" && v.length < 10) return "Describe the workflow in a sentence or two (10+ characters).";
  return undefined;
}

const REQUIRED: Field[] = ["name", "email", "message"];

export function ContactForm() {
  const uid = useId();
  const id = (f: Field) => `${uid}-${f}`;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [serverError, setServerError] = useState<string>();
  const [ticket, setTicket] = useState("");

  function set(field: Field, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // once a field has shown an error, clear it as soon as it's fixed
    if (errors[field] && !validate(field, value)) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function blur(field: Field) {
    if (!REQUIRED.includes(field) || !form[field]) return;
    setErrors((e) => ({ ...e, [field]: validate(field, form[field]) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    for (const f of REQUIRED) next[f] = validate(f, form[f]);
    setErrors(next);
    const firstBad = REQUIRED.find((f) => next[f]);
    if (firstBad) {
      document.getElementById(id(firstBad))?.focus();
      return;
    }

    setStatus("submitting");
    setServerError(undefined);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "The message didn't go through.");
      }
      setTicket(`NV-${String(Date.now()).slice(-4)}`);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        `${err instanceof Error ? err.message : "The message didn't go through."} Try again, or email ${site.contact.email} directly.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center gap-6 py-12 text-center">
        <div className="relative w-full max-w-sm border-[1.5px] border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-8">
          <p className="eyebrow text-[var(--color-fg-subtle)]">Job ticket · {ticket}</p>
          <p className="mt-2 truncate font-display text-lg font-semibold">{form.name}</p>
          <p className="truncate text-callout text-[var(--color-fg-muted)]">{form.service || "New system request"}</p>
          <div className="mt-6 flex justify-center">
            <Stamp size="lg">Received</Stamp>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-title-3 font-semibold">Your request is in the queue.</h3>
          <p className="text-callout text-[var(--color-fg-muted)]">
            A reply lands in {form.email} within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm(EMPTY);
          }}
          className="inline-flex min-h-11 items-center text-callout text-[var(--color-fg-muted)] underline underline-offset-4 hover:text-[var(--color-fg)]"
        >
          Send another request
        </button>
      </div>
    );
  }

  const inputBase = cn(
    "min-h-12 w-full border border-[var(--color-border)] bg-[var(--color-bg)]",
    "px-4 py-3 text-body text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)]",
    "transition-colors duration-150",
    "focus:border-[var(--color-brand)] focus:bg-[var(--color-bg-elev)]",
    "aria-[invalid=true]:border-[var(--color-brand)] aria-[invalid=true]:border-2",
  );
  const labelCls = "eyebrow text-[var(--color-fg-muted)]";

  const errorFor = (f: Field) =>
    errors[f] ? (
      <p id={`${id(f)}-error`} className="text-callout font-medium text-[var(--color-brand)]">
        {errors[f]}
      </p>
    ) : null;

  const fieldProps = (f: Field) => ({
    id: id(f),
    name: f,
    value: form[f],
    onBlur: () => blur(f),
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${id(f)}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <p className="text-callout text-[var(--color-fg-subtle)]">
        Fields marked <span className="text-[var(--color-brand)]">*</span> are required.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("name")} className={labelCls}>
            Name <span className="text-[var(--color-brand)]">*</span>
          </label>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            required
            onChange={(e) => set("name", e.target.value)}
            className={inputBase}
          />
          {errorFor("name")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("email")} className={labelCls}>
            Work email <span className="text-[var(--color-brand)]">*</span>
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="name@company.com"
            onChange={(e) => set("email", e.target.value)}
            className={inputBase}
          />
          {errorFor("email")}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("company")} className={labelCls}>
            Company
          </label>
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            onChange={(e) => set("company", e.target.value)}
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("phone")} className={labelCls}>
            Phone <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            onChange={(e) => set("phone", e.target.value)}
            className={inputBase}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("service")} className={labelCls}>
            What should the system handle?
          </label>
          <div className="relative">
            <select
              {...fieldProps("service")}
              onChange={(e) => set("service", e.target.value)}
              className={cn(inputBase, "cursor-pointer appearance-none pr-11")}
            >
              <option value="">Choose one</option>
              {systems.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-fg-muted)]" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={id("budget")} className={labelCls}>
            Approximate budget
          </label>
          <div className="relative">
            <select
              {...fieldProps("budget")}
              onChange={(e) => set("budget", e.target.value)}
              className={cn(inputBase, "cursor-pointer appearance-none pr-11")}
            >
              <option value="">Choose a range</option>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-fg-muted)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={id("message")} className={labelCls}>
          Which workflow should run itself? <span className="text-[var(--color-brand)]">*</span>
        </label>
        <textarea
          {...fieldProps("message")}
          required
          rows={4}
          placeholder="e.g. Every inbound WhatsApp lead gets qualified and booked into our calendar."
          onChange={(e) => set("message", e.target.value)}
          className={cn(inputBase, "resize-y leading-relaxed")}
        />
        {errorFor("message")}
      </div>

      <AnimatePresence>
        {serverError ? (
          <motion.p
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE }}
            className="border-2 border-[var(--color-brand)] bg-[var(--color-bg)] px-4 py-3 text-callout text-[var(--color-fg)]"
          >
            {serverError}
          </motion.p>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "press group inline-flex min-h-12 items-center justify-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-hard)] transition-colors duration-150",
          "hover:border-[var(--color-brand-strong)] hover:bg-[var(--color-brand-strong)]",
          "disabled:cursor-progress disabled:opacity-80",
        )}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending your request…
          </>
        ) : (
          <>
            Send request
            <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}
