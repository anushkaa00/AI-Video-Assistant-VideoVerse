import { Github, Linkedin, Mail, Heart, Video } from "lucide-react";
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
    <footer className="border-t border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-white"
            >
              <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-2">
                <Video size={24} />
              </div>

              <span className="text-2xl font-bold">
                Video
                <span className="text-cyan-400">
                  Verse
                </span>
              </span>
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered platform that transforms long videos into
              summaries, transcripts, highlights and intelligent
              conversations.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
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
            Built with
            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />
            using React + Flask + AI
          </p>
        </div>
      </div>
    </footer>
  );
}