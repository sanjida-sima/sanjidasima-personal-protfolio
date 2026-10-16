
import About from "./component/About";
import Projects from "./component/Projects"
import Skills from "./component/Skills";
import Experience from "./component/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-wide">
            Sima<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Lets Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20"
      >
        <div className="grid w-full items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 font-medium tracking-widest text-cyan-400 uppercase">
              Hello, welcome to my portfolio
            </p>

            <h1 className="text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
              Hi, I am
              <span className="mt-2 block text-cyan-400">
                Sanjida Akter Sima
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
              Aspiring Full-Stack Web Developer
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I am learning to build modern, responsive web applications and
              turning ideas into meaningful digital experiences. Explore my
              projects and follow my journey in web development.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-4 py-2">
                React
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Next.js
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                MongoDB
              </span>
            </div>
          </div>

          {/* Profile Placeholder */}
          <div className="flex justify-center">
            <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-slate-950 p-5 shadow-2xl shadow-cyan-500/10">
              <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-slate-900 text-center">
                <div>
                  <p className="text-7xl font-bold text-cyan-400">S</p>
                  <p className="mt-3 text-sm tracking-widest text-slate-400 uppercase">
                    Developer in Progress
                  </p>
                </div>
              </div>
              <div className="absolute -right-2 bottom-16 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl">
                <p className="text-sm font-semibold text-cyan-400">
                  Always Learning
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Building step by step
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary section anchors */}
     <About />

     <Projects />

     <Skills />

      <Experience />

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sanjida Akter Sima. All rights reserved.
      </footer>
    </main>
  );
}
