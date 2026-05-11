
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function OurAdvantage() {
  const stats = [
    { label: "Tourism Benefits", value: 94 },
    { label: "Luxury Hotels", value: 86 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="">
          <div className="advantage-custom-mask relative z-10 w-full aspect-[4/5]">
            <Image
                width={600}
                height={800}
              src="https://www.holidayidea.com.my/upload/gallery/14620.jpg" 
              alt="Luxury Travel Experience" 
              className="w-full h-full object-cover"
            />
            
            {/* Star Rating Badge */}
            <div className="absolute  top-10 right-10 gradient p-3 px-5 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
              <Star size={16} fill="currentColor" className="text-yellow-400" />
              <span className="text-white font-bold text-sm">4.9 (1.2K Reviews)</span>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <span className="text-secondary font-bold text-sm tracking-widest uppercase">
              Our Advantages
            </span>
            <h2 className="text-dark font-black text-4xl md:text-5xl mt-4 leading-tight">
              Travel In Style: Luxury Getaways <br /> 
              <span className="text-gradient">For The Discerning</span>
            </h2>
          </div>

          <p className="text-muted text-lg leading-relaxed max-w-xl">
            Our team of experts has spent years honing their skills in the travel industry, 
            and we've built a reputation for providing unparalleled service and attention to 
            detail. We know that every traveler is different, and we take the time to get to 
            know you before planning your trip.
          </p>

          {/* Progress Bars */}
          <div className="space-y-6 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-dark">{stat.label}</span>
                  <span className="font-bold text-dark">{stat.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient transition-all duration-1000 ease-out" 
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 font-bold text-secondary hover:text-primary transition-colors group">
            <span className="border-b-2 border-transparent group-hover:border-primary">Learn More</span>
            <div className="p-1 rounded-full bg-secondary/10 group-hover:bg-primary/10">
              <ArrowRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}