import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/src/data/cars.json")
      .then((r) => r.json())
      .then((d) => {
        setCars(d);
        setFiltered(d);
      });
  }, []);
  function doSearch(e) {
    e.preventDefault();
    const res = cars.filter((c) =>
      q
        ? c.title.toLowerCase().includes(q.toLowerCase()) ||
          c.location.toLowerCase().includes(q.toLowerCase())
        : true
    );
    setFiltered(res);
    navigate("/cars", { state: { filtered: res } });
  }
  return (
    <div>
      <section
        className="hero-bg h-screen flex items-center"
        style={{ backgroundImage: `url('/images/tesla.jpg')` }}
      >
        <div className="hero-overlay  w-full py-30">
          <div className="max-w-6xl mx-auto px-6 text-black">
            <h1 className="text-6xl md:text-7xl font-bold text-center">
              Find Your Perfect Luxury Car
            </h1>
            <p className="text-center mt-8 text-2xl leading-relaxed tracking-wide">
              Discover amazing deals on quality vehicles. Book now and drive
              away with confidence.
            </p>
            <form
              onSubmit={doSearch}
              className="mt-20 my-10 bg-white rounded-lg p-6 max-w-5xl mx-auto shadow -translate-y-10"
            >
              <div className="my-10 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-1">
                    Pickup location
                  </label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="City or model"
                    className="w-full border rounded p-3"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Pickup date
                  </label>
                  <input type="date" className="border rounded p-3 w-full" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Pickup time
                  </label>
                  <input type="time" className="border rounded p-3 w-full" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Return date
                  </label>
                  <input type="date" className="border rounded p-3 w-full" />
                </div>
                <button
                  type="submit"
                  className="md:col-span-1 bg-primary text-white px-6 py-3 rounded"
                >
                  Search Cars
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Featured Cars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}
