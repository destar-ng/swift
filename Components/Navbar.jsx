import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const Navigate = useNavigate();
    return (
        <nav className="fixed top-0 w-full bg-black/75 backdrop-blur-xl z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 ">
                <div className="text-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-4 py-4 lg:h-15 lg:py-0">
                    <div className="text-xl font-bold text-blue-400 cursor-pointer shrink-0">SWIFT

                    </div>
                    {/* <img src={swiftlogo} alt="Swift Logo" className="h-10 w-auto" /> */}
                

                <ul className="w-full lg:w-auto">
                    <li className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 text-gray-600">
                
                        <Link to="/" className="text-base sm:text-lg text-white whitespace-nowrap">Home</Link>
                        <Link to="/aboutus" className="text-base sm:text-lg text-white whitespace-nowrap">About Us</Link>
                        <Link to= "/trackship" className="text-base sm:text-lg text-white whitespace-nowrap">Track Shipment</Link>
                        <Link to= "/contactsu" className="text-base sm:text-lg text-white whitespace-nowrap">Contact & Support</Link>
                    </li>
                </ul>

                <div className="w-full sm:w-auto shrink-0">
                    <button onClick={() => Navigate("/trackship")} className="flex items-center justify-center w-full sm:w-auto bg-blue-600 text-base sm:text-lg text-white px-5 sm:px-7 py-2 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap">Track Shipment</button>
                </div>
                </div>

            </div>
        </nav>

    )
}
export default Navbar
