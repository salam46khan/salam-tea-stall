import { Link } from 'react-router-dom';
import aboutPic from '../../../assets/photo/about.png'
import { FaArrowRight } from 'react-icons/fa6';
const AboutSec = () => {
    return (
        <div className="py-4 px-3">
            <div className="container mx-auto flex items-center flex-col md:flex-row gap-6 justify-center">
                <div className="w-full md:w-1/2 md:p-4">
                    <p className='font-extrabold text-4xl'>About Us</p>
                    <hr className="w-[160px] border-2" />
                    <p className="mt-3">
                        Welcome to Salam Tea Stall, where passion for tea meets the art of brewing. Nestled in the heart of Satkhira, our tea stall is more than just a place to enjoy a cup of tea. it is a haven for tea enthusiasts seeking an elevated and personalized experience. <br />
                        Founded with a love for the rich tapestry of tea culture, Salam tea stall has blossomed into a cherished establishment known for its commitment to quality and authenticity. Our journey began 7 years ago, driven by the desire to create a space where every tea lover could find solace and delight in the world of exceptional teas.
                    </p>

                    <Link to={'/about'}>
                        <button
                            className="relative inline-flex items-center px-10 py-3 overflow-hidden  text-red-500 border border-red-500 rounded-full hover:text-white group hover:bg-gray-50 mt-3"
                        >
                            <span className="absolute left-0 block w-full h-0 transition-all bg-red-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-9 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <FaArrowRight />
                            </span>
                            <span className="relative font-semibold">Learn More</span>
                        </button>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 md:p-4">
                    <div className=''>
                        <img className='w-full' src={aboutPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;