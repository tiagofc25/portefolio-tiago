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
    title: "Tools & Platforms",
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

export default function SkillsSection() {
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
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-2">
          Skills & Expertise
        </h2>
        <p className="text-gray-400">Technologies and tools I work with</p>
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
            className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/60 transition-colors"
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
                  <div className="h-8 bg-blue-500/10 rounded-lg flex items-center px-3 border border-blue-400/30">
                    <span className="text-sm text-gray-200">{skill}</span>
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
            label: "Languages",
            value: "4",
            desc: "French, Portuguese, English, Spanish",
          },
          {
            label: "Years of Experience",
            value: "3+",
            desc: "In web development",
          },
          { label: "Projects", value: "10+", desc: "Completed professionally" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-slate-900/20 border border-blue-500/30 rounded-xl"
          >
            <div className="text-4xl font-black text-blue-400 mb-2">
              {stat.value}
            </div>
            <p className="text-white font-semibold mb-1">{stat.label}</p>
            <p className="text-gray-400 text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
