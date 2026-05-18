import { motion } from "framer-motion";

const Hero = () => {
  return (
       <div
      className="pl-6 py-10 bg-[#d9d2c2]"
    >
          {/* Content */}
          <div className="relative min-h-[720px] pl-14 pb-16 pt-14">

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute right-0 top-5 h-[58%] w-[58%] overflow-hidden rounded-2xl border border-gray-200 bg-[#f7f7f4] shadow-xl"
            >
           

               <img
                    src="/hero.png" // your dashboard image
                    alt="Dashboard Preview"
                    className="w-full max-w-3xl rounded-2xl object-cover shadow-lg"
                  />
            </motion.div>

            {/* Hero Section */}
            <div className="absolute bottom-45 left-35">
              <h1 className="text-5xl font-semibold text-black">
                The Operating System
                <br />
                for Modern Businesses.
              </h1>

              <p className="text-sm leading-relaxed text-gray-700">
                Move from chaos to clarity. Structure, automate, and scale your <br></br>
                operations from employees and workflows to AI-powered business <br></br>
                intelligence all inside a single platform.
              </p>

              {/* Buttons */}
              <div className="mt-3 flex items-center gap-4">
                <button className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                  Get Free Early Access
                </button>

                <button className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
    </div>

  );
};

export default Hero;
