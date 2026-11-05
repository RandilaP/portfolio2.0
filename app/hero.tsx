
"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Backend Systems & Architecture",
    description:
      "Engineering scalable microservices, custom data infrastructures, and resilient APIs for high-paced fintech and data-heavy applications.",
    technologies: ["Java", "Spring Boot", "Python", "AWS", "Kubernetes", "Docker"],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Developing dynamic frontends, interactive dashboards, and complete web systems using modern JavaScript frameworks and tactile UIs.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    title: "AI Integration & Data Pipelines",
    description:
      "Building automated processing pipelines, intelligent OCR document digitization, and integrating LLMs for advanced data analysis.",
    technologies: ["OpenAI", "FastAPI", "OpenCV", "Playwright", "Web Scraping"],
  },
];

const experiences = [
  {
    role: "Java Backend Software Engineer - FinTech",
    company: "Arimac Lanka Digital",
    duration: "Aug. 2025 - Oct. 2025",
    location: "Colombo, Sri Lanka",
    achievements: [
      "Accomplished seamless feature delivery for a Buy Now, Pay Later (BNPL) fintech application in the Qatar market by developing Java backend services within a high-paced microservices architecture.",
      "Accomplished high system reliability for a product serving 200k+ users by collaborating with cross-functional QA and DevOps teams to provide active deployment and support.",
    ],
  },
  {
    role: "Backend Software Engineer",
    company: "The Jobhelpers",
    duration: "Sep. 2024 - Present",
    location: "Remote, USA",
    achievements: [
      "Developed and deployed a custom job scraping infrastructure that bypassed platform security and rate limits, increasing the job database from 20,000+ to over 1 million listings, reducing third-party API costs by 100%.",
      "Implemented a robust system email architecture and automated email campaigns, stabilizing transactional email flows that previously failed under load, leading to a 100% delivery rate.",
      "Built a Chrome extension to analyze job descriptions from LinkedIn, Glassdoor, and Indeed, integrating with internal ATS scoring for real-time feedback to job seekers.",
    ],
  },
  {
    role: "Software Engineering Intern (Full Stack)",
    company: "The Jobhelpers",
    duration: "June 2024 - Sep. 2024",
    location: "Remote, USA",
    achievements: [
      "Developed features for internal dashboards and resume scoring platforms using React, Tailwind CSS, and Node.js.",
      "Integrated OpenAI's LLMs to enhance job description analysis and resume matching accuracy, improving candidate-to-job alignment by over 35%.",
      "Built dynamic PDF generation for ATS reports and user profiles using React and Node.js, leading to a 25% boost in report downloads by job seekers.",
    ],
  },
  {
    role: "Tech Lead",
    company: "Volunteer Sasnaka Sansada",
    duration: "Dec. 2024 - Present (On Hold)",
    location: "Remote, Sri Lanka",
    achievements: [
      "Spearheaded the design and development of a full-stack volunteer management system using Next.js and Supabase, enabling streamlined member registration, project tracking, and team coordination for 200+ volunteers across Sri Lanka.",
      "Led and mentored a cross-functional team of 10+ undergraduate developers from diverse universities, delivering over 50% of the MVP under agile sprints before project hold.",
    ],
  },
  {
    role: "Google Summer of Code - Developer",
    company: "Google Summer of Code",
    duration: "May. 2023 - Sept. 2023",
    location: "Remote, USA",
    achievements: [
      "Extended end-to-end test coverage for the OpenMRS 3.0 Reference Application using Playwright and Cucumber, improving UI regression test reliability by 60% and accelerating release cycles for a platform serving healthcare providers in 40+ countries.",
    ],
  },
  {
    role: "Dev/2/Developer",
    company: "OpenMRS",
    duration: "June 2022 - Present",
    location: "Remote, USA",
    achievements: [
      "Contributed to core platform improvements and module maintenance, including QA automation and REST API enhancements, supporting mission-critical health systems used in 40+ countries.",
    ],
  },
  {
    role: "Contributor",
    company: "Sustainable Education Foundation",
    duration: "June 2022 - June 2023",
    location: "Remote, Sri Lanka",
    achievements: [
      "Contributed to the development of SEF's learning platform by building and refining frontend components with React and Tailwind CSS, improving platform usability and supporting thousands of Sri Lankan students in accessing mentorship and educational resources.",
    ],
  },
  {
    role: "Contributor",
    company: "Lanka Software Foundation",
    duration: "June 2022 - Jan. 2023",
    location: "Remote, Sri Lanka",
    achievements: [
      "Developed responsive frontend interfaces using React and Tailwind CSS for Elixir, a crisis-response platform aiding pharmaceutical donations during Sri Lanka's economic crisis, helping streamline access to life-saving medication for thousands of patients.",
    ],
  },
];

