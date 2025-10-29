import React from "react";

export default function GiftCertificates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* <!-- Left Column: Text Content --> */}
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Gift Certificates</h2>
          <p className="text-lg leading-relaxed">
            Treat someone special to the ultimate wellness experience with a gift certificate. Perfect for birthdays, anniversaries, holidays, or just
            because — give the gift of deep relaxation, stress relief, and rejuvenation.
          </p>
          <div className="pt-4">
            <a
              href="tel:803-684-0559"
              className="story-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              style={{ padding: "15px" }}
            >
              Call to purchase a Gift Certificate
            </a>
          </div>
        </div>

        {/* <!-- Right Column: Image --> */}
        <div className="order-1 md:order-2">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div
              style={{
                backgroundImage: `url('/images/gift-card.jpg')`,
              }}
              className="specials-image-specails-container"
            >
              <div className="specials-image-overlay"></div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight z-11">Gift Certificates</h2>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
