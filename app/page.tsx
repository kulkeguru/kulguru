'use client'

import React from 'react';
import Navbar from './component/navbar';
import AboutPage from './component/aboutpage';
import Services from './component/services';
import Pricing from './component/pricing';
import Contact from './component/contact';
import Footer from './component/footer';

export default function KulGuruPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Divine Protection for Your Family
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Daily Ram Raksha Stotra chanting by our dedicated Pandits to create a spiritual Kavach for your loved ones
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#pricing" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
              Get Started - ₹1/Day
            </a>
            <a href="https://www.youtube.com/@kulguruji" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
              Watch Live
            </a>
            <a href="/about" className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition sm:w-auto w-full">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <AboutPage /> */}

      {/* Services Section */}
      <Services />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}