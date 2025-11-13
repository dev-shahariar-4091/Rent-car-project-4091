import React, {useEffect, useState} from 'react'
import CarCard from '../components/CarCard'
import { useLocation } from 'react-router-dom'
export default function Cars(){
  const [cars, setCars] = useState([])
  const location = useLocation()
  useEffect(()=>{ fetch('/src/data/cars.json').then(r=>r.json()).then(data=>{ if(location.state && location.state.filtered){ setCars(location.state.filtered) } else { setCars(data) } }) },[location])
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6">All Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map(c=> <CarCard key={c.id} car={c} />)}
      </div>
    </div>
  )
}
