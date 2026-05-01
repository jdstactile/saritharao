"use client";

import { useEffect } from "react";

export default function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.open(url, "_blank", "noopener,noreferrer");
    window.history.back();
  }, [url]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <svg
            className="h-6 w-6 text-accent animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500">Opening article in a new tab...</p>
      </div>
    </main>
  );
}
