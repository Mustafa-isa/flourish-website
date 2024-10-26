import React from "react";

function Hero() {
  return (
    <section class="">
      <div style={{ 
        backgroundImage: "url('/bg4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} class="mx-auto max-w-screen-xl px-4 py-56 lg:flex lg:h-screen   ">
        <div class="  mx-auto max-w-xl text-center">
          <div className="absolute w-[200px] h-[200px]  left-0  blur-[70px] rounded-full bg-opacity-90 bg-pink-600 z-1"></div>
        
          <div className="absolute w-[200px]  right-0 h-[200px]  blur-[70px] rounded-full bg-opacity-90 bg-red-600 z-1"></div>

          <div className=" z-10 relative ">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
            Flourish Company
              <strong class="font-extrabold text-red-700 sm:block">
                {" "}
                Quality and Sustainability
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl/relaxed"> 

            We are Flourish, a company dedicated to produce products  natural dyes 
            </p>
            <p class="mt-4 sm:text-xl/relaxed">
            Flourish reduces the total contamination of chemical dyes by 15%
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
