interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[]; 
  githubLink: string;
}

export function ProjectCard({ title, description, tags, githubLink }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 transition-colors group">
      
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-400 mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <a 
        href={githubLink} 
        target="_blank" 
        className="text-slate-300 font-medium hover:text-white flex items-center gap-2 w-fit"
      >
        View Source Code &rarr;
      </a>
    </div>
  );
}