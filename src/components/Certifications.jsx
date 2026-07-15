import { certifications } from "../content";

function Certifications() {
    return (
    <section id="certifications" className="px-6 md:px-12 max-w-5xl mx-auto py-20 border-t border-line">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
        <h2 className="font-mono text-sm tracking-widest text-ink-muted uppercase">
          Certifications
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const content = (
            <div className="border border-line rounded-lg p-5 h-full flex flex-col items-center text-center gap-3 hover:border-accent transition">
              {cert.badgeUrl ? (
                <img
                  src={cert.badgeUrl}
                  alt={cert.title}
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center">
                  <span className="font-mono text-xs text-accent">BADGE</span>
                </div>
              )}
              <div>
                <p className="font-medium text-ink text-sm">{cert.title}</p>
                <p className="text-xs text-ink-muted mt-1">{cert.issuer}</p>
              </div>
            </div>
          );

          return cert.credentialUrl ? (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={cert.id}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}


export default Certifications;
