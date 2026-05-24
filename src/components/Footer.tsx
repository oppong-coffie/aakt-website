import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white/70 pt-16 pb-8" id="footer">
   <section className="relative overflow-hidden bg-black min-h-screen flex items-start justify-center px-6">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-white text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
          data-aos="fade-up"
          data-aos-duration="2200"
        >
          Start Building Smarter
          <br />
          Operations.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-1 text-lg text-gray-300"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          Transform from scattered chaos to intelligent clarity.
        </motion.p>

        {/* Buttons */}
        <motion.div
        onClick={() => window.open("https://app.aakt.io", "_blank")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg">
            Get Free Early Access
          </button>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>

          <Link to="/terms-of-service" className="hover:text-white transition">
            Terms of Service
          </Link>

          <a href="https://admin.aakt.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            Admin Portal
          </a>

        </motion.div>
      </div>

      {/* Giant Background Text */}
      <div
        className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 select-none pointer-events-none"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="400"
      >
        <h1 className="text-[260px] sm:text-[340px] md:text-[420px] font-black tracking-[-0.08em] text-[#5c5a55]/80 leading-none">
          AAKT
        </h1>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
    </section>
    </footer>
  );
};

export default Footer;
