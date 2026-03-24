import { motion } from "framer-motion";
import { Music, Volume2, Headphones } from "lucide-react";

export default function BeatmakerHeroSection() {
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24"
              >
                <Music className="w-full h-full text-orange-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-orange-400/30"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-2">
              Space Chico
            </h1>
            <p className="text-2xl md:text-3xl text-orange-400 mb-4">
              Beat Producer
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Crafting high-quality beats across Hip-Hop, Trap, and Electronic
            genres. Each production is designed with precision and creativity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { label: "Hip-Hop", icon: Music },
              { label: "Trap", icon: Volume2 },
              { label: "Electronic", icon: Headphones },
            ].map((genre, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 bg-orange-600/20 border border-orange-500/50 rounded-full text-orange-300 font-semibold text-sm hover:border-orange-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <genre.icon size={18} />
                  {genre.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { value: "100+", label: "Beats Produced" },
              { value: "5+", label: "Years Experience" },
              { value: "1000+", label: "Satisfied Customers" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/60 transition-colors"
              >
                <div className="text-3xl font-black text-orange-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://spacechico-winnit.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg"
          >
            <Headphones size={24} />
            Explore All Beats
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
