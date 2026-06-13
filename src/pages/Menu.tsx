import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

type Item = { name: string; desc: string; price: string; tag?: string };

const menu: Record<string, Item[]> = {
  Starters: [
    { name: "Oysters & Seafood Platter", desc: "Fresh oysters, lemon, herbs, mignonette.", price: "Rs 4,600", tag: "Chef's" },
    { name: "Burrata & Heirloom Tomato", desc: "Basil oil, aged balsamic, sourdough crisp.", price: "Rs 2,900" },
    { name: "Roasted Pumpkin Soup", desc: "Toasted seeds, sage cream, brown butter.", price: "Rs 1,800" },
    { name: "Crispy Calamari", desc: "Smoked paprika aioli, charred lemon.", price: "Rs 2,400" },
  ],
  Mains: [
    { name: "Seared Atlantic Salmon", desc: "Citrus beurre blanc, charred fennel, microgreens.", price: "Rs 4,200", tag: "Popular" },
    { name: "Truffle Tagliatelle", desc: "Hand-rolled pasta, black truffle, aged parmesan.", price: "Rs 3,800" },
    { name: "Slow-Braised Short Rib", desc: "Red wine jus, parsnip purée, glazed carrots.", price: "Rs 5,200" },
    { name: "Wild Mushroom Risotto", desc: "Arborio rice, white wine, truffle pecorino.", price: "Rs 3,400", tag: "Vegetarian" },
    { name: "Herb-Crusted Lamb", desc: "Rosemary jus, roasted root vegetables.", price: "Rs 5,600" },
  ],
  Desserts: [
    { name: "Dark Chocolate Fondant", desc: "Molten centre, raspberry coulis, gold leaf.", price: "Rs 2,400", tag: "Signature" },
    { name: "Vanilla Crème Brûlée", desc: "Madagascar vanilla, caramelised sugar.", price: "Rs 2,000" },
    { name: "Seasonal Fruit Tart", desc: "Almond frangipane, vanilla custard.", price: "Rs 1,900" },
  ],
  Drinks: [
    { name: "House Red / White", desc: "By the glass — ask for today's pour.", price: "Rs 1,400" },
    { name: "Signature Cocktails", desc: "Crafted with seasonal botanicals.", price: "Rs 1,800" },
    { name: "Artisan Coffee", desc: "Single-origin espresso & pour-overs.", price: "Rs 750" },
    { name: "Fresh Pressed Juice", desc: "Daily rotating fruit selection.", price: "Rs 900" },
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
