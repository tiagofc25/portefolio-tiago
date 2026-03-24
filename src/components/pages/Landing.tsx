import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Music } from "lucide-react";

interface LandingProps {
  onWorkspaceSelect: (workspace: "dev" | "beat") => void;
}

export default function Landing({ onWorkspaceSelect }: LandingProps) {
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
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-white to-orange-400 bg-clip-text text-transparent mb-4">
            TIAGO.{" "}
          </h1>
          <p className="text-xl text-gray-300">Developer × Beatmaker</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleDeveloperClick}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-500/30 p-8 md:p-12 hover:border-blue-400/60 transition-all duration-300 h-64 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500/5"></div>

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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Developer
                </h2>
                <p className="text-gray-300 text-sm">Frontend & Full-Stack</p>
              </div>

              <div className="relative z-10 text-left">
                <div className="text-xs text-blue-300 space-y-1">
                  <p>NextJS • TypeScript • React</p>
                  <p>Tailwind • PHP • C#</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleBeatmakerClick}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-900/40 to-red-950/40 border border-orange-500/30 p-8 md:p-12 hover:border-orange-400/60 transition-all duration-300 h-64 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-500/5"></div>

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 mb-4"
                >
                  <Music className="w-full h-full text-orange-400" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Beatmaker
                </h2>
                <p className="text-gray-300 text-sm">Producer • Space Chico</p>
              </div>

              <div className="relative z-10 text-left">
                <div className="text-xs text-orange-300 space-y-1">
                  <p>Hip-Hop • Trap • Electronic</p>
                  <p>FL Studio • Beat Production</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center text-gray-400 text-sm"
        >
          <p>Choose your path to explore my work</p>
        </motion.div>
      </div>
    </div>
  );
}
