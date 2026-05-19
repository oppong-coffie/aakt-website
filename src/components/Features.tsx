import { useState } from 'react';

const features = [
  {
    color: '#4338CA',
    title: 'Organize Operations',
    description: 'Structure departments, manage pipelines, and workflows.',
  },
  {
    color: '#D97706',
    title: 'Manage Teams',
    description: 'Keep track of roles, attendance, and employee performance.',
  },
  {
    color: '#DB2777',
    title: 'Automate Processes',
    description: 'Reduce manual work with automated triggers, approvals, and routines.',
  },
  {
    color: '#059669',
    title: 'Centralize Knowledge',
    description: 'Store policies, SOPs, and resources in one place.',
  },
  {
    color: '#3B82F6',
    title: 'AI Business Intelligence',
    description: 'Leverage AI to analyze data and generate actionable insights.',
  },
  {
    color: '#EAB308',
    title: 'Track Performance',
    description: 'Monitor project execution and operational health.',
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative" id="features">
      <div className="w-full max-w-[1140px] mx-auto pl-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Feature List */}
        <div>
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] tracking-tight mb-3">
            Meet AAKT Your<br />
            Central Source of Truth
          </h2>
          <p className="text-base mb-10 leading-relaxed">
            We bring everything together into one structured system
          </p>

          <ul className="flex flex-col gap-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 px-5 py-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'bg-black/[0.06]' : 'hover:bg-black/[0.04]'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                id={`feature-item-${index}`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                  style={{ background: feature.color }}
                />
                <div>
                  <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
                  <p className="text-[13px] text-gray-700 leading-snug">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Mockups */}
        <div className="flex flex-col gap-4 ">
          {/* Top Mockup */}
          <div className="bg-[#CDCCCC99] rounded-xl py-12 pl-16 overflow-hidden shadow-xl">
           <img
                    src="/feature0.png" // your dashboard image
                    alt="Dashboard Preview"
                    className="w-ful rounded-xl shadow-lg"
                  />
           
          </div>

          {/* Bottom Mockup - Chart */}
          <div className="bg-[#CDCCCC99] rounded-xl  py-9 pl-20 overflow-hidden shadow-xl">
         <img
                    src="/feature.png" // your dashboard image
                    alt="Dashboard Preview"
                    className="w-96 max-w-3xl rounded-2xl object-cover"
                  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
