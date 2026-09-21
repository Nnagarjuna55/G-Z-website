import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/shared/PageHeader";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export default function LegalPage({ eyebrow, title, intro, effectiveDate, sections }: LegalPageProps) {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />

      <PageHeader eyebrow={eyebrow} title={title} description={intro}>
        <p className="text-xs font-mono font-bold text-muted">Effective {effectiveDate}</p>
      </PageHeader>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of contents */}
          <aside className="lg:col-span-4">
            <nav className="lg:sticky lg:top-28 bg-white/80 backdrop-blur rounded-3xl border border-border p-6" aria-label="On this page">
              <p className="text-[11px] font-mono font-bold text-accent uppercase tracking-wider mb-4">On this page</p>
              <ol className="space-y-1">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 rounded-lg px-2 py-1.5 -mx-2 text-sm font-semibold text-muted hover:text-foreground hover:bg-background transition-colors"
                    >
                      <span className="font-mono text-xs text-primary-strong pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-border shadow-sm p-8 sm:p-12">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 pb-10 mb-10 border-b border-border last:border-b-0 last:pb-0 last:mb-0">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  <span className="font-mono text-sm text-primary-strong mr-3">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p) => (
                    <p key={p} className="text-[15px] text-muted font-medium leading-relaxed">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-2 pl-1">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-muted font-medium leading-relaxed">
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
