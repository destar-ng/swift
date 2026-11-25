import plane4 from "../src/assets/plane4.jpg";
import hero4 from "../src/assets/hero4.jpg";
import hero3 from "../src/assets/hero3.jpg";
import plan from "../src/assets/plan1.jpg";

const services = [
    {
        title: "OCEAN FREIGHT",
        image: hero4,
        description: "Learn The 10 Principles Of Design From These Gorgeous",
    },
    {
        title: "AIR FREIGHT",
        image: plan,
        description: "Learn The 10 Principles Of Design From These Gorgeous",
    },
    {
        title: "ENGINEERING PORT",
        image: plane4,
        description: "Learn The 10 Principles Of Design From These Gorgeous",
    },
    {
        title: "INLAND",
        image: hero3,
        description: "Learn The 10 Principles Of Design From These Gorgeous",
    },
];

function Services() {

    return(
        <section className="bg-white py-20">
          <div className="px-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">Worldwide transportation service</h2>
            </div>
            <div className="w-20 h-1 bg-[#2C6CDE] mx-auto mt-5">

            </div>

            <div className=" max-w-full mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {services.map((service) => (
                    <div key={service.title} className="text-center">
                        <div className="min-w-full h-45  rounded-full border-4 border-gray-100 shadow-md overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover "
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-gray-900">
                            {service.title}
                        </h3>

                        <p className="mt-3 text-s leading-6 text-gray-400">
                            {service.description}
                        </p>
                    </div>
                ))}
          </div>
       </section>
  );
  }; 


export default Services;
