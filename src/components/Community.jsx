// src/components/Community.jsx
import { community } from "../content";

function Community() {
  return (
    <section id="community" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          Community
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {community.map((item) => {
          const content = (
            <div className="border border-line rounded-lg p-6 h-full flex flex-col hover:border-accent transition">
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-ink-muted flex-1">{item.description}</p>
              )}
              {item.url && (
                <span className="text-sm font-medium text-accent mt-4 inline-block">
                  Visit →
                </span>
              )}
            </div>
          );

          return item.url ? (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={item.id}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}

export default Community;