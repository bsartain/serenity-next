import { Team } from "../models";
import "flowbite";

const TeamSection: React.FC<{ team: Array<Team> }> = ({ team }) => {
  const lightSection = "bg-[#FDFCF9] text-[#4B4B40]";
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Meet The Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
        {team.length > 0
          ? team.map((item, index) => {
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
            })
          : null}
      </div>
    </>
  );
};

export default TeamSection;
