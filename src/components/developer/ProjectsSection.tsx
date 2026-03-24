import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
}

const featuredProjects = [
  {
    title: "Social Network",
    description:
      "Web and mobile social network for adding, interacting, and modifying posts",
    technologies: ["Next.js", "React Native", "TypeScript"],
    image:
      "https://images.pexels.com/photos/8349519/pexels-photo-8349519.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/tiagofc25",
  },
  {
    title: "Event Site",
    description:
      "Platform for discovering event ideas and activities in Paris based on context",
    technologies: ["PHP", "MySQL", "REST API"],
    image:
      "https://images.pexels.com/photos/3183609/pexels-photo-3183609.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/tiagofc25",
  },
  {
    title: "DVD Rental System",
    description:
      "Desktop application for managing DVD rentals and library inventory",
    technologies: ["C#", "XAML", "MySQL"],
    image:
      "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://github.com/tiagofc25",
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/tiagofc25/repos?sort=updated&per_page=6",
        );
        const data = await response.json();
        setProjects(
          data.filter(
            (p: GitHubProject) => !p.name.includes("test") && p.description,
          ),
        );
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Highlight of my work and recent developments
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
            <div className="relative overflow-hidden rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-colors h-full bg-slate-900/40">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span>View Project</span>
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
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          <Github size={20} />
          View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
}
