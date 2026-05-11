"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import {promoData} from "@/src/data/travelData"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add this interface before your component
interface PromoItem {
  id: number;
  title: string;
  description: string;
  image: string;
  region: string;
  duration: string;
  capacity: string;
  oldPrice: string | number;
  newPrice: string | number;
  discount: string;
}

export default function PromoCards() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden py-50">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className='text-gradient font-black text-4xl md:text-6xl mb-4'>Create Unforgettable Memories</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Get ready to embark on the journey of a lifetime! Our travel agency is dedicated to crafting unforgettable experiences that will leave you with lifelong memories.
          </p>
        </div>
        <button className="promo-prev absolute -left-8 top-[65%] -translate-y-1/2 z-30 w-12 h-12 gradient text-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="promo-next absolute -right-8 top-[65%] -translate-y-1/2 z-30 w-12 h-12 gradient text-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-all">
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.promo-prev',
            nextEl: '.promo-next',
          }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {promoData.map((item: PromoItem) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 gradient text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1 shadow-lg">
                    <span>✦</span> {item.discount}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 h-14 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="w-full h-[1px] bg-gray-100 mb-6" />

                  <div className="grid grid-cols-2 items-end mt-auto">
                    <div className="space-y-3">
                      <div className="flex items-center text-primarydark gap-2">
                        <MapPin size={16} />
                        <span className="text-gray-600 text-xs font-medium">{item.region}</span>
                      </div>
                      <div className="flex items-center text-primarydark gap-2">
                        <Clock size={16} />
                        <span className="text-gray-600 text-xs font-medium">{item.duration}</span>
                      </div>
                      <div className="flex items-center text-primarydark gap-2">
                        <Users size={16} />
                        <span className="text-gray-600 text-xs font-medium">{item.capacity}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-gray-400 text-sm line-through block font-medium">
                        RM{item.oldPrice}
                      </span>
                      <span className="text-gradient text-3xl font-extrabold">
                        RM{item.newPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center gap-2 mt-10" />
      </div>
    </section>
  );
}