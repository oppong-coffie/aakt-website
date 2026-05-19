const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#DB2777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: 'bg-pink-50',
    title: 'Data trapped in isolated sheets.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: 'bg-emerald-50',
    title: 'Communication lost in endless threads.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: 'bg-indigo-50',
    title: 'Time wasted on repetitive, manual tasks.',
  },
];

const Problem = () => {
  return (
    <section className="">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[32px] leading-[1.15] tracking-tight text-[#1A1A2E] mb-4">
            Why AAKT? <br />A Smarter Way to Run Work.
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-[620px] mx-auto">
            AAKT unifies tasks, teams, documents, and operations into one intelligent workspace, eliminating scattered tools and improving alignment, speed, and clarity through built-in intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="bg-[#CDCCCC99] rounded-xl py-16 px-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent cursor-default"
              id={`problem-card-${index}`}
            >
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-6 ${point.iconBg}`}>
                {point.icon}
              </div>
              <p className="text-[15px] font-medium leading-snug text-[#1A1A2E]">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
