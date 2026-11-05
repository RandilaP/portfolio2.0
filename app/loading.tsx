import Image from "next/image";
import Navbar from "./navbar";

export default function Loading() {
  return (
    <main className="relative min-h-screen bg-[#CFF3F3] text-[#fffdf5]">
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
    </main>
  );
}
