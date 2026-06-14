import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-1">
          <Logo wordmarkClassName="text-white" subtitleClassName="text-brand-orange" />
          <p className="mt-4 text-sm text-cream/60">
            A polished restaurant experience where seasonal ingredients meet modern craft, served in
            a warm, intimate setting.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-brand-orange">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/menu">Menu</Link></li>
            <li><Link className="hover:text-white" to="/about">About</Link></li>
            <li><Link className="hover:text-white" to="/gallery">Gallery</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-brand-orange">Hours</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>Mon – Thu · 5pm – 10pm</li>
            <li>Fri – Sat · 5pm – 12am</li>
            <li>Sunday · 11am – 9pm</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-brand-orange">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/60">
            <li>24 Garden Terrace</li>
            <li>Colombo 07, Sri Lanka</li>
            <li>+94 11 234 5678</li>
            <li>hello@skaracoffee.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/50 sm:flex-row lg:px-10">
          <p className="!text-xs">© {new Date().getFullYear()} SKARA COFFEE. All rights reserved.</p>
          <p className="!text-xs">Crafted with care · Reservations recommended</p>
        </div>
      </div>
    </footer>
  );
}
