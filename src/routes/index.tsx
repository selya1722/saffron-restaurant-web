import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Eyebrow } from "@/components/site/Header";
import hero from "@/assets/hero.jpg.asset.json";
import cheese from "@/assets/cheese.jpg.asset.json";
import seafood from "@/assets/seafood.jpg.asset.json";
import mutton from "@/assets/mutton.jpg.asset.json";
import family from "@/assets/family.jpg.asset.json";
import noodles from "@/assets/noodles.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saffron Kitchen & Bar — Authentic Sri Lankan Food" },
      { name: "description", content: "Bold Sri Lankan flavours, time-honoured recipes and the energy of the open kitchen." },
      { property: "og:title", content: "Saffron Kitchen & Bar" },
      { property: "og:description", content: "Authentic Sri Lankan food experience in Colombo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const dishes = [
  { img: cheese.url, tag: "Chef's Pick", name: "Cheesy Chicken Kottu", price: "LKR 1,450", desc: "Shredded roti tossed with spiced chicken, melted cheese, egg, and aromatic vegetables on a searing-hot griddle." },
  { img: seafood.url, tag: "Fan Favorite", name: "Seafood Kottu Royal", price: "LKR 1,850", desc: "Premium kottu with tiger prawns, cuttlefish, and crab, tossed with seafood stock, finished with coconut sambol." },
  { img: mutton.url, tag: "Best Seller", name: "Mutton Kottu Special", price: "LKR 1,650", desc: "Slow-cooked mutton with black pepper masala, curry leaves, and house-ground kottu spice blend." },
];

const packages = [
  { img: family.url, save: "Save LKR 700", name: "Family Feast", serves: "Serves 4", desc: "4 portions of signature kottu, 2 sides, 4 drinks, and dessert platter. Perfect for a family of four.", price: "LKR 5,800" },
  { img: noodles.url, save: "Save LKR 400", name: "Couples Delight", serves: "Serves 2", desc: "2 premium kottu with mixed grill platter, 2 signature cocktails, and a shared dessert.", price: "LKR 3,200" },
  { img: mutton.url, save: "Save LKR 2,500", name: "Grand Gathering", serves: "Serves 10", desc: "10 portions of assorted kottu, full sides spread, 10 beverages, and a celebration cake.", price: "LKR 13,500" },
];

const offers = [
  { badge: "20% OFF", name: "Lunch Express", desc: "Any kottu + drink combo between 12–3 PM", code: "THARU20", tone: "bg-primary" },
  { badge: "15% OFF", name: "Weekend Special", desc: "Seafood Kottu Royal at a special weekend rate", code: "WEEKEND15", tone: "bg-primary" },
  { badge: "FREE DESSERT", name: "Birthday Treat", desc: "Free dessert platter on your birthday with any order", code: "BDAYTHARU", tone: "bg-destructive" },
];

