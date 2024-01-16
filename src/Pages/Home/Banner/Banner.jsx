import { Typewriter } from 'react-simple-typewriter';
import './Banner.css';
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="banner py-12 px-3">
            <div className="container mx-auto h-full flex items-center">
                <div className='ml-3 md:ml-10 space-y-3'>
                    <p className='text-xl'>Welcome to</p>
                    <p className='text-6xl font-Title'>Salam Tea Stall</p>
                    <p className='text-2xl font-bold text-red-400'>Where Every 
                        <Typewriter
                            words={[' Sip Tells a Story!', ' Cuppa Speaks of Serenity!', ' Brew Echoes Tradition!', ' Pour Paints a Picture!']}
                            
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                            
                        />
                    </p>
                    <p className="w-full md:w-3/5">
                        At Salam Tea Stall, we believe that tea is not just a beverage; it is an experience, a journey into the diverse and rich world of flavors.
                    </p>

                    <button
                        className="relative inline-flex items-center px-10 py-3 overflow-hidden  text-red-500 border border-red-500 rounded-full hover:text-white group hover:bg-gray-50 mt-2"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-red-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-9 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <FaArrowRight />
                        </span>
                        <span className="relative font-semibold">Learn More</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Banner;