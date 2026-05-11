
"use client"
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Banknote, 
  Search, 
  ChevronLeft, 
  ChevronRight,
  Activity
} from 'lucide-react';
import SocialLinks from './SoicalLinks';
import SearchHero from './SearchHero';
const slides = [
  {
    image: "https://www.holidayidea.com.my/promo/img/frntbck2.jpg",
    location: "Surat Thani, Thailand",
    heading: "Your Next Great Journey Starts Here: Explore The World With Us!",
    description: "Get ready to embark on the journey of a lifetime! Our travel agency is dedicated to crafting unforgettable experiences that will leave you with lifelong memories."
  },
  {
    image: "https://www.holidayidea.com.my/promo/img/frntbck.jpg",
    location: "Bali, Indonesia",
    heading: "Discover Tropical Paradises: Tailored Holiday Packages",
    description: "Experience the ultimate relaxation with our curated island getaways. From luxury villas to hidden beaches, we bring you the best of Southeast Asia."
  },
  {
    image: "https://www.holidayidea.com.my/upload/gallery/140.jpg",
    location: "Kyoto, Japan",
    heading: "Immerse in Culture: Expertly Guided Global Tours",
    description: "Step into a world of tradition and modernity. Our expert guides ensure you don't just see the sights, but feel the heart of every destination."
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full  font-sans -mt-[90px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.heading}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
        
        {/* Top Location Tag */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <MapPin size={18} className="text-white" />
          <span className="text-sm font-medium tracking-wide">{slides[current].location}</span>
        </div>

        {/* Main Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              {slides[current].heading}
            </h1>
            
            {/* Social Links */}
            <div className="flex items-center gap-6 mt-12">
                <SocialLinks />
            </div>
          </div>

          <div className="lg:pl-12 relative">
            <p className="text-lg leading-relaxed text-gray-100 mb-8">
              {slides[current].description}
            </p>
            
            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-4">
              <div className="h-[2px] flex-grow bg-white/30 relative overflow-hidden">
                 <div 
                   className="absolute h-full bg-white transition-all duration-500" 
                   style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                 />
              </div>
              <div className="flex gap-2">
                <button onClick={prevSlide} className="p-2 hover:bg-white/20 rounded-full transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-2 hover:bg-white/20 rounded-full transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <SearchHero/>
    </section>
  );
}