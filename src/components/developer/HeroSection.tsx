import { motion } from "framer-motion";
import { Code2, Github, Mail } from "lucide-react";

interface HeroSectionProps {
  isLightMode: boolean;
  isEnglish: boolean;
}

export default function HeroSection({
  isLightMode,
  isEnglish,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative w-52 h-52 md:w-60 md:h-60">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-blue-400/40 glass-panel group neon-blue">
                <img
                  src="/avatar.png"
                  alt="Tiago Fortes Coronel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-40"></div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="mb-6">
              <p className="mb-4 inline-flex items-center rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-1 text-xs uppercase tracking-[0.15em] text-blue-200">
                {isEnglish
                  ? "Available for new opportunities"
                  : "Disponible pour de nouvelles opportunités"}
              </p>
              <h1
                className={`text-5xl md:text-6xl font-black mb-2 ${
                  isLightMode ? "text-slate-900" : "text-white"
                }`}
              >
                Tiago
              </h1>
              <h2
                className={`text-3xl md:text-4xl font-bold text-blue-400 ${
                  isLightMode ? "" : "text-shimmer"
                }`}
              >
                Fortes Coronel
              </h2>
            </div>

            <p
              className={`text-xl mb-2 ${
                isLightMode ? "text-slate-800" : "text-slate-200"
              }`}
            >
              {isEnglish ? "Full-Stack Developer" : "Développeur Full-Stack"}
            </p>
            <p className="text-slate-300 mb-6 max-w-2xl">
              {isEnglish
                ? "Building modern web applications with Next.js, React, and TypeScript"
                : "Je crée des applications web modernes avec Next.js, React et TypeScript"}
            </p>

            <div className="space-y-3 mb-8 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-blue-400">📍</span>{" "}
                Houilles, France
              </p>
              <p>
                <span className="font-semibold text-blue-400">🏢</span>{" "}
                {isEnglish
                  ? "Developer at SWISH (Since Sept 2024)"
                  : "Développeur chez SWISH (depuis sept. 2024)"}
              </p>
              <p>
                <span className="font-semibold text-blue-400">🎓</span>
                {isEnglish
                  ? "Bachelor in Application Development (CESI)"
                  : "Bachelor Concepteur d'Applications (CESI)"}
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tiagofc25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-400/40 flex items-center justify-center text-blue-300 hover:text-blue-200 hover:border-blue-300 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:tiagofortescoronel@gmail.com"
                className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-400/40 flex items-center justify-center text-blue-300 hover:text-blue-200 hover:border-blue-300 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-black font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-blue-500/25"
            >
              <Code2 size={20} />
              {isEnglish ? "View My Work" : "Voir mes projets"}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
