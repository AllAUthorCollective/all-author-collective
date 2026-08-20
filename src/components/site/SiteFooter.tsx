import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Facebook } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <h3 className="font-display text-2xl">{BRAND.name}</h3>
          <div className="rule-gold my-4" />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {BRAND.tagline}. Book marketing and promotion for authors, indie publishers and
            self-published writers — anywhere in the world.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <span
                key={i}
                className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Explore</h4>
          <ul className="mt-5 grid gap-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Get in touch</h4>
          <a
            href={`mailto:${BRAND.email}`}
            className="mt-5 flex items-center gap-2 text-sm break-all text-foreground/80 transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {BRAND.email}
          </a>
          <p className="mt-4 text-sm text-muted-foreground">We respond within 24 hours.</p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-sm border border-accent px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
