import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

type Item = { name: string; desc: string; price: string; tag?: string; image?: string };

const menu: Record<string, Item[]> = {
  "All-Day Breakfast": [
    { name: "Smashed Avocado Toast", desc: "Sourdough, poached egg, chili flakes, micro herbs, lime zest.", price: "Rs 1,800", tag: "Popular", image: "/images/avocado-toast.png" },
    { name: "Eggs Benedict", desc: "Toasted English muffin, hollandaise, smoked salmon or honey ham, chives.", price: "Rs 2,200" },
    { name: "Fluffy Ricotta Pancakes", desc: "Berry compote, maple syrup, honeycomb butter, edible flowers.", price: "Rs 1,600", tag: "Signature" },
    { name: "Açaí Smoothie Bowl", desc: "House granola, fresh berries, chia seeds, coconut flakes, goji berries.", price: "Rs 1,500", tag: "Vegan", image: "/images/dish-appetizer.jpg" },
    { name: "Shakshuka", desc: "Slow-cooked tomato and pepper sauce, baked eggs, feta, warm pita.", price: "Rs 1,900", tag: "Vegetarian" },
    { name: "Full English Breakfast", desc: "Free-range eggs, bacon, sausage, grilled tomato, mushrooms, sourdough.", price: "Rs 2,600" },
    { name: "Granola & Greek Yoghurt", desc: "House-made granola, seasonal fruit, local honey, mint.", price: "Rs 1,400", tag: "Vegetarian" },
  ],
  Starters: [
    { name: "Oysters & Seafood Platter", desc: "Fresh oysters, lemon, herbs, mignonette, cocktail sauce.", price: "Rs 4,600", tag: "Chef's" },
    { name: "Burrata & Heirloom Tomato", desc: "Basil oil, aged balsamic, sourdough crisp, sea salt.", price: "Rs 2,900" },
    { name: "Roasted Pumpkin Soup", desc: "Toasted seeds, sage cream, brown butter, sourdough croutons.", price: "Rs 1,800" },
    { name: "Crispy Calamari", desc: "Smoked paprika aioli, charred lemon, pickled chili.", price: "Rs 2,400" },
    { name: "Truffle Parmesan Fries", desc: "Hand-cut fries, truffle oil, aged parmesan, garlic aioli.", price: "Rs 1,400" },
    { name: "Beef Tartare", desc: "Hand-cut sirloin, capers, shallot, quail egg, toasted brioche.", price: "Rs 3,200", tag: "Signature" },
    { name: "Charred Octopus", desc: "Romesco, smoked paprika potatoes, preserved lemon.", price: "Rs 3,800" },
    { name: "Soup of the Day", desc: "Ask your server — always seasonal, always from scratch.", price: "Rs 1,600" },
  ],
  Mains: [
    { name: "Seared Atlantic Salmon", desc: "Citrus beurre blanc, charred fennel, microgreens, dill oil.", price: "Rs 4,200", tag: "Popular", image: "/images/dish-signature.jpg" },
    { name: "Truffle Tagliatelle", desc: "Hand-rolled pasta, black truffle, aged parmesan, brown butter.", price: "Rs 3,800", image: "/images/dish-pasta.jpg" },
    { name: "Slow-Braised Short Rib", desc: "Red wine jus, parsnip purée, glazed carrots, gremolata.", price: "Rs 5,200" },
    { name: "Wild Mushroom Risotto", desc: "Arborio rice, white wine, truffle pecorino, fresh thyme.", price: "Rs 3,400", tag: "Vegetarian" },
    { name: "Herb-Crusted Lamb", desc: "Rosemary jus, roasted root vegetables, mint yogurt.", price: "Rs 5,600" },
    { name: "Wagyu Beef Burger", desc: "Brioche bun, cheddar, caramelized onions, house sauce, fries.", price: "Rs 3,800", tag: "Signature" },
    { name: "Pan-Roasted Duck Breast", desc: "Cherry gastrique, confit leg croquette, wilted greens.", price: "Rs 5,400" },
    { name: "Grilled Market Fish", desc: "Daily catch, lemon butter, seasonal vegetables, herb salad.", price: "Rs 4,800", tag: "Chef's" },
    { name: "Roasted Cauliflower Steak", desc: "Tahini dressing, pomegranate, toasted almonds, herbs.", price: "Rs 2,800", tag: "Vegan" },
  ],
  "Bakery & Desserts": [
    { name: "Dark Chocolate Fondant", desc: "Molten centre, raspberry coulis, gold leaf, vanilla ice cream.", price: "Rs 2,400", tag: "Signature", image: "/images/dish-dessert.jpg" },
    { name: "Vanilla Crème Brûlée", desc: "Madagascar vanilla, caramelised sugar, shortbread biscuit.", price: "Rs 2,000" },
    { name: "Seasonal Fruit Tart", desc: "Almond frangipane, vanilla custard, mint, icing sugar.", price: "Rs 1,900" },
    { name: "Classic Tiramisu", desc: "Espresso-soaked ladyfingers, mascarpone, cocoa powder, amaretto.", price: "Rs 1,800" },
    { name: "Butter Croissant", desc: "Freshly baked, served with artisanal butter and house jam.", price: "Rs 900", image: "/images/croissant.png" },
    { name: "Almond Croissant", desc: "Twice-baked with almond frangipane and flaked almonds.", price: "Rs 1,100" },
    { name: "Lemon Posset", desc: "Silky lemon cream, shortbread crumble, berry gel.", price: "Rs 1,700" },
    { name: "Affogato", desc: "Double espresso poured over vanilla gelato, amaretti biscuit.", price: "Rs 1,200" },
  ],
  "Coffee & Espresso": [
    { name: "Single Origin Espresso", desc: "Notes of dark chocolate and berries. Rotating Ethiopia/Colombia.", price: "Rs 600" },
    { name: "Classic Cappuccino", desc: "Perfectly textured milk, rich espresso, cocoa dust.", price: "Rs 800", tag: "Popular", image: "/images/cappuccino.png" },
    { name: "Flat White", desc: "Double ristretto, silky microfoam milk.", price: "Rs 850" },
    { name: "Caramel Macchiato", desc: "Vanilla syrup, steamed milk, espresso, caramel drizzle.", price: "Rs 950" },
    { name: "Iced Spanish Latte", desc: "Sweetened condensed milk, espresso, milk, over ice.", price: "Rs 1,100", tag: "Signature" },
    { name: "Cold Brew", desc: "Steeped for 18 hours, served over ice. Smooth and bold.", price: "Rs 900" },
    { name: "Pour Over", desc: "Single origin filter coffee, brewed to order. Ask for today's bean.", price: "Rs 750" },
    { name: "Mocha", desc: "Espresso, steamed milk, dark chocolate, whipped cream.", price: "Rs 950" },
  ],
  Drinks: [
    { name: "House Red / White", desc: "By the glass — ask for today's pour from our curated list.", price: "Rs 1,400" },
    { name: "Signature Cocktails", desc: "Crafted with seasonal botanicals. Garden Spritz, Skara Old Fashioned.", price: "Rs 1,800" },
    { name: "Fresh Pressed Juice", desc: "Daily rotating fruit selection — orange, apple, or green blend.", price: "Rs 900" },
    { name: "Matcha Latte", desc: "Ceremonial grade matcha, steamed milk, lightly sweetened.", price: "Rs 1,200", tag: "Popular" },
    { name: "Artisan Teas", desc: "Earl Grey, Chamomile, Peppermint, or Sencha Green.", price: "Rs 750" },
    { name: "Sparkling Water", desc: "San Pellegrino or local sparkling, served chilled.", price: "Rs 650" },
    { name: "Craft Beer", desc: "Rotating local and imported selection. Ask your server.", price: "Rs 1,100" },
    { name: "Aperol Spritz", desc: "Aperol, prosecco, soda, orange slice.", price: "Rs 1,600", tag: "Popular" },
  ],
};

