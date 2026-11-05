"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import Navbar from "./navbar";

const assetsToPreload = [
  "/full-background.webp",
  "/full-background-night.webp",
  "/project.jpeg",
  "/project-night.jpeg",
  "/exp-logo/arimac.svg",
  "/exp-logo/jobhelpers-logo.svg",
  "/exp-logo/sasnaka.svg",
  "/exp-logo/gsoc-logo.svg",
  "/exp-logo/openmrs-logo.svg",
  "/exp-logo/sef-logo.svg",
  "/exp-logo/lsf-logo.svg",
  "/project-img/volunteer-system.webp",
  "/project-img/job-pipeline.webp",
  "/project-img/openmrs-e2e.webp",
  "/project-img/elixir.webp",
  "/project-img/bht-mvp.webp",
  "/project-img/chrome-job.webp",
  "/project-img/scholarx.webp",
  "/project-img/gym.webp",
];

function preloadAsset(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => {
      console.error(`Failed to preload asset: ${src}`);
      resolve();
    };
    image.src = src;
  });
}

export default function LoadingScreen({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let active = true;

    Promise.all([
      ...assetsToPreload.map(preloadAsset),
      document.fonts.ready,
    ]).then(() => {
      if (active) {
        setIsReady(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      {children}
      {!isReady ? (
        <div className="fixed inset-0 z-[100] bg-[#cff3f3] text-[#fffdf5]">
          <Navbar />
          <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <Image
                alt="Totoro loading animation"
                height={160}
                priority
                src="/Totoro.gif"
                width={160}
              />
              <p className="text-xs uppercase tracking-[0.3em] text-[#f3c98b]">
                Loading
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
