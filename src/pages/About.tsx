import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const stats = [
  { value: "12+", label: "Years of service" },
  { value: "40", label: "Seats in the dining room" },
  { value: "18", label: "Seasonal menu items" },
  { value: "4.9", label: "Average guest rating" },
];

const values = [
  {
    title: "Seasonal Sourcing",
    desc: "We partner with local farms and producers, letting the harvest shape our menu week to week. Every ingredient is chosen at its peak — never forced, never out of season.",
    image: "/images/dish-appetizer.jpg",
  },
  {
    title: "Considered Craft",
    desc: "Classic technique meets modern plating — every detail is intentional, never fussy. Our kitchen team trains for years before taking the pass, and it shows on every plate.",
    image: "/images/dish-signature.jpg",
  },
  {
    title: "Warm Hospitality",
    desc: "Unhurried service in an intimate room. We want every guest to feel genuinely looked after — from the moment you walk in to the last sip of coffee after dessert.",
    image: "/images/cta.jpg",
  },
];

const team = [
  {
    name: "Marco Delgado",
    role: "Executive Chef & Co-Founder",
    bio: "Trained in Lyon and Barcelona, Marco returned home with a simple belief: great food starts with great ingredients and ends with a table full of happy guests.",
    image: "/images/chef.jpg",
  },
  {
    name: "Elena Verde",
    role: "Front of House Director",
    bio: "Elena shaped the warm, plant-filled atmosphere guests love today. She leads a front-of-house team devoted to unhurried, personal service.",
    image: "/images/interior.jpg",
  },
  {
    name: "James Okonkwo",
    role: "Head Pastry Chef",
    bio: "James crafts desserts that balance nostalgia and surprise — from molten fondants to seasonal fruit tarts that change with the calendar.",
    image: "/images/dish-dessert.jpg",
  },
];

const timeline = [
  { year: "2013", text: "SKARA COFFEE opens its doors as a 20-seat neighbourhood kitchen on a quiet side street." },
  { year: "2015", text: "Our first farm partnership begins — weekly deliveries from a family-run orchard just outside the city." },
  { year: "2017", text: "Recognised among the city's best new dining rooms. The room expands to 40 seats." },
  { year: "2019", text: "Evening service launches with a dedicated tasting menu that rotates every six weeks." },
  { year: "2021", text: "A full redesign brings the warm, plant-filled space guests love today." },
  { year: "2024", text: "Our bar programme wins praise for house-infused spirits and a curated wine list of 80 labels." },
  { year: "2026", text: "Still family-run, still devoted to seasonal, honest cooking — and still booking out most weekends." },
];

const commitments = [
  {
    title: "Local first",
    text: "Over 70% of our produce comes from farms and suppliers within a 50 km radius. We visit our growers in person, every season.",
  },
  {
    title: "Zero waste mindset",
    text: "Trim becomes stock, surplus becomes pickles, and coffee grounds feed a neighbourhood compost programme.",
  },
  {
    title: "Thoughtful sourcing",
    text: "Seafood is line-caught or sustainably farmed. Meat is traceable. We publish our supplier list on request.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About SKARA COFFEE"
        subtitle="A family-run dining room built on seasonal cooking, genuine hospitality, and a room designed for lingering."
        image="/images/chef.jpg"
      />

      {/* Origin story */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Where it began</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              A small kitchen with big intentions
            </h2>
            <p className="mt-5 text-ink/70">
              SKARA COFFEE started as a modest neighbourhood kitchen with one idea: cook honestly,
              source carefully, and treat every guest like family. Marco and Elena opened the doors with
              twenty seats, a borrowed espresso machine, and a menu that changed every Tuesday based on
              what arrived from the market.
            </p>
            <p className="mt-4 text-ink/70">
              Over the years the room has grown, but that founding spirit hasn't changed. Our chefs build
              the menu around what's freshest, balancing comfort with refinement. The result is food that
              feels both familiar and quietly special — the kind of place you bring someone you want to
              impress, and then keep coming back to yourself.
            </p>
            <p className="mt-4 text-ink/70">
              Today, SKARA COFFEE is a full-service dining room with lunch, dinner, and a weekend brunch
              that locals queue for. But walk through the door and you'll still find the same warmth, the
              same attention to detail, and the same belief that a great meal is about more than what's on
              the plate.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-brand-orange md:text-4xl">{s.value}</p>
                  <p className="!text-sm text-ink/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src="/images/interior.jpg" alt="Dining room" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-3xl shadow-xl lg:order-1">
              <img src="/images/hero.jpg" alt="Evening service at SKARA COFFEE" className="h-full w-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow">Our philosophy</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                Food that respects the season
              </h2>
              <p className="mt-5 text-ink/70">
                We don't chase trends. Our menu is a conversation with the land — asparagus in spring,
                stone fruit in summer, root vegetables when the days shorten. When something is at its
                best, we build a dish around it. When it's not, we simply wait.
              </p>
              <p className="mt-4 text-ink/70">
                That patience extends to how we cook. Stocks simmer for hours. Pasta is rolled by hand
                each morning. Bread comes from a baker two streets over who shares our obsession with
                quality. Nothing is pre-made that doesn't need to be.
              </p>
              <blockquote className="mt-8 border-l-4 border-brand-orange pl-6">
                <p className="font-display text-xl italic text-ink/80 md:text-2xl">
                  "We want guests to taste the season — not a concept. Every plate should feel like it
                  could only exist right now, in this room, on this evening."
                </p>
                <footer className="mt-3 text-sm font-semibold text-brand-orange">— Marco Delgado, Executive Chef</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Our values</h2>
            <p className="mt-4 text-ink/70">
              Three principles guide everything we do — from how we write the menu to how we greet you at the door.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-black/5">
                <img src={v.image} alt={v.title} className="h-48 w-full object-cover" />
                <div className="flex-1 p-8">
                  <h3 className="font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-2 !text-base text-ink/65">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The people behind the plates</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Meet the team</h2>
            <p className="mt-4 text-ink/70">
              SKARA COFFEE is still family-run. These are the people who shape your experience — in the kitchen and in the room.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl bg-cream ring-1 ring-black/5"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                    {member.role}
                  </p>
                  <p className="mt-3 !text-base text-ink/65">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability / commitments */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">How we operate</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                Responsibility on every plate
              </h2>
              <p className="mt-5 text-ink/70">
                Good food shouldn't cost the earth. We work hard to keep our footprint small and our
                relationships with producers long-term — many of our suppliers have been with us since
                the first year.
              </p>
            </div>
            <div className="space-y-6">
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                >
                  <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 !text-base text-ink/65">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <p className="eyebrow">Our journey</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">A few milestones</h2>
            <p className="mt-4 text-ink/70">
              From a twenty-seat kitchen to a neighbourhood institution — here's how we got here.
            </p>
          </div>
          <div className="mt-14 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6">
                <span className="shrink-0 font-display text-3xl font-semibold text-brand-orange">{t.year}</span>
                <p className="border-l-2 border-brand-orange/30 pl-6 text-ink/70">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/dish-pasta.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <p className="eyebrow !text-brand-orange">Experience SKARA COFFEE</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Come see what we're about
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Browse our seasonal menu, explore the gallery, or book a table for your next evening out.
            We'd love to welcome you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/40 transition-transform hover:-translate-y-0.5"
            >
              Come Dine With Us
            </Link>
            <Link
              to="/menu"
              className="inline-block rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              View the Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
