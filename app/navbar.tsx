"use client";

import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
  isDark?: boolean;
  onToggleTheme?: () => void;
};

export default function Navbar({ isDark = false, onToggleTheme }: NavbarProps) {
  const [localDark, setLocalDark] = useState(isDark);
  const dark = onToggleTheme ? isDark : localDark;

  return (
    <>
      <div className="absolute left-4 top-5 z-20 flex items-center gap-3 text-white sm:left-6 sm:top-7 sm:gap-4">
        <a
          aria-label="LinkedIn"
          className="transition-colors hover:text-[#f3c98b]"
          href="https://www.linkedin.com/in/randila"
          rel="noreferrer"
          target="_blank"
        >
          <svg aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.53-4.69-5.53-2.16 0-3.13 1.19-3.67 2.03V8.5H9.15V21h3.49v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.32V21H21v-7.15Z" />
          </svg>
        </a>
        <a
          aria-label="GitHub"
          className="transition-colors hover:text-[#f3c98b]"
          href="https://github.com/RandilaP"
          rel="noreferrer"
          target="_blank"
        >
          <svg aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.68c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.08-1.39-1.08-1.39-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.28 1.05 2.84.8.09-.62.34-1.05.62-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9.98-2.57-.1-.24-.43-1.21.09-2.53 0 0 .8-.26 2.61.98A9.1 9.1 0 0 1 12 7.1c.81 0 1.63.11 2.4.33 1.81-1.24 2.61-.98 2.61-.98.52 1.32.19 2.29.09 2.53.61.67.98 1.53.98 2.57 0 3.67-2.23 4.48-4.36 4.72.35.3.66.89.66 1.8v2.67c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
          </svg>
        </a>
        <a
          aria-label="Email"
          className="transition-colors hover:text-[#f3c98b]"
          href="mailto:randilamenukapremarathne@gmail.com"
        >
          <svg aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <rect height="15" rx="2" width="18" x="3" y="4.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m4 6 8 6 8-6" />
          </svg>
        </a>
      </div>
      <nav className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center px-4 pb-5 pt-20 sm:px-6 sm:py-8">
        <div className="flex items-center gap-4 text-xs tracking-wide sm:gap-8 sm:text-sm">
          <Link className="transition-colors hover:text-[#f3c98b]" href="/">
            Home
          </Link>
          <Link
            className="transition-colors hover:text-[#f3c98b]"
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className="transition-colors hover:text-[#f3c98b]"
            href="/projects"
          >
            Projects
          </Link>
        </div>
      </nav>
      <button
        type="button"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
        className="absolute right-4 top-5 z-20 flex h-8 w-12 cursor-pointer items-center rounded-full border border-white/60 bg-black/20 p-1 text-white transition-colors hover:border-[#f3c98b] sm:right-6 sm:top-7 sm:w-14"
        onClick={() => {
          setLocalDark((current) => !current);
          onToggleTheme?.();
        }}
      >
        <span
          aria-hidden="true"
          className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#314a3c] shadow-sm transition-transform duration-300 ${
            dark ? "translate-x-4 sm:translate-x-6" : "translate-x-0"
          }`}
        >
          {dark ? (
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3.5" />
              <path strokeLinecap="round" d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}
