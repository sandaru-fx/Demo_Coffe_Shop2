import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-white">
      <p className="eyebrow !text-brand-orange">404</p>
      <h1 className="mt-3 font-display text-6xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-white/70">
        The page you're looking for has left the table. Let's get you back to something delicious.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </section>
  );
}
