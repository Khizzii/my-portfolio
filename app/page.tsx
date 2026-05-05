"use client";

import { ProjectCard } from "@/components/ProjectCard"; 

export default function Home() {
  
  const projectsData = [
    {
      title: "Laravel E-Commerce Platform",
      description: "A full-featured e-commerce system built with Laravel 12. Features secure user authentication, shopping cart management, product catalog, and a streamlined checkout process using an MVC architecture.",
      tags: ["Laravel 12", "PHP", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/Khizzii/laravel-ecommerce" 
    },
    {
      title: "AutoFix - Service Architecture",
      description: "A course registration and management system developed during my Software Construction & Development course. Built using a service-based architecture to ensure scalability and maintainable code.",
      tags: ["Laravel", "Service Architecture", "PHP", "MySQL"],
      githubLink: "https://github.com/Khizzii/AutoFix-SCD-Project" 
    },
    {
      title: "OS Concurrency Simulator",
      description: "A C-based system simulating course registration to demonstrate operating system fundamentals. Implemented pthreads and semaphores to handle concurrent user requests without data corruption or deadlocks.",
      tags: ["C", "pthreads", "Semaphores", "Linux OS"],
      githubLink: "https://github.com/Khizzii" 
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 overflow-hidden relative pb-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 py-32 flex flex-col items-start gap-8">
        <div className="space-y-4">
          <p className="text-blue-400 font-mono font-medium tracking-widest">
            &gt; HELLO_WORLD
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight">
            Khizar Iqbal Fazil.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 leading-[1.1]">
            Full-Stack Developer. <br />
            <span className="text-slate-500">Building for the Agentic Era.</span>
          </h2>
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
          I specialize in building scalable applications with the 
          <span className="text-blue-400 font-semibold"> MERN Stack </span> and 
          <span className="text-blue-400 font-semibold"> Laravel 12</span>. 
          Currently focused on creating intelligent systems that bridge the gap between 
          complex backends and seamless user experiences.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-6 z-10">
          <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-xl shadow-blue-900/20">
            Explore Projects
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-8 px-2">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" title="Download Resume">
              <FileTextIcon className="w-6 h-6" />
            </a>
            <a href="mailto:contact@khizar.dev" className="text-slate-400 hover:text-white transition-colors" title="Email Me">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400 font-mono text-xl">01.</span> 
          Featured Projects
          <div className="h-[1px] bg-slate-700 flex-grow ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </section>

    </main>
  );
}

// ==========================================
// BULLETPROOF RAW SVG COMPONENTS
// ==========================================

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}