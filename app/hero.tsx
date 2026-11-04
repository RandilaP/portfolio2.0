
"use client";

import { useState } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#314a3c] text-[#fffdf5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: "url('/hero.jpeg')",
          opacity: isDark ? 0 : 1,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: "url('/hero_night.jpeg')",
          opacity: isDark ? 1 : 0,
        }}
      />
      <nav className="relative z-10 flex w-full max-w-5xl items-center justify-center px-6 py-8">
        <div className="flex items-center gap-8 text-sm tracking-wide">
          <a className="transition-colors hover:text-[#f3c98b]" href="#home">
            Home
          </a>
          <a
            className="transition-colors hover:text-[#f3c98b]"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="transition-colors hover:text-[#f3c98b]"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </nav>
      <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={isDark}
        className="absolute right-6 top-7 z-20 flex h-8 w-14 cursor-pointer items-center rounded-full border border-white/60 bg-black/20 p-1 text-white transition-colors hover:border-[#f3c98b]"
        onClick={() => setIsDark((current) => !current)}
      >
        <span
          aria-hidden="true"
          className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#314a3c] shadow-sm transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {isDark ? (
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="3.5" />
              <path
                strokeLinecap="round"
                d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"
              />
            </svg>
          )}
        </span>
      </button>

      <section
        className="relative z-10 flex flex-1 items-center justify-center px-6 pb-24 text-center"
        id="home"
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#f3c98b]">
            Software engineer
          </p>
          <h1 className="text-5xl leading-tight tracking-wide sm:text-7xl">
            Randila Premarathne
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-2xl">
            Software engineer, AI engineering, data pipelines, and
            bioinformatics.
          </p>
        </div>
      </section>
    </main>
  );
}