import React from "react";
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-semibold lg:mt-10">
        Why Choose Us
      </h1>
      <div className="flex flex-col lg:flex-row justify-around mt-6 lg:mt-20">
        <div className="lg:w-[450px] flex flex-col justify-center items-center mb-6">
          <div className="p-4 rounded-full border-2 border-blue-300 ">
            <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-300">
              <img
                src="https://www.rokomari.com/static/200/images/corporate_delivery.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold text-[#131313CC] my-3 lg:my-6">
            Largest Collection
          </h1>
          <p className="text-center font-medium">
            "Reading book is a wonderful experience and there's an explorer in
            all of us who shouldn't be lost at any cost. We offer splendid
            discounts on bulk purchases."
          </p>
        </div>

        <div className="lg:w-[450px] flex flex-col justify-center items-center mb-6">
          <div className="p-4 rounded-full border-2 border-blue-300">
            <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-300">
              <img
                src="https://www.rokomari.com/static/200/images/corporate_tag.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold text-[#131313CC] my-3 lg:my-6">
            Best Price
          </h1>
          <p className="text-center font-medium">
            "Reading book is a wonderful experience and there's an explorer in
            all of us who shouldn't be lost at any cost. We offer splendid
            discounts on bulk purchases."
          </p>

        </div>
        <div className="lg:w-[550px] flex flex-col justify-center items-center mb-6">
          <div className="p-4 rounded-full border-2 border-blue-300">
            <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-300">
              <img
                src="https://www.rokomari.com/static/200/images/corporate_delivery.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold text-[#131313CC] my-3 lg:my-6">
            On Time Delivery
          </h1>
          <p className="text-center font-medium">
          On Time 24/7 Delivery is available to meet your unique on-demand and scheduled delivery needs. Our professional executives and friendly customer service will ensure your books are delivered reliably to their destination and it will be free of cost.
          </p>
        </div>
      </div>

      <h2 className="mt-8 lg:mt-20 text-center text-4xl font-medium dark:text-yellow-700">
        Our Clients Says
      </h2>
      <div className="carousel w-full mt-6 lg:mt-12 h-40 lg:h-56 bg-blue-900 rounded-xl">
        <h2></h2>
        <div id="slide1" className="carousel-item relative w-full">
          <p className="absolute top-5 lg:top-20 left-16 lg:left-36 right-16 lg:right-36 text-white lg:text-2xl">
            “I’m continually looking out for awesome service experience. Book
            Vibe still needs to upgrade its service but till now it are doing
            better than past” – BHTPA
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 right-1 lg:right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <p className="absolute top-3 lg:top-20 left-16 lg:left-36 right-16 lg:right-36 text-white lg:text-2xl">
            “Since we started collecting books from Book Vibe, I feel like I’ve
            gotten a better service. Out of all the vendors we’ve had in last
            couple of years Book Vibe is the most consistent”- OnnoRokom Group
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 right-1 lg:right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <p className="absolute top-5 lg:top-20 left-16 lg:left-36 right-16 lg:right-36 text-white lg:text-2xl">
            “Book Vibe is amazing, took us only 8 hours to make desired book
            list integration that saves us 15-20 days of work” – Bogra
            Cantonment Public School and College
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 right-1 lg:right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <p className="absolute top-3 lg:top-20 left-16 lg:left-36 right-16 lg:right-36 text-white lg:text-2xl">
            “Book Vibe is by far the best invoicing and billing application
            available. There corporate sales team would collapse in short order
            if not having their outstanding service and customized discount
            offer” – CRP
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 lg:left-5 right-1 lg:right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
