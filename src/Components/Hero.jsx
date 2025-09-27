import React from 'react';
import heroImg from '../assets/image/hero.jpeg';
const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-50">
                    <img
                    src={heroImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                    <h1 className="text-5xl font-lora font-bold py-5">Step Into the <br/> House of Perfumes!</h1>
                     <button className="mt-5 px-6 py-3 bg-pink-500 text-black font-bold">
                        Explore Collection
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;