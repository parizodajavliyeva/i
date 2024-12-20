import React from "react";
import { Link } from "react-router-dom";
import restaurants from "../../../public/restaurant.json";

function Restaurant() {
  return (
    <div className=" min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold  text-gray-800 mb-8  ">
        <p className="border-b-2 border-orange-500">
        Our Restaurants
        </p>
      </h1>
      <div className="grid lg:grid-cols-3 gap-7">
        {restaurants.map((item) => (
          <Link
            to={`/restaurant/${item.id}`}
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 block"
          >
            
            <img
              src={item.imageCarousel.images[0].url}
              alt={item.imageCarousel.images[0].alt}
              className="w-full h-49 object-cover rounded-md"
            />

            
            <h2 className="text-xl font-bold text-gray-800 mt-4">
              {item.restaurant.name}
            </h2>

            
          

            
            <div className="mt-4 text-sm text-gray-500">
              <p>{item.restaurant.address.line1}</p>
              <p>{item.restaurant.address.line2}</p>
            </div>

            
            <p className="text-sm text-gray-500 mt-2">
               {item.restaurant.hours}
            </p>

            
            <div className="mt-4">
              
              <ul className="flex flex-wrap gap-2 mt-2">
                {item.timeSlots.map((slot, index) => (
                  <li
                    key={index}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      slot.available
                        ? "bg-orange-100 text-white-700"
                        : "bg-gray-100 text-black-700"
                    } ${
                      slot.highlighted ? "border border-yellow-500" : ""
                    }`}
                  >
                    {slot.time}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
