import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneCall, Map, Rocket, LineChart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — How We Launch Books | All Author Collective" },
      {
        name: "description",
        content:
          "Discovery, strategy, execution and optimisation — the four-step process behind every author campaign we run, with timelines and deliverables.",
      },
      { property: "og:title", content: "Our Process — All Author Collective" },
      {
        property: "og:description",
        content: "The four-step process behind every author campaign we run.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const STEPS = [
  {
    icon: PhoneCall,
    n: "01",
    title: "Discovery Call",
    timeline: "Week 1 · 45 minutes",
    text: "We learn about your book, your reader and your goals. We look at your cover, listing and current results together, and tell you plainly where the biggest gains are hiding.",
    bullets: ["Book & genre audit", "Competitor shelf review", "Goal and budget alignment"],
  },
  {
    icon: Map,
    n: "02",
    title: "Strategy Development",
    timeline: "Week 1–2",
    text: "We build a custom visibility plan: which channels, in what order, with what creative and what we expect each to return. You approve it before a single dollar is spent.",
    bullets: ["Channel & keyword strategy", "Creative direction", "Forecast and milestones"],
  },
  {
    icon: Rocket,
    n: "03",
    title: "Campaign Execution",
    timeline: "Week 2–8",
    text: "Design, video, ads, content and email all go live on a coordinated schedule. Your book stops being a listing and starts being a presence readers keep encountering.",
    bullets: ["Assets produced & shipped", "Ads launched and tested", "Community and content rollout"],
  },
  {
    icon: LineChart,
    n: "04",
    title: "Optimization & Reporting",
    timeline: "Ongoing",
    text: "We track sales, rank, ACOS, list growth and engagement, then reallocate toward what works. You receive clear reporting — including the weeks that underperform.",
    bullets: ["Bi-weekly performance reports", "Continuous creative testing", "Quarterly strategy reset"],
  },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="A clear path from manuscript to momentum."
        intro="No black boxes. You will always know what we are doing, why we are doing it, and what it is producing."
      />

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <ol className="relative grid gap-12 border-l border-border pl-8 sm:pl-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} as="li">
                <div className="relative">
                  <span className="absolute -left-[3.15rem] grid h-10 w-10 place-items-center rounded-full border border-accent/60 bg-background text-accent sm:-left-[4.15rem]">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div className="glass lift rounded-lg p-8">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-quote text-3xl text-accent/60">{s.n}</span>
                      <h2 className="font-display text-2xl">{s.title}</h2>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {s.timeline}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <ul className="mt-6 grid gap-2 text-sm">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-1 w-3 shrink-0 bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 text-center">
        <div className="mx-auto max-w-2xl px-5 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">Start with the discovery call.</h2>
          <p className="mt-5 text-muted-foreground">
            It's free, it's honest, and you'll leave with a plan whether you work with us or not.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-primary px-8 py-4 text-sm font-medium text-primary-foreground"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
