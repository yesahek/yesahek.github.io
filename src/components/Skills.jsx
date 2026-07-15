// src/components/Skills.jsx
import { skills } from "../content";

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          Technical Skills
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full border border-line text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;