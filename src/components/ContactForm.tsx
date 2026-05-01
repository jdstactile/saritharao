"use client";

import { useState, useEffect } from "react";

const SESSION_KEY = "contact_form_submitted";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setSubmitted(true);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSending(true);

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:rao.saritha@gmail.com?subject=${subject}&body=${body}`;

    // Mark as submitted after a short delay to let mailto open
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 500);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-accent/5 px-8 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <svg
            className="h-8 w-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-primary">Thank You!</h3>
        <p className="max-w-sm text-base text-primary/70">
          Your email client should have opened with the message. Please send it
          to complete your inquiry. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-8 text-[32px] font-bold text-primary">
        Leave a Message
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-black/10 bg-white px-5 py-3 text-primary outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-black/10 bg-white px-5 py-3 text-primary outline-none focus:border-accent"
          />
        </div>
        <textarea
          placeholder="Message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-black/10 bg-white px-5 py-3 text-primary outline-none focus:border-accent"
        />
        <button
          type="submit"
          disabled={sending}
          className="self-start rounded-full bg-accent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary disabled:opacity-50"
        >
          {sending ? "Opening email..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
