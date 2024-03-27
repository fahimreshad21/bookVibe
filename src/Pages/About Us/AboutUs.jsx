import React from "react";
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
  const aboutUs = useLoaderData();
  return (
    <div className="">
      <h1 className="text-center text-4xl font-semibold mt-10">
        Why Choose Us
      </h1>
      <div className="flex justify-around mt-20">
        <div>
          <div className="p-4 rounded-full border-2 border-blue-300">
            <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-300">
              <img
                src="https://www.rokomari.com/static/200/images/corporate_delivery.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-xl font-medium text-[#131313CC] mt-8">
            Largest Collection
          </h1>
        </div>

        <div>
          <div className="p-4 rounded-full border-2 border-blue-300">
            <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-300">
              <img
                src="https://www.rokomari.com/static/200/images/corporate_tag.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-xl font-medium text-[#131313CC] mt-8">
            Best Price
          </h1>
        </div>
        <div>
          <div className="p-4 rounded-full border-2 border-blue-300">
            <div className="flex items-center justify-center w-36 h-36 rounded-full bg-blue-300">
              <img
                src="https://www.rokomari.com/static/200/images/corporate_delivery.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-xl font-medium text-[#131313CC] mt-8">
            On Time Delivery
          </h1>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-evenly gap-14 mt-8 text-[#131313CC] font-medium">
          <p className="text-center">
            "Reading book is a wonderful experience and there's an explorer in
            all of us who shouldn't be lost at any cost. We offer splendid
            discounts on bulk purchases."
          </p>
          <p className="text-center">
            "Reading book is a wonderful experience and there's an explorer in
            all of us who shouldn't be lost at any cost. We offer splendid
            discounts on bulk purchases."
          </p>
          <p className="text-center">
            "Reading book is a wonderful experience and there's an explorer in
            all of us who shouldn't be lost at any cost. We offer splendid
            discounts on bulk purchases."
          </p>
        </div>
      </div>

      <h2 className="mt-20 text-center text-4xl font-medium dark:text-yellow-700">
        Our Clients Says
      </h2>
      <div className="carousel w-full mt-8 h-56 bg-blue-900 rounded-xl">
        <h2></h2>
        <div id="slide1" className="carousel-item relative w-full">
          <p className="absolute top-20 left-36 right-36 text-white text-2xl">
            “I’m continually looking out for awesome service experience. Book
            Vibe still needs to upgrade its service but till now it are doing
            better than past” – BHTPA
          </p>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <p className="absolute top-20 left-36 right-36 text-white text-2xl">
            “Since we started collecting books from Book Vibe, I feel like I’ve
            gotten a better service. Out of all the vendors we’ve had in last
            couple of years Book Vibe is the most consistent”- OnnoRokom Group
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <p className="absolute top-20 left-36 right-36 text-white text-2xl">
            “Book Vibe is amazing, took us only 8 hours to make desired book
            list integration that saves us 15-20 days of work” – Bogra
            Cantonment Public School and College
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <p className="absolute top-20 left-36 right-36 text-white text-2xl">
            “Book Vibe is by far the best invoicing and billing application
            available. There corporate sales team would collapse in short order
            if not having their outstanding service and customized discount
            offer” – CRP
          </p>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
