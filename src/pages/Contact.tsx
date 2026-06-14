import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const hours = [
  { day: "Monday", lunch: "Closed", dinner: "5:00 pm – 10:30 pm" },
  { day: "Tuesday", lunch: "Closed", dinner: "5:00 pm – 10:30 pm" },
  { day: "Wednesday", lunch: "Closed", dinner: "5:00 pm – 10:30 pm" },
  { day: "Thursday", lunch: "Closed", dinner: "5:00 pm – 10:30 pm" },
  { day: "Friday", lunch: "Closed", dinner: "5:00 pm – 11:00 pm" },
  { day: "Saturday", lunch: "11:00 am – 3:00 pm", dinner: "5:00 pm – 11:00 pm" },
  { day: "Sunday", lunch: "11:00 am – 3:00 pm", dinner: "5:00 pm – 10:00 pm" },
];

const faqs = [
  {
    q: "Do I need a reservation?",
    a: "Walk-ins are welcome on weekdays, but we recommend booking for Friday and Saturday evenings. Brunch on weekends fills quickly — reserve at least a day ahead.",
  },
  {
    q: "Can you accommodate dietary requirements?",
    a: "Absolutely. Note allergies or dietary needs in the special requests field when booking, or mention them to your server on arrival. Our kitchen can adapt most dishes.",
  },
  {
    q: "Is there parking nearby?",
    a: "Street parking is available on Garden Terrace and adjoining lanes. A paid car park is a two-minute walk away on Independence Avenue.",
  },
  {
    q: "Do you host private events?",
    a: "Yes — we offer full-room hire for groups of 25–40 guests, plus semi-private dining for celebrations. Use the enquiry form below or email events@skaracoffee.com.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Please give us at least 24 hours' notice if you need to cancel or change your booking. For private events, our events team will share terms when you enquire.",
  },
];

