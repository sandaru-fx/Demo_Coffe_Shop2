import { Link } from "react-router-dom";

const featured = [
  {
    name: "Seared Atlantic Salmon",
    desc: "Citrus beurre blanc, charred fennel, microgreens.",
    price: "Rs 4,200",
    img: "/images/dish-signature.jpg",
  },
  {
    name: "Truffle Tagliatelle",
    desc: "Hand-rolled pasta, black truffle, aged parmesan.",
    price: "Rs 3,800",
    img: "/images/dish-pasta.jpg",
  },
  {
    name: "Dark Chocolate Fondant",
    desc: "Molten centre, raspberry coulis, gold leaf.",
    price: "Rs 2,400",
    img: "/images/dish-dessert.jpg",
  },
];

const stats = [
  { value: "18", label: "Seasonal dishes" },
  { value: "12", label: "Years of craft" },
  { value: "4.9", label: "Guest rating" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl animate-fade-up text-white">
            <p className="eyebrow !text-brand-orange">Modern Seasonal Dining</p>
            <h1 className="mt-4 font-display text-6xl font-semibold leading-[1.05] md:text-7xl">
              Where every plate tells a story
            </h1>
            <p className="mt-6 max-w-xl text-white/85">
              A polished restaurant experience where seasonal ingredients meet modern craft. Warm
              lighting, considered flavours, and a menu designed to be lingered over.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-transform hover:-translate-y-0.5"
              >
                Reserve a Table
              </Link>
              <Link
                to="/menu"
                className="rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / about strip */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src="/images/interior.jpg" alt="Restaurant interior" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Honest food, beautifully served
            </h2>
            <p className="mt-5 text-ink/70">
              We build our menu around what the season offers — sourcing from local farms and trusted
              producers. Each dish is plated with intention, balancing comfort and refinement so that
              every visit feels like an occasion.
            </p>
            <p className="mt-4 text-ink/70">
              From the first pour to the last bite, our team is devoted to a warm, unhurried kind of
              hospitality.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-semibold text-brand-orange">{s.value}</p>
                  <p className="!text-sm text-ink/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Chef's Selection</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Signature plates</h2>
            <p className="mt-4 text-ink/70">
              A taste of what awaits — three favourites guests return for again and again.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featured.map((d) => (
              <article
                key={d.name}
                className="group overflow-hidden rounded-3xl bg-cream shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                    <span className="text-base font-semibold text-brand-orange">{d.price}</span>
                  </div>
                  <p className="mt-2 !text-base text-ink/65">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-block rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/cta.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <p className="eyebrow !text-brand-orange">Join Us This Evening</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            An unforgettable table is waiting
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Book your seat for an evening of considered food and warm hospitality. Reservations are
            recommended for weekend dining.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/40 transition-transform hover:-translate-y-0.5"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  );
}
