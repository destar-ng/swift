import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plan1 from "../src/assets/plan1.jpg";
import hero2 from "../src/assets/hero2.jpg";
import hero3 from "../src/assets/hero3.jpg";
import hero4 from "../src/assets/hero4.jpg";
import plane4 from "../src/assets/plane4.jpg";

const images = [plan1, hero2, hero3, hero4, plane4];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-slate-950">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt="Transportation"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
            index === currentImage
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-white sm:px-8">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
          Your product is in good hands
        </h1>
        <div className="my-6 h-1 w-28 bg-blue-400" />
        <p className="mb-8 max-w-xl text-lg text-white/85 sm:text-xl">
          Fast pickup, careful handling, and reliable delivery updates from
          dispatch to doorstep.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/trackship"
            className="bg-blue-600 px-8 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Track Shipment
          </Link>
          <Link
            to="/contactsu"
            className="border border-white px-8 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Our Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
