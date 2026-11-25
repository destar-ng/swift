import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Transportation Services",
    links: [
      { label: "Track Shipment", to: "/trackship" },
      { label: "Air Freight", to: "/aboutus" },
      { label: "Ocean Freight", to: "/aboutus" },
      { label: "Road Transport", to: "/aboutus" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "North America", to: "/aboutus" },
      { label: "Europe", to: "/aboutus" },
      { label: "Africa", to: "/aboutus" },
      { label: "Global Network", to: "/aboutus" },
    ],
  },
  {
    title: "Customer Tools",
    links: [
      { label: "Track Shipment", to: "/trackship" },
      { label: "Get a Shipping Quote", to: "/contactsu" },
      { label: "Shipping Support", to: "/contactsu" },
      { label: "Resource Center", to: "/contactsu" },
    ],
  },
  {
    title: "Related Companies",
    links: [
      { label: "About SWIFT", to: "/aboutus" },
      { label: "Contact & Support", to: "/contactsu" },
      { label: "Freight Solutions", to: "/contactsu" },
      { label: "Delivery Services", to: "/trackship" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t-2 bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h2 className="text-lg font-bold text-white">{section.title}</h2>
              <div className="mt-5 h-0.5 w-10 bg-[#2C6CDE]" aria-hidden="true"></div>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm font-medium leading-6 text-gray-300 transition-colors hover:text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6d394]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#263143]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm font-medium text-gray-400 sm:px-10 lg:px-12">
          &copy; {new Date().getFullYear()} SWIFT Courier. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
