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

const experiences = [
  {
    title: "Seasonal Menu",
    desc: "A menu that changes with the harvest — always fresh, never repeated for the sake of it.",
    image: "/images/dish-appetizer.jpg",
  },
  {
    title: "Curated Wine List",
    desc: "Over 80 labels, mostly Old World, with natural and biodynamic bottles we love.",
    image: "/images/cta.jpg",
  },
  {
    title: "Warm Hospitality",
    desc: "Unhurried, personal service in an intimate, plant-filled dining room.",
    image: "/images/interior.jpg",
  },
];

const team = [
  {
    name: "Marco Delgado",
    role: "Executive Chef",
    image: "/images/chef.jpg",
  },
  {
    name: "Elena Verde",
    role: "Front of House",
    image: "/images/interior.jpg",
  },
  {
    name: "James Okonkwo",
    role: "Head Pastry Chef",
    image: "/images/dish-dessert.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The tasting menu was the best meal we've had all year. Every course was a quiet surprise — and the service made us feel like regulars on our first visit.",
    name: "Priya M.",
    detail: "Anniversary dinner",
  },
  {
    quote:
      "Warm, unhurried, and genuinely delicious. The short rib melts in your mouth and the wine pairing was spot on. We're already planning our next visit.",
    name: "Daniel R.",
    detail: "Weekend dinner",
  },
  {
    quote:
      "Weekend brunch here is a ritual now. The ricotta pancakes, the coffee, the light through the windows — it's the perfect slow Sunday.",
    name: "Aisha K.",
    detail: "Regular guest",
  },
];

const galleryPreview = [
  { src: "/images/dish-signature.jpg", label: "Seared salmon" },
  { src: "/images/interior.jpg", label: "The dining room" },
  { src: "/images/dish-pasta.jpg", label: "Truffle tagliatelle" },
  { src: "/images/chef.jpg", label: "In the kitchen" },
  { src: "/images/dish-dessert.jpg", label: "Chocolate fondant" },
  { src: "/images/cta.jpg", label: "Table for two" },
];

const hoursStrip = [
  { day: "Mon – Thu", time: "Dinner · 5:00 pm – 10:30 pm" },
  { day: "Fri – Sat", time: "Dinner · 5:00 pm – 11:00 pm" },
  { day: "Sat – Sun", time: "Brunch · 11:00 am – 3:00 pm" },
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
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <span className="animate-bounce text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Scroll
          </span>
        </div>
      </section>

      {/* Opening hours strip */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3 lg:px-10">
          {hoursStrip.map((h) => (
            <div key={h.day} className="flex items-center gap-4 sm:justify-center">
              <span className="font-display text-2xl font-semibold text-brand-orange">{h.day}</span>
              <span className="text-sm text-cream/70">{h.time}</span>
            </div>
          ))}
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
            <Link
              to="/about"
              className="mt-8 inline-block rounded-full border border-ink/15 px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why SKARA COFFEE</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">An evening to remember</h2>
            <p className="mt-4 text-ink/70">
              More than a meal — a considered experience from the moment you walk in.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {experiences.map((e) => (
              <article
                key={e.title}
                className="group overflow-hidden rounded-3xl bg-cream ring-1 ring-black/5 transition-transform hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
                  <p className="mt-2 !text-base text-ink/65">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="py-24">
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
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1"
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

      {/* Team preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The people behind the plates</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Meet the team</h2>
            <p className="mt-4 text-ink/70">
              Still family-run, still devoted to seasonal, honest cooking.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="mx-auto h-64 w-full overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-block rounded-full border border-ink/15 px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Kind words</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">What guests say</h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-brand-orange">
              <span className="text-xl">★★★★★</span>
              <span className="text-base font-semibold text-ink/70">4.9 / 5 · 600+ reviews</span>
            </div>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
              >
                <div className="text-brand-orange">★★★★★</div>
                <blockquote className="mt-4 flex-1 text-ink/75">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <p className="font-display text-xl font-semibold">{t.name}</p>
                  <p className="!text-sm text-ink/55">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-style gallery preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">@skaracoffee</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">From our table to yours</h2>
            <p className="mt-4 text-ink/70">
              A glimpse of the room, the plates, and the moments we love to share.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryPreview.map((img, i) => (
              <Link
                key={i}
                to="/gallery"
                className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-black/5"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/50 text-2xl text-white opacity-0 transition-opacity group-hover:opacity-100">
                  +
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-block rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Full Gallery
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
