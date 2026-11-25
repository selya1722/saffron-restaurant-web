import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, PageHero, Eyebrow } from "@/components/site/Header";
import flames from "@/assets/flames.jpg.asset.json";
import cheese from "@/assets/cheese.jpg.asset.json";
import noodles from "@/assets/noodles.jpg.asset.json";
import biriyani from "@/assets/biriyani.jpg.asset.json";
import seafood from "@/assets/seafood.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu — Saffron Kitchen & Bar" },
      { name: "description", content: "Noodles, kottu, fried rice, biriyani, sides and drinks — crafted with passion." },
      { property: "og:title", content: "Our Menu — Saffron Kitchen & Bar" },
      { property: "og:description", content: "Explore our Sri Lankan specialties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const tabs = ["Noodles", "Kottu", "Fried Rice", "Biriyani", "Sides & Drinks"];

const items = [
  { img: seafood.url, name: "Chicken Noodles", price: "LKR 1,100", spice: 2, desc: "Stir-fried egg noodles with tender chicken, bell peppers, carrots & soy-ginger sauce." },
  { img: cheese.url, name: "Cheese Kottu", price: "LKR 1,450", spice: 2, tag: "Chef's Pick", desc: "Shredded godamba roti with melted cheddar & mozzarella, egg, leeks & house spices." },
  { img: noodles.url, name: "Special Fried Rice", price: "LKR 1,250", spice: 3, desc: "Wok-tossed basmati rice with prawns, chicken, egg, cashews & mixed vegetables." },
  { img: biriyani.url, name: "Chicken Biriyani", price: "LKR 1,650", spice: 1, tag: "New", desc: "Fragrant basmati rice layered with spiced chicken, caramelized onions & saffron." },
];

function MenuPage() {
  const [tab, setTab] = useState("Noodles");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header small="SAFFRON" big="KITCHEN & BAR" active="menu" />
      <PageHero img={flames.url} kicker="Crafted with Passion" title="Our Menu" />

      <div className="mt-16 flex flex-wrap justify-center gap-3 px-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
              tab === t ? "bg-cta border-transparent font-medium text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-gold/50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <section className="mx-auto max-w-[1140px] px-6 py-14">
        <Eyebrow>Select Your Favourite</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-4xl font-bold">Our Specialties</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => (
            <article key={d.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-44">
                <img src={d.img} alt={d.name} loading="lazy" className="size-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-card" />
                {d.tag && <span className="absolute top-3 right-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">{d.tag}</span>}
              </div>
              <div className="p-5">
                <div className="flex justify-between gap-2"><h3 className="font-serif text-sm font-semibold">{d.name}</h3><span className="font-serif text-sm text-primary">{d.price}</span></div>
                <div className="mt-2 text-xs">{[0, 1, 2].map((i) => <span key={i} className={i < d.spice ? "text-destructive" : "text-muted"}>🌶</span>)}</div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{d.desc}</p>
                <button className="mt-5 w-full rounded-full border border-gold/50 py-2 text-xs tracking-wider text-gold hover:bg-gold/10">Add to Order</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex gap-4 rounded-xl border border-border bg-card p-6">
          <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-primary text-xs font-bold text-primary">!</span>
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Allergen Information:</span> Some dishes contain gluten, dairy, eggs, shellfish, or nuts. Please inform our staff of any dietary requirements before ordering. All dishes are prepared in a kitchen where nuts and allergens are present. Prices are inclusive of applicable taxes.
          </p>
        </div>
      </section>
    </div>
  );
}
