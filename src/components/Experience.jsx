import { experience } from "../content";

function Experience() {
    return (
    <section id="experience" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          Experience
        </h2>
      </div>


<div className="space-y-10">
        {experience.map((item) => (
          <div key={item.id} className="grid md:grid-cols-4 gap-2 md:gap-6">
            <p className="font-mono text-sm text-ink-muted">
              {item.startDate || "—"}
              {item.endDate ? ` – ${item.endDate}` : ""}
            </p>
            <div className="md:col-span-3">
              <h3 className="text-lg font-display font-semibold text-ink">
                {item.role || "Role TBD"}{" "}
                <span className="text-ink-muted font-body font-normal">
                  · {item.org}
                </span>
              </h3>
              <p className="text-sm font-mono text-accent uppercase tracking-wide mt-1 mb-2">
                {item.type}
              </p>
              {item.summary && (
                <p className="text-ink-muted max-w-2xl">{item.summary}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;