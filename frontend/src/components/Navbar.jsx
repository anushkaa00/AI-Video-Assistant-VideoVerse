import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (href) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <header
  className={`fixed left-1/2 top-5 z-50 w-[96%] max-w-7xl -translate-x-1/2 rounded-3xl transition-all duration-300 ${
          scrolled
            ? "border border-white/10 bg-white/[0.06] backdrop-blur-3xl shadow-[0_10px_50px_rgba(0,0,0,.45)]"
            : "border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,.30)]"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3 font-bold text-white"
          >
            <div className="flex items-center gap-3">

 <div className="flex h-14 w-14 items-center justify-center overflow-hidden">
  <img
    src={logo}
    alt="VideoVerse"
    className="h-full w-full scale-[2.2] object-contain"
  />
</div>

  <h1 className="text-[2rem] font-extrabold tracking-tight">

    <span className="text-white">
      Video
    </span>

    <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
      Verse
    </span>

  </h1>

</div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-12 md:flex">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => handleSectionClick(item.href)}
                  className="text-slate-300 transition-all duration-300 hover:text-white hover:scale-105"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
  key={item.name}
  to={item.href}
  className="text-lg font-medium text-slate-300 transition-all duration-300 hover:text-white hover:-translate-y-0.5"
>
  {item.name}
</NavLink>      )
)}
</nav>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/chat"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-white transition hover:bg-white/10"
            >
              Chat
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>


          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl border border-white/10 bg-[#0b1023]/95 p-6 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleSectionClick(item.href)}
                    className="text-left text-slate-300 transition-all duration-300 hover:text-white hover:scale-105"
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-300 transition-all duration-300 hover:text-white hover:scale-105"
                  >
                    {item.name}
                  </NavLink>
                )
              )}

              <hr className="border-white/10" />

              <Link
  to="/chat"
  target="_blank"
  className="rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:scale-105"
>
  Chat
</Link>

              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}