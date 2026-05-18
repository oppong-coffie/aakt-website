import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF5F0]/85 backdrop-blur-2xl border-b border-black/5 py-2.5'
          : 'py-4'
      }`}
      id="navbar"
    >
      <div className="w-full max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-semibold text-xl text-[#1A1A2E]" id="logo">
      
          <span className="">AAKT</span>
        </a>

      

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-1 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="hamburger"
          >
            <span className={`block w-[22px] h-0.5 bg-[#1A1A2E] rounded-sm transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
            <span className={`block w-[22px] h-0.5 bg-[#1A1A2E] rounded-sm transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-0.5 bg-[#1A1A2E] rounded-sm transition-all duration-300 ${mobileOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
