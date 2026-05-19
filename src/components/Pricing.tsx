const Pricing = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="w-full max-w-[700px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[42px] font-bold leading-[1.15] tracking-tight text-[#1A1A2E] mb-4">
            Start free,<br />
            upgrade comfortably
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-[520px] mx-auto">
            Packaged for modern project management teams, each of our
            plans unlocks way more than available alternatives.
          </p>
        </div>

        {/* Pricing Card */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Free</h3>
            <span className="text-[13px] font-semibold text-[#1A1A2E]/60">
              Limited-Time Early Access
            </span>

          <p className="text-sm text-gray-500 leading-relaxed mb-7">
            AAKT is currently in its early testing phase. Join today to access our platform features, test
            workflows, and enjoy all tools at no cost. Help us build the future of how digital businesses
            operate with your feedback.
          </p>

          <a
            href="#"
            className="block w-full py-3 text-center bg-[#4338CA] text-white text-[15px] font-semibold rounded-lg transition-all hover:bg-[#3730A3] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(67,56,202,0.3)] mb-4"
            id="pricing-cta"
          >
            Get Free Early Access
          </a>

          <p className="text-xs text-gray-400 text-center leading-snug">
            No credit card required. Full premium access until launch date. Help build and inform our roadmap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
