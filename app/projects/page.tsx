"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../navbar";

const projects = [
  {
    entryNumber: "01",
    title: "Volunteer Management System",
    award: "Full Stack App",
    description:
      "Built with Next.js and Supabase, this platform supports 200+ active volunteers with role management, progress tracking, and real-time updates.",
    imageSrc: "/project-img/volunteer-system.webp",
    demoLink: "https://www.sasnaka.randila.com",
    githubLink: "https://github.com/RandilaP/sasnaka-platform",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    entryNumber: "02",
    title: "AI Resume Pipeline",
    award: "Automation Project",
    description:
      "A serverless data pipeline that extracts and analyzes resume data with OpenAI, sends structured results through SendGrid, and uploads them to S3.",
    imageSrc: "/project-img/job-pipeline.webp",
    demoLink: "https://metana-job-pipeline.vercel.app/",
    githubLink: "https://github.com/RandilaP/metana-job-pipeline",
    techStack: ["Next.js", "OpenAI", "Amazon S3"],
  },
  {
    entryNumber: "03",
    title: "OpenMRS E2E Automation",
    award: "GSoC 2023",
    description:
      "Extended Playwright and Cucumber test coverage for OpenMRS 3.0 RefApp, improving QA automation reliability for a global healthcare platform.",
    imageSrc: "/project-img/openmrs-e2e.webp",
    demoLink: "https://www.openmrs.org",
    githubLink: "https://github.com/openmrs/openmrs-esm-patient-chart",
    techStack: ["Playwright", "TypeScript"],
  },
  {
    entryNumber: "04",
    title: "Project Elixir",
    award: "Volunteer Crisis Response",
    description:
      "Worked on a crisis-response platform that helped NGOs manage pharmaceutical donations and requests during Sri Lanka's economic crisis.",
    imageSrc: "/project-img/elixir.webp",
    demoLink: "https://www.elixir.lk",
    githubLink: "https://github.com/LSFLK/MedicinesforLK",
    techStack: ["React", "Tailwind CSS"],
  },
  {
    entryNumber: "05",
    title: "BedHead Ticket Automation",
    award: "Healthcare OCR",
    description:
      "Digitizes handwritten hospital Bed Head Tickets using OCR, OpenCV, and NLP with a modern Next.js interface for hospitals.",
    imageSrc: "/project-img/bht-mvp.webp",
    demoLink: "https://bht-extraction.vercel.app/",
    githubLink: "https://github.com/RandilaP/bht-extraction",
    techStack: ["Python", "OpenCV", "Next.js"],
  },
  {
    entryNumber: "06",
    title: "Chrome Extension for Job Insights",
    award: "Browser Extension",
    description:
      "A Chrome extension that analyzes job listings and gives real-time ATS feedback with AI for job seekers and resume matching.",
    imageSrc: "/project-img/chrome-job.webp",
    demoLink:
      "https://chromewebstore.google.com/detail/jobpromax-find-your-dream/bmjenpefcodngbhgmlegfiflgalgkmgm",
    techStack: ["JavaScript", "Tailwind CSS"],
  },
  {
    entryNumber: "07",
    title: "ScholarX Mentorship Platform",
    award: "Mentorship App",
    description:
      "Contributed frontend components for SEF's mentorship app, improving accessibility and engagement for more than 1,000 students and mentors.",
    imageSrc: "/project-img/scholarx.webp",
    demoLink: "https://scholarx.sefglobal.org/",
    githubLink: "https://github.com/sef-global/scholarx-frontend",
    techStack: ["React", "Bootstrap"],
  },
  {
    entryNumber: "08",
    title: "Gym Management System",
    award: "Full Stack Project",
    description:
      "A platform for gym memberships, payments, and admin workflows built with Supabase and React PDF export.",
    imageSrc: "/project-img/gym.webp",
    demoLink: "https://gym-project-uat.vercel.app/",
    techStack: ["Next.js", "Supabase"],
  },
];

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#314a3c] text-[#fffdf5]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: "url('/project.jpeg')",
          backgroundPosition: "center top",
          opacity: isDark ? 0 : 1,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: "url('/project-night.jpeg')",
          backgroundPosition: "center top",
          opacity: isDark ? 1 : 0,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-black/35"
      />
      <div className="relative z-10">
        <Navbar
          isDark={isDark}
          onToggleTheme={() => setIsDark((current) => !current)}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
          <section className="mx-auto max-w-3xl py-20 text-center sm:py-32">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3c98b]">
              Selected work
            </p>
            <h1 className="mt-4 text-4xl leading-tight tracking-wide sm:text-7xl">
              Projects built with curiosity
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              A collection of products, platforms, and experiments across web
              engineering, automation, AI, and healthcare technology.
            </p>
          </section>

          <section className="grid gap-8 pb-24 md:grid-cols-2">
            {projects.map((project) => (
              <article
                className="overflow-hidden rounded-3xl border border-white/30 bg-[#1d3028]/55 shadow-2xl backdrop-blur-sm"
                key={project.entryNumber}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    alt={`${project.title} project preview`}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src={project.imageSrc}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-[#314a3c]/85 px-3 py-1 text-xs tracking-[0.2em] text-[#f3c98b]">
                    {project.entryNumber}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3c98b]">
                    {project.award}
                  </p>
                  <h2 className="mt-3 text-2xl tracking-wide sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((technology) => (
                      <span
                        className="rounded-full border border-dotted border-white/65 px-3 py-1 text-xs text-white/90"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-5 text-sm">
                    <a
                      className="border-b border-dotted border-[#f3c98b] pb-1 text-[#f3c98b] transition-colors hover:text-white"
                      href={project.demoLink}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Live project →
                    </a>
                    {project.githubLink ? (
                      <a
                        className="border-b border-dotted border-white/60 pb-1 text-white/85 transition-colors hover:text-[#f3c98b]"
                        href={project.githubLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Source code →
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </section>
          <footer className="border-t border-white/25 py-10 text-center text-sm text-white/75">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.linkedin.com/in/randila" rel="noreferrer" target="_blank">LinkedIn</a>
              <a href="https://github.com/RandilaP" rel="noreferrer" target="_blank">GitHub</a>
              <a href="mailto:randilamenukapremarathne@gmail.com">Email</a>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em]">© Randila Premarathne</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
