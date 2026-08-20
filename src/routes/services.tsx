import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SERVICE_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Book Marketing & Promotion | All Author Collective" },
      {
        name: "description",
        content:
          "Cover design, book trailers, Amazon KDP ads, BookTok, author websites, email marketing and promotion campaigns for authors and indie publishers.",
      },
      { property: "og:title", content: "Services — All Author Collective" },
      {
        property: "og:description",
        content: "Everything your book needs to be seen, from cover to campaign.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything your book needs to be seen."
        intro="Choose a single service or a complete campaign. Every engagement begins with the same question: what will actually move this book in front of the readers who want it?"
      />

      <div className="py-24">
        {SERVICE_CATEGORIES.map((cat, ci) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24 py-14">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="font-quote text-4xl text-accent/60">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl">{cat.title}</h2>
                </div>
                <p className="mt-3 text-muted-foreground">{cat.blurb}</p>
                <div className="rule-gold mt-6" />
              </Reveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {cat.services.map((s, i) => (
                  <Reveal key={s.name} delay={i * 90}>
                    <article className="glass lift flex h-full flex-col rounded-lg p-8">
                      <h3 className="font-display text-xl leading-snug">{s.name}</h3>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                          to="/process"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                        >
                          Learn more <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          to="/contact"
                          search={{ service: s.name }}
                          className="rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors hover:border-accent hover:text-accent"
                        >
                          Request a quote
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="hero-gradient py-24 text-center text-[oklch(0.96_0.01_84)]">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">Not sure where to start?</h2>
          <p className="mt-5 text-[oklch(0.96_0.01_84/0.72)]">
            Tell us about your book and we'll tell you honestly what it needs first.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-block rounded-sm bg-accent px-8 py-4 text-sm font-medium text-accent-foreground"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
