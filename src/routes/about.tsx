import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Sparkles, TrendingUp, HandHeart } from "lucide-react";
import mia from "@/assets/mia-founder.jpg.asset.json";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — All Author Collective" },
      {
        name: "description",
        content:
          "We help authors win, no matter where they're from. Meet Mia and the collective built to bridge great writing and great visibility.",
      },
      { property: "og:title", content: "About — All Author Collective" },
      {
        property: "og:description",
        content: "The story, values and founder behind All Author Collective.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    text: "You see the numbers we see. Every report includes what worked, what didn't and what we're changing next.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    text: "Your book is not a template. Every cover, trailer and campaign starts from your story, your reader and your genre.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    text: "Impressions are not the goal. Sales, reviews, subscribers and readers who come back for your next book are.",
  },
  {
    icon: HandHeart,
    title: "Partnership",
    text: "We work alongside you, not above you. You keep writing; we handle everything that gets the writing seen.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the collective"
        title="We Help Authors Win — No Matter Where They're From."
        intro="Great stories are written everywhere. Visibility, unfortunately, is not distributed the same way. All Author Collective exists to close that gap."
      />

      <section className="py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Founded to bridge the gap between great writing and great visibility.
            </h2>
            <div className="rule-gold my-6" />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              All Author Collective began with a frustration. Book after book crossed our desk that
              was genuinely good — carefully written, deeply felt, ready for readers — and sold
              almost nothing. Not because the writing failed, but because nobody ever saw it.
            </p>
            <p>
              Traditional publishing solves visibility with budgets and relationships most authors
              will never be offered. Self-publishing handed authors the printing press but not the
              megaphone. We built the collective to hand over the megaphone.
            </p>
            <p>
              Today we work with authors across continents, genres and career stages. A debut
              novelist in Lagos, a romance serialiser in Manila, a small press in Toronto. Great
              stories transcend borders, and so should the chance to be read.
            </p>
            <p className="font-quote text-xl text-foreground italic">
              We are a collective because no author should have to do this alone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">What we stand for</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Our Values</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <article className="glass lift h-full rounded-lg p-8">
                  <v.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-6 font-display text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-lg border border-accent/40" aria-hidden />
              <img
                src={mia.url}
                alt="Mia, founder of All Author Collective"
                width={800}
                height={946}
                loading="lazy"
                className="relative w-full rounded-lg object-cover shadow-[var(--shadow-elegant)]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Meet the founder</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">Mia</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">Founder</p>
            <div className="rule-gold my-6" />
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                I have loved books since long before I understood them as a business. What I learned
                later — working with authors, watching launches soar and stall — is that the market
                is not a meritocracy. Readers cannot choose a book they have never encountered.
              </p>
              <p>
                I founded All Author Collective to give serious authors the kind of support that
                used to be reserved for a lucky few. That means covers that compete on the shelf,
                campaigns grounded in data, and honest counsel even when the honest answer is "wait,
                let's fix this first."
              </p>
              <p>
                My commitment is simple: I will treat your book with the same care I would want for
                my own, and I will always tell you the truth about what it needs.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Talk to Mia
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 xl:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="eyebrow">The collective</p>
            <h2 className="mt-4 font-display text-4xl">A small team, deliberately</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Designers, ad strategists, video editors and copywriters who work only with books. We
              grow carefully so every author keeps a real person on the other end of the email.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {["Design Lead", "Ads & Analytics", "Content & Video"].map((role, i) => (
              <Reveal key={role} delay={i * 100}>
                <div className="glass rounded-lg p-8 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-accent/50 font-display text-xl text-accent">
                    {role.charAt(0)}
                  </div>
                  <h3 className="mt-5 font-display text-lg">{role}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Joining soon
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
