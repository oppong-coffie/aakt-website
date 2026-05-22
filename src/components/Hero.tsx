import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-[1280px] p-5 md:pl-20 lg:flex lg:items-center lg:gap-12">
        {/* Left Content */}
        <div className="lg:w-[45%]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-[3.5rem] text-black leading-[1.15] tracking-tight"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            The Operating<br />System for Modern<br />Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 leading-relaxed text-gray-800 font-medium max-w-[480px]"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            AAKT is an intelligent enterprise platform that unifies tasks,
            teams, documents, and industry systems into one workspace,
            using automation and insights to help organizations work
            faster and make smarter decisions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <a href="https://app.aakt.io/register" target="_blank" rel="noopener noreferrer">
              <button className="rounded-xl bg-[#3461FF] px-5 md:px-16 py-2 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-blue-700 w-full sm:w-auto text-center">
                Sign Up for Free
              </button>
            </a>
              <a href="https://app.aakt.io" target="_blank" rel="noopener noreferrer">
              <button className="rounded-xl border border-gray-300 bg-white px-15 md:px-20 py-2 text-[15px] font-semibold text-black shadow-sm transition-all hover:bg-gray-50 w-full sm:w-auto text-center">
                Log In
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-0 lg:w-[55%] flex justify-end"
          data-aos="fade-left"
          data-aos-duration="2200"
          data-aos-delay="300"
        >
          <div className="w-full bg-[#2F5BEA66] rounded-l-[2rem] rounded-r-xl pt-10 pl-10 md:pt-8 md:pl-14 pb-8 overflow-hidden shadow-xl relative lg:-mr-6">
            <img
              src="/hero.png"
              alt="AAKT Dashboard Preview"
              className="w-full h-[405px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
