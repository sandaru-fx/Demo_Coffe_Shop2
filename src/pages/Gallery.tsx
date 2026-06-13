import PageHeader from "../components/PageHeader";

const images = [
  { src: "/images/dish-signature.jpg", label: "Seared salmon" },
  { src: "/images/interior.jpg", label: "The dining room" },
  { src: "/images/dish-pasta.jpg", label: "Truffle tagliatelle" },
  { src: "/images/chef.jpg", label: "In the kitchen" },
  { src: "/images/dish-dessert.jpg", label: "Chocolate fondant" },
  { src: "/images/dish-appetizer.jpg", label: "Seafood platter" },
  { src: "/images/cta.jpg", label: "Table for two" },
  { src: "/images/hero.jpg", label: "Evening ambience" },
];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="A Closer Look"
        title="Gallery"
        subtitle="Moments from the kitchen, the table, and the room we've built for you."
        image="/images/dish-dessert.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-base font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