const categories = Object.keys(menu);

const highlights = [
  {
    name: "Chef's Tasting Menu",
    desc: "Five courses chosen by Marco each evening — a journey through the season's best. Optional wine pairing available.",
    price: "Rs 8,500",
    note: "Available Tue – Sat, 6:30 pm seating. 48 hours' notice required.",
    image: "/images/dish-signature.jpg",
  },
  {
    name: "Weekend Brunch Set",
    desc: "Starter, main, and coffee or juice — the perfect lazy Saturday or Sunday morning.",
    price: "Rs 3,200",
    note: "Sat – Sun, 11:00 am – 3:00 pm. Walk-ins welcome before noon.",
    image: "/images/avocado-toast.png",
  },
  {
    name: "Pastry & Coffee Pairing",
    desc: "Three pastries from our bakery counter with three single-origin coffees, guided by our barista.",
    price: "Rs 2,400",
    note: "Available all day. Ideal for a mid-afternoon treat.",
    image: "/images/croissant.png",
  },
];

const dietaryNotes = [
  {
    title: "Allergies & intolerances",
    text: "Please inform us of any allergies when booking or on arrival. Our kitchen can adapt most dishes — gluten-free pasta, dairy-free sauces, and nut-free options are available on request.",
  },
  {
    title: "Vegetarian & vegan",
    text: "Several dishes are marked on the menu. Our chefs can prepare plant-based versions of many mains — just ask your server.",
  },
  {
    title: "Children",
    text: "Smaller portions of pasta, fish, and desserts are available for younger guests. High chairs provided on request.",
  },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  return (
    <>
      <PageHeader
        eyebrow="Crafted Daily"
        title="Our Menu"
        subtitle="Seasonal ingredients, modern technique, and flavours designed to be savoured — from morning brunch to late-evening dessert."
        image="/images/dish-pasta.jpg"
      />

      {/* Menu philosophy */}
      <section className="border-b border-black/5 bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="eyebrow">How we cook</p>
          <p className="mt-4 text-lg text-ink/70">
            Our menu changes with the seasons. What you see today reflects what's freshest from our
            partner farms and trusted suppliers — so some dishes may vary week to week. Everything is
            made in-house, from the pasta and bread to the stocks and sauces that build each plate.
          </p>
        </div>
      </section>

      {/* Signature experiences */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Beyond the à la carte</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Signature experiences</h2>
            <p className="mt-4 text-ink/70">
              For something special, explore our curated sets — perfect for a celebration or a leisurely afternoon.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {highlights.map((h) => (
              <article
                key={h.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="h-48 overflow-hidden">
                  <img src={h.image} alt={h.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold">{h.name}</h3>
                    <span className="shrink-0 text-lg font-semibold text-brand-orange">{h.price}</span>
                  </div>
                  <p className="mt-2 !text-base text-ink/65">{h.desc}</p>
                  <p className="mt-3 !text-sm text-ink/50">{h.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main menu */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-center">
            <p className="eyebrow">À la carte</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Full menu</h2>
            <p className="mt-4 text-ink/70">
              Browse by category. Prices include service charge. A 10% government levy applies where required.
            </p>
          </div>

          <div className="mb-12 mt-14 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-6 py-2.5 text-base font-semibold transition-colors ${
                  active === c
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                    : "bg-cream text-ink ring-1 ring-black/10 hover:ring-brand-orange/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {menu[active].map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-6 border-b border-black/10 pb-6"
              >
                <div className="flex gap-5">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 flex-shrink-0 rounded-2xl object-cover shadow-sm"
                    />
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                      {item.tag && (
                        <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 !text-base text-ink/65">{item.desc}</p>
                  </div>
                </div>
                <span className="whitespace-nowrap pt-1 text-lg font-semibold text-brand-orange">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine & coffee bar */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img src="/images/cappuccino.png" alt="Coffee and wine bar" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow">The bar</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                Coffee by day, wine by night
              </h2>
              <p className="mt-5 text-ink/70">
                Our bar programme is as considered as the kitchen. Single-origin espresso from rotating
                roasters, pour-over filter coffee, and a curated wine list of 80 labels — mostly Old World,
                with a handful of natural and biodynamic bottles we love.
              </p>
              <p className="mt-4 text-ink/70">
                Signature cocktails use house-infused spirits and seasonal botanicals from the garden terrace.
                Ask about our wine pairing menu to complement the chef's tasting experience.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-display text-3xl font-semibold text-brand-orange">80+</p>
                  <p className="!text-sm text-ink/60">Wine labels</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-brand-orange">6</p>
                  <p className="!text-sm text-ink/60">Signature cocktails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary notes */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Dietary information</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Eating with us</h2>
            <p className="mt-4 text-ink/70">
              We want everyone to enjoy their meal. Here's what you should know before you visit.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {dietaryNotes.map((note) => (
              <div key={note.title} className="rounded-2xl bg-cream p-8 ring-1 ring-black/5">
                <h3 className="font-display text-xl font-semibold">{note.title}</h3>
                <p className="mt-3 !text-base text-ink/65">{note.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-transform hover:-translate-y-0.5"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/dish-dessert.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <p className="eyebrow !text-brand-orange">See it for yourself</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            A table is waiting
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Book for dinner, brunch, or a special occasion. Our team will make sure your evening is
            as memorable as the food.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/40 transition-transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
            <Link
              to="/gallery"
              className="inline-block rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
