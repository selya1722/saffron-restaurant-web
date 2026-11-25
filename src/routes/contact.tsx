import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, PageHero } from "@/components/site/Header";
import street from "@/assets/street.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Tharu Kottu Grand" },
      { name: "description", content: "Find us, call us, email us or send a message to reserve your table." },
      { property: "og:title", content: "Contact Us — Tharu Kottu Grand" },
      { property: "og:description", content: "We'd love to hear from you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: "⌖", label: "Find Us", lines: ["42 Galle Road, Colombo 03", "Sri Lanka"], note: "Open for walk-ins daily" },
  { icon: "✆", label: "Call Us", lines: ["+94 11 234 5678", "+94 77 890 1234"], note: "Available 10 AM – 11 PM" },
  { icon: "✉", label: "Email Us", lines: ["reservations@tharukottugrand.lk", "info@tharukottugrand.lk"], note: "We reply within 2 hours" },
  { icon: "◷", label: "Opening Hours", lines: ["Mon–Fri: 11:00 AM – 11:00 PM", "Sat–Sun: 10:00 AM – 12:00 AM"], note: "Last order 30 min before closing" },
];
const interests = ["Dine In", "Takeaway", "Private Event", "Corporate Booking", "Catering", "Feedback"];
const socials = [
  ["Instagram", "@tharukottugrand"], ["Facebook", "Tharu Kottu Grand"], ["Whatsapp", "+94 123 456 7789"], ["YouTube", "Tharu Kottu Grand"],
];

const inputCls = "w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-hidden focus:border-primary";
const labelCls = "mb-2 block text-[11px] tracking-[0.2em] text-gold uppercase";

function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header small="THARU" big="KOTTU GRAND" active="contact" />
      <PageHero img={street.url} kicker="We'd Love to Hear From You" title="Contact Us" />

      <section className="relative mx-auto -mt-20 grid max-w-[1140px] gap-5 px-6 md:grid-cols-4">
        {info.map((c) => (
          <div key={c.label} className="rounded-xl border border-border bg-card/90 p-5 backdrop-blur-sm">
            <div className="grid size-10 place-items-center rounded-lg border border-gold/40 bg-primary/10 text-primary">{c.icon}</div>
            <div className="mt-4 text-[11px] tracking-[0.2em] text-gold uppercase">{c.label}</div>
            {c.lines.map((l) => <div key={l} className="mt-1 text-sm">{l}</div>)}
            <div className="mt-2 text-xs text-muted-foreground">{c.note}</div>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1140px] gap-8 px-6 py-16 lg:grid-cols-[1.6fr_1fr]">
        <form className="rounded-xl border border-border bg-card p-10" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="text-[11px] tracking-[0.25em] text-gold uppercase">Send a Message</div>
          <h2 className="mt-2 font-serif text-2xl font-bold">Get in Touch</h2>
          <div className="mt-4 h-px w-8 bg-primary" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label><span className={labelCls}>Full Name</span><input required className={inputCls} placeholder="Kasun Perera" /></label>
            <label><span className={labelCls}>Email Address</span><input required type="email" className={inputCls} placeholder="kasun@example.com" /></label>
            <label><span className={labelCls}>Phone Number</span><input className={inputCls} placeholder="+94 77 123 4567" /></label>
            <label><span className={labelCls}>Subject</span><input className={inputCls} placeholder="Reservation Enquiry" /></label>
          </div>
          <div className="mt-6"><span className={labelCls}>I'm Interested In</span>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => {
                const on = picked.includes(i);
                return (
                  <button type="button" key={i} onClick={() => setPicked(on ? picked.filter((p) => p !== i) : [...picked, i])}
                    className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${on ? "border-primary bg-primary/20 text-primary" : "border-gold/30 bg-secondary text-foreground/80"}`}>{i}</button>
                );
              })}
            </div>
          </div>
          <label className="mt-6 block"><span className={labelCls}>Your Message</span>
            <textarea rows={5} className={inputCls} placeholder="Tell us about your visit, reservation details, special requirements, or any questions you have..." />
          </label>
          <button className="bg-cta mt-8 w-full rounded-full py-3.5 text-sm font-semibold tracking-widest text-primary-foreground">➤ Send Message</button>
          {sent && <p className="mt-4 text-center text-sm text-primary">Thank you! We'll get back to you within 2 hours.</p>}
        </form>

        <div className="space-y-6">
          <div className="relative h-[280px] overflow-hidden rounded-xl border border-border">
            <img src={interior.url} alt="Tharu Kottu Grand interior" loading="lazy" className="size-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-linear-to-t from-background/90 to-transparent p-5">
              <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">⌖</span>
              <div><div className="text-sm">Tharu Kottu Grand</div><div className="text-xs text-muted-foreground">42 Galle Road, Colombo 03, Sri Lanka</div></div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-linear-to-br from-primary/10 to-card p-6">
            <div className="text-[11px] tracking-[0.25em] text-gold uppercase">Quick Reservation</div>
            <h3 className="mt-2 font-serif text-lg font-bold">Reserve Your Table</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">For same-day reservations or immediate enquiries, call us directly or drop in. We hold tables for up to 15 minutes.</p>
            <a href="tel:+94112345678" className="bg-cta mt-5 block rounded-full py-2.5 text-center text-sm font-semibold text-primary-foreground">✆ +94 11 234 5678</a>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-[11px] tracking-[0.25em] text-gold uppercase">Follow Our Journey</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {socials.map(([n, h]) => (
                <div key={n} className="rounded-lg border border-border bg-secondary p-3"><div className="text-xs">{n}</div><div className="text-xs text-muted-foreground">{h}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
