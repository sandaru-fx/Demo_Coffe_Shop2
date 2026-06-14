import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

type Category = "Food" | "Interior" | "Events";

type GalleryImage = {
  src: string;
  label: string;
  category: Category;
};

const images: GalleryImage[] = [
  { src: "/images/dish-signature.jpg", label: "Seared salmon", category: "Food" },
  { src: "/images/interior.jpg", label: "The dining room", category: "Interior" },
  { src: "/images/dish-pasta.jpg", label: "Truffle tagliatelle", category: "Food" },
  { src: "/images/chef.jpg", label: "In the kitchen", category: "Events" },
  { src: "/images/dish-dessert.jpg", label: "Chocolate fondant", category: "Food" },
  { src: "/images/dish-appetizer.jpg", label: "Seafood platter", category: "Food" },
  { src: "/images/cta.jpg", label: "Table for two", category: "Interior" },
  { src: "/images/hero.jpg", label: "Evening ambience", category: "Interior" },
  { src: "/images/cappuccino.png", label: "Morning cappuccino", category: "Food" },
  { src: "/images/croissant.png", label: "Fresh croissants", category: "Food" },
  { src: "/images/avocado-toast.png", label: "Avocado toast", category: "Food" },
  { src: "/images/hero.jpg", label: "Private dining night", category: "Events" },
  { src: "/images/interior.jpg", label: "A celebration table", category: "Events" },
  { src: "/images/cta.jpg", label: "Garden terrace", category: "Interior" },
];

const filters = ["All", "Food", "Interior", "Events"] as const;
type Filter = (typeof filters)[number];

export default function Gallery() {
  const [active, setActive] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    active === "All" ? images : images.filter((img) => img.category === active);

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, visible.length]);

  const current = lightbox === null ? null : visible[lightbox];

  return (
    <>
      <PageHeader
        eyebrow="A Closer Look"
        title="Gallery"
        subtitle="Moments from the kitchen, the table, and the room we've built for you."
        image="/images/dish-dessert.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActive(f);
                setLightbox(null);
              }}
              className={`rounded-full px-6 py-2.5 text-base font-semibold transition-colors ${
                active === f
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                  : "bg-white text-ink ring-1 ring-black/10 hover:ring-brand-orange/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {visible.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
                {img.category}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-base font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>

          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length));
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            ‹
          </button>

          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.label}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-white">
              <p className="font-display text-2xl font-semibold">{current.label}</p>
              <p className="!text-sm text-white/60">
                {current.category} · {lightbox! + 1} / {visible.length}
              </p>
            </figcaption>
          </figure>

          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % visible.length));
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
