import { createFileRoute } from "@tanstack/react-router";
import { Header, PageHero, Eyebrow, Diamond } from "@/components/site/Header";
import interior from "@/assets/interior.jpg.asset.json";
import chef from "@/assets/chef.jpg.asset.json";
import kitchen from "@/assets/kitchen.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tharu Kottu Grand" },
      { name: "description", content: "Born from the iron griddle — our journey, values and the team behind the magic." },
      { property: "og:title", content: "About Us — Tharu Kottu Grand" },
      { property: "og:description", content: "Our journey and passion for Sri Lankan kottu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  ["Authentic Spice", "Every spice blend is ground in-house daily using traditional Sri Lankan recipes passed down through generations."],
  ["Live Cooking", "Our open kitchen means you see every chop, toss, and sizzle. The kottu is always made fresh to order."],
  ["Local Sourcing", "Vegetables from Nuwara Eliya, seafood from Negombo, and spices from Kandy — proudly Sri Lankan."],
  ["Uncompromised Quality", "Every dish passes Chef Tharu's personal quality standard before it reaches your table."],
  ["Warm Hospitality", "We believe in treating every guest like family — with genuine warmth and attentive service."],
  ["Sustainability", "Eco-friendly packaging, zero food-waste kitchens, and community partnerships with local farmers."],
];

const team = [
  { img: chef.url, name: "Tharu Jayasinghe", role: "Founder & Head Chef", bio: "With 20 years on the griddle, Tharu's technique is unmatched. His vision was to make kottu a fine dining icon." },
  { img: kitchen.url, name: "Priya Kumarasinghe", role: "Executive Chef", bio: "Trained in Colombo and Singapore, Priya brings international precision to each Sri Lankan recipe." },
  { img: chef.url, name: "Rohan Dias", role: "Restaurant Manager", bio: "Rohan ensures every guest experience is seamless — from reservation to the last bite of dessert." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header small="THARU" big="KOTTU GRAND" active="about" />
      <PageHero img={interior.url} kicker="Our Journey & Passion" title="About Us" />

      <section className="mx-auto grid max-w-[1000px] items-center gap-14 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="inline-flex flex-col items-center gap-2">
            <Diamond /><div className="text-[11px] tracking-[0.3em] text-gold uppercase">Who We Are</div><Diamond />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold">Born from the <span className="text-primary">Iron Griddle</span></h2>
          <div className="mt-4 h-px w-8 bg-primary" />
          <p className="mt-6 text-sm leading-relaxed text-foreground/85">Tharu Kottu Grand was born from a single, burning belief, that Sri Lanka's most beloved street food deserved a stage worthy of its complexity, its history, and its soul.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Founded in 2013 by Chef Shenaya Jayasinghe, we took the rhythmic clatter of the kottu blade, a sound that defines Colombo nights, and brought it into a dining room built around it. We didn't reinvent the kottu. We gave it the reverence it always deserved.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Today, Tharu Kottu Grand is a landmark of Sri Lankan dining, a place where heritage meets craft, where the humble roti becomes a grand experience, and where every guest leaves a little more in love with Sri Lankan cuisine.</p>
        </div>
        <img src={chef.url} alt="Chef at work" loading="lazy" className="h-[330px] w-full rounded-xl border border-border object-cover shadow-2xl" />
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-10">
        <Eyebrow>What Drives Us</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold">Our <span className="text-primary">Values</span></h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-sm font-semibold">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <Eyebrow>The People Behind the Magic</Eyebrow>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold">Meet Our <span className="text-primary">Team</span></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-52">
                <img src={m.img} alt={m.name} loading="lazy" className="size-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-card" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold">{m.name}</h3>
                <div className="text-[11px] text-primary">{m.role}</div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
