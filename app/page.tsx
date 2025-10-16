"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import "flowbite";
import StoryModal from "@/app/components/StoryModal";
import { team, serviceCategories, heroImages, faqs } from "./data";
import FaqSection from "./components/FaqSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const filteredHeroImages = heroImages.filter((image) => image.active);

  const hasSpecial = heroImages.some((item) => item.special);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredHeroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredHeroImages.length) % filteredHeroImages.length);
  };

  const nextServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev + 1) % serviceCategories.length);
  };

  const prevServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
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

  const darkSection = "bg-[#4B4B40] text-[#FDFCF9]";
  const lightSection = "bg-[#FDFCF9] text-[#4B4B40]";

  return (
    <div className="font-sans text-gray-800 dark:bg-gray-800">
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="logo-container">
              <img src={isScrolled ? "/images/serenity-logo.png" : "/images/serenity-logo-white.png"} alt="Serenity" className="logo" />
              <h3 className={`text-2xl transition-colors lowercase ${isScrolled ? "text-[#4B4B40]" : "text-white"}`}>Serenity Therapeutic Massage</h3>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "services", "about", "team", "faq", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm uppercase transition-colors hover:text-[#3f3f37] ${isScrolled ? "text-gray-800" : "text-white"}`}
                >
                  {item}
                </button>
              ))}
              {hasSpecial ? (
                <button
                  onClick={() => scrollToSection("specials")}
                  className={`text-sm transition-colors  rounded-2xl p-4 ${
                    isScrolled ? "bg-[#4B4B40] text-[#FDFCF9] " : "bg-[#FDFCF9] text-[#4B4B40]"
                  }`}
                >
                  VIEW SPECIALS
                </button>
              ) : null}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className={isScrolled ? "text-gray-800" : "text-white"} size={28} />
              ) : (
                <Menu className={isScrolled ? "text-gray-800" : "text-white"} size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {["home", "services", "about", "team", "faq", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-teal-50 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Carousel */}
      <section id="home" className="relative h-screen overflow-hidden">
        {filteredHeroImages.map((image, index) => {
          if (image.active === true) {
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              >
                <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">{image.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 text-center">{image.subtitle}</p>
                  <div className="excerpt-container">
                    <hr className="york-excerpt-line" />
                    <h6>Serving York SC for over 20 years</h6>
                  </div>
                  <div className="flex">
                    {/* <button className="primary-btn mr-2 mt-6">Call To Book Now</button> */}
                    <button onClick={() => (window.location.href = "tel:8036840559")} className="primary-btn mr-2 mt-6 cursor-pointer">
                      Call To Book
                    </button>
                    {hasSpecial ? (
                      <button onClick={() => scrollToSection("specials")} className="primary-btn mr-2 mt-6">
                        View Specials
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </section>

      {/* Specials Section */}
      {filteredHeroImages.map((item, index) => {
        if (item.special) {
          return (
            <section key={index} id="specials" className={`py-8 ${darkSection}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-25 mb-25">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div
                    style={{
                      backgroundImage: `url('${item.url}')`,
                    }}
                    className="specials-image-specails-container"
                  >
                    <div className="specials-image-overlay"></div>
                    <h2 className="specials-image-text">{item.title}</h2>
                  </div>
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })}

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#FDFCF9] text-[#4B4B40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-4">Customized treatments for your wellness journey</p>

          {/* Carousel Container */}
          <div className="relative">
            {/* Slide Indicators */}
            <div className="flex flex-wrap justify-center mt-12 mb-12 gap-3">
              {serviceCategories.map((item, index) => (
                <div
                  className="bg-transparent hover:bg-[#4B4B40] text-[#4B4B40] font-semibold hover:text-[#FDFCF9] py-2 px-4 text-sm border border-[#4B4B40] hover:border-transparent rounded cursor-pointer transition-colors"
                  onClick={() => setCurrentServiceSlide(index)}
                >
                  {item.category}
                </div>
              ))}
            </div>
            {/* Category Title */}
            <h3 className="text-3xl font-semibold text-center mb-12">{serviceCategories[currentServiceSlide].category}</h3>
            {/* Services Grid */}
            <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}>
                <div className="flex">
                  {serviceCategories.map((category, catIndex) => (
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
                            <p className="text-gray-700 leading-relaxed">{service.description}</p>
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
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkSection}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
              <p className="text-lg mb-6 leading-relaxed">Welcome to Serenity Therapeutic Massage — where family, healing, and care come together.</p>

              <p className="text-lg mb-6 leading-relaxed">
                At Serenity, we’re more than just a massage therapy practice — we’re a family serving families. For over two decades, we’ve cared for
                our neighbors here in York with the same warmth and attention we’d give our own loved ones.
              </p>

              <p className="text-lg mb-6 leading-relaxed">
                Each session is personal. Our licensed massage therapists take time to understand your needs — whether you’re looking to ease chronic
                pain, recover from an injury, or simply relax after a long day.
              </p>

              <p className="text-lg mb-6 leading-relaxed">
                We believe in the power of compassionate, therapeutic touch to bring balance, peace, and renewal to body and mind. Our cozy,
                family-built space is designed to help you unwind, feel at home, and leave refreshed.
              </p>

              <p className="text-lg mb-6 leading-relaxed">Come experience the difference of a place where our family treats your family.</p>
            </div>
            <div className="relative h-96 lg:h-full">
              <img src="/images/face-massage.jpg" alt="Massage therapy room" className="w-full h-full object-cover rounded-lg shadow-xl" />
            </div>
            <StoryModal />
          </div>
        </div>
      </section>

      <section id="team" className={`py-20 ${lightSection}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
          {team.map((item, index) => {
            return (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: "50vh",
                  }}
                />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.name} Bio coming soon</p>

                  <div
                    id={`accordion-flush-${index}`}
                    data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400"
                  >
                    <h2 id={`accordion-flush-heading-${index}`}>
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                        data-accordion-target={`#accordion-flush-body-${index}`}
                        aria-expanded="false"
                        aria-controls={`accordion-flush-body-${index}`}
                      >
                        <span>More...</span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                      </button>
                    </h2>
                    <div id={`accordion-flush-body-${index}`} className="hidden" aria-labelledby={`accordion-flush-heading-${index}`}>
                      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">{item.name} Bio coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="faq" className={`py-20 ${darkSection}`}>
        <FaqSection />
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.250990131813!2d-81.2381743!3d35.000421700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856f3ef02a321f5%3A0x2f6ce2e2c4f25864!2s219%20N%20Congress%20St%2C%20York%2C%20SC%2029745!5e0!3m2!1sen!2sus!4v1760449116881!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>

      {/* Contact Section */}
      <section id="contact" className={`${darkSection} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-xl text-center mb-16">Ready to begin your wellness journey? Contact us today</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block bg-white/20 p-4 rounded-full mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-lg">
                <a href="tel:803-684-0559">(803) 684-0559</a>
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/20 p-4 rounded-full mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-lg">
                <a href="mailto:yorkmassage@gmail.com">yorkmassage@gmail.com</a>
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/20 p-4 rounded-full mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Location</h3>
              <p className="text-lg">
                219 North Congress Street
                <br />
                York, SC 29745
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
            <div className="max-w-md mx-auto text-lg space-y-2">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 12:00 PM</p>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Serenity Therapeutic Massage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
