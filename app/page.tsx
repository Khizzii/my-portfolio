"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 flex items-center justify-center p-6">
      <section className="max-w-5xl mx-auto flex flex-col items-start gap-6">
        <div className="space-y-2">
          <p className="text-blue-400 font-mono">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Khizar Iqbal Fazil.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400">
            I build scalable web & AI solutions.
          </h2>
        </div>
        <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
          6th-semester CS student at SZABIST. Specializing in MERN and Laravel 12.
        </p>
        <div className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md">
          Website Live! Icons Loading Next...
        </div>
      </section>
    </main>
  );
}