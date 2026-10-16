
const projects = [
  {
    number: "01",
    title: "HTML & CSS Project",
    description:
      "A website built with HTML and CSS. Replace this text with the actual features of your project.",
    image: "/projects/projects-1.png",
    technologies: ["HTML5", "CSS3"],
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "React Project",
    description:
      "A React application built with reusable components and interactive UI. Update this with your project's actual purpose.",
    image: "/projects/projects-2.png",
    technologies: ["React", "JavaScript"],
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "Next.js Project",
    description:
      "A modern web application built with Next.js. Add the real features and functionality of your project here.",
    image: "/projects/projects-3.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-cyan-400 uppercase">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore my projects and see what I have been building
            throughout my web development journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="overflow-hidden border-b border-white/10 bg-slate-800">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold tracking-widest text-cyan-400">
                  PROJECT {project.number}
                </p>

                <h3 className="mt-3 text-xl font-semibold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-cyan-400/10 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-slate-500">
                      Live link not added
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-slate-500">
                      GitHub link not added
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
