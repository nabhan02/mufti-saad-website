"use client";

import { CSSProperties, FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const inputStyle: CSSProperties = {
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  color: "var(--text-primary)",
};

const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.2em] mb-2";
const labelStyle: CSSProperties = { color: "var(--blue-accent)" };
const fieldClass =
  "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function InquiryForm({
  topics,
  topicLabel = "Topic",
  topicPlaceholder = "Select a topic...",
  subjectPrefix,
  messageLabel = "Message",
  messagePlaceholder = "How can we help?",
  submitLabel = "Send Message",
}: {
  topics: string[];
  topicLabel?: string;
  topicPlaceholder?: string;
  subjectPrefix: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!firstName.trim()) return setError("Please enter your name.");
    if (!isValidEmail(email)) return setError("Please enter a valid email address.");
    if (!message.trim()) return setError("Please enter your message.");
    setError("");

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const subject = topic ? `${subjectPrefix} — ${topic}` : subjectPrefix;
    const body = [
      `Name: ${fullName}`,
      `Email: ${email.trim()}`,
      topic ? `${topicLabel}: ${topic}` : null,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 md:p-10 text-center"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          boxShadow: "0 8px 40px oklch(25% 0.055 262 / 0.08)",
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: "oklch(46% 0.1 258 / 0.1)", color: "var(--blue-accent)" }}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Your message is ready to send
        </h3>
        <p
          className="text-sm leading-relaxed mb-2 max-w-md mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Your email app should have opened with your inquiry filled in — just
          press send. If it didn&apos;t open, please email us directly:
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-base font-medium underline underline-offset-4 decoration-1 transition-opacity hover:opacity-80 break-all"
          style={{ color: "var(--blue-accent)" }}
        >
          {CONTACT_EMAIL}
        </a>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            Write another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl p-8 md:p-10"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "0 8px 40px oklch(25% 0.055 262 / 0.08)",
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        <div>
          <label className={labelClass} style={labelStyle}>
            First Name<span style={{ color: "var(--blue-accent)" }}> *</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First"
            className={fieldClass}
            style={inputStyle}
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last"
            className={fieldClass}
            style={inputStyle}
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass} style={labelStyle}>
          Email<span style={{ color: "var(--blue-accent)" }}> *</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={fieldClass}
          style={inputStyle}
          autoComplete="email"
        />
      </div>

      <div className="mb-6">
        <label className={labelClass} style={labelStyle}>
          {topicLabel}
        </label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={fieldClass}
          style={inputStyle}
        >
          <option value="">{topicPlaceholder}</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className={labelClass} style={labelStyle}>
          {messageLabel}<span style={{ color: "var(--blue-accent)" }}> *</span>
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={messagePlaceholder}
          className={`${fieldClass} resize-none`}
          style={inputStyle}
        />
      </div>

      {error && (
        <p
          className="text-sm mb-4"
          role="alert"
          style={{ color: "oklch(55% 0.18 25)" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.01]"
        style={{ background: "var(--navy)", color: "var(--text-on-dark)" }}
      >
        {submitLabel}
      </button>

      <p
        className="text-xs text-center mt-4"
        style={{ color: "var(--text-secondary)" }}
      >
        Submitting opens your email app with the message pre-filled. You can
        also email{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline underline-offset-2"
          style={{ color: "var(--blue-accent)" }}
        >
          {CONTACT_EMAIL}
        </a>{" "}
        directly.
      </p>
    </form>
  );
}
