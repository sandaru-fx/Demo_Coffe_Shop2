import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark
          ? "bg-cream/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" aria-label="SKARA COFFEE — home">
          <Logo
            wordmarkClassName={dark ? "text-ink" : "text-white"}
            subtitleClassName={dark ? "text-brand-orange" : "text-brand-orange"}
          />
        </Link>

        {/* Desktop links — 16px bold */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${
                    dark
                      ? isActive
                        ? "text-brand-orange"
                        : "text-ink hover:text-brand-orange"
                      : isActive
                        ? "text-brand-orange"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-orange px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Reserve a Table
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${
            dark ? "text-ink" : "text-white"
          }`}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-cream md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block py-3 text-base font-semibold ${
                      isActive ? "text-brand-orange" : "text-ink"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <Link
                to="/contact"
                className="block rounded-full bg-brand-orange px-6 py-3 text-center text-base font-semibold text-white"
              >
                Reserve a Table
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
