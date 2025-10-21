import { HeroImages } from "../models";

const SpecialsSection: React.FC<{ activeSlides: Array<HeroImages>; darkSection: string }> = ({ activeSlides, darkSection }) => {
  return (
    <>
      {activeSlides.length > 0
        ? activeSlides.map((item, index) => {
            if (item.special) {
              return (
                <section key={index} id="specials" className={`py-8 ${darkSection}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
          })
        : null}
    </>
  );
};

export default SpecialsSection;
