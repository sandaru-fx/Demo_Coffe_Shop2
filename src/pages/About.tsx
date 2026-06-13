import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const values = [
  {
    title: "Seasonal Sourcing",
    desc: "We partner with local farms and producers, letting the harvest shape our menu week to week.",
    icon: "🌿",
    image: "/images/dish-appetizer.jpg",
  },
  {
    title: "Considered Craft",
    desc: "Classic technique meets modern plating — every detail is intentional, never fussy.",
    icon: "🔥",
    image: "/images/dish-signature.jpg",
  },
  {
    title: "Warm Hospitality",
    desc: "Unhurried service in an intimate room. We want every guest to feel genuinely looked after.",
    icon: "✨",
    image: "/images/cta.jpg",
  },
];

const timeline = [
  { year: "2013", text: "Maison Verde opens its doors as a 20-seat neighbourhood kitchen." },
  { year: "2017", text: "Recognised among the city's best new dining rooms." },
  { year: "2021", text: "A full redesign brings the warm, plant-filled space guests love today." },
  { year: "2026", text: "Still family-run, still devoted to seasonal, honest cooking." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Maison Verde"
        subtitle="A family-run dining room built on seasonal cooking and genuine hospitality."
        image="/images/chef.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Where it began</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              A small kitchen with big intentions
            </h2>
            <p className="mt-5 text-ink/70">
              Maison Verde started as a modest neighbourhood kitchen with one idea: cook honestly,
              source carefully, and treat every guest like family. Over the years the room has grown,
              but that founding spirit hasn't changed.
            </p>
            <p className="mt-4 text-ink/70">
              Our chefs build the menu around what's freshest, balancing comfort with refinement.
              The result is food that feels both familiar and quietly special.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src="/images/interior.jpg" alt="Dining room" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Our values</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="overflow-hidden flex flex-col rounded-3xl bg-cream ring-1 ring-black/5">
                <img src={v.image} alt={v.title} className="h-48 w-full object-cover" />
                <div className="p-8 flex-1">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-orange/10 text-2xl">
                    {v.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-2 !text-base text-ink/65">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <div className="text-center">
          <p className="eyebrow">Our journey</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">A few milestones</h2>
        </div>
        <div className="mt-14 space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6">
              <span className="font-display text-3xl font-semibold text-brand-orange">{t.year}</span>
              <p className="border-l-2 border-brand-orange/30 pl-6 text-ink/70">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-transform hover:-translate-y-0.5"
          >
            Come Dine With Us
          </Link>
        </div>
      </section>
    </>
  );
}
