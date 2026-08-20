import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Clock, CalendarDays, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ALL_SERVICE_NAMES, BRAND } from "@/lib/site-data";

type ContactSearch = { service: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search["service"] === "string" ? search["service"] : "",
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

const BUDGETS = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000 – $7,500",
  "$7,500+",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-sm border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function Contact() {
  const { service } = Route.useSearch();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thank you — your message is on its way.", {
      description: "We reply to every author within 24 hours.",
    });
    e.currentTarget.reset();
  };

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
            <form onSubmit={onSubmit} className="glass grid gap-5 rounded-lg p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Full name
                  <input required name="name" className={inputClass} placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Book title / genre
                <input name="book" className={inputClass} placeholder="e.g. The Salt Harbour — Literary Fiction" />
              </label>

              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Service interested in
                <select name="service" defaultValue={service ?? ""} className={inputClass}>
                  <option value="">Select a service</option>
                  <option value="Not sure yet — advise me">Not sure yet — advise me</option>
                  {ALL_SERVICE_NAMES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Budget range
                <select name="budget" className={inputClass} defaultValue="">
                  <option value="">Select a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us about your book, your readers and where you'd like to be in six months."
                />
              </label>

              <button className="mt-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                {sent ? "Message sent" : "Send message"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We respond within 24 hours — always from a real person.
              </p>
            </form>
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
