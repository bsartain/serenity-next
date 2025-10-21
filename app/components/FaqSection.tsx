import { useState } from "react";
import { Faqs } from "../models";

const FaqSection: React.FC<{ faqs: Array<Faqs> }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#4B4B40] text-[#FDFCF9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.length > 0
            ? faqs.map((faq, index) => (
                <div key={index} className="bg-[#5A5A50] rounded-lg shadow-lg">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    aria-expanded={openIndex === index}
                    aria-controls={`collapse-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold">{faq.question}</h3>
                    <span className="text-2xl transform transition-transform duration-300">{openIndex === index ? "➖" : "➕"}</span>
                  </button>
                  <div id={`collapse-${index}`} className={`px-6 pb-6 ${openIndex === index ? "block" : "hidden"}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
