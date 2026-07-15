// src/components/Footer.jsx
import { profile } from "../content";

function Footer() {
  const { name, links } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 max-w-5xl mx-auto py-12 border-t border-line">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-ink-muted">
          © {year} {name}. Built with React and Tailwind CSS.
        </p>
        <div className="flex gap-6">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted hover:text-accent transition"
            >
              GitHub
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted hover:text-accent transition"
            >
              LinkedIn
            </a>
          )}
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="text-sm text-ink-muted hover:text-accent transition"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;