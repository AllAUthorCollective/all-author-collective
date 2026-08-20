import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Palette,
  Clapperboard,
  BarChart3,
  Mail,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { BRAND, STATS, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "All Author Collective — Where Every Author Belongs" },
      {
        name: "description",
        content:
          "Book marketing and promotion that turns your story into a bestseller. Covers, trailers, Amazon ads and author platforms for indie and self-published authors.",
      },
      { property: "og:title", content: "All Author Collective — Where Every Author Belongs" },
      {
        property: "og:description",
        content: "Book marketing and promotion that turns your story into a bestseller.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const CORE_SERVICES = [
  {
    icon: Palette,
    title: "Book Cover & Branding",
    text: "Genre-accurate covers and visual identity that earn the click before a word is read.",
  },
  {
    icon: Clapperboard,
    title: "Book Video Trailers & BookTok",
    text: "Scroll-stopping video built for the platforms where readers now find their next book.",
  },
  {
    icon: BarChart3,
    title: "Amazon KDP & Ad Management",
    text: "Keyword research, campaign structure and daily optimisation toward profitable sales.",
  },
  {
    icon: Mail,
    title: "Author Platform & Email Marketing",
    text: "A website and list you own, so every future release starts with an audience waiting.",
  },
];

const STEPS = [
  { n: "01", title: "Tell Us About Your Book", text: "A conversation about your story, your reader and where you want to be." },
  { n: "02", title: "We Build Your Campaign", text: "A custom visibility plan across covers, ads, social and platform." },
  { n: "03", title: "Your Book Reaches Readers", text: "We execute daily and put your book in front of the right people." },
  { n: "04", title: "You Build a Lasting Audience", text: "Reporting, optimisation and a reader list that outlives the launch." },
];

const PLATFORMS = ["Amazon KDP", "Apple Books", "Kobo", "Google Play", "BookTok", "Canva", "Mailchimp"];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={heroBooks}
        alt="Antique hardcover books lit by warm golden light"
        width={1920}
        height={1200}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 py-32 text-center text-cream lg:px-8">
        <Reveal>
          <p className="eyebrow">The Author's Growth Partner</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Where Every <span className="text-gold-gradient">Author</span> Belongs.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/75">
            Book marketing and promotion that turns your story into a bestseller.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="rounded-sm bg-accent px-8 py-4 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </a>
            <a
              href="#final-cta"
              className="rounded-sm border border-cream/35 px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:border-accent hover:text-accent"
            >
              Book a Free Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-b border-border/60 bg-secondary/30 py-12">
      <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
          Trusted across the platforms readers use
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {PLATFORMS.map((p) => (
            <span
              key={p}
              className="font-display text-lg text-foreground/45 transition-colors hover:text-accent"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Great writing deserves to be found.
          </h2>
          <div className="rule-gold my-6" />
          <p className="text-muted-foreground leading-relaxed">
            Being overlooked is not a reflection of your talent. It is a visibility problem — and
            visibility is a craft we have spent years learning on behalf of authors like you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CORE_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="glass lift flex h-full flex-col rounded-lg p-8">
                <s.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-6 font-display text-xl leading-snug">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <Link
                  to="/services"
                  className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Four steps. No mystery.</h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="relative border-t border-border pt-8">
                <span className="font-quote text-5xl text-accent/60">{s.n}</span>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i]!;

  return (
    <section className="py-28">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow">Authors we've served</p>
          <div className="glass mt-10 rounded-lg px-6 py-14 sm:px-14">
            <div className="flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="mt-8 font-quote text-2xl leading-relaxed italic sm:text-3xl">
              “{t.quote}”
            </blockquote>
            <p className="mt-8 font-display text-lg">{t.name}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.role}</p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                aria-label="Previous testimonial"
                onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, k) => (
                  <button
                    key={k}
                    aria-label={`Testimonial ${k + 1}`}
                    onClick={() => setI(k)}
                    className={`h-1.5 rounded-full transition-all ${
                      k === i ? "w-7 bg-accent" : "w-1.5 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                aria-label="Next testimonial"
                onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {STATS.map((s) => (
          <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="final-cta" className="hero-gradient scroll-mt-24 py-32 text-cream">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Ready to Make Your Book Unmissable?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/75">
            One conversation is all it takes to know whether we're the right partner for your book.
            No pressure, no jargon — just a plan.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-sm bg-accent px-9 py-4 text-sm font-medium tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Get a Free Consultation
          </Link>
          <p className="mt-6 text-xs tracking-wide text-cream/60">{BRAND.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
