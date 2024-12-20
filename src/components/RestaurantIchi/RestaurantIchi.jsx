import React from "react";
import { useParams, Link } from "react-router-dom";
import restaurants from "../../../public/restaurant.json";
import { CiMenuBurger } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { TbClockHour11 } from "react-icons/tb";
function RestaurantIchi() {
  const { id } = useParams();
  const restaurant = restaurants.find((item) => item.id === id);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <Link
          to="/"
          className=" text-gray-500 hover:underline text-sm mb-4 block border-b-2 border-orange-500"
        >
          Go Back
        </Link>

        <img
          src={restaurant.imageCarousel.images[0].url}
          alt={restaurant.imageCarousel.images[0].alt}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h1 className="text-2xl font-bold text-gray-800 mt-4 border-b-2 border-orange-500">
          {restaurant.restaurant.name}
        </h1>

        <div className="flex">
          <div>

            <div className="mt-4 text-sm text-gray-500">
              <IoLocation />
              <p>{restaurant.restaurant.address.line1}</p>
              <p>{restaurant.restaurant.address.line2}</p>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              <TbClockHour11 />
              <strong>Hours:</strong> {restaurant.restaurant.hours}
            </p>

          </div>

          <div>
            <div className="flex ">
              <CiMenuBurger />
              <p className="text-gray-600 mt-2">
                {restaurant.restaurant.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700">
            Available Time Slots:
          </h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {restaurant.timeSlots.map((slot, index) => (
              <li
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  slot.available
                    ? "bg-orange-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } ${slot.highlighted ? "border border-yellow-500" : ""}`}
              >
                {slot.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestaurantIchi;
