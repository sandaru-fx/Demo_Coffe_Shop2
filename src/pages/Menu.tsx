import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

type Item = { name: string; desc: string; price: string; tag?: string; image?: string };

const menu: Record<string, Item[]> = {
  "All-Day Breakfast": [
    { name: "Smashed Avocado Toast", desc: "Sourdough, poached egg, chili flakes, micro herbs.", price: "Rs 1,800", tag: "Popular", image: "/images/avocado-toast.png" },
    { name: "Eggs Benedict", desc: "Toasted English muffin, hollandaise, smoked salmon or honey ham.", price: "Rs 2,200" },
    { name: "Fluffy Ricotta Pancakes", desc: "Berry compote, maple syrup, honeycomb butter.", price: "Rs 1,600", tag: "Signature" },
    { name: "Açaí Smoothie Bowl", desc: "House granola, fresh berries, chia seeds, coconut flakes.", price: "Rs 1,500", tag: "Vegan", image: "/images/dish-appetizer.jpg" },
  ],
  Starters: [
    { name: "Oysters & Seafood Platter", desc: "Fresh oysters, lemon, herbs, mignonette.", price: "Rs 4,600", tag: "Chef's" },
    { name: "Burrata & Heirloom Tomato", desc: "Basil oil, aged balsamic, sourdough crisp.", price: "Rs 2,900" },
    { name: "Roasted Pumpkin Soup", desc: "Toasted seeds, sage cream, brown butter.", price: "Rs 1,800" },
    { name: "Crispy Calamari", desc: "Smoked paprika aioli, charred lemon.", price: "Rs 2,400" },
    { name: "Truffle Parmesan Fries", desc: "Hand-cut fries, truffle oil, aged parmesan, garlic aioli.", price: "Rs 1,400" },
  ],
  Mains: [
    { name: "Seared Atlantic Salmon", desc: "Citrus beurre blanc, charred fennel, microgreens.", price: "Rs 4,200", tag: "Popular", image: "/images/dish-signature.jpg" },
    { name: "Truffle Tagliatelle", desc: "Hand-rolled pasta, black truffle, aged parmesan.", price: "Rs 3,800", image: "/images/dish-pasta.jpg" },
    { name: "Slow-Braised Short Rib", desc: "Red wine jus, parsnip purée, glazed carrots.", price: "Rs 5,200" },
    { name: "Wild Mushroom Risotto", desc: "Arborio rice, white wine, truffle pecorino.", price: "Rs 3,400", tag: "Vegetarian" },
    { name: "Herb-Crusted Lamb", desc: "Rosemary jus, roasted root vegetables.", price: "Rs 5,600" },
    { name: "Wagyu Beef Burger", desc: "Brioche bun, cheddar, caramelized onions, house sauce, fries.", price: "Rs 3,800", tag: "Signature" },
  ],
  "Bakery & Desserts": [
    { name: "Dark Chocolate Fondant", desc: "Molten centre, raspberry coulis, gold leaf.", price: "Rs 2,400", tag: "Signature", image: "/images/dish-dessert.jpg" },
    { name: "Vanilla Crème Brûlée", desc: "Madagascar vanilla, caramelised sugar.", price: "Rs 2,000" },
    { name: "Seasonal Fruit Tart", desc: "Almond frangipane, vanilla custard.", price: "Rs 1,900" },
    { name: "Classic Tiramisu", desc: "Espresso-soaked ladyfingers, mascarpone, cocoa powder.", price: "Rs 1,800" },
    { name: "Butter Croissant", desc: "Freshly baked, served with artisanal butter and jam.", price: "Rs 900", image: "/images/croissant.png" },
    { name: "Almond Croissant", desc: "Twice-baked with almond frangipane and flaked almonds.", price: "Rs 1,100" },
  ],
  "Coffee & Espresso": [
    { name: "Single Origin Espresso", desc: "Notes of dark chocolate and berries. Ethiopia/Colombia.", price: "Rs 600" },
    { name: "Classic Cappuccino", desc: "Perfectly textured milk, rich espresso, cocoa dust.", price: "Rs 800", tag: "Popular", image: "/images/cappuccino.png" },
    { name: "Flat White", desc: "Double ristretto, silky microfoam milk.", price: "Rs 850" },
    { name: "Caramel Macchiato", desc: "Vanilla syrup, steamed milk, espresso, caramel drizzle.", price: "Rs 950" },
    { name: "Iced Spanish Latte", desc: "Sweetened condensed milk, espresso, milk, over ice.", price: "Rs 1,100", tag: "Signature" },
    { name: "Cold Brew", desc: "Steeped for 18 hours, served over ice. Smooth and bold.", price: "Rs 900" },
  ],
  Drinks: [
    { name: "House Red / White", desc: "By the glass — ask for today's pour.", price: "Rs 1,400" },
    { name: "Signature Cocktails", desc: "Crafted with seasonal botanicals.", price: "Rs 1,800" },
    { name: "Fresh Pressed Juice", desc: "Daily rotating fruit selection.", price: "Rs 900" },
    { name: "Matcha Latte", desc: "Ceremonial grade matcha, steamed milk, lightly sweetened.", price: "Rs 1,200", tag: "Popular" },
    { name: "Artisan Teas", desc: "Earl Grey, Chamomile, Peppermint, or Sencha Green.", price: "Rs 750" },
  ],
};

const categories = Object.keys(menu);

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  return (
    <>
      <PageHeader
        eyebrow="Crafted Daily"
        title="Our Menu"
        subtitle="Seasonal ingredients, modern technique, and flavours designed to be savoured."
        image="/images/dish-pasta.jpg"
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        {/* Category tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-6 py-2.5 text-base font-semibold transition-colors ${
                active === c
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                  : "bg-white text-ink ring-1 ring-black/10 hover:ring-brand-orange/50"
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
                  <img src={item.image} alt={item.name} className="h-24 w-24 rounded-2xl object-cover flex-shrink-0 shadow-sm" />
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

        <div className="mt-14 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
          <p className="eyebrow">Dietary Notes</p>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Many dishes can be adapted for dietary needs. Please let our team know about allergies or
            preferences when you book or arrive.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  );
}
