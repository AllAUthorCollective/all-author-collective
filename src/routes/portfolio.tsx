import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CASE_STUDIES } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Case Studies — Author Results | All Author Collective" },
      {
        name: "description",
        content:
          "Real author campaigns with before-and-after numbers: category rankings, sales, reviews, email lists and ad efficiency.",
      },
      { property: "og:title", content: "Case Studies — All Author Collective" },
      {
        property: "og:description",
        content: "Before-and-after results from author campaigns we've run.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Proof, not promises."
        intro="Every campaign below started with an author who felt overlooked. These are the numbers before we met, and the numbers after."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:px-8">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.book} delay={i * 80}>
              <article className="glass lift overflow-hidden rounded-lg">
                <div className="grid gap-10 p-8 lg:grid-cols-[1fr_1.1fr] lg:p-12">
                  <div>
                    <p className="eyebrow">{c.genre}</p>
                    <h2 className="mt-4 font-display text-3xl leading-tight">{c.book}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{c.author}</p>
                    <div className="rule-gold my-6" />
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      The challenge
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                    <h3 className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      What we did
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      The results
                    </h3>
                    <div className="mt-5 grid gap-4">
                      {c.results.map((r) => (
                        <div
                          key={r.metric}
                          className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/70 pb-4"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm">{r.metric}</p>
                            <p className="text-xs text-muted-foreground line-through">{r.before}</p>
                          </div>
                          <p className="font-display text-2xl text-gold-gradient">{r.after}</p>
                        </div>
                      ))}
                    </div>
                    <blockquote className="mt-8 font-quote text-xl leading-relaxed italic">
                      “{c.quote}”
                    </blockquote>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.author}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hero-gradient py-24 text-center text-cream">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">Your book could be next.</h2>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-accent px-8 py-4 text-sm font-medium text-accent-foreground"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
