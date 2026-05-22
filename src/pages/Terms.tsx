import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" as const },
});

const highlights = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Clear Terms",
    desc: "Plain-language terms that clearly define your rights and responsibilities.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Fair Usage",
    desc: "Balanced policies that protect both you and the platform fairly.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
    title: "Transparency",
    desc: "Full disclosure on data handling, billing, and account management.",
  },
];

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service — AAKT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 py-20">
      {/* Animated gradient orbs — violet / purple theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-violet-500/15 blur-[140px]"
          animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-5%", right: "5%" }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full bg-purple-400/10 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", left: "5%" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-fuchsia-500/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", right: "55%" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
        {/* Document icon */}
        <motion.div
          {...fadeUp(0.15)}
          className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-400/20 flex items-center justify-center backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-violet-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </motion.div>

        {/* Badge */}
        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/20 bg-violet-500/5 backdrop-blur-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          <span className="text-sm text-violet-300 font-medium tracking-wide">
            Coming Soon
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.3)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
        >
          Terms of{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Service
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          className="mt-5 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto"
        >
          Our terms of service are being finalized. We'll have them ready for
          you shortly — thank you for your patience.
        </motion.p>

        {/* Highlight cards */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 text-left hover:border-violet-400/20 hover:bg-violet-500/[0.04] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-3 group-hover:bg-violet-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="mt-10 mb-8 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent origin-center"
        />

        {/* Back button */}
        <motion.div {...fadeUp(1.0)}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold shadow-lg shadow-violet-600/20 transition-all duration-300 hover:shadow-violet-600/40 hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 text-xs text-gray-500 tracking-widest uppercase"
        >
          © {new Date().getFullYear()} AAKT. All rights reserved.
        </motion.p>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
