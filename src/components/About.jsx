// src/components/About.jsx
import { profile } from "../content";

function About() {
  return (
    <section id="about" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          About
        </h2>
      </div>
      <p className="text-lg md:text-xl text-ink leading-relaxed max-w-3xl">
        {profile.bio}
      </p>
    </section>
  );
}

export default About;