import { useState } from "react";
import { ServiceCategory } from "../models";
import { Clock } from "lucide-react";

const ServicesSection: React.FC<{ services: Array<ServiceCategory> }> = ({ services }) => {
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev + 1) % services.length);
  };

  const prevServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left - go to next slide
      nextServiceSlide();
    }

    if (distance < -minSwipeDistance) {
      // Swiped right - go to previous slide
      prevServiceSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-xl text-center text-gray-600 mb-4">Customized treatments for your wellness journey</p>
      <p className="text-xl text-center text-gray-600 mb-4">
        PLEASE NOTE: Prices may vary by therapist based on experience and specialization, so the listed rates reflect a range for each service.
      </p>

      {/* Carousel Container */}
      <div className="relative">
        {/* Slide Indicators */}
        <div className="flex flex-wrap justify-center mt-12 mb-12 gap-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-transparent hover:bg-[#4B4B40] text-[#4B4B40] font-semibold hover:text-[#FDFCF9] py-2 px-4 text-sm border border-[#4B4B40] hover:border-transparent rounded cursor-pointer transition-colors"
              onClick={() => setCurrentServiceSlide(index)}
            >
              {item.category}
            </div>
          ))}
        </div>
        {/* Category Title */}
        <h3 className="text-3xl font-semibold text-center mb-12">{services.length > 0 ? services[currentServiceSlide].category : null}</h3>
        {/* Services Grid */}
        <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}>
            <div className="flex">
              {services.map((category, catIndex) => (
                <div key={catIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {category.services.map((service, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-[#4B4B40] mb-2">{service.name}</h3>
                        <div className="flex justify-between items-center mb-4 text-gray-600">
                          <span className="flex items-center">
                            <Clock size={18} className="mr-2" />
                            {service.duration}
                          </span>
                          <span className="text-xl font-semibold text-[#4B4B40]">{service.price}</span>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: service.description }} className="text-gray-700 leading-relaxed" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
