function FeaturedProject ({ project }){
    const {
        title,
        summary,
        problem,
        architectureDiagram,
        awsServices = [],
        technologies = [],
        screenshots = [],
        githubUrl,
        demoUrl,
    } = project;

      return (
    <div className="border border-line rounded-lg p-6 md:p-10 bg-white/40">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs tracking-widest text-signal uppercase bg-accent-soft px-2 py-1 rounded">
          Featured
        </span>
      </div>

      <h3 className="text-2xl md:text-3xl font-display font-semibold text-ink mb-4">
        {title}
      </h3>

      {summary && (
        <p className="text-ink-muted text-lg mb-6 max-w-3xl">{summary}</p>
      )}

      {problem && (
        <div className="mb-6">
          <p className="font-mono text-xs tracking-widest text-ink-muted uppercase mb-2">
            Problem
          </p>
          <p className="text-ink max-w-3xl">{problem}</p>
        </div>
      )}

      {architectureDiagram && (
        <div className="mb-6">
          <p className="font-mono text-xs tracking-widest text-ink-muted uppercase mb-2">
            Architecture
          </p>
          <img
            src={architectureDiagram}
            alt={`${title} architecture diagram`}
            className="rounded-md border border-line w-full"
          />
        </div>
      )}

      {awsServices.length > 0 && (
        <div className="mb-4">
          <p className="font-mono text-xs tracking-widest text-ink-muted uppercase mb-2">
            AWS Services
          </p>
          <div className="flex flex-wrap gap-2">
            {awsServices.map((service) => (
              <span
                key={service}
                className="text-sm px-3 py-1 rounded-full bg-accent-soft text-accent font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {technologies.length > 0 && (
        <div className="mb-6">
          <p className="font-mono text-xs tracking-widest text-ink-muted uppercase mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full border border-line text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {screenshots.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {screenshots.map((src) => (
            <img
              key={src}
              src={src}
              alt={`${title} screenshot`}
              className="rounded-md border border-line w-full"
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition">
            GitHub
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-line text-ink font-medium hover:border-accent hover:text-accent transition">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default FeaturedProject;