const reviews = [
  { name: "Priya Jayawardena", place: "Colombo", text: "Absolutely the finest kottu I have ever tasted in Sri Lanka. The cheese chicken kottu is worth every rupee — the sizzle, the aroma, pure magic." },
  { name: "Kasun Perera", place: "Kandy", text: "Tharu Kottu Grand elevated street food to fine dining. The ambiance, the service, the mutton kottu — everything was a 10 out of 10!" },
  { name: "Nadia Farook", place: "Galle", text: "We came for a family dinner and left completely amazed. The family feast package is incredible value and the staff were wonderfully attentive." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header small="SAFFRON" big="KITCHEN & BAR" active="home" />

      {/* Hero */}
      <section className="relative h-[620px] overflow-hidden">
        <img src={hero.url} alt="Chicken kottu in an iron wok" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
        <div className="relative mx-auto max-w-[1280px] px-6 pt-32">
          <div className="font-serif text-xs italic tracking-[0.35em] text-gold uppercase">Welcome to</div>
          <h1 className="text-gold-gradient mt-2 font-serif text-6xl leading-[1.05] italic md:text-7xl">Saffron<br />Kitchen &amp; Bar</h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[11px] tracking-[0.3em] text-gold uppercase">Authentic Sri Lankan Food Experience</span>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-foreground/85">
            Step into a world of bold Sri Lankan flavours, where time-honoured recipes meet the energy of the open kitchen. Every plate tells a story, spiced to perfection, plated with pride, and shared with heart.
          </p>
          <div className="mt-7 flex gap-4">
            <Link to="/menu" className="bg-cta rounded-full px-7 py-2.5 text-sm font-medium text-primary-foreground">View Menu</Link>
            <Link to="/menu" className="rounded-full border border-gold/50 px-7 py-2.5 text-sm text-gold hover:bg-gold/10">Order Now</Link>
          </div>
          <div className="mt-10 flex gap-10">
            {[["12+", "Years of Craft"], ["50+", "Kottu Varieties"], ["98%", "Happy Guests"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl text-gold">{n}</div>
                <div className="text-[10px] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="mx-auto max-w-[1100px] px-6 py-20">
        <Eyebrow>Customer Favorites</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-4xl font-bold">Our Signature <span className="text-primary">Dishes</span></h2>
        <p className="mx-auto mt-3 max-w-md text-center text-xs text-muted-foreground">Each dish is a tribute to Sri Lanka's street food culture — elevated to grand perfection.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dishes.map((d) => (
            <article key={d.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-56">
                <img src={d.img} alt={d.name} loading="lazy" className="size-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-card" />
                <span className="absolute top-3 right-3 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-primary-foreground">{d.tag}</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between gap-2"><h3 className="font-serif text-sm font-semibold">{d.name}</h3><span className="font-serif text-sm text-primary">{d.price}</span></div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{d.desc}</p>
                <Link to="/menu" className="mt-5 block rounded-full border border-gold/50 py-2 text-center text-xs tracking-wider text-gold hover:bg-gold/10">Order Now</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto h-px max-w-[900px] bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      {/* Packages */}
      <section className="mx-auto max-w-[1100px] px-6 py-20">
        <Eyebrow>Perfect for Sharing</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-4xl font-bold">Special Packages</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-44">
                <img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-card" />
                <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-primary-foreground">{p.save}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between"><h3 className="font-serif text-sm font-semibold">{p.name}</h3><span className="rounded bg-primary/15 px-2 py-0.5 text-[10px] text-primary">{p.serves}</span></div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif text-lg text-primary">{p.price}</span>
                  <Link to="/contact" className="bg-cta rounded-full px-4 py-1.5 text-[11px] font-medium text-primary-foreground">Book Now ›</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="mx-auto max-w-[1100px] px-6 py-20">
        <Eyebrow>Limited Time</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-4xl font-bold">Today's <span className="text-primary">Offers</span></h2>
        <p className="mx-auto mt-3 max-w-md text-center text-xs text-muted-foreground">Exclusive deals crafted to bring you more of what you love, at exceptional value.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <article key={o.name} className="relative rounded-xl border border-border bg-card p-6">
              <span className={`absolute top-0 right-0 rounded-bl-lg rounded-tr-xl px-3 py-1 text-[10px] font-bold text-primary-foreground ${o.tone}`}>{o.badge}</span>
              <h3 className="font-serif text-base font-semibold">{o.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{o.desc}</p>
              <div className="mt-6 flex items-end justify-between">
                <div><div className="text-[10px] text-muted-foreground">Use code</div><div className="font-serif text-sm tracking-widest text-primary">{o.code}</div></div>
                <button className="rounded-full border border-gold/50 px-4 py-1 text-xs text-gold hover:bg-gold/10" onClick={() => navigator.clipboard?.writeText(o.code)}>Claim</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto h-px max-w-[900px] bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      {/* Story */}
      <section className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={interior.url} alt="Restaurant interior" loading="lazy" className="h-[320px] w-full rounded-xl border border-border object-cover" />
        <div>
          <div className="text-[11px] tracking-[0.3em] text-gold uppercase">Who We Are</div>
          <h2 className="mt-2 font-serif text-4xl font-bold">Our <span className="text-primary">Story</span></h2>
          <p className="mt-6 text-sm leading-relaxed text-foreground/80">Saffron Kitchen &amp; Bar was born from a passion, to bring the authentic, bold flavours of Sri Lanka to life in a warm, contemporary setting. Founded with deep roots in Sri Lankan culinary tradition, our restaurant blends time-honoured recipes with the vibrant energy of an open kitchen, where every dish is prepared with fire, soul, and passion.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Every kottu we serve carries the heritage of generations — a recipe born in the heart of Sri Lanka and perfected over decades. What started as a humble roadside stall has grown into a place where people gather, bringing the bold, soulful flavours of home to every plate.</p>
          <Link to="/about" className="bg-cta mt-8 inline-block rounded-full px-6 py-2 text-xs font-medium text-primary-foreground">Learn More</Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-[1100px] px-6 py-20">
        <Eyebrow>What Guests Say</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-4xl font-bold">Customer <span className="text-primary">Reviews</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex justify-between text-primary"><span>★★★★★</span><span className="font-serif text-2xl leading-none text-gold/30">"</span></div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground italic">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full border border-gold/50 font-serif text-sm text-gold">{r.name[0]}</div>
                <div><div className="font-serif text-sm">{r.name}</div><div className="text-[10px] text-muted-foreground">{r.place}</div></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="text-[11px] tracking-[0.35em] text-gold">SAFFRON</div>
          <div className="font-display text-xl font-semibold">KITCHEN &amp; BAR</div>
          <p className="mt-3 text-xs text-muted-foreground">Sri Lanka's premier dining destination. Crafted with passion, served with pride.</p>
          <div className="mt-6 text-[11px] tracking-[0.2em] text-gold uppercase">◷ Opening Hours</div>
          <dl className="mt-3 grid grid-cols-2 gap-y-1 text-xs text-muted-foreground">
            <dt>Mon – Fri</dt><dd>11:00 AM – 11:00 PM</dd>
            <dt>Saturday</dt><dd>10:00 AM – 12:00 AM</dd>
            <dt>Sunday</dt><dd>10:00 AM – 10:00 PM</dd>
          </dl>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.2em] text-gold uppercase">Quick Links</div>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            <li><Link to="/">Home</Link></li><li><Link to="/menu">Our Menu</Link></li><li><Link to="/">Special Packages</Link></li>
            <li><Link to="/">Today's Offers</Link></li><li><Link to="/about">About Us</Link></li><li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.2em] text-gold uppercase">Contact</div>
          <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
            <li>⌖ 42 Galle Road, Colombo 03, Sri Lanka</li><li>✆ +94 11 234 5678</li><li>✉ reservations@tharukottugrand.lk</li>
          </ul>
          <Link to="/contact" className="bg-cta mt-6 block rounded-full py-2 text-center text-xs font-medium text-primary-foreground">Make a Reservation</Link>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.2em] text-gold uppercase">Follow Us</div>
          <p className="mt-4 text-xs text-muted-foreground">Stay connected for daily specials, behind-the-scenes content, and exclusive offers.</p>
          <div className="mt-4 flex gap-2">{["IG", "FB", "TT", "YT"].map((s) => <span key={s} className="grid size-8 place-items-center rounded-full border border-gold/40 text-[10px] text-gold">{s}</span>)}</div>
          <div className="mt-5 text-xs text-muted-foreground">Subscribe for exclusive offers</div>
          <form className="mt-2 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your email" className="min-w-0 flex-1 rounded-full border border-input bg-background px-3 py-1.5 text-xs outline-hidden" />
            <button className="bg-cta rounded-full px-4 text-xs font-medium text-primary-foreground">Join</button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1100px] justify-between border-t border-border px-6 py-5 text-[10px] text-muted-foreground">
        <span>© 2025 Tharu Kottu Grand. All rights reserved.</span>
        <span className="flex gap-6"><span>Privacy Policy</span><span>Terms &amp; Conditions</span><span>Sitemap</span></span>
      </div>
    </footer>
  );
}
