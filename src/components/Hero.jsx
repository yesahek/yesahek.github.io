// src/components/Hero.jsx
import { profile } from "../content";

function Hero() {
  const { name, title, tagline, links } = profile;

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto">
      <p className="font-mono text-sm tracking-widest text-accent uppercase mb-4">
        {title}
      </p>
      <h1 className="text-4xl md:text-6xl font-display font-semibold text-ink mb-6">
        {name}
      </h1>
      <p className="text-lg md:text-xl text-ink-muted max-w-2xl mb-10">
        {tagline}
      </p>
      <div className="flex flex-wrap gap-4">
        {links.resume && (
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition"
          >
            Resume
          </a>
        )}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-line text-ink font-medium hover:border-accent hover:text-accent transition"
          >
            GitHub
          </a>
        )}
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-line text-ink font-medium hover:border-accent hover:text-accent transition"
          >
            LinkedIn
          </a>
        )}
        {links.email && (
          <a
            href={`mailto:${links.email}`}
            className="px-5 py-2.5 rounded-md border border-line text-ink font-medium hover:border-accent hover:text-accent transition"
          >
            Contact
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;