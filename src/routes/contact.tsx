import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, CalendarDays, MessageCircle, Send } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site-data";

type ContactSearch = { service?: string | undefined };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search["service"] === "string" ? search["service"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Consultation | All Author Collective" },
      {
        name: "description",
        content:
          "Tell us about your book and get a free consultation. We respond within 24 hours — email, WhatsApp or Telegram.",
      },
      { property: "og:title", content: "Contact — All Author Collective" },
      {
        property: "og:description",
        content: "Tell us about your book. We respond within 24 hours.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Contact"
        title="Tell us about your book."
        intro="Whether you're weeks from launch or years past it, one honest conversation is the fastest way to know what your book needs next."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <Reveal>
            <div className="glass rounded-lg p-8 sm:p-10">
              <h2 className="font-display text-2xl">Start Your Project</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your book and we'll reply within 24 hours.
              </p>
              <iframe
                src="https://tally.so/r/Y57pYW"
                title="Tally contact form"
                width="100%"
                height="800"
                scrolling="auto"
                frameBorder="0"
                allow="fullscreen"
                className="mt-6 min-h-[800px] w-full overflow-hidden rounded-sm bg-transparent"
              />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Prefer email? Write to{" "}
                <a href={`mailto:${BRAND.email}`} className="underline hover:text-accent">
                  {BRAND.email}
                </a>{" "}
                directly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid content-start gap-6">
            <div className="glass rounded-lg p-8">
              <h2 className="font-display text-xl">Reach us directly</h2>
              <div className="rule-gold my-5" />
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-start gap-3 text-sm break-all transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {BRAND.email}
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 text-sm transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" /> WhatsApp
              </a>
              <a
                href={BRAND.telegram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 text-sm transition-colors hover:text-accent"
              >
                <Send className="h-4 w-4 shrink-0 text-accent" /> Telegram
              </a>
              <p className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-accent" /> We respond within 24 hours
              </p>
            </div>

            <div className="glass rounded-lg p-8">
              <h2 className="font-display text-xl">Book a free consultation</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Prefer to talk? Pick a 45-minute slot and we'll review your book together, live.
              </p>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground"
              >
                <CalendarDays className="h-4 w-4" /> Open the calendar
              </a>
            </div>

            <div className="glass rounded-lg p-8">
              <h2 className="font-display text-xl">What to expect</h2>
              <ol className="mt-5 grid gap-4 text-sm text-muted-foreground">
                {[
                  "You send us your book details — no polished pitch required.",
                  "We review your cover, listing and current visibility before we speak.",
                  "On the call we share what we'd change first, and why.",
                  "If we're a fit, you receive a written plan and quote within 48 hours.",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="font-quote text-lg leading-none text-accent">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
