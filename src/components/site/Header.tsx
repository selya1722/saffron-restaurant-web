import { Link } from "@tanstack/react-router";

type Props = { small: string; big: string; active: "home" | "menu" | "about" | "contact" };

const links = [
  { to: "/", label: "Home", key: "home" },
  { to: "/menu", label: "Menu", key: "menu" },
  { to: "/about", label: "About Us", key: "about" },
  { to: "/contact", label: "Contact", key: "contact" },
] as const;

export function Header({ small, big, active }: Props) {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
        <Link to="/" className="leading-tight">
          <div className="text-[11px] tracking-[0.35em] text-gold">{small}</div>
          <div className="font-display text-xl font-semibold tracking-wide text-foreground">{big}</div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              className={`border-b pb-1 text-sm transition-colors ${
                active === l.key ? "border-primary text-primary" : "border-transparent text-foreground/85 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/menu"
          className="rounded-full border border-gold/60 px-5 py-2 text-sm tracking-wide text-gold transition-colors hover:bg-gold/10"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}

export function BackHome() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-2 text-xs text-foreground/90 backdrop-blur-sm hover:border-gold"
    >
      ← Back to Home
    </Link>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-px w-10 bg-gold/50" />
      <span className="size-1.5 rotate-45 bg-primary" />
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}

export function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Diamond />
      <div className="text-[11px] tracking-[0.3em] text-gold uppercase">{children}</div>
      <Diamond />
    </div>
  );
}

export function PageHero({ img, kicker, title }: { img: string; kicker: string; title: string }) {
  return (
    <section className="relative h-[420px] overflow-hidden">
      <img src={img} alt="" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/60 to-background" />
      <div className="relative mx-auto max-w-[1280px] px-6 pt-28">
        <BackHome />
      </div>
      <div className="relative mt-10 text-center">
        <div className="font-serif text-xs italic tracking-[0.35em] text-gold uppercase">{kicker}</div>
        <h1 className="text-gold-gradient mt-2 font-display text-5xl font-bold md:text-6xl">{title}</h1>
        <Diamond className="mt-4" />
      </div>
    </section>
  );
}
