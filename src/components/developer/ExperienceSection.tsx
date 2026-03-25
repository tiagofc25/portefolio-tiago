import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    period: "2022 - 2024",
    markerYears: ["2022"],
    education: {
      school: "INGETIS",
      title: "BTS SIO (Services Informatiques aux Organisations)",
      description: ["Formation BTS en alternance"],
    },
    work: {
      company: "Apagor / Class'croute",
      title: "Technicien informatique",
      location: "Nanterre",
      description: [
        "Support informatique au siège",
        "Administration O365",
        "Gestion du parc informatique",
      ],
    },
  },
  {
    period: "2024 - 2025",
    markerYears: ["2024"],
    education: {
      school: "CESI Nanterre",
      title: "Bachelor Concepteur d'Application",
      description: ["3ème année en alternance"],
    },
    work: {
      company: "SWISH",
      title: "Développeur Web",
      location: "Roissy",
      description: [
        "Développement d'outils B2B en Next.js",
        "Création et maintenance du site vitrine",
        "Optimisation des performances",
      ],
    },
  },
  {
    period: "2025 - Maintenant",
    markerYears: ["2025"],
    education: {
      school: "HETIC",
      title: "Mastère CTO Tech Lead",
      description: ["Formation Master en cours"],
    },
    work: {
      company: "SWISH",
      title: "Développeur Web",
      location: "Paris",
      description: ["Poursuite de l'alternance chez SWISH"],
    },
  },
];

interface ExperienceSectionProps {
  isLightMode: boolean;
  isEnglish: boolean;
}

export default function ExperienceSection({
  isLightMode,
  isEnglish,
}: ExperienceSectionProps) {
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
          {isEnglish ? "Experience & Education" : "Expérience & Formation"}
        </h2>
        <p
          className={`section-subtitle ${isLightMode ? "text-slate-600" : ""}`}
        >
          {isEnglish
            ? "Education on the left, professional experience on the right"
            : "Éducation à gauche, expérience professionnelle à droite"}
        </p>
      </motion.div>

      <div className="relative">
        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-stretch"
            >
              <motion.div
                whileHover={{ translateX: -5 }}
                className="flex-1 glass-panel rounded-2xl p-6 hover:border-blue-300/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isLightMode ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {item.education.title}
                    </h3>
                    <p className="text-blue-400 font-semibold">
                      {item.education.school}
                    </p>
                  </div>
                  <GraduationCap className="text-blue-300" size={22} />
                </div>

                <ul className="space-y-2">
                  {item.education.description.map((desc, descIdx) => (
                    <li
                      key={descIdx}
                      className="text-slate-300 text-sm flex gap-2"
                    >
                      <span className="text-blue-400 mt-1">→</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-16 mx-auto md:mx-0 flex-shrink-0 flex flex-col items-center"
              >
                {idx > 0 && (
                  <div className="w-1 h-8 bg-blue-500/80 rounded-full mb-2"></div>
                )}

                <span className="text-4xl font-bold text-blue-400 leading-none">
                  {item.markerYears[0]}
                </span>

                <div className="w-1 h-4 bg-blue-500/80 rounded-full mt-2"></div>

                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-2 shadow-lg shadow-blue-500/30">
                  <span className="w-3 h-3 rounded-full bg-white/90"></span>
                </div>

                <div className="w-1 flex-1 min-h-10 bg-gradient-to-b from-blue-500/80 to-blue-500/40 rounded-full mt-2"></div>
              </motion.div>

              <motion.div
                whileHover={{ translateX: 5 }}
                className="flex-1 glass-panel rounded-2xl p-6 hover:border-blue-300/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isLightMode ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {item.work.title}
                    </h3>
                    <p className="text-blue-400 font-semibold">
                      {item.work.company}
                    </p>
                  </div>
                  {item.work.location && (
                    <span className="text-xs text-slate-300 px-3 py-1 bg-slate-800/70 rounded-full border border-white/10">
                      {item.work.location}
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {item.work.description.map((desc, descIdx) => (
                    <li
                      key={descIdx}
                      className="text-slate-300 text-sm flex gap-2"
                    >
                      <span className="text-blue-400 mt-1">→</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <span
            className={`text-3xl md:text-5xl font-extrabold text-blue-400 tracking-wide ${
              isLightMode ? "" : "text-shimmer"
            }`}
          >
            MAINTENANT
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-bold text-blue-400 mb-4">
            {isEnglish ? "Soft Skills" : "Compétences humaines"}
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              {isEnglish
                ? "✓ Resilient and adaptable"
                : "✓ Résilient et adaptable"}
            </li>
            <li>{isEnglish ? "✓ Team collaboration" : "✓ Esprit d'équipe"}</li>
            <li>
              {isEnglish ? "✓ Autonomous working" : "✓ Travail en autonomie"}
            </li>
            <li>
              {isEnglish ? "✓ Analytical mindset" : "✓ Esprit analytique"}
            </li>
            <li>{isEnglish ? "✓ Flexible approach" : "✓ Approche flexible"}</li>
            <li>
              {isEnglish
                ? "✓ Strong interpersonal skills"
                : "✓ Excellentes qualités relationnelles"}
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-bold text-blue-400 mb-4">
            {isEnglish ? "Hobbies & Interests" : "Loisirs & centres d'intérêt"}
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>⚽ Football</li>
            <li>🎵 Beatmaking</li>
            <li>🥋 Brazilian Jujitsu</li>
            <li>{isEnglish ? "💻 Web Development" : "💻 Développement web"}</li>
            <li>
              {isEnglish
                ? "🎮 Game Development (CS50 certified)"
                : "🎮 Développement de jeux (certifié CS50)"}
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
