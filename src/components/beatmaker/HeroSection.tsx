import { motion } from "framer-motion";
import { Music, Volume2, Headphones } from "lucide-react";

interface BeatmakerHeroSectionProps {
  onExploreClick: () => void;
  isLightMode: boolean;
  isEnglish: boolean;
}

export default function BeatmakerHeroSection({
  onExploreClick,
  isLightMode,
  isEnglish,
}: BeatmakerHeroSectionProps) {
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-500/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
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
                className="w-24 h-24 drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]"
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
            <p className="inline-flex mb-4 items-center rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-1 text-xs uppercase tracking-[0.15em] text-orange-200">
              {isEnglish ? "Producer Brand" : "Univers producteur"}
            </p>
            <h1
              className={`text-6xl md:text-7xl font-black mb-2 ${
                isLightMode ? "text-slate-900" : "text-white text-shimmer"
              }`}
            >
              Space Chico
            </h1>
            <p className="text-2xl md:text-3xl text-orange-400 mb-4">
              {isEnglish ? "Beat Producer" : "Beatmaker"}
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto mb-8 ${
              isLightMode ? "text-slate-700" : "text-slate-300"
            }`}
          >
            {isEnglish
              ? "Crafting high-quality beats across Hip-Hop, Trap, and Electronic genres. Each production is designed with precision and creativity."
              : "Je produis des beats de haute qualité en Hip-Hop, Trap et électro. Chaque production est conçue avec précision et créativité."}
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
                className="px-6 py-3 bg-orange-600/15 border border-orange-300/35 rounded-full text-orange-200 font-semibold text-sm hover:border-orange-200 transition-colors"
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
              {
                value: "100+",
                label: isEnglish ? "Beats Produced" : "Beats produits",
              },
              {
                value: "5+",
                label: isEnglish ? "Years Experience" : "Années d'expérience",
              },
              {
                value: "1000+",
                label: isEnglish ? "Satisfied Customers" : "Clients satisfaits",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-panel rounded-2xl p-6 hover:border-orange-300/40 transition-colors neon-orange"
              >
                <div className="text-3xl font-black text-orange-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-black font-bold py-4 px-10 rounded-xl transition-colors text-lg shadow-lg shadow-orange-500/25"
          >
            <Headphones size={24} />
            {isEnglish ? "Explore All Beats" : "Explorer tous les beats"}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
