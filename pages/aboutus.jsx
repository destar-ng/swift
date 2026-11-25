import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  MapPinned,
  PackageCheck,
  Quote,
} from "lucide-react";
import airFreight from "../src/assets/plan1.jpg";
import oceanFreight from "../src/assets/hero4.jpg";
import roadFreight from "../src/assets/plane4.jpg";

const serviceCards = [
  {
    title: "Air Freight delivery",
    image: airFreight,
    alt: "Cargo aircraft flying in a blue sky",
  },
  {
    title: "Ocean Freight Transport",
    image: oceanFreight,
    alt: "Container vessel traveling across the ocean",
  },
  {
    title: "Road Freight Logistics",
    image: roadFreight,
    alt: "Cargo truck positioned beside an aircraft",
  },
];

const operatingPrinciples = [
  "One point of contact from booking through delivery.",
  "Practical route planning for time-sensitive freight.",
  "Clear shipment updates at every major handoff.",
  "A global partner network for reliable local service.",
];

const capabilities = [
  {
    icon: PackageCheck,
    title: "Careful handling",
    description: "Freight prepared and managed with attention at every transfer.",
  },
  {
    icon: MapPinned,
    title: "Connected visibility",
    description: "Clear route updates that make every shipment easier to follow.",
  },
  {
    icon: BadgeCheck,
    title: "Dependable delivery",
    description: "A responsive team focused on getting cargo where it needs to go.",
  },
];

function About() {
  return (
    <main className="max-w-[100vw] overflow-x-hidden bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase text-[#16717a]">What we do</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl">
              We move freight with confidence.
            </h1>
            <p className="mt-7 max-w-sm text-base leading-7 text-slate-500">
              From the first pickup to the final handoff, SWIFT brings calm,
              practical coordination to every shipment.
            </p>

            <div className="mt-11 flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#082f54] text-lg font-black text-white shadow-sm">
                S
              </span>
              <div>
                <p className="text-sm font-bold text-[#082f54]">SWIFT Operations</p>
                <p className="mt-1 text-sm text-slate-500">Your logistics partner</p>
              </div>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 sm:pt-16">
            <div className="flex items-start gap-3 text-sm leading-6 text-slate-500">
              <Quote
                className="mt-0.5 shrink-0 text-slate-950"
                size={35}
                strokeWidth={2.7}
                aria-hidden="true"
              />
              <p>
                We keep shipping simple, responsive, and focused on the details
                that keep your delivery moving.
              </p>
            </div>

            {operatingPrinciples.map((principle) => (
              <p key={principle} className="text-sm leading-6 text-slate-500">
                {principle}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-18 overflow-hidden rounded-md bg-slate-950 sm:mt-24">
          <div className="grid gap-px md:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.title} className="group relative min-h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/5" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
                  <h2 className="max-w-48 text-2xl font-bold leading-tight text-white">
                    {service.title}
                  </h2>
                  <Link
                    to="/home"
                    // aria-label={`Book ${service.title}`}
                    // title={`Book ${service.title}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-white hover:bg-white hover:text-[#082f54] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <ArrowUpRight size={19} strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50/70 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold uppercase text-[#16717a]">Our services</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
              Shipping work made more productive.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 border-t border-slate-200 pt-12 sm:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article key={title} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#16717a] shadow-sm ring-1 ring-slate-200">
                  <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[#082f54]">{title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-5 border-t border-slate-200 pt-10 text-center sm:flex-row sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#082f54] text-white">
              <Clock3 size={20} aria-hidden="true" />
            </span>
            <p className="text-sm leading-6 text-slate-600">
              Ready to plan a shipment? Tell us where it needs to go and our
              logistics team will help you choose the right route.
            </p>
            <Link
              to="/contactsu"
              className="shrink-0 text-sm font-bold text-[#16717a] underline decoration-2 underline-offset-4 transition hover:text-[#082f54] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16717a]"
            >
              Talk to SWIFT
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
