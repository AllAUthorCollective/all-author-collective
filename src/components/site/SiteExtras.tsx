import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X, Send } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="glass fixed bottom-6 left-6 z-40 grid h-11 w-11 place-items-center rounded-full text-accent transition-transform hover:-translate-y-1"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="glass w-64 rounded-lg p-5">
          <p className="font-display text-lg">Talk to a human</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Usually replies in a few hours, always within 24.
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border px-3 py-2 transition-colors hover:border-accent hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href={BRAND.telegram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-sm border border-border px-3 py-2 transition-colors hover:border-accent hover:text-accent"
            >
              <Send className="h-3.5 w-3.5" /> Telegram
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="rounded-sm border border-border px-3 py-2 transition-colors hover:border-accent hover:text-accent"
            >
              Email us
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat options"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-1"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("aac-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="glass fixed inset-x-4 bottom-24 z-50 mx-auto grid max-w-2xl gap-4 rounded-lg p-5 sm:inset-x-6 sm:flex sm:items-center sm:justify-between">
      <p className="text-xs leading-relaxed text-muted-foreground">
        We use cookies to understand how authors use this site and to improve your experience.
      </p>
      <div className="flex shrink-0 gap-2">
        <button
          onClick={() => {
            localStorage.setItem("aac-cookies", "declined");
            setShow(false);
          }}
          className="rounded-sm border border-border px-4 py-2 text-xs"
        >
          Decline
        </button>
        <button
          onClick={() => {
            localStorage.setItem("aac-cookies", "accepted");
            setShow(false);
          }}
          className="rounded-sm bg-primary px-4 py-2 text-xs text-primary-foreground"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export function LeadMagnetPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("aac-lead")) return;
    const t = setTimeout(() => setShow(true), 18000);
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShow(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  const close = () => {
    localStorage.setItem("aac-lead", "seen");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="glass w-full max-w-md rounded-lg p-8 text-center">
        <button onClick={close} aria-label="Close" className="float-right -mt-4 -mr-4 p-2">
          <X className="h-4 w-4" />
        </button>
        <p className="eyebrow">Free download</p>
        <h3 className="mt-3 font-display text-2xl">The Book Marketing Checklist</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The 32-point launch checklist we run with every author — cover, listing, ads, platform and
          launch week. Sent straight to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
          className="mt-6 grid gap-3"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
          />
          <button className="rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
            Send me the checklist
          </button>
        </form>
      </div>
    </div>
  );
}
