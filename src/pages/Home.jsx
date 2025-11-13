import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Load data from public folder (correct path for Netlify)
    fetch("/cars.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load cars.json");
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setFiltered(data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  // 🔍 Search filter
  function doSearch(e) {
    e.preventDefault();
    const result = cars.filter((car) =>
      q
        ? car.title.toLowerCase().includes(q.toLowerCase()) ||
          car.location.toLowerCase().includes(q.toLowerCase())
        : true
    );
    setFiltered(result);
    navigate("/cars", { state: { filtered: result } });
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-bg h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/tesla.jpg')` }}
      >
        <div className="hero-overlay w-full bg-white/70 py-30">
          <div className="max-w-6xl mx-auto px-6 text-black">
            <h1 className="text-5xl md:text-6xl font-bold text-center">
              Find Your Perfect Luxury Car
            </h1>
            <p className="text-center mt-6 text-xl md:text-2xl leading-relaxed tracking-wide">
              Discover amazing deals on quality vehicles. Book now and drive
              away with confidence.
            </p>

            {/* Search Form */}
            <form
              onSubmit={doSearch}
              className="mt-16 bg-white rounded-lg p-6 max-w-5xl mx-auto shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">
                    Pickup location
                  </label>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="City or model"
                    className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Pickup date
                  </label>
                  <input
                    type="date"
                    className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Pickup time
                  </label>
                  <input
                    type="time"
                    className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Return date
                  </label>
                  <input
                    type="date"
                    className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="md:col-span-1 bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
                >
                  Search Cars
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Cars
        </h2>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No cars found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
