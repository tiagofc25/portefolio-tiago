import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "NextJS", level: 90 },
      { name: "React", level: 92 },
      { name: "Angular", level: 78 },
      { name: "Vite", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS/Tailwind", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Supabase", level: 100 },
      { name: "NestJS", level: 82 },
      { name: "Go", level: 78 },
      { name: "PHP", level: 80 },
      { name: "Symfony", level: 80 },
      { name: "C#", level: 74 },
      { name: "XAML", level: 62 },
      { name: "SQL", level: 84 },
      { name: "API REST", level: 90 },
    ],
  },
  {
    title: "Outils & plateformes",
    skills: [
      { name: "Bitbucket/GitHub/GitLab", level: 90 },
      { name: "Git", level: 78 },
      { name: "Confluence", level: 82 },
      { name: "Jira/Trello", level: 88 },
      { name: "Agile", level: 86 },
      { name: "O365 Admin", level: 80 },
      { name: "Shopify", level: 72 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Adobe Photoshop", level: 76 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "FL Studio", level: 100 },
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
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold ${
                        isLightMode ? "text-slate-800" : "text-slate-100"
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isLightMode ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className={`relative h-2.5 w-full rounded-md ${
                      isLightMode ? "bg-slate-200" : "bg-white/10"
                    }`}
                  >
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                      transition={{ duration: 0.5, delay: skillIdx * 0.08 }}
                      viewport={{ once: true }}
                      className="absolute left-0 top-0 block h-full rounded-md bg-blue-500"
                    />
                  </div>
                </div>
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
