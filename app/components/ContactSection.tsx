import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection: React.FC<{ darkSection: string }> = ({ darkSection }) => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.250990131813!2d-81.2381743!3d35.000421700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856f3ef02a321f5%3A0x2f6ce2e2c4f25864!2s219%20N%20Congress%20St%2C%20York%2C%20SC%2029745!5e0!3m2!1sen!2sus!4v1760449116881!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
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
    </>
  );
};

export default ContactSection;
