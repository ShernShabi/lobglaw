"use client";

import { useState } from "react";

import config from "@/site.config";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  practiceArea: string;
  honeypot: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const practiceAreaOptions = [
  "Constitutional Law",
  "Civil Rights Litigation",
  "Anti-SLAPP Litigation",
  "Appeals",
  "General Inquiry",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="mt-1 block text-xs text-red-500">{message}</span>;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    practiceArea: practiceAreaOptions[0]!,
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full border-b bg-transparent py-4 text-lg text-neutral-900 outline-none transition-all duration-300 placeholder:text-neutral-400";
  const inputNormal = `${inputBase} border-neutral-300 focus:border-[var(--color-accent)]`;
  const inputError = `${inputBase} border-red-400`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
          <svg
            className="h-7 w-7 text-[var(--color-accent)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-[family-name:var(--font-serif)] text-2xl font-semibold text-neutral-900">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-neutral-700">
          We&apos;ll be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, bots may fill it */}
      <input
        name="honeypot"
        value={form.honeypot}
        onChange={set("honeypot")}
        className="pointer-events-none absolute opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Name */}
          <div className="grid gap-1">
            <label className="text-xs font-medium uppercase tracking-widest text-neutral-800">
              Name <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              value={form.name}
              onChange={set("name")}
              className={errors.name ? inputError : inputNormal}
              placeholder="Your full name"
              autoComplete="name"
            />
            <FieldError message={errors.name} />
          </div>

          {/* Email */}
          <div className="grid gap-1">
            <label className="text-xs font-medium uppercase tracking-widest text-neutral-800">
              Email <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              value={form.email}
              onChange={set("email")}
              type="email"
              className={errors.email ? inputError : inputNormal}
              placeholder="you@example.com"
              autoComplete="email"
            />
            <FieldError message={errors.email} />
          </div>

          {/* Phone */}
          <div className="grid gap-1">
            <label className="text-xs font-medium uppercase tracking-widest text-neutral-800">
              Phone{" "}
              <span className="text-neutral-400 normal-case tracking-normal font-normal">
                (optional)
              </span>
            </label>
            <input
              value={form.phone}
              onChange={set("phone")}
              type="tel"
              className={inputNormal}
              placeholder="(555) 555-5555"
              autoComplete="tel"
            />
          </div>

          {/* Practice Area */}
          <div className="grid gap-1">
            <label className="text-xs font-medium uppercase tracking-widest text-neutral-800">
              {config.serviceLabel}
            </label>
            <select
              value={form.practiceArea}
              onChange={set("practiceArea")}
              className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg text-neutral-900 outline-none transition-all duration-300 focus:border-[var(--color-accent)]"
            >
              {practiceAreaOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="grid gap-1 sm:col-span-2">
            <label className="text-xs font-medium uppercase tracking-widest text-neutral-800">
              Message <span className="text-[var(--color-accent)]">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={set("message")}
              className={`min-h-44 resize-y ${errors.message ? inputError : inputNormal}`}
              placeholder="Tell us what's going on and how we can help."
            />
            <FieldError message={errors.message} />
          </div>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try again or email us directly at{" "}
            <a href={`mailto:${config.email}`} className="underline">
              {config.email}
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] py-4 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.01] hover:opacity-90 disabled:opacity-60 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        <p className="text-xs leading-relaxed text-neutral-500">
          By submitting, you agree to be contacted about your inquiry. This
          form does not create an attorney-client relationship.
        </p>
      </div>
    </form>
  );
}
