function ProjectCard({ project }) {
  const { title, image, summary, technologies = [], githubUrl, demoUrl, note } = project;

  return (
    <div className="border border-line rounded-lg p-6 flex flex-col h-full">
      {/* image block from before */}

      <h3 className="text-xl font-display font-semibold text-ink mb-3">
        {title}
      </h3>

      {summary && <p className="text-ink-muted mb-4 flex-1">{summary}</p>}

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-line text-ink-muted">
              {tech}
            </span>
          ))}
        </div>
      )}

      {note && (
        <p className="text-xs text-ink-muted italic mb-3">{note}</p>
      )}

      <div className="flex gap-3 mt-auto">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">
            GitHub →
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;