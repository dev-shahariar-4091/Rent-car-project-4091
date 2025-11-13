import React from 'react'
import { Link } from 'react-router-dom'
export default function CarCard({car}){
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="relative overflow-hidden rounded-md">
        <img src={car.img} alt={car.title} className="w-full h-44 object-cover" />
      </div>
      <h3 className="font-semibold mt-3 text-black">{car.title}</h3>
      <p className="text-sm text-gray-500">{car.location} • {car.year}</p>
      <p className="mt-2 text-gray-600 text-sm">{car.desc}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Link to={`/cars/${car.id}`} className="text-sm bg-white border border-gray-200 px-3 py-2 rounded shadow-sm">Car Details</Link>
        <div className="flex items-center gap-2">
          <div className="text-primary font-semibold">${car.price}/day</div>
          <Link to={`/cars/${car.id}`} className="text-sm text-white bg-primary px-3 py-2 rounded">Book Now</Link>
        </div>
      </div>
    </div>
  )
}
