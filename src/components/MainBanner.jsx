import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const MainBanner = () => {
    return (
        <div className="relative mt-20"> {/* Add top margin to avoid navbar overlap */}
            {/* Background Images */}
            <img src={assets.main_banner_bg} alt="main_banner_bg" className="w-full hidden md:block" />
            <img src={assets.main_banner_bg_sm} alt="main_banner_bg_sm" className="w-full md:hidden" />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center md:items-start justify-end md:justify-center px-4 pt-16 pb-24 md:pb-0 md:pt-0 md:pl-18 lg:pl-24">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-md md:max-w-lg lg:max-w-3xl leading-tight text-black drop-shadow-sm">
                    Freshness You Can Trust, Savings You will Love!
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-6 font-medium">
                    <Link
                        to="/products"
                        className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dull transition rounded text-white"
                    >
                        Shop Now
                        <img
                            className="transition group-focus:translate-x-1"
                            src={assets.white_arrow_icon}
                            alt="arrow"
                        />
                    </Link>

                    <Link
                        to="/products"
                        className="group hidden md:flex items-center gap-2 px-9 py-3 text-black"
                    >
                        Explore deals
                        <img
                            className="transition group-hover:translate-x-1"
                            src={assets.black_arrow_icon}
                            alt="arrow"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
