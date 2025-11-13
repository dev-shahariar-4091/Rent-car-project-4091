import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  useEffect(() => {
    fetch("/src/data/cars.json")
      .then((r) => r.json())
      .then((d) => setCar(d.find((c) => String(c.id) === String(id))));
  }, [id]);
  if (!car) return <div className="py-20 text-center">Loading...</div>;
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link to="/cars" className="text-primary">
        ← Back to Cars
      </Link>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <img
          src={car.img}
          alt={car.title}
          className="w-full h-72 object-cover rounded-2xl"
        />
        <div>
          <h2 className="text-2xl font-semibold">{car.title}</h2>
          <p className="text-gray-600">{car.desc}</p>
          <p className="text-green-600">Rating :{car.rating}</p>
          <div className="mt-4 text-primary font-bold">${car.price}/day</div>
        </div>
      </div>
    </div>
  );
}
