import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ public folder থেকে data load হবে
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCar = data.find((item) => item.id === parseInt(id));
        setCar(foundCar);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading car details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  if (!car) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-red-500">
          Car not found 😢
        </h2>
        <Link
          to="/"
          className="mt-6 inline-block bg-primary text-white px-4 py-2 rounded"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={car.img}
          alt={car.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{car.title}</h2>
          <p className="text-gray-500 mb-4">
            {car.location} • {car.year}
          </p>
          <p className="text-gray-700 mb-6">{car.desc}</p>

          <div className="flex items-center justify-between text-sm mb-6">
            <p>
              <strong>Transmission:</strong> {car.transmission}
            </p>
            <p>
              <strong>Fuel:</strong> {car.fuel}
            </p>
            <p>
              <strong>Seats:</strong> {car.seats}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-primary">
              ${car.price}/day
            </p>
            <Link
              to="/"
              className="bg-primary text-white px-5 py-2 rounded shadow hover:opacity-90 transition"
            >
              Back to Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
