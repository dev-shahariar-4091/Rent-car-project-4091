import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error loading cars:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={car.img}
            alt={car.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{car.title}</h2>
            <p className="text-gray-500 mb-2">{car.location}</p>
            <p className="text-primary font-semibold mb-4">${car.price}/day</p>
            <Link
              to={`/cars/${car.id}`}
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:opacity-90"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
