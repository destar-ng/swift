import { useState } from "react";
import { Plane } from "lucide-react";
import plane4 from "../src/assets/plane4.jpg";

const checkpoints = ["Booked", "Picked Up", "In Transit", "Out for Delivery"];

function Trackship() {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative isolate min-h-screen overflow-hidden">
        <img
          src={plane4}
          alt="Cargo plane prepared for shipment"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Live shipment tracking
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Track your package from pickup to delivery.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Enter your tracking number to see where your shipment is, what
              step comes next, and the latest delivery status.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 flex max-w-xl flex-col gap-3 rounded-md bg-white p-2 shadow-2xl shadow-black/30 sm:flex-row"
            >
              <label className="sr-only" htmlFor="tracking-number">
                Tracking number
              </label>
              <input
                id="tracking-number"
                value={trackingNumber}
                onChange={(event) => setTrackingNumber(event.target.value)}
                placeholder="Enter tracking number"
                className="min-h-12 flex-1 rounded-sm px-4 text-base text-slate-950 outline-none"
              />
              <button
                type="submit"
                className="min-h-12 rounded-sm bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700"
              >
                Track
              </button>
            </form>
          </div>

          <div className="relative min-h-90 overflow-hidden rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 bg-white/25">
              <div className="track-route-progress h-full rounded-full bg-blue-400" />
            </div>

            <div className="track-plane absolute top-[calc(50%-35px)] grid h-16 w-16 place-items-center rounded-full bg-white shadow-xl">
              <Plane className="h-8 w-8 text-blue-600" />

                
              
            </div>

            <div className="relative z-10 flex h-full min-h-90 flex-col justify-between">
              <div className="rounded-md bg-slate-950/65 p-5">
                <p className="text-sm text-slate-300">Estimated arrival</p>
                <p className="mt-1 text-3xl font-bold">Today, 6:30 PM</p>
              </div>

              <div className="grid gap-3">
                {checkpoints.map((checkpoint, index) => (
                  <div
                    key={checkpoint}
                    className="flex items-center gap-3 rounded-md bg-white/90 p-3 text-slate-950"
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${
                        index < 3 ? "bg-blue-600" : "bg-slate-300"
                      }`}
                    />
                    <span className="font-semibold">{checkpoint}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Trackship;
