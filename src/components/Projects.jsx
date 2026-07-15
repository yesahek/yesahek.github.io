import { projects } from "../content";
import FeaturedProject from "./FeaturedProject";

function Projects() {
    const featured = projects.find((p) => p.featured);

    return (
    <section id="projects" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          Projects
        </h2>
      </div>

      {featured && (
        <div className="mb-12">
          <FeaturedProject project={featured} />
        </div>
      )}

      {/* Grid of other projects goes here — next step */}
    </section>
  );
}

export default Projects;