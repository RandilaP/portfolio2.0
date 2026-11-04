
export default function Hero() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#314a3c] text-[#fffdf5]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[#1d3028]/45" />

      <nav className="relative z-10 flex w-full max-w-5xl items-center justify-center px-6 py-8">
        <div className="flex items-center gap-8 rounded-full border border-white/35 bg-[#1d3028]/30 px-7 py-3 text-sm tracking-wide backdrop-blur-sm">
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