import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/aboutus", label: "About Us" },
  { to: "/trackship", label: "Track Shipment" },
  { to: "/contactsu", label: "Contact & Support" },
];

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-20 w-full bg-black/75 backdrop-blur-xl">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 text-xl font-bold text-blue-400"
          >
            SWIFT
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7 xl:gap-10">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="whitespace-nowrap text-base text-white transition-colors hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`${isMenuOpen ? "block" : "hidden"} absolute inset-x-4 top-full rounded-b-xl border border-white/10 bg-slate-950/95 p-4 shadow-xl backdrop-blur-xl sm:inset-x-8 lg:hidden`}
        >
          <ul className="flex flex-col">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-base text-white transition-colors hover:bg-white/10 hover:text-blue-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
