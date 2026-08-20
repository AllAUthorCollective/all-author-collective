import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-gradient relative overflow-hidden pt-36 pb-24 text-cream">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
        <div className="rule-gold mx-auto my-7" />
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-cream/75">
          {intro}
        </p>
        {children}
      </div>
    </section>
  );
}
