import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Reservations & Enquiries"
        title="Contact Us"
        subtitle="Book a table or get in touch — we'd love to host you."
        image="/images/cta.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <p className="eyebrow">Book a Table</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Reserve your evening</h2>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-brand-orange/10 p-8 text-center">
                <p className="text-2xl">🎉</p>
                <p className="mt-2 font-display text-2xl font-semibold">Thank you!</p>
                <p className="mt-2 !text-base text-ink/70">
                  Your request has been received. We'll confirm your reservation by email shortly.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" type="text" placeholder="Your name" />
                  <Field label="Phone" type="tel" placeholder="+94 ..." />
                </div>
                <Field label="Email" type="email" placeholder="you@email.com" />
                <div className="grid gap-5 sm:grid-cols-3">
                  <Field label="Date" type="date" />
                  <Field label="Time" type="time" />
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink/70">Guests</label>
                    <select className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-base outline-none focus:border-brand-orange">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-ink/70">
                    Special requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, celebrations, seating preferences..."
                    className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-base outline-none focus:border-brand-orange"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-transform hover:-translate-y-0.5"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Find Us</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Visit the restaurant</h2>
              <p className="mt-4 text-ink/70">
                Tucked into a quiet garden terrace, Maison Verde is easy to reach and hard to forget.
                Walk-ins are welcome, though reservations are recommended on weekends.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <InfoCard title="Address" lines={["24 Garden Terrace", "Colombo 07, Sri Lanka"]} />
              <InfoCard title="Contact" lines={["+94 11 234 5678", "hello@maisonverde.com"]} />
              <InfoCard title="Lunch" lines={["Sat – Sun", "11am – 3pm"]} />
              <InfoCard title="Dinner" lines={["Mon – Sat", "5pm – late"]} />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5">
              <iframe
                title="Map"
                className="h-64 w-full"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.84%2C6.90%2C79.88%2C6.93&layer=mapnik"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink/70">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-base outline-none focus:border-brand-orange"
      />
    </div>
  );
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">{title}</p>
      {lines.map((l) => (
        <p key={l} className="mt-1 !text-base text-ink/70">
          {l}
        </p>
      ))}
    </div>
  );
}
