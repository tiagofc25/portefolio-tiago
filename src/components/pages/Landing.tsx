import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Music } from "lucide-react";
import ParticleConstellationBackground from "../common/ParticleConstellationBackground";
import ThemeSwitch from "../common/ThemeSwitch";

interface LandingProps {
  onWorkspaceSelect: (workspace: "dev" | "beat") => void;
  isLightMode: boolean;
  onToggleTheme: () => void;
  isEnglish: boolean;
  onToggleLanguage: () => void;
}

export default function Landing({
  onWorkspaceSelect,
  isLightMode,
  onToggleTheme,
  isEnglish,
  onToggleLanguage,
}: LandingProps) {
  const navigate = useNavigate();

  const handleDeveloperClick = () => {
    onWorkspaceSelect("dev");
    navigate("/developer");
  };

  const handleBeatmakerClick = () => {
    onWorkspaceSelect("beat");
    navigate("/beatmaker");
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden flex items-center justify-center px-4 ${
        isLightMode ? "bg-white" : "bg-black"
      }`}
    >
      <ParticleConstellationBackground isLightMode={isLightMode} />
      <div
        className={`pointer-events-none absolute inset-0 bg-grid ${
          isLightMode ? "opacity-30" : "opacity-70"
        }`}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full blur-[130px] animate-pulse-glow ${
            isLightMode ? "bg-blue-300/35" : "bg-blue-500/20"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-[34rem] h-[34rem] rounded-full blur-[130px] animate-pulse-glow ${
            isLightMode ? "bg-orange-300/35" : "bg-orange-500/20"
          }`}
          style={{ animationDelay: "1.1s" }}
        />
      </div>

      <div className="absolute right-6 top-6 z-20 flex items-center gap-6">
        <button
          onClick={onToggleLanguage}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            isLightMode
              ? "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
              : "border-white/20 bg-white/10 text-slate-200 hover:bg-white/15"
          }`}
        >
          {isEnglish ? "FR" : "EN"}
        </button>
        <ThemeSwitch
          checked={isLightMode}
          onChange={onToggleTheme}
          ariaLabel={
            isEnglish
              ? "Toggle between light and dark mode"
              : "Basculer entre le mode clair et sombre"
          }
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p
            className={`inline-flex mb-4 items-center rounded-full border px-4 py-1 text-xs tracking-[0.18em] uppercase ${
              isLightMode
                ? "border-slate-300 bg-white text-slate-700"
                : "border-white/15 bg-white/5 text-slate-300"
            }`}
          >
            {isEnglish ? "Creative Portfolio" : "Portfolio créatif"}
          </p>
          <h1
            className={`text-6xl md:text-7xl font-black bg-clip-text text-transparent mb-4 ${
              isLightMode
                ? "bg-gradient-to-r from-blue-700 via-slate-900 to-orange-600"
                : "bg-gradient-to-r from-blue-400 via-slate-100 to-orange-400"
            }`}
          >
            TIAGO.{" "}
          </h1>
          <p
            className={`text-xl ${isLightMode ? "text-slate-700" : "text-slate-300"}`}
          >
            {isEnglish ? "Developer × Beatmaker" : "Développeur × Beatmaker"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -6 }}
            onClick={handleDeveloperClick}
            className="group cursor-pointer"
          >
            <div
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 h-72 flex flex-col justify-between transition-all duration-300 ${
                isLightMode
                  ? "bg-white border border-slate-200 shadow-xl"
                  : "glass-panel neon-blue"
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-blue-500/15 to-transparent" />

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 mb-4"
                >
                  <Code2 className="w-full h-full text-blue-400" />
                </motion.div>
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    isLightMode
                      ? "bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
                      : "text-white text-shimmer"
                  }`}
                >
                  {isEnglish ? "Developer" : "Développeur"}
                </h2>
                <p
                  className={`text-sm ${
                    isLightMode ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {isEnglish
                    ? "Frontend & Full-Stack"
                    : "Frontend & Full-Stack"}
                </p>
              </div>

              <div className="relative z-10 text-left">
                <div
                  className={`text-xs space-y-2 ${
                    isLightMode ? "text-blue-700" : "text-blue-200"
                  }`}
                >
                  <p>NextJS • TypeScript • React</p>
                  <p>Tailwind • PHP • C#</p>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full border border-blue-300/20 bg-blue-500/10 group-hover:scale-125 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -6 }}
            onClick={handleBeatmakerClick}
            className="group cursor-pointer"
          >
            <div
              className={`relative overflow-hidden rounded-3xl p-8 md:p-10 h-72 flex flex-col justify-between transition-all duration-300 ${
                isLightMode
                  ? "bg-white border border-slate-200 shadow-xl"
                  : "glass-panel neon-orange"
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-orange-500/15 to-transparent"></div>

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 mb-4"
                >
                  <Music className="w-full h-full text-orange-400" />
                </motion.div>
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    isLightMode
                      ? "bg-gradient-to-r from-orange-700 to-red-500 bg-clip-text text-transparent"
                      : "text-white text-shimmer"
                  }`}
                >
                  Beatmaker
                </h2>
                <p
                  className={`text-sm ${
                    isLightMode ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {isEnglish
                    ? "Producer • Space Chico"
                    : "Producteur • Space Chico"}
                </p>
              </div>

              <div className="relative z-10 text-left">
                <div
                  className={`text-xs space-y-2 ${
                    isLightMode ? "text-orange-700" : "text-orange-200"
                  }`}
                >
                  <p>Hip-Hop • Trap • Electronic</p>
                  <p>FL Studio • Beat Production</p>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full border border-orange-300/20 bg-orange-500/10 group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={`mt-14 text-center text-sm ${
            isLightMode ? "text-slate-600" : "text-slate-400"
          }`}
        >
          <p>
            {isEnglish
              ? "Choose your universe and dive into my work"
              : "Choisis ton univers et découvre mon travail"}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
