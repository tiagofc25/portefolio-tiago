import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
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
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-blue-500/50 group">
                <img
                  src="/avatar.png"
                  alt="Tiago Fortes Coronel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-40"></div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-transparent border-t-blue-400 border-r-blue-300"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-2">
                Tiago
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
                Fortes Coronel
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-2">Full-Stack Developer</p>
            <p className="text-gray-400 mb-6">
              Building modern web applications with Next.js, React, and
              TypeScript
            </p>

            <div className="space-y-3 mb-8 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-blue-400">📍</span>{" "}
                Houilles, France
              </p>
              <p>
                <span className="font-semibold text-blue-400">🏢</span>{" "}
                Developer at SWISH (Since Sept 2024)
              </p>
              <p>
                <span className="font-semibold text-blue-400">🎓</span> Bachelor
                in Application Development (CESI)
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/tiagofc25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-blue-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:tiagofortescoronel@gmail.com"
                className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-blue-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Code2 size={20} />
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
