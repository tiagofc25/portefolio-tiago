import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "NextJS",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS/Tailwind",
    ],
  },
  {
    title: "Backend",
    skills: ["PHP", "Symfony", "C#", "XAML", "SQL"],
  },
  {
    title: "Outils & plateformes",
    skills: [
      "Git/GitHub",
      "Bitbucket",
      "Jira/Trello",
      "Agile",
      "O365 Admin",
      "Shopify",
    ],
  },
  {
    title: "Design",
    skills: [
      "Tailwind CSS",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "FL Studio",
    ],
  },
];

interface SkillsSectionProps {
  isLightMode: boolean;
  isEnglish: boolean;
}

export default function SkillsSection({
  isLightMode,
  isEnglish,
}: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          className={`mb-2 section-title ${isLightMode ? "text-slate-900" : ""}`}
        >
          {isEnglish ? "Skills & Expertise" : "Compétences & expertise"}
        </h2>
        <p
          className={`section-subtitle ${isLightMode ? "text-slate-600" : ""}`}
        >
          {isEnglish
            ? "Technologies and tools I work with"
            : "Technologies et outils que j'utilise"}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ translateY: -5 }}
            className="glass-panel rounded-2xl p-6 hover:border-blue-300/40 transition-colors"
          >
            <h3 className="text-lg font-bold text-blue-400 mb-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: skillIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="h-8 bg-blue-500/10 rounded-lg flex items-center px-3 border border-blue-300/30">
                    <span
                      className={`text-sm ${
                        isLightMode ? "text-slate-700" : "text-slate-100"
                      }`}
                    >
                      {skill}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            label: isEnglish ? "Languages" : "Langues",
            value: "4",
            desc: isEnglish
              ? "French, Portuguese, English, Spanish"
              : "Français, Portugais, Anglais, Espagnol",
          },
          {
            label: isEnglish ? "Years of Experience" : "Années d'expérience",
            value: "3+",
            desc: isEnglish ? "In web development" : "En développement web",
          },
          {
            label: isEnglish ? "Projects" : "Projets",
            value: "10+",
            desc: isEnglish
              ? "Completed professionally"
              : "Réalisés en contexte professionnel",
          },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 glass-panel rounded-2xl neon-blue"
          >
            <div className="text-4xl font-black text-blue-400 mb-2">
              {stat.value}
            </div>
            <p
              className={`font-semibold mb-1 ${
                isLightMode ? "text-slate-900" : "text-white"
              }`}
            >
              {stat.label}
            </p>
            <p className="text-slate-300 text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
