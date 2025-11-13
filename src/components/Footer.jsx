import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3"><img src="/logo.svg" alt="AutoCar" className="h-8"/><h3 className="text-white font-semibold text-lg">AutoCar</h3></div>
          <p className="text-white/90 mt-3">Premium car rentals. Drive your dream.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/90"><li>Home</li><li>Our Cars</li><li>About Us</li><li>Contact</li></ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-white/90"><li>Economy Cars</li><li>Luxury Vehicles</li><li>SUVs & Trucks</li></ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-white/90"><li>+880 1234 567890</li><li>info@autocar.com</li><li>Dhaka, Bangladesh</li></ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center text-white/80 border-t">© 2025 AutoCar. All rights reserved.</div>
    </footer>
  )
}
