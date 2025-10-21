"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "flowbite";
import FaqSection from "./components/FaqSection";
import MassageGallery from "./components/MassageGallery";
import TeamSection from "./components/TeamSection";
import { HeroImages, Faqs, ServiceCategory, Team, Gallery } from "./models";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SpecialsSection from "./components/SpecialsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState<Array<HeroImages>>([]);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [faqs, setFaqs] = useState<Array<Faqs>>([]);
  const [services, setServices] = useState<Array<ServiceCategory>>([]);
  const [team, setTeam] = useState<Array<Team>>([]);
  const [gallery, setGallery] = useState<Array<Gallery>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [activeSlides]);

  useEffect(() => {
    const data = async () => {
      const response: any = await fetch("/api/data");
      const json = await response.json();
      const filterOutActiveSlides = json.heroImages.filter((item: HeroImages) => item.active);
      const checkHasSpecial = json.heroImages.some((item: HeroImages) => item.special);

      setActiveSlides(filterOutActiveSlides);
      setHasSpecial(checkHasSpecial);
      setServices(json.serviceCategories);
      setTeam(json.team);
      setFaqs(json.faqs);
      setGallery(json.galleryImages);
    };
    data();
  }, []);

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const darkSection = "bg-[#4B4B40] text-[#FDFCF9]";
  const lightSection = "bg-[#FDFCF9] text-[#4B4B40]";
  const menuItems = ["home", "services", "about", "team", "faq", "contact"];

  return (
    <div className="font-sans text-gray-800 dark:bg-gray-800">
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="logo-container">
              <img src="/images/logo.png" alt="Serenity" className="logo" />
              <h3 className={`text-2xl transition-colors lowercase ${isScrolled ? "text-[#4B4B40]" : "text-white"}`}>Serenity Therapeutic Massage</h3>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
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
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-4 text-gray-800 hover:bg-[#4b4b40] hover:text-white capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Carousel */}
      <section id="home" className="relative h-screen overflow-hidden">
        {activeSlides.length > 0
          ? activeSlides.map((image, index) => {
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
                            View Special
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              }
            })
          : null}
      </section>

      {/* Specials Section */}
      <SpecialsSection activeSlides={activeSlides} darkSection={darkSection} />

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#FDFCF9] text-[#4B4B40]">
        <ServicesSection services={services} />
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkSection}`}>
        <AboutSection />
      </section>

      {/* Team Members Section */}
      <section id="team" className={`py-20 ${lightSection}`}>
        <TeamSection team={team} />
      </section>

      {/* FAQ'S Section */}
      <section id="faq" className={`py-20 ${darkSection}`}>
        <FaqSection faqs={faqs} />
      </section>

      {/* <div id="facility">
        <MassageGallery gallery={gallery} />
      </div> */}

      {/* Contact Section */}
      <ContactSection darkSection={darkSection} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Serenity Therapeutic Massage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
