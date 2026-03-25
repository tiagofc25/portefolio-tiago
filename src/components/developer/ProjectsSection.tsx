import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "Réseau social",
    description:
      "Réseau social web et mobile pour publier, interagir et modifier des posts",
    technologies: ["Next.js", "React Native", "TypeScript"],
    image:
      "https://images.pexels.com/photos/8349519/pexels-photo-8349519.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/tiagofc25",
  },
  {
    title: "Site d'événements",
    description:
      "Plateforme pour découvrir des idées d'événements et d'activités à Paris selon le contexte",
    technologies: ["PHP", "MySQL", "REST API"],
    image:
      "https://images.pexels.com/photos/3183609/pexels-photo-3183609.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/tiagofc25",
  },
  {
    title: "Système de location DVD",
    description:
      "Application desktop pour gérer les locations de DVD et l'inventaire de la bibliothèque",
    technologies: ["C#", "XAML", "MySQL"],
    image:
      "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/tiagofc25",
  },
];

interface ProjectsSectionProps {
  isLightMode: boolean;
  isEnglish: boolean;
}

export default function ProjectsSection({
  isLightMode,
  isEnglish,
}: ProjectsSectionProps) {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 py-20 border-t ${
        isLightMode ? "border-slate-200" : "border-white/10"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2
          className={`section-title mb-2 ${isLightMode ? "text-slate-900" : ""}`}
        >
          {isEnglish ? "Featured Projects" : "Projets à la une"}
        </h2>
        <p
          className={`section-subtitle ${isLightMode ? "text-slate-600" : ""}`}
        >
          {isEnglish
            ? "Highlight of my work and recent developments"
            : "Sélection de mes réalisations récentes"}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ translateY: -8 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div
              className={`relative overflow-hidden rounded-2xl hover:border-blue-300/40 transition-colors h-full backdrop-blur-xl ${
                isLightMode
                  ? "border border-slate-200 bg-white shadow-md"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-500/15 border border-blue-300/30 rounded-full text-xs text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-300 group-hover:text-cyan-200 transition-colors">
                  <span>{isEnglish ? "View Project" : "Voir le projet"}</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="https://github.com/tiagofc25"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-black font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-blue-500/25"
        >
          <Github size={20} />
          {isEnglish
            ? "View All Projects on GitHub"
            : "Voir tous les projets sur GitHub"}
        </a>
      </motion.div>
    </section>
  );
}
