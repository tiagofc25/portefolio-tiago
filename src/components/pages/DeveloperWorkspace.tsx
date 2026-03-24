import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Mail,
  Phone,
  MapPin,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import HeroSection from "../developer/HeroSection";
import SkillsSection from "../developer/SkillsSection";
import ProjectsSection from "../developer/ProjectsSection";
import ExperienceSection from "../developer/ExperienceSection";
import ParticleConstellationBackground from "../common/ParticleConstellationBackground";

interface DeveloperWorkspaceProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export default function DeveloperWorkspace({
  isLightMode,
  onToggleTheme,
}: DeveloperWorkspaceProps) {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isLightMode ? "bg-white theme-light" : "bg-black"
      }`}
    >
      <ParticleConstellationBackground isLightMode={isLightMode} />
      <div
        className={`pointer-events-none absolute inset-0 bg-grid ${
          isLightMode ? "opacity-35" : "opacity-60"
        }`}
      />
      <div
        className={`pointer-events-none absolute top-[-15rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full blur-[120px] animate-pulse-glow ${
          isLightMode ? "bg-blue-300/35" : "bg-blue-500/15"
        }`}
      />

      <div
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${
          isLightMode
            ? "bg-white/90 border-slate-200"
            : "bg-black/70 border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className={`flex items-center gap-2 transition-colors ${
              isLightMode
                ? "text-blue-700 hover:text-blue-500"
                : "text-blue-300 hover:text-blue-200"
            }`}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </motion.button>
          <h1
            className={`text-xl font-bold ${
              isLightMode ? "text-slate-900" : "text-white"
            }`}
          >
            Developer Portfolio
          </h1>
          <button
            onClick={onToggleTheme}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              isLightMode
                ? "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                : "border-white/20 bg-white/10 text-slate-200 hover:bg-white/15"
            }`}
          >
            {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
            {isLightMode ? "Dark" : "White"}
          </button>
        </div>
        <motion.div
          className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500"
          style={{ width: `${Math.min((scrollY / 2500) * 100, 100)}%` }}
        />
      </div>

      <div className="relative z-10 pt-20">
        <HeroSection isLightMode={isLightMode} />
        <SkillsSection isLightMode={isLightMode} />
        <ProjectsSection isLightMode={isLightMode} />
        <ExperienceSection isLightMode={isLightMode} />

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`border-t mt-20 backdrop-blur-lg ${
            isLightMode
              ? "bg-white/90 border-slate-200"
              : "bg-black/80 border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-panel rounded-2xl p-6">
                <h3
                  className={`font-bold mb-4 ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:tiagofortescoronel@gmail.com"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors"
                  >
                    <Mail size={18} />
                    tiagofortescoronel@gmail.com
                  </a>
                  <a
                    href="tel:+33787124803"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors"
                  >
                    <Phone size={18} />
                    +33 7 87 12 48 03
                  </a>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin size={18} />
                    Houilles, France
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <h3
                  className={`font-bold mb-4 ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/tiagofc25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors"
                  >
                    <Github size={18} />
                    GitHub Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <h3
                  className={`font-bold mb-4 ${
                    isLightMode ? "text-slate-900" : "text-white"
                  }`}
                >
                  Languages
                </h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>French (C2 Native)</p>
                  <p>Portuguese (C2)</p>
                  <p>English (C1)</p>
                  <p>Spanish (B2)</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
              <p>© 2025 Tiago Fortes Coronel. All rights reserved.</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
