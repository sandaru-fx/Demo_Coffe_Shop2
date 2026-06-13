type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageHeader({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative flex h-[52vh] min-h-[360px] items-center justify-center overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/70" />
      <div className="relative z-10 max-w-2xl px-6 text-center text-white animate-fade-up">
        <p className="eyebrow !text-brand-orange">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
