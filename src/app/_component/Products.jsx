"use client";

import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import apiClient from "../_Utilis/apiClient";
import Image from "next/image";
function Products() {
  const [products, setProducts] = React.useState([]);
  const getAllProducts = async () => {
    try {
      apiClient
        .get("/products?populate=*")
        .then((res) => {
          setProducts(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className=" relative   bg-blur-[30px]  ">
      <div className="absolute w-[200px] bottom-0  right-0 h-[200px]  blur-[100px] rounded-full bg-opacity-90 bg-pink-600 z-1"></div>

      <div className="w-full sm:w-[90%] mx-auto py-40 gap-10 flex items-center justify-center flex-wrap ">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                  alt=""
                  width={300}
                  height={300}
                  src="/image1.jpeg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">What We Are</h2>

                <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-600">
                  Welcome to the world of natural dyes! We offer a variety of
                  colors derived from 100% plant-based sources as a healthy and
                  sustainable alternative to chemical dyes. Our products are
                  designed to meet your needs while preserving the environment,
                  using recycled plant waste to create high-quality, vibrant
                  colors.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="bg-white shadow-md rounded-lg w-full p-6">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">
            Why Choose Natural Dyes?
          </h2>
          <ul class="list-disc list-inside space-y-4">
            <li class="text-gray-700">
              <strong>Safe and Healthy:</strong> Free from harmful chemicals,
              suitable for children and individuals with sensitive skin.
            </li>
            <li class="text-gray-700">
              <strong>Eco-Friendly:</strong> Helps reduce waste and promotes
              sustainability by repurposing plant materials.
            </li>
            <li class="text-gray-700">
              <strong>Superior Performance:</strong> Offers long-lasting,
              vibrant colors that retain their charm over time.
            </li>
          </ul>
        </div> 
        <div className="flex flex-wrap items-center justify-center gap-5  w-full"> 
        <Image
                  alt=""
                  width={300}
                  height={200}
                  src="/i4.jpeg"
            
                />
                      <Image
                  alt=""
                  width={300}
                  height={200}
                  src="/i1.jpeg"
            
                />
                      <Image
                  alt=""
                  width={300}
                  height={200}
                  src="/i5.jpeg"
          
                />
                      <Image
                  alt=""
                  width={300}
                  height={200}
                  src="/i2.jpeg"
          
                />
                      <Image
                  alt=""
                  width={300}
                  height={200}
                  src="/i3.jpeg"
            
                />

                
        </div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl capitalize">
                We transform plant waste—such as fruit peels, tree leaves, and
                flowers—into premium natural dyes. Our products ensure color
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <Image
                  fill
                  alt=""
                  src="/bg3.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-16">
                <article className="space-y-4 text-gray-600">
                  <p>
                    The company s innovation lies not just in its choice of
                    materials but also in its groundbreaking approach to dyeing.
                    As the first to introduce natural dyes in Upper Egypt, they
                    bring a fresh perspective to the ancient art of textile
                    dyeing
                  </p>

                  <p>
                    Drawing inspiration from the rich history of natural dyes
                    and the enduring tradition of textile craftsmanship in
                    Egypt, a pioneering company emerges as a beacon of
                    sustainable fashion. Utilizing materials such as cotton,
                    linen, silk, natural leather, and banana leaves, this
                    enterprise stands out for its commitment to eco-friendly
                    practices and the preservation of traditional dyeing
                    methods. By harnessing the power of nature—plant leaves,
                    roots, bark, insect secretions, and minerals—their products
                    bear witness to a legacy of color and creativity that dates
                    back to prehistoric times.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <div class="max-w-3xl mx-auto py-12 px-6 lg:px-12">
          <div className=" flex w-full  flex-wrap items-center justify-center gap-10">
            <section class="mb-12 bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 class="text-3xl font-extrabold text-gray-800 mb-4">
                Our Products
              </h2>
              <p class="text-gray-700 text-lg">
                Explore a variety of natural colors that spark creativity. Our
                collection ranges from soft to warm tones inspired by nature,
                including reds from pomegranate peels, yellows from turmeric,
                and greens from mint leaves.
              </p>
            </section>

            <section class="bg-gradient-to-br from-yellow-100 to-pink-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 class="text-3xl font-extrabold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p class="text-gray-700 text-lg">
                We aim to promote the use of natural dyes and support
                sustainability across industries. Together, we can make a
                difference through eco-conscious choices that enhance beauty
                while protecting the planet.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
