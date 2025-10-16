import { useState } from "react";

export default function StoryModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(true)} className="story-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Read Our Story
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Box */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-out ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-[#4B4B40]">Our Story</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Vicki and Charlene first met as competitors in the massage industry back in October 1998—Vicki was practicing out of her home, while
                Charlene worked in Dr. Tim Puckett’s chiropractic office. Despite being competitors, they soon discovered a shared goal: to have the
                City of York rezone the downtown area to allow massage therapy practices.
              </p>

              <p>
                After two public hearings and several tense moments with city council members, their efforts paid off. The council voted “yes,”
                officially recognizing Massage Therapy as a personal service—similar to hair stylists and other licensed professionals—rather than a
                retail or food service business.
              </p>

              <p>
                From the beginning, their mission was to educate the community about the professionalism and legitimacy of massage therapy. They
                explained that licensed massage therapists in South Carolina undergo 500 hours of rigorous training and hold state licenses to
                practice anywhere. Their request was simple: to serve the people of York in a therapeutic, respectful environment free from
                misunderstanding or harassment.
              </p>

              <p>
                Their vision was not to open a day spa for pampering, but to create a true therapeutic office dedicated to addressing muscular health
                for men, women, and children alike. Their first motto, “Healthy Touch for the Entire Family,” reflected this commitment—and it remains
                at the heart of what they do. In more recent years, they’ve added a second phrase that beautifully captures who they are: “Let Our
                Family Treat Your Family.” And it’s true—they really are family! Amanda is Charlene’s daughter, and Vicki is Amanda’s mother-in-law.
                You can’t get much closer than that!
              </p>

              <p>
                In December 1999, both families came together to renovate the space at 9 North Congress Street. It was a real labor of love. Vicki’s
                children, Candice and Chris, joined Charlene’s husband, Alex, and their daughters, Erika and Amanda, to transform the
                building—painting walls, constructing treatment rooms, and shaping every detail from floor to ceiling. There was plenty of teamwork…
                and a few gentle “motivational threats” of no more massages until it’s finished!
              </p>

              <p>
                Once the work was done, all that was left was to choose a name. Sitting around the dining room table, they flipped through the phone
                book for inspiration. It didn’t take long before the perfect name came to them—a word that captured exactly how they wanted clients to
                feel after each visit: Serenity.
              </p>

              <p>
                And so, Serenity Massage was born. Their doors officially opened on April 3, 2000, and more than two decades later, they’re still
                here—continuing to serve the York community with care, skill, and that same spirit of family and serenity that started it all.
              </p>
            </div>

            <div className="flex justify-end mt-6 space-x-2">
              <button onClick={() => setIsOpen(false)} className="bg-[#4B4B40] text-[#FDFCF9] px-4 py-2 rounded hover:bg-gray-400 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
