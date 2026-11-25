const benefits = [
  "Reliable worldwide freight coverage with trusted transport partners.",
  "Clear shipment planning from origin pickup through final delivery.",
  "Responsive support for urgent cargo, customs, and route updates.",
];

const locations = [
  { city: "New York", top: "35%", left: "28%" },
  { city: "London", top: "29%", left: "48%" },
  { city: "Dubai", top: "48%", left: "61%" },
  { city: "Singapore", top: "62%", left: "75%" },
  { city: "Sydney", top: "76%", left: "83%" },
];

function Map() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2C6CDE]">
            Global Network
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900">
            Benefits for using our services
          </h2>
          <div className="w-20 h-1 bg-[#2C6CDE] mt-5"></div>

          <div className="mt-9 space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2C6CDE]  "></span>
                <p className="text-base leading-7 text-gray-500">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-md border border-stone-200 bg-white shadow-lg">
          

          <div className="absolute inset-0 bg-[radial-gradientcircle_at_center,_#e7dfcf_1px,_transparent_1px] background-size:[18px_18px] opacity-70"></div>

          <div className="relative h-80 w-full">
            <svg
              viewBox="0 0 760 380"
              className="absolute inset-0 h-full w-full text-stone-300"
              role="img"
              aria-label="Worldwide logistics coverage map"
            >
              <path
                fill="currentColor"
                d="M94 126l42-26 49 10 38 31-13 38-42 14-29 45-51-9-25-52 31-51zm165-50l62-17 51 19 7 45-44 24-58-9-29-31 11-31zm182 18l70-35 99 16 48 45-20 58-61 23-44-18-52 33-56-22 18-52-32-19 30-29zm-18 144l58-9 42 28 13 59-41 31-60-19-32-43 20-47zm163 40l59-14 50 31 21 49-55 19-72-15-28-37 25-33zM280 230l43-14 39 26-8 51-35 23-46-31-14-34 21-21z"
              />
            </svg>

            {locations.map((location) => (
              <div
                key={location.city}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ top: location.top, left: location.left }}
                title={location.city}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#2C6CDE] bg-[#2C6CDE] shadow-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-white"></span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
