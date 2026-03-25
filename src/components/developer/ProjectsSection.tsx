import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "Outil de supervision des bornes électriques (Swish)",
    description:
      "Plateforme interne de supervision pour monitorer l'état des bornes, suivre les incidents et centraliser les interventions techniques.",
    technologies: ["TypeScript", "NestJS", "REST API", "React"],
    image:
      "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://swish-charge.com/",
  },
  {
    title: "My Invoice",
    description:
      "Application Angular/NestJS pour gérer un service de facturation (CRUD) avec génération de PDF compatibles Factur-X.",
    technologies: ["Angular", "NestJS", "TypeScript", "Factur-X", "REST API"],
    image:
      "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/tiagofc25/MyInvoices",
  },
  {
    title: "Portfolio Anne Thirit",
    description:
      "Portfolio professionnel développé en Next.js et TypeScript avec intégration d'une API mailing pour la prise de contact.",
    technologies: ["Next.js", "TypeScript", "API Mailing"],
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://www.anne-portefolio.site/",
    githubLink: "https://github.com/tiagofc25/Portefolio-Anne",
  },
  {
    title: "Beat Store -  Spacechico",
    description:
      "Site e-commerce où un beatmaker catalogue ses instrumentales, l'utilisateur peut rechercher, ajouter au panier, puis envoyer une demande par mail. Le beatmaker accepte/refuse et les fichiers sont envoyés par e-mail, avec dashboard de gestion.",
    technologies: [
      "React",
      "TypeScript",
      "E-commerce",
      "Dashboard",
      "Email Workflow",
    ],
    image:
      "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https:// Spacechico-winnit.online/",
    githubLink: "https://github.com/tiagofc25/beat-store",
  },
  {
    title: "TuneSwippe",
    description:
      "Application mobile pour créer des playlists partagées, découvrir de la musique et collaborer en temps réel autour d'une bibliothèque commune.",
    technologies: ["Spotify API", "React Native", "Supabase"],
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Réseau social",
    description:
      "Réseau social web et mobile pour publier, interagir et modifier des posts",
    technologies: ["Next.js", "React Native", "TypeScript", "supabase"],
    image:
      "https://images.pexels.com/photos/8349519/pexels-photo-8349519.jpeg?auto=compress&cs=tinysrgb&w=600",
    // githubLink: "https://github.com/tiagofc25",
  },
  {
    title: "Site d'événements",
    description:
      "Plateforme pour découvrir des idées d'événements et d'activités à Paris selon le contexte",
    technologies: ["PHP", "MySQL", "REST API"],
    image:
      "https://images.pexels.com/photos/3183609/pexels-photo-3183609.jpeg?auto=compress&cs=tinysrgb&w=600",
    // githubLink: "https://github.com/tiagofc25",
  },
  {
    title: "Système de location DVD",
    description:
      "Application desktop pour gérer les locations de DVD et l'inventaire de la bibliothèque",
    technologies: ["C#", "XAML", "MySQL"],
    image: "https://picsum.photos/seed/dvd-rental/600/400",
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
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ translateY: -8 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div
              className={`relative overflow-hidden rounded-2xl hover:border-blue-300/40 transition-colors h-full backdrop-blur-xl ${
                isLightMode
                  ? "border border-slate-200 bg-white shadow-md"
                  : "border border-white/10 bg-white/5"
              } flex flex-col`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <div className="p-6 flex flex-1 flex-col">
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

                <div className="mt-auto flex w-full flex-wrap items-center justify-end gap-2 pt-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-300/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-200 hover:border-cyan-300/40 hover:text-cyan-200 transition-colors"
                    >
                      <span>
                        {isEnglish ? "View Project" : "Voir le projet"}
                      </span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        isEnglish
                          ? "Open GitHub repository"
                          : "Ouvrir le dépôt GitHub"
                      }
                      title="GitHub"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-white/35 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
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
