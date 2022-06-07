import React from 'react';
import './Banner.css'

const Banner = () => {

    return (
        <div className="hero bg-image min-h-screen bg-opacity-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://i.ibb.co/H4b40vr/banner.png' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-center md:text-center'>
                    <h1 className="text-6xl text-gray font-bold pb-5"> Welcome to</h1>
                    <h1 className="text-5xl text-amber-600 font-bold"> Khans CAM  </h1>
                    <h3 className="py-6 text-xl p-5 text-justify">Khan's Cam is a camera Manufacturer industries.
                        <span className=' text-2xl font-semibold text-orange-500'> "It's Best Camera Manufacturer industries in World."</span> Customer 1st choose <span className=' text-orange-500 font-medium'>Pixel manufacture Camera's ❤️ .</span>

                    </h3>

                </div>
            </div>
        </div>
    );
};

export default Banner;