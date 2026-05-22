const audiences = [
  {
    icon: '🚀',
    iconBg: 'bg-purple-100',
    title: 'Startups & SMEs looking to build a solid foundation',
  },
  {
    icon: '📋',
    iconBg: 'bg-green-100',
    title: 'Growing Companies breaking out of spreadsheet chaos.',
  },
  {
    icon: '🏢',
    iconBg: 'bg-blue-100',
    title: 'Enterprise Teams & Operational Managers demanding efficiency.',
  },
  {
    icon: '⚙️',
    iconBg: 'bg-slate-100',
    title: 'Tech-Driven Businesses needing integrated platforms for execution.',
  },
];

const Audience = () => {
  return (
    <section className="py-4" id="audience">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-[42px] leading-[1.15] tracking-tight text-[#1A1A2E] mb-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Built for Organizations Scaling<br />
            Operations.
          </h2>
          <p
            className="text-[15px] text-gray-500 leading-relaxed max-w-[620px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="150"
          >
            Modern businesses are drowning in spreadsheets, disconnected apps, lost documents,
            and manual processes. It slows you down and limits your ability to scale.
          </p>
        </div>

        {/* Cards */}
        <div
          className="bg-[#CDCCCC99] rounded-xl py-8 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          {audiences.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-7 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent cursor-default"
              id={`audience-card-${index}`}
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-delay={`${400 + index * 200}`}
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-5 ${item.iconBg}`}>
                {item.icon}
              </div>
              <p className="text-[15px] font-medium leading-snug text-[#1A1A2E]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
