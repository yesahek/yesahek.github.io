// src/components/Nav.jsx
import { useState } from "react";
import { profile } from "../content";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "community", label: "Community" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="px-6 md:px-12 max-w-5xl mx-auto flex items-center justify-between h-16">
        <a href="#" className="font-display font-semibold text-ink">
          {profile.name}
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-ink-muted hover:text-accent transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden px-6 pb-6 flex flex-col gap-4 border-t border-line">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-muted hover:text-accent transition pt-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Nav;