const contactMethods = [
  {
    title: "General enquiries",
    detail: "hello@skaracoffee.com",
    note: "We reply within one business day.",
  },
  {
    title: "Reservations",
    detail: "+94 11 234 5678",
    note: "Lines open daily, 10:00 am – 8:00 pm.",
  },
  {
    title: "Private events",
    detail: "events@skaracoffee.com",
    note: "For parties, corporate dinners, and full-room hire.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Reservations & Enquiries"
        title="Contact Us"
        subtitle="Book a table, plan a private event, or simply say hello — our team is here to help you plan the perfect visit."
        image="/images/cta.jpg"
      />

      {/* Quick contact strip */}
      <section className="border-b border-black/5 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-10">
          {contactMethods.map((method) => (
            <div key={method.title} className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">{method.title}</p>
              <p className="mt-2 font-display text-xl font-semibold">{method.detail}</p>
              <p className="mt-1 !text-sm text-ink/60">{method.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main reservation section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <p className="eyebrow">Book a Table</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Reserve your evening</h2>
            <p className="mt-3 text-ink/70">
              Fill in the form below and we'll confirm your reservation by email. For same-day bookings,
              please call us directly — we'll do our best to find you a table.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-brand-orange/10 p-8 text-center">
                <p className="text-2xl">🎉</p>
                <p className="mt-2 font-display text-2xl font-semibold">Thank you!</p>
                <p className="mt-2 !text-base text-ink/70">
                  Your request has been received. We'll confirm your reservation by email shortly.
                  If you don't hear from us within two hours, please call +94 11 234 5678.
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

          <div className="space-y-8">
            <div>
              <p className="eyebrow">Find Us</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Visit the restaurant</h2>
              <p className="mt-4 text-ink/70">
                Tucked into a quiet garden terrace in Colombo 07, SKARA COFFEE is easy to reach and hard
                to forget. Look for the green awning and the scent of fresh bread from our neighbour's
                bakery — you're in the right place.
              </p>
              <p className="mt-4 text-ink/70">
                Walk-ins are welcome on weekdays, though reservations are strongly recommended on Friday
                and Saturday evenings. Our dining room seats 40 guests across main floor and terrace
                tables, with a handful of bar seats for walk-in diners.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <InfoCard title="Address" lines={["24 Garden Terrace", "Colombo 07, Sri Lanka"]} />
              <InfoCard title="Contact" lines={["+94 11 234 5678", "hello@skaracoffee.com"]} />
              <InfoCard title="Brunch" lines={["Sat – Sun", "11:00 am – 3:00 pm"]} />
              <InfoCard title="Dinner" lines={["Mon – Sat", "5:00 pm – late"]} />
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

      {/* Opening hours */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">When we're open</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Opening hours</h2>
              <p className="mt-4 text-ink/70">
                Lunch service runs on weekends only. Dinner is served six nights a week. The kitchen
                closes 30 minutes before the listed closing time — last orders apply.
              </p>
              <p className="mt-4 text-ink/70">
                We're closed on public holidays unless noted on our social channels. Follow us for
                seasonal menu updates and occasional chef's table events.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl ring-1 ring-black/5">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-black/5 bg-cream">
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide text-brand-orange">Day</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide text-brand-orange">Lunch</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide text-brand-orange">Dinner</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.day} className="border-b border-black/5 last:border-0">
                      <td className="px-6 py-4 font-semibold">{row.day}</td>
                      <td className="px-6 py-4 text-ink/70">{row.lunch}</td>
                      <td className="px-6 py-4 text-ink/70">{row.dinner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Getting here */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img src="/images/interior.jpg" alt="SKARA COFFEE entrance" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow">Plan your visit</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Getting here</h2>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold">By car</h3>
                  <p className="mt-2 text-ink/70">
                    Street parking is available on Garden Terrace and nearby lanes after 5 pm. A paid
                    car park on Independence Avenue is a two-minute walk from the restaurant.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">By taxi or ride-share</h3>
                  <p className="mt-2 text-ink/70">
                    Ask your driver for "24 Garden Terrace, Colombo 07" — most local apps recognise the
                    address. We're five minutes from Independence Square.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Accessibility</h3>
                  <p className="mt-2 text-ink/70">
                    Step-free access is available via the side entrance on Terrace Lane. Please mention
                    any mobility requirements when booking and we'll prepare the best table for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <p className="eyebrow">Before you visit</p>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Common questions</h2>
            <p className="mt-4 text-ink/70">
              Everything you might want to know before your first visit — and a few tips from our regulars.
            </p>
          </div>
          <div className="mt-14 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-cream p-6 ring-1 ring-black/5">
                <h3 className="font-display text-xl font-semibold">{faq.q}</h3>
                <p className="mt-2 !text-base text-ink/65">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private events enquiry */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Private dining</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
                Host your next celebration
              </h2>
              <p className="mt-5 text-ink/70">
                From intimate birthday dinners to corporate gatherings, SKARA COFFEE offers tailored
                menus and dedicated service for groups of 8 to 40 guests. Our events team works with
                you on menu, wine pairings, and room layout.
              </p>
              <p className="mt-4 text-ink/70">
                Full-room hire is available on Sunday and Monday evenings. Semi-private sections of the
                dining room can be reserved for smaller groups any day of the week, subject to availability.
              </p>
              <ul className="mt-6 space-y-2 text-ink/70">
                <li className="flex gap-2">
                  <span className="text-brand-orange">•</span>
                  Custom tasting menus from Rs 6,500 per guest
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">•</span>
                  Wine pairing packages available
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">•</span>
                  Dedicated events coordinator
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
              <p className="eyebrow">Events enquiry</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Tell us about your event</h2>

              {enquirySubmitted ? (
                <div className="mt-8 rounded-2xl bg-brand-orange/10 p-8 text-center">
                  <p className="font-display text-2xl font-semibold">Message sent!</p>
                  <p className="mt-2 !text-base text-ink/70">
                    Our events team will be in touch within 48 hours to discuss your plans.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnquirySubmitted(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" type="text" placeholder="Full name" />
                    <Field label="Phone" type="tel" placeholder="+94 ..." />
                  </div>
                  <Field label="Email" type="email" placeholder="you@email.com" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Event date" type="date" />
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink/70">Guest count</label>
                      <select className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-base outline-none focus:border-brand-orange">
                        {[8, 10, 15, 20, 25, 30, 35, 40].map((n) => (
                          <option key={n}>{n}+ guests</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink/70">Event details</label>
                    <textarea
                      rows={4}
                      placeholder="Occasion, menu preferences, budget, special requirements..."
                      className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-base outline-none focus:border-brand-orange"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <p className="eyebrow !text-brand-orange">Still deciding?</p>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Take a look at what's on the menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Our seasonal menu changes regularly. Browse what's cooking this week, or explore our gallery
            for a taste of the SKARA COFFEE experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="inline-block rounded-full bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/40 transition-transform hover:-translate-y-0.5"
            >
              View the Menu
            </Link>
            <Link
              to="/gallery"
              className="inline-block rounded-full border border-white/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              See the Gallery
            </Link>
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
