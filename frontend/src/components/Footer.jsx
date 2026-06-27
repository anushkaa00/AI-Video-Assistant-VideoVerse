import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "About",
    href: "#about",
  },
];

const resources = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Chat",
    href: "/chat",
  },
];

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  

  return (
    <footer className="relative mt-32 px-6 pb-8">
      <div className="mb-6 flex justify-center">
  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
    ✦ Stay Connected
  </span>
</div>
      <div className="mx-auto max-w-7xl rounded-[40px]
border border-white/10
bg-white/[0.04]
backdrop-blur-3xl
shadow-[0_20px_80px_rgba(0,0,0,.45)]
px-12
py-14">
        <div className="grid gap-12 md:grid-cols-2 grid-cols-1
md:grid-cols-2
lg:grid-cols-[2.6fr_1fr_1fr_1.2fr]
items-start">

  
          {/* Logo */}

          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-white"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden">

    <img
        src={logo}
        alt="VideoVerse"
        className="h-full w-full scale-[2.2] object-contain"
    />

</div>

              <span className="text-3xl font-bold">
                Video
                <span className="text-cyan-400">
                  Verse
                </span>
              </span>
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered video intelligence that converts long videos into transcripts, summaries, highlights and actionable insights in seconds.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white hover:-translate-y-1
hover:border-cyan-400/40
hover:bg-cyan-500/10
transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white hover:-translate-y-1
hover:border-cyan-400/40
hover:bg-cyan-500/10
transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {quickLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.title}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-slate-400 transition hover:text-cyan-400"
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link
                    key={link.title}
                    to={link.href}
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <div className="flex flex-col gap-4">
              {resources.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  target={item.href === "/chat" ? "_blank" : "_self"}
                  rel={
                    item.href === "/chat"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <p>
                Have questions or feedback?
              </p>

              <p>
                We'd love to hear from you.
              </p>

              <a
                href="mailto:contact@videoverse.ai"
                className="inline-block rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 font-medium text-white transition hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} VideoVerse. All rights
            reserved.
          </p>

          <p className="flex items-center gap-2">
           Built for Students • Professionals • Creators
          </p>
        </div>
      </div>
    </footer>
  );
}