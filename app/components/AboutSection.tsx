import StoryModal from "./StoryModal";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-6 leading-relaxed">Welcome to Serenity Therapeutic Massage — where family, healing, and care come together.</p>

          <p className="text-lg mb-6 leading-relaxed">
            At Serenity, we’re more than just a massage therapy practice — we’re a family serving families. For over two decades, we’ve cared for our
            neighbors here in York with the same warmth and attention we’d give our own loved ones.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            Each session is personal. Our licensed massage therapists take time to understand your needs — whether you’re looking to ease chronic
            pain, recover from an injury, or simply relax after a long day.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            We believe in the power of compassionate, therapeutic touch to bring balance, peace, and renewal to body and mind. Our cozy, family-built
            space is designed to help you unwind, feel at home, and leave refreshed.
          </p>

          <p className="text-lg mb-6 leading-relaxed">Come experience the difference of a place where our family treats your family.</p>
        </div>
        <div className="relative h-96 lg:h-full">
          <img src="/images/face-massage.jpg" alt="Massage therapy room" className="w-full h-full object-cover rounded-lg shadow-xl" />
        </div>
        <StoryModal />
      </div>
    </div>
  );
};

export default AboutSection;
