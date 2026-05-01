"use client";

import { useState, useEffect } from "react";
import { useToast } from "./Toast";

const SIGNUP_KEY = "newsletter_signed_up";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const { show } = useToast();

  useEffect(() => {
    if (sessionStorage.getItem(SIGNUP_KEY) === "true") {
      setSignedUp(true);
    }
  }, []);

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setSignedUp(true);
    sessionStorage.setItem(SIGNUP_KEY, "true");
    show("You're signed up for updates!");
    setEmail("");
  }

  return (
    <footer className="mt-auto bg-gradient-to-b from-white to-[#164551]">
      {/* CTA row */}
      <div className="bg-gradient-to-r from-[#5EB5D5] to-[#4AABBF]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          {signedUp ? (
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-5 w-5 text-white"
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
              <p className="text-center text-xl font-bold text-white sm:text-left">
                Thank you for signing up! We&apos;ll keep you updated.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <h2 className="text-center text-[35px] font-bold leading-tight text-white sm:text-left">
                Sign Up For Updates
              </h2>
              <form
                onSubmit={handleSignUp}
                className="flex w-full max-w-md gap-3 sm:w-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-0 flex-1 rounded-full bg-white/20 px-5 py-3 text-sm text-white placeholder-white/70 outline-none backdrop-blur-sm focus:bg-white/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#04A5C2] transition-opacity hover:opacity-90"
                >
                  Sign up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Bottom row */}
      <div className="px-6 py-10">
        <p className="text-center text-sm text-white">
          2021 &copy; Saritha Rao Rayachoti. Made with Love. Photo credits:{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Unsplash
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
