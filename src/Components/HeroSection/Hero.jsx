import React from "react";
import heroImg from "./hero.jpeg";
import "./Hero.css";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/src/assets/image/hero-background.jpg')",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-50">
        <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-lora font-bold py-5">
            Step Into the <br /> House of Perfumes!
          </h1>
          <button className="mt-5 px-6 py-3 bg-pink-500 text-black font-bold rounded-lg shadow-md hover:bg-pink-600 transition">
            Explore Collection
          </button>
        </div>
      </div>
      <div className="custom-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
