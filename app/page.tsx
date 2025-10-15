"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import "flowbite";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const heroImages = [
    {
      url: "/images/christmas.jpg",
      title: "Christmas Specials",
      subtitle: "Give the gift of relaxation this Christmas with a massage gift certificate — the perfect way to show you care!",
      content:
        '<div class="p-6 rounded-2xl space-y-6 text-white"> <h2 class="text-2xl font-playfair font-semibold">Serenity Therapeutic Massage Christmas Gift Certificate Specials</h2> <div class="space-y-2"> <p class="text-lg font-semibold">2 × 60min Massage Sessions – $140.00</p> <p class="text-lg font-semibold">4 × 30min Massage Sessions – $170.00</p> </div> <div class="space-y-2"> <h3 class="text-xl font-semibold">Package #1</h3> <p>$80 – 30min Massage &amp; 1 Aqua Chi Foot Detox</p> </div> <div class="space-y-2"> <h3 class="text-xl font-semibold">Package #2</h3> <p>$110 – 60min Massage &amp; 1 Aqua Chi Foot Detox</p> </div> <div class="space-y-2"> <h3 class="text-xl font-semibold">Package #3</h3> <p>$130 – 60min Massage, 1 Aqua Chi Foot Detox &amp; Ear Coning</p> </div> <div class="space-y-1 mt-4"> <p class="font-semibold">Call (803) 684-0559 to arrange for pick-up</p> <p class="font-semibold">WE ACCEPT: CASH / CHECKS / DEBIT / CREDIT CARDS</p> </div> </div>',
      active: false,
      special: false,
    },
    {
      url: "/images/mothers-day.jpg",
      title: "Mothers Day Special",
      subtitle: "Show your love and appreciation with a rejuvenating massage experience designed just for her.",
      content:
        '<div> <p style="margin-bottom:25px">Our Mother’s Day Special gift certificates let Mom unwind, refresh, and feel cared for — the perfect way to say “thank you” for all she does every day.</p><p><strong>2 × 60-minute Massage Sessions:</strong> $140.00</p> <p><em>or</em></p> <p><strong>1 × 90-minute Massage Session:</strong> $100.00</p> <hr style="margin: 1.5rem 0;" /> <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Package One</h3> <p> <strong>Includes:</strong> 1 × 60-minute Massage Session &amp; 1 Aqua Chi Foot Detox<br /> <strong>Price:</strong> $110.00 </p> <h3 style="font-weight: 600; margin-bottom: 0.5rem; margin-top: 40px">Package Two</h3> <p> <strong>Includes:</strong> 1 × 60-minute Massage Session, 1 Aqua Chi Foot Detox, &amp; 1 Ear Coning<br /> <strong>Price:</strong> $165.00 </p> </div>',
      active: false,
      special: false,
    },
    {
      url: "/images/massage.jpg",
      title: "Therapeutic Touch",
      subtitle: "Healing mind, body & spirit",
      content: "",
      active: true,
      special: false,
    },
    {
      url: "/images/hot-rock.jpg",
      title: "Relaxation & Wellness",
      subtitle: "Experience the healing touch",
      content: "",
      active: true,
      special: false,
    },
    {
      url: "/images/oil.jpg",
      title: "Professional Care",
      subtitle: "Your journey to better health",
      content: "",
      active: true,
      special: false,
    },
  ];

  const filteredHeroImages = heroImages.filter((image) => image.active);

  const hasSpecial = heroImages.some((item) => item.special);

  const serviceCategories = [
    {
      category: "Massage Therapy",
      services: [
        {
          name: "30 min. Therapeutic Massage Session",
          duration: "30 min",
          price: "$45",
          description: "Quick therapeutic session for targeted relief",
        },
        {
          name: "60 min. Therapeutic Massage Session",
          duration: "60 min",
          price: "$75",
          description: "Full body therapeutic massage for complete relaxation",
        },
        {
          name: "90 min. Therapeutic Massage Session",
          duration: "90 min",
          price: "$105",
          description: "Extended therapeutic session for deep muscle work",
        },
      ],
    },
    {
      category: "Hot Rock Therapy",
      services: [
        {
          name: "60 min. Hot Rock Massage Session",
          duration: "60 min",
          price: "$95",
          description: "Heated stones combined with massage for deep relaxation",
        },
        {
          name: "90 min. Hot Rock Massage Session",
          duration: "90 min",
          price: "$120",
          description: "Extended hot stone therapy for ultimate relaxation",
        },
      ],
    },
    {
      category: "Thai Massage Therapy",
      services: [
        {
          name: "60 min. Thai Massage Session",
          duration: "60 min",
          price: "$95",
          description: "Traditional Thai massage with stretching and acupressure",
        },
        {
          name: "90 min. Thai Massage Session",
          duration: "90 min",
          price: "$120",
          description: "Extended Thai massage for comprehensive body work",
        },
      ],
    },
    {
      category: "Specialty Therapies",
      services: [
        {
          name: "Rossiter Workout System",
          duration: "60 min",
          price: "$95",
          description: "Powerful stretching technique for pain relief and flexibility",
        },
        {
          name: "Fertility Massage",
          duration: "90 min",
          price: "$150",
          description: "Specialized massage to support reproductive health",
        },
        {
          name: "Cranio Sacral Therapy - 60 min",
          duration: "60 min",
          price: "$95",
          description: "Gentle therapy focusing on craniosacral system",
        },
        {
          name: "Cranio Sacral Therapy - 90 min",
          duration: "90 min",
          price: "$120",
          description: "Extended craniosacral therapy for deeper healing",
        },
      ],
    },
    {
      category: "Wellness Services",
      services: [
        {
          name: "Ear Coning Session",
          duration: "45 min",
          price: "$55",
          description: "Natural ear candling for relaxation and ear health",
        },
        {
          name: "Aqua Chi - Ionic Foot Bath",
          duration: "30 min",
          price: "$45",
          description: "Detoxifying ionic foot bath for wellness and balance",
        },
      ],
    },
    {
      category: "Discounted Packages",
      services: [
        {
          name: "(6) 60 min. Therapeutic Massages",
          duration: "6 sessions",
          price: "$444",
          description: "Save $6 per session with this package deal",
        },
        {
          name: "(12) 60 min. Therapeutic Massages",
          duration: "12 sessions",
          price: "$876",
          description: "Save $24 per session with this exclusive package",
        },
      ],
    },
  ];

  const team = [
    {
      name: "Vickie Rose (Retired)",
      content: "",
      img: "/images/vickie.jpg",
    },
    {
      name: "Anna J. McKee",
      content: "",
      img: "/images/anna1.jpg",
    },
    {
      name: "Christie Edwards",
      content: "",
      img: "/images/christie.jpg",
    },
    {
      name: "Eric Grose",
      content: "",
      img: "/images/eric.jpg",
    },
    {
      name: "Amanda Rose",
      content: "",
      img: "/images/Amanda-bio-photo.jpg",
    },
    {
      name: "Charlene Hracs",
      content: "",
      img: "/images/Charlene-headshot.jpg",
    },
  ];

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
            <h3 className={`text-2xl transition-colors lowercase ${isScrolled ? "text-[#4B4B40]" : "text-white"}`}>Serenity Therapeutic Massage</h3>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "services", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm uppercase transition-colors hover:text-teal-500 ${isScrolled ? "text-gray-800" : "text-white"}`}
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
            {["home", "services", "about", "contact"].map((item) => (
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
                  <div className="flex">
                    {hasSpecial ? (
                      <button onClick={() => scrollToSection("specials")} className="primary-btn mr-2">
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
                  <div className="relative h-96 lg:h-full">
                    <img src={item.url} alt="Massage therapy room" className="w-full h-full object-cover rounded-lg shadow-xl" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{item.title}</h2>
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
              <p className="text-lg mb-6 leading-relaxed">
                Welcome to Serenity Therapeutic Massage, where healing and relaxation come together. With over 15 years of experience, our licensed
                massage therapists are dedicated to providing personalized care that addresses your unique needs.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                We believe in the power of therapeutic touch to restore balance, reduce stress, and promote overall wellness. Our tranquil space is
                designed to help you escape the demands of daily life and reconnect with yourself.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're seeking relief from chronic pain, recovering from injury, or simply need to unwind, we're here to support your wellness
                journey.
              </p>
            </div>
            <div className="relative h-96 lg:h-full">
              <img src="/images/face-massage.jpg" alt="Massage therapy room" className="w-full h-full object-cover rounded-lg shadow-xl" />
            </div>
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
