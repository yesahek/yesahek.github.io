import { education } from "../content";

function Education() {

return (
    <section id="education" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          Education
        </h2>
      </div>

      <div className="space-y-10">
        {education.map((item) => (
          <div key={item.id} className="grid md:grid-cols-4 gap-2 md:gap-6">
            <p className="font-mono text-sm text-ink-muted">
              {item.startDate || "—"}
              {item.endDate ? ` – ${item.endDate}` : ""}
            </p>
            <div className="md:col-span-3">
              <h3 className="text-lg font-display font-semibold text-ink">
                {item.degree}
              </h3>
              <p className="text-ink-muted">{item.school}</p>
              {item.status === "In Progress" && (
                <span className="inline-block mt-2 text-xs font-mono tracking-widest uppercase px-2 py-1 rounded bg-accent-soft text-accent">
                  In Progress
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;