import { useState } from "react";
import {Clock3, Globe,Mail,MapPin,MessageCircle,Phone,Send,Share2,} from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
  

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 947-3890",
    href: "tel:+18009473890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@swiftcourier.com",
    href: "mailto:info@swiftcourier.com",
  },
  {
    icon: MapPin,
    label: "Operations desk",
    value: "Aleppo International Airport, Aleppo, Syria",
  },
  {
    icon: Clock3,
    label: "Support hours",
    value: "24/7",
    href: "#contact-form",
  },
];

const socialLinks = [
  { icon: Globe, label: "Website", href: "#contact-form" },
  { icon: MessageCircle, label: "Community", href: "#contact-form" },
  { icon: Share2, label: "Share", href: "#contact-form" },
];

function Contactsu() {
  const [ setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-[#082f54] sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-[#1E2939]">
              Questions about a shipment, delivery route, or upcoming pickup? Our
              logistics team is ready to help keep your cargo moving.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-start gap-3 transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0c6470]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#082f54] text-[#3A8FFA] shadow-sm">
                    <Icon size={21} strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-lg font-bold leading-6 text-[#082f54]">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm leading-5 text-slate-500">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-5 border-t border-slate-200 pt-6">
              <span className="text-sm font-bold text-[#1E2939]">Social Media</span>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[#1E2939] transition-colors hover:bg-[#e9f7f7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c6470]"
                  >
                    <Icon size={18} strokeWidth={2.3} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="rounded-lg border border-[#d8ecec] bg-[#eaf7f7] p-6 shadow-[0_18px_40px_rgba(8,47,84,0.12)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-[#1E2939]">
                First Name
                <input
                  type="text"
                  name="first_name"
                  placeholder="Your first name"
                  required
                  className="mt-2 h-12 w-full rounded-md border border-transparent bg-white px-4 text-base text-slate-800 shadow-sm outline-none transition focus:border-[#0c6470] focus:ring-2 focus:ring-[#0c6470]/20"
                />
              </label>
              <label className="block text-sm font-bold text-[#1E2939]">
                Last Name
                <input
                  type="text"
                  name="last_name"
                  placeholder="Your last name"
                  required
                  className="mt-2 h-12 w-full rounded-md border border-transparent bg-white px-4 text-base text-slate-800 shadow-sm outline-none transition focus:border-[#0c6470] focus:ring-2 focus:ring-[#0c6470]/20"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-[#1E2939]">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="mt-2 h-12 w-full rounded-md border border-transparent bg-white px-4 text-base text-slate-800 shadow-sm outline-none transition focus:border-[#0c6470] focus:ring-2 focus:ring-[#0c6470]/20"
              />
            </label>
            <label className="mt-5 block text-sm font-bold text-[#1E2939]">
              Address
              <input
                type="text"
                name="address"
                placeholder="Your address"
                className="mt-2 h-12 w-full rounded-md border border-transparent bg-white px-4 text-base text-slate-800 shadow-sm outline-none transition focus:border-[#0c6470] focus:ring-2 focus:ring-[#0c6470]/20"
              />
            </label>
            <label className="mt-5 block text-sm font-bold text-[#1E2939]">
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                className="mt-2 h-12 w-full rounded-md border border-transparent bg-white px-4 text-base text-slate-800 shadow-sm outline-none transition focus:border-[#0c6470] focus:ring-2 focus:ring-[#0c6470]/20"
              />
            </label>

            <label className="mt-5 block text-sm font-bold text-[#1E2939]">
              Message
              <textarea
                name="message"
                placeholder="Tell us how we can help with your shipment"
                required
                rows="6"
                className="mt-2 min-h-36 w-full resize-y rounded-md border border-transparent bg-white px-4 py-3 text-base text-slate-800 shadow-sm outline-none transition focus:border-[#0c6470] focus:ring-2 focus:ring-[#0c6470]/20"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1E2939] px-6 text-sm font-bold text-white transition-colors hover:bg-[#0c4a78] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0c6470]"
              >
                Send Message
                <Send size={17} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        {/* <div className="mt-16 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
          <iframe
            title="SWIFT Courier Long Beach operations location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-118.282%2C33.72%2C-118.08%2C33.87&layer=mapnik&marker=33.7701%2C-118.1937"
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
          />
        </div> */}
      </section>
    </main>
  );
}

export default Contactsu;
