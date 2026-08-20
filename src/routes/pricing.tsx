import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PACKAGES } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Investment — Packages & Pricing | All Author Collective" },
      {
        name: "description",
        content:
          "Transparent book marketing packages: Essential, Pro and Premium. Cover design, ads, BookTok, author platform and full campaign management.",
      },
      { property: "og:title", content: "Investment — All Author Collective" },
      {
        property: "og:description",
        content: "Transparent packages for authors at every stage.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Investment"
        title="Transparent pricing, built around your book."
        intro="Packages give you a starting point. Every engagement is quoted for your genre, goals and timeline — and we will always tell you if you need less than you think."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-3 lg:px-8">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <article
                className={`glass lift flex h-full flex-col rounded-lg p-9 ${
                  p.featured ? "border-accent/60 lg:-translate-y-4" : ""
                }`}
              >
                {p.featured && (
                  <span className="mb-5 inline-block w-fit rounded-full bg-accent px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-accent-foreground">
                    Most chosen
                  </span>
                )}
                <h2 className="font-display text-2xl">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <p className="mt-6 font-display text-4xl text-gold-gradient">{p.price}</p>
                <div className="rule-gold my-7" />
                <ul className="grid flex-1 gap-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-9 rounded-sm px-6 py-3.5 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    p.featured
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl px-5 text-center lg:px-8">
          <p className="font-quote text-2xl italic">Not sure what you need?</p>
          <p className="mt-3 text-muted-foreground">
            Book a free consultation and we'll build a quote around your book alone.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-block rounded-sm border border-accent px-7 py-3.5 text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