const companyLogos: Record<string, string> = {
  "Arimac Lanka Digital": "/exp-logo/arimac.svg",
  "The Jobhelpers": "/exp-logo/jobhelpers-logo.svg",
  "Volunteer Sasnaka Sansada": "/exp-logo/sasnaka.svg",
  "Google Summer of Code": "/exp-logo/gsoc-logo.svg",
  OpenMRS: "/exp-logo/openmrs-logo.svg",
  "Sustainable Education Foundation": "/exp-logo/sef-logo.svg",
  "Lanka Software Foundation": "/exp-logo/lsf-logo.svg",
};

export default function Hero() {
  const pageRef = useRef<HTMLElement>(null);
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 35,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".section-content").forEach((section) => {
        gsap.from(section, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".experience-item").forEach((item) => {
        gsap.from(item, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.from(".projects-content", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-content",
          start: "top 85%",
          once: true,
        },
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  return (
    <main
      className="relative overflow-hidden bg-[#314a3c] text-[#314a3c]"
      ref={pageRef}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-top bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: "url('/full-background.webp')",
          backgroundSize: "100% 100%",
          opacity: isDark ? 0 : 1,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-top bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: "url('/full-background-night.webp')",
          backgroundSize: "100% 100%",
          opacity: isDark ? 1 : 0,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-black/20"
      />
      <div className="relative z-10">
      <div className="relative flex min-h-screen flex-col items-center overflow-hidden text-[#fffdf5]">
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
          <div className="hero-content max-w-3xl">
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
      </div>

      <section
        className="relative isolate min-h-screen overflow-hidden px-6 py-32 sm:px-10 lg:px-16"
        id="about"
      >
        <div className="section-content relative z-10 mx-auto max-w-7xl">
          <div className="text-center text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f3c98b]">
              What I do
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
              Building useful things with a little bit of magic.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
              Thoughtful engineering across backend systems, web experiences,
              intelligent workflows, and data-rich applications.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                className="h-full rounded-3xl border border-white/35 bg-[#1d3028]/35 p-6 text-white backdrop-blur-sm"
                key={service.title}
              >
                <div className="flex h-full items-start gap-4">
                  <span className="mt-1 text-sm text-[#f3c98b]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/85">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.technologies.map((technology) => (
                        <span
                          className="rounded-full border border-dotted border-white/70 px-3 py-1 text-xs text-white"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate min-h-screen overflow-hidden px-6 pb-32 pt-40 text-white sm:px-10 lg:px-16"
        id="experience"
      >
        <div className="section-content relative z-20 mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3c98b]">
            Experience
          </p>
          <h2 className="mt-3 text-4xl tracking-wide sm:text-6xl">
            A path shaped by curiosity
          </h2>
        </div>
        <div className="relative z-10 mx-auto mt-16 max-w-5xl">
          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-white/40 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-16 sm:space-y-24">
            {experiences.map((experience, index) => (
              <article
                className={`experience-item relative w-full pl-12 sm:w-1/2 sm:pl-0 ${
                  index % 2 === 0
                    ? "sm:pr-16 sm:text-right"
                    : "sm:ml-auto sm:pl-16"
                }`}
                key={`${experience.company}-${experience.role}`}
              >
                <div
                  className={`absolute top-0 z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#f3c98b] bg-white shadow-sm ${
                    index % 2 === 0
                      ? "left-0 sm:-right-5 sm:left-auto"
                      : "left-0 sm:-left-5"
                  }`}
                >
                  <Image
                    alt={`${experience.company} logo`}
                    className="h-full w-full rounded-full object-cover"
                    height={40}
                    src={companyLogos[experience.company]}
                    width={40}
                  />
                </div>
                <p className="text-sm uppercase tracking-[0.15em] text-[#f3c98b]">
                  {experience.company}
                </p>
                <h3
                  className={`mt-2 text-2xl sm:text-3xl ${
                    isDark ? "text-[#fff7df]" : "text-white"
                  }`}
                >
                  {experience.role}
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  {experience.duration} · {experience.location}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-white/85">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </article>
            ))}
            </div>
          </div>
        </div>
      </section>
      <footer
        className="relative isolate overflow-hidden px-6 py-24 text-center text-white sm:px-10"
        id="projects"
      >
        <div className="projects-content relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f3c98b]">
            Next stop
          </p>
          <a
            className="mt-4 inline-flex items-center gap-3 border-b border-dotted border-[#f3c98b] pb-2 text-2xl tracking-wide transition-colors hover:text-[#f3c98b] sm:text-4xl"
            href="#projects"
          >
            Explore my projects
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h13m-5-5 5 5-5 5"
              />
            </svg>
          </a>
          <div
            aria-hidden="true"
            className="my-16 border-t border-white/25"
          />
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-white/70">
            © Randila Premarathne
          </p>
        </div>
      </footer>
      </div>
    </main>
  );
}