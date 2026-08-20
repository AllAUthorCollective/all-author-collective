import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Resources — Book Marketing Insights | All Author Collective" },
      {
        name: "description",
        content:
          "Practical book marketing guidance for authors: Amazon KDP launches, BookTok strategy, cover psychology and building an email list before you publish.",
      },
      { property: "og:title", content: "Resources — All Author Collective" },
      {
        property: "og:description",
        content: "Practical book marketing guidance for authors and indie publishers.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="What we've learned, shared freely."
        intro="The strategies we run for clients, written up so any author can use them. First articles publishing soon."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="glass lift flex h-full flex-col overflow-hidden rounded-lg">
                <div className="hero-gradient h-40" aria-hidden />
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-accent">{p.tag}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl leading-snug">{p.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-7 text-xs uppercase tracking-[0.18em] text-accent">
                    Read more soon
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl">Want these in your inbox?</h2>
          <p className="mt-3 text-muted-foreground">
            Join the collective newsletter — one useful email a month, no filler.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-7 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="rounded-sm border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <button className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
              Subscribe
            </button>
          </form>
          <Link to="/contact" className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-accent">
            Or talk to us about your book
          </Link>
        </div>
      </section>
    </>
  );
}
