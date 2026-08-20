import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site-data";

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("aac-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("aac-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-2" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-accent/60 font-display text-sm text-accent">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight sm:text-lg">
              {BRAND.name}
            </span>
            <span className="hidden text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground sm:block">
              {BRAND.tagline}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="rounded-sm px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="ml-1 grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-border transition-colors hover:border-accent hover:text-accent"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="ml-2 hidden shrink-0 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 xl:inline-block"
          >
            Free Consultation
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-border xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass mx-4 mt-3 grid gap-1 rounded-md p-4 xl:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="rounded-sm px-2 py-2.5 text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
