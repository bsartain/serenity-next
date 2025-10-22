import { useState } from "react";
import { Team } from "../models/";

interface TeamSectionProps {
  team: Team[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  // Track which accordion is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Meet The Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={member.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "50vh",
              }}
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>

              {/* Accordion */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between w-full py-3 px-4 text-left font-medium text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                {openIndex === index ? "Hide Bio" : "Show Bio"}
                <span className="ml-2">{openIndex === index ? "➖" : "➕"}</span>
              </button>

              <div className={`mt-2 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
                <p dangerouslySetInnerHTML={{ __html: member.content }} className="text-gray-600 mